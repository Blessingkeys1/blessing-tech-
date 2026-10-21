import React from 'react';
import { profileData } from '../../data/portfolioData';
import {
  Mail,
  ArrowUp,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../icons/BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070c] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-blue-500/20">
                BT
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  {profileData.brand}
                </span>
                <span className="block text-xs text-blue-400 font-mono">
                  Software & Creative Tech
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              "{profileData.slogan}" — Pursuing excellence in backend architectures, reliable software systems, modern web development, and engaging digital media production.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>{profileData.location} • East Africa (UTC+3)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Journey & Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills & Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects & Prototypes
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience Timeline
                </a>
              </li>
              <li>
                <a href="#creative-media" className="hover:text-blue-400 transition-colors">
                  Creative Media Gallery
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors">
                  Technical Blog & Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Connect With Me
            </h4>
            <p className="text-xs text-slate-400">
              Open to freelance projects, technical collaborations, and remote engineering opportunities.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${profileData.contact.whatsappNumber}?text=${encodeURIComponent(
                  profileData.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp direct chat"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={profileData.contact.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube channel"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-rose-400 hover:text-rose-300 hover:border-rose-500 transition-all hover:scale-105"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                aria-label="Email Blessing Technologies"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 hover:text-blue-300 hover:border-blue-500 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profileData.brand}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Building Tech. Building Legacy.</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
