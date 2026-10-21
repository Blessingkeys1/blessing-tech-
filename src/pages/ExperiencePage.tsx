import React from 'react';
import { Link } from 'react-router-dom';
import { Experience } from '../components/sections/Experience';
import {
  Download,
  ArrowRight,
} from 'lucide-react';

interface ExperiencePageProps {
  onOpenCv: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenCv }) => {
  return (
    <div className="pt-24 pb-16 bg-[#040507] text-slate-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="relative py-16 bg-tech-grid border-b border-orange-500/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
            Career Timeline • Milestones
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic & Professional Experience
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            A chronological timeline documenting my software engineering background, systems design leadership, and live church broadcast operations.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Complete Curriculum Vitae</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Experience Component */}
      <Experience />

      {/* Accomplishments & Competency Metrics */}
      <section className="py-20 border-t border-orange-500/15 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
              Key Metrics
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Demonstrated Operational Standards
            </h2>
            <p className="text-sm text-slate-400">
              Measurable consistency across software engineering and media directing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '100+', label: 'Live Broadcasts Directed', detail: 'Multi-camera Sunday sermons and special ministry broadcasts with zero streaming dropouts.' },
              { number: '100%', label: 'Relational ACID Compliance', detail: 'Strict transaction integrity for financial receipting and bursar accounting systems.' },
              { number: '3+ Years', label: 'Media Production Experience', detail: 'Hands-on hardware switching, video editing (Premiere Pro), and graphic layout.' },
              { number: '24/7', label: 'Remote Availability', detail: 'Open to asynchronous international collaboration and remote software engineering contracts.' },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090a0f] border border-orange-500/15 space-y-2 text-center"
              >
                <div className="text-3xl font-extrabold text-orange-400 font-mono">
                  {metric.number}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-xl shadow-orange-600/30 transition-all hover:scale-105"
            >
              <span>Get in Touch for Remote Engineering Roles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
