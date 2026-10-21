import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../components/sections/Blog';
import type { BlogPost } from '../types';
import {
  Code2,
  Tv,
  Database,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost }) => {
  return (
    <div className="pt-24 pb-16 bg-[#040507] text-slate-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="relative py-16 bg-tech-grid border-b border-orange-500/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
            Knowledge Base • Engineering Articles
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Blog & Engineering Notes
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            In-depth writeups on full-stack architecture, offline-first desktop systems, audio/video broadcast pipelines, and real-world software lessons from {profileData.brand}.
          </p>
        </div>
      </div>

      {/* Main Interactive Blog Component */}
      <Blog onSelectPost={onSelectPost} />

      {/* Key Architectural Focus Areas */}
      <section className="py-20 border-t border-orange-500/15 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
              Core Topics
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What We Write About
            </h2>
            <p className="text-sm text-slate-400">
              Practical guides derived from actual client deployments across East Africa and remote setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#090a0f] border border-orange-500/15 space-y-4 hover:border-orange-500/35 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-600/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Full-Stack Architecture</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Clean RESTful APIs, responsive React interfaces, relational database schema optimization, and security practices for modern web apps.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#090a0f] border border-orange-500/15 space-y-4 hover:border-orange-500/35 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Offline-First Software</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Building resilient desktop software (Java Swing, SQLite) that works smoothly in areas with intermittent internet connectivity.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#090a0f] border border-orange-500/15 space-y-4 hover:border-orange-500/35 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-600/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Live Broadcast & AV Tech</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Hardware encoders, multi-camera switching with OBS/vMix, digital audio mixing, and low-latency streaming configurations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suggestion / Collaboration Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-950/30 via-[#0a0c12] to-amber-950/20 border-t border-orange-500/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mx-auto text-white shadow-lg shadow-orange-500/30">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Have a Technical Question or Article Topic?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Want us to break down a specific software challenge, API design, or streaming workflow? Get in touch directly.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
            >
              <span>Submit a Question or Request</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
