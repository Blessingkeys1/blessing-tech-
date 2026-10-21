import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Route Pages
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CreativeMediaPage } from './pages/CreativeMediaPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';

// Modals
import { ProjectModal } from './components/modals/ProjectModal';
import { MediaModal } from './components/modals/MediaModal';
import { BlogModal } from './components/modals/BlogModal';
import { CvModal } from './components/modals/CvModal';

// Types
import type { Project, CreativeMediaItem, BlogPost } from './types';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<CreativeMediaItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  const handleSelectProjectForInquiry = (_title: string) => {
    setSelectedProject(null);
    navigate('/contact');
  };

  const handleSelectMediaForHire = (_title: string) => {
    setSelectedMedia(null);
    navigate('/contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#040507] text-slate-100 transition-colors duration-300">
      {/* Route scroll reset */}
      <ScrollToTop />

      {/* Persistent Navigation */}
      <Navbar onOpenCv={() => setIsCvModalOpen(true)} />

      {/* Multi-Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenCv={() => setIsCvModalOpen(true)}
                onSelectProject={(p) => setSelectedProject(p)}
                onSelectMedia={(m) => setSelectedMedia(m)}
                onSelectPost={(b) => setSelectedBlogPost(b)}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenCv={() => setIsCvModalOpen(true)} />}
          />
          <Route
            path="/services"
            element={<ServicesPage />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage onSelectProject={(p) => setSelectedProject(p)} />}
          />
          <Route
            path="/experience"
            element={<ExperiencePage onOpenCv={() => setIsCvModalOpen(true)} />}
          />
          <Route
            path="/media"
            element={<CreativeMediaPage onSelectMedia={(m) => setSelectedMedia(m)} />}
          />
          <Route
            path="/blog"
            element={<BlogPage onSelectPost={(b) => setSelectedBlogPost(b)} />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      {/* Persistent Global Footer */}
      <Footer />

      {/* Global Interactive Modals */}
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
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
