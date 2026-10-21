import React from 'react';
import { Link } from 'react-router-dom';
import { Projects } from '../components/sections/Projects';
import type { Project } from '../types';
import {
  Database,
  ArrowRight,
  Terminal,
} from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (p: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  return (
    <div className="pt-24 pb-16 bg-[#040507] text-slate-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="relative py-16 bg-tech-grid border-b border-orange-500/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
            Engineering Work • Project Showcase
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Software Systems & Practical Case Studies
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            A filterable showcase of completed institutional websites, offline financial desktop systems, community applications, and broadcast media workflows.
          </p>
        </div>
      </div>

      {/* Main Interactive Projects Component */}
      <Projects onSelectProject={onSelectProject} />

      {/* Deep-Dive Technical Case Study Architecture Note */}
      <section className="py-20 border-t border-orange-500/15 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
              Systems Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Behind the Code
            </h2>
            <p className="text-sm text-slate-400">
              Key engineering decisions powering the projects in this portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#090a0f] border border-orange-500/15 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-orange-600/10 text-orange-400 border border-orange-500/20">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Offline Ledger Atomicity (Wellspring SMS)
                  </h3>
                  <span className="text-xs text-orange-400 font-mono">
                    Financial ACID Compliance
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When recording tuition payments in school environments with intermittent connectivity, payments and cash-in-hand logs execute within atomic database transactions. Printable receipts carry cryptographic validation tokens that bursars can verify offline.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090a0f] border border-orange-500/15 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-600/10 text-amber-400 border border-amber-500/20">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Mobile TVET Course Portal Architecture
                  </h3>
                  <span className="text-xs text-amber-400 font-mono">
                    Responsive TVET Systems
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered for low-bandwidth mobile devices in East Africa, optimizing asset weights, lazy-loading schedules, and structuring multi-tier intake application flows that decrease student bounce rates.
              </p>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-orange-950/40 via-amber-950/30 to-black/60 border border-orange-500/30 max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Have a System Requirement or Project in Mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Let's discuss requirements, technical blueprints, and execution timelines.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
              >
                <span>Initiate Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
