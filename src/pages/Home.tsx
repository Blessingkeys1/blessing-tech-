import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { CreativeMedia } from '../components/sections/CreativeMedia';
import { Blog } from '../components/sections/Blog';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import type { Project, CreativeMediaItem, BlogPost } from '../types';
import { ArrowRight, Sparkles, Layers, Briefcase, Video, Send } from 'lucide-react';

interface HomeProps {
  onOpenCv: () => void;
  onSelectProject: (p: Project) => void;
  onSelectMedia: (m: CreativeMediaItem) => void;
  onSelectPost: (b: BlogPost) => void;
}

export const Home: React.FC<HomeProps> = ({
  onOpenCv,
  onSelectProject,
  onSelectMedia,
  onSelectPost,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Landing */}
      <Hero onOpenCv={onOpenCv} />

      {/* Quick Navigation Cards Bar */}
      <section className="py-10 bg-[#06070a] border-y border-orange-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'About Story', path: '/about', icon: Sparkles, desc: 'Journey & Ethos' },
              { label: 'Services', path: '/services', icon: Layers, desc: 'What I Build' },
              { label: 'Projects', path: '/projects', icon: Briefcase, desc: 'Verified Work' },
              { label: 'Experience', path: '/experience', icon: Layers, desc: 'Career Milestones' },
              { label: 'Media Portfolio', path: '/media', icon: Video, desc: 'Streaming & Video' },
              { label: 'Contact', path: '/contact', icon: Send, desc: 'Direct Message' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  className="p-3.5 rounded-2xl bg-[#090a0f] border border-orange-500/15 hover:border-orange-500/50 hover:bg-[#0e0f17] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div className="mt-3">
                    <div className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <div className="relative">
        <About onOpenCv={onOpenCv} />
        <div className="bg-[#040507] pb-12 flex justify-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-orange-500/30 text-orange-400 hover:bg-orange-600 hover:text-white transition-all shadow-md"
          >
            <span>Read Full Biography & Background</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="relative">
        <Skills />
        <div className="bg-[#040507] pb-12 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-orange-500/30 text-orange-400 hover:bg-orange-600 hover:text-white transition-all shadow-md"
          >
            <span>Explore All Capabilities & Offerings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Projects Preview Section */}
      <div className="relative">
        <Projects onSelectProject={onSelectProject} />
        <div className="bg-[#040507] pb-12 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-orange-500/30 text-orange-400 hover:bg-orange-600 hover:text-white transition-all shadow-md"
          >
            <span>View All Systems & Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Experience Timeline Preview */}
      <div className="relative">
        <Experience />
        <div className="bg-[#040507] pb-12 flex justify-center">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-orange-500/30 text-orange-400 hover:bg-orange-600 hover:text-white transition-all shadow-md"
          >
            <span>Inspect Full Career Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Creative Media Showcase Preview */}
      <div className="relative">
        <CreativeMedia onSelectMedia={onSelectMedia} />
        <div className="bg-[#040507] pb-12 flex justify-center">
          <Link
            to="/media"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-orange-500/30 text-orange-400 hover:bg-orange-600 hover:text-white transition-all shadow-md"
          >
            <span>Open Complete Creative Media Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Blog Preview */}
      <div className="relative">
        <Blog onSelectPost={onSelectPost} />
        <div className="bg-[#040507] pb-12 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-orange-500/30 text-orange-400 hover:bg-orange-600 hover:text-white transition-all shadow-md"
          >
            <span>Browse All Technical Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};
