import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../../data/portfolioData';
import {
  Mail,
  ArrowUp,
  MapPin,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../icons/BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040507] text-slate-400 border-t border-orange-500/15 pt-16 pb-12 overflow-hidden">
      {/* Background ambient orange brand glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-orange-600/15 via-amber-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-850 border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden p-[2px] bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 shadow-lg shadow-orange-500/25 flex items-center justify-center bg-black group-hover:scale-105 transition-transform">
                <img
                  src="/images/blessing-technologies-logo.png"
                  alt="Blessing Technologies Logo"
                  className="w-full h-full object-cover rounded-[9px]"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight uppercase group-hover:text-orange-400 transition-colors">
                  {profileData.brand}
                </span>
                <span className="block text-xs text-orange-400 font-mono font-semibold">
                  Software & Creative Tech
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              "{profileData.slogan}" — Pursuing excellence in backend architectures, reliable software systems, modern web development, and engaging digital media production.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>{profileData.contact.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Pages & Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  About Journey & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400 transition-colors">
                  Services & Core Pillars
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-orange-400 transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-orange-400 transition-colors">
                  Career Experience Timeline
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-orange-400 transition-colors">
                  Creative Media & Broadcast
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-400 transition-colors">
                  Technical Blog & Notes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Connect With Us
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
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-orange-500 transition-all hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-orange-500 transition-all hover:scale-105"
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
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-orange-400 hover:text-orange-300 hover:border-orange-500 transition-all hover:scale-105"
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
            <span className="text-orange-400/80 font-mono">Building Tech. Building Legacy.</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
