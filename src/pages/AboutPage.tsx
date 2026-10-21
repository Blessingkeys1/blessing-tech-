import React from 'react';
import { Link } from 'react-router-dom';
import { About } from '../components/sections/About';
import {
  Database,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Download,
} from 'lucide-react';

interface AboutPageProps {
  onOpenCv: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenCv }) => {
  return (
    <div className="pt-24 pb-16 bg-[#040507] text-slate-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="relative py-16 bg-tech-grid border-b border-orange-500/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
            About Me • Engineering Profile
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Building Practical Software & Digital Impact
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            Learn about my software engineering background, core backend architectural principles, and creative media endeavors in Kampala, Uganda.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Curriculum Vitae</span>
            </button>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-orange-500/20 transition-all"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Core About Section Component */}
      <About onOpenCv={onOpenCv} />

      {/* Engineering Philosophy & Backend Architecture Deep Dive */}
      <section className="py-20 border-t border-orange-500/15 bg-[#06070b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
              Engineering Mindset
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Architectural Values & Standards
            </h2>
            <p className="text-sm text-slate-400">
              The fundamental engineering tenets that guide how I write code, model databases, and build systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-7 rounded-3xl bg-[#090a0f] border border-orange-500/15 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-600/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Relational Data Integrity</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Clean third-normal-form relational schemas, explicit foreign keys, indexes for performance, and atomic transactions that protect mission-critical business data.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#090a0f] border border-orange-500/15 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-600/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Offline Resilience First</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Designing software that functions without uninterrupted high-speed internet. Local-first storage, sync queues, and zero downtime for regional workflows.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#090a0f] border border-orange-500/15 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-600/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Pragmatic Over Trendy</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Choosing established, reliable technologies (Python, Django, PHP, MySQL, React) that deliver predictable results, minimal maintenance overhead, and longevity.
              </p>
            </div>
          </div>

          {/* Hire / Contact Callout Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-orange-950/40 via-amber-950/30 to-black/60 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">
                Interested in Working Together?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                I am currently open to remote software engineering roles, full-stack contract work, and technical collaborations worldwide.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all flex-shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
