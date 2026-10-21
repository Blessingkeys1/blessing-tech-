import React, { useState } from 'react';
import { profileData } from '../../data/portfolioData';
import {
  ArrowRight,
  Download,
  Terminal,
  MapPin,
  Code2,
  Database,
  Video,
} from 'lucide-react';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string>('/images/blessing-avatar.jpg');

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-tech-grid"
    >
      {/* Dynamic Background Glows matching Brand Orange & Amber */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 light:bg-white/90 border border-emerald-500/30 text-emerald-400 light:text-emerald-600 text-xs font-semibold shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Remote Roles & Freelance Worldwide</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.15]">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  {profileData.brand}
                </span>
              </h1>
              <p className="text-base sm:text-xl font-semibold text-slate-200 light:text-slate-800 leading-snug">
                {profileData.subheadline}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed">
              {profileData.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 light:text-slate-800 bg-slate-900/80 light:bg-slate-200/80 hover:bg-slate-800 light:hover:bg-slate-300 border border-slate-700/80 light:border-slate-300 hover:border-orange-500 transition-all duration-200 text-center"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Download My CV</span>
              </button>
            </div>

            {/* Quick Tech Highlights Pills */}
            <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex flex-wrap items-center gap-3">
              <span className="text-xs text-orange-400/90 light:text-orange-600 font-mono font-medium">
                Core Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Python & Django', 'PHP & MySQL', 'React & TypeScript', 'OBS Studio', 'Premiere Pro'].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-orange-500/15 light:border-slate-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Halo Gradient Behind Card (Orange & Amber Glow) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-50 transition duration-500" />

            {/* Card Container */}
            <div className="relative w-full max-w-md bg-[#0a0b10] light:bg-white rounded-3xl border border-orange-500/20 light:border-slate-200 shadow-2xl p-6 sm:p-7 space-y-5 overflow-hidden">
              {/* Profile Image & Status */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative w-48 h-56 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-orange-500 via-amber-500 to-yellow-500 shadow-xl shadow-orange-500/25 group">
                  <img
                    src={currentPhoto}
                    alt="Blessing Technologies"
                    className="w-full h-full object-cover object-top rounded-[14px] transition-all duration-300"
                  />
                  <div className="absolute bottom-3 right-3 p-1.5 rounded-full bg-emerald-500 border-2 border-[#0a0b10]" title="Available for hire" />
                </div>

                {/* Photo Selector Pills */}
                <div className="flex items-center gap-1.5 mt-3 bg-slate-900/90 light:bg-slate-100 p-1 rounded-xl border border-slate-800 light:border-slate-200 text-[10px]">
                  <button
                    onClick={() => setCurrentPhoto('/images/blessing-avatar.jpg')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                      currentPhoto === '/images/blessing-avatar.jpg'
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Dev Look
                  </button>
                  <button
                    onClick={() => setCurrentPhoto('/images/blessing-about.jpg')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                      currentPhoto === '/images/blessing-about.jpg'
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Executive
                  </button>
                  <button
                    onClick={() => setCurrentPhoto('/images/blessing-shades.jpg')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                      currentPhoto === '/images/blessing-shades.jpg'
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Studio
                  </button>
                </div>

                <div className="mt-3">
                  <h3 className="text-xl font-bold text-white light:text-slate-900 tracking-tight uppercase font-sans">
                    {profileData.brand}
                  </h3>
                  <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider mt-0.5 font-mono">
                    Software & Creative Tech
                  </p>
                  <p className="text-xs text-slate-400 light:text-slate-600 mt-1 flex items-center justify-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    {profileData.location}
                  </p>
                </div>
              </div>

              {/* Slogan Pill with Brand Orange Border */}
              <div className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-950/40 via-amber-950/30 to-black/60 border border-orange-500/30 text-center">
                <span className="text-xs font-semibold text-amber-200/90 italic tracking-wide">
                  "{profileData.slogan}"
                </span>
              </div>

              {/* Quick Competencies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-orange-500/15 light:border-slate-200 flex items-start gap-2.5">
                  <Code2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white light:text-slate-900">Backend Systems</div>
                    <div className="text-[11px] text-slate-400 light:text-slate-500">APIs & Data Logic</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-orange-500/15 light:border-slate-200 flex items-start gap-2.5">
                  <Database className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white light:text-slate-900">Databases</div>
                    <div className="text-[11px] text-slate-400 light:text-slate-500">MySQL & SQLite</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-orange-500/15 light:border-slate-200 flex items-start gap-2.5">
                  <Terminal className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white light:text-slate-900">Web Apps</div>
                    <div className="text-[11px] text-slate-400 light:text-slate-500">React & Modern CSS</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-orange-500/15 light:border-slate-200 flex items-start gap-2.5">
                  <Video className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white light:text-slate-900">Creative Media</div>
                    <div className="text-[11px] text-slate-400 light:text-slate-500">Stream & Video Edit</div>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 light:text-slate-500 border-t border-slate-800/80 light:border-slate-200">
                <span>Software Engineer</span>
                <span className="text-emerald-400 font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 light:bg-slate-100/90 border border-orange-500/15 light:border-slate-200 backdrop-blur-md hover:border-orange-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-300 light:text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 light:text-slate-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
