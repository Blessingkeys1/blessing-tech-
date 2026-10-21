import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { CreativeMedia } from './components/sections/CreativeMedia';
import { Blog } from './components/sections/Blog';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { ProjectModal } from './components/modals/ProjectModal';
import { MediaModal } from './components/modals/MediaModal';
import { BlogModal } from './components/modals/BlogModal';
import { CvModal } from './components/modals/CvModal';
import { NotFound } from './pages/NotFound';
import type { Project, CreativeMediaItem, BlogPost } from './types';

const PortfolioHome: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<CreativeMediaItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);
  const [contactSubject, setContactSubject] = useState<string>('');

  const handleSelectProjectForInquiry = (title: string) => {
    setContactSubject(`Inquiry regarding ${title}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMediaForHire = (title: string) => {
    setContactSubject(`Booking inquiry for ${title}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040507] text-slate-100 transition-colors duration-300">
      {/* Sticky Navigation */}
      <Navbar onOpenCv={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCv={() => setIsCvModalOpen(true)} />
        <About onOpenCv={() => setIsCvModalOpen(true)} />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Experience />
        <CreativeMedia onSelectMedia={(m) => setSelectedMedia(m)} />
        <Blog onSelectPost={(b) => setSelectedBlogPost(b)} />
        <Testimonials />
        <Contact initialSubject={contactSubject} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectContact={handleSelectProjectForInquiry}
      />

      <MediaModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
        onSelectHire={handleSelectMediaForHire}
      />

      <BlogModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
