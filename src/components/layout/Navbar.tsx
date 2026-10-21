import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { profileData } from '../../data/portfolioData';
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  FileText,
} from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills & Services', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Creative Media', href: '#creative-media' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 dark:bg-[#07090e]/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 light:border-slate-200 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Blessing Technologies Home"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden p-[2px] bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform flex items-center justify-center bg-black">
              <img
                src="/images/blessing-technologies-logo.png"
                alt="Blessing Technologies Logo"
                className="w-full h-full object-cover rounded-[9px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-white light:text-slate-900 group-hover:text-orange-400 transition-colors uppercase">
                {profileData.brand}
              </span>
              <span className="text-[9px] sm:text-[10px] text-orange-400 light:text-orange-600 font-mono tracking-wider uppercase font-semibold">
                Software & Creative Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/70 light:bg-slate-100/80 px-3 py-1.5 rounded-full border border-orange-500/15 light:border-slate-200 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/50'
                      : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-200'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions & Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* CV Modal Trigger */}
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/80 light:bg-slate-200/80 text-slate-200 light:text-slate-800 border border-slate-700/60 light:border-slate-300 hover:border-orange-500 transition-all hover:bg-slate-800"
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" />
              <span>CV</span>
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light or dark theme"
              className="p-2 rounded-xl bg-slate-800/80 light:bg-slate-200/80 text-slate-300 light:text-slate-700 hover:text-white light:hover:text-black border border-slate-700/60 light:border-slate-300 transition-all hover:scale-105 hover:border-orange-500/50"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-orange-600" />
              )}
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 shadow-md shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile & Tablet Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-slate-800/90 text-slate-300 border border-slate-700/60"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg bg-slate-800/90 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-[#07090e]/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 light:border-slate-200 px-6 py-6 shadow-2xl transition-all animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-600 text-white font-semibold'
                      : 'text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 mt-4 border-t border-slate-800 light:border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 light:bg-slate-200 text-slate-200 light:text-slate-800 hover:border hover:border-orange-500"
            >
              <FileText className="w-4 h-4 text-orange-400" />
              View & Download Curriculum Vitae
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 shadow-md shadow-orange-600/30 transition-colors"
            >
              <span>Get in Touch / Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
