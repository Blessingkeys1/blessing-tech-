import React from 'react';
import type { Project } from '../../types';
import { X, ExternalLink, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectContact: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectContact }) => {
  if (!project) return null;

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono">
            <Clock className="w-3.5 h-3.5" />
            In Progress
          </span>
        );
      case 'Concept':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/30 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Proposed Concept / Architecture
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-3xl my-8 bg-[#090a0f] text-slate-100 rounded-2xl border border-orange-500/20 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/90 transition-all border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges on Image */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-600/90 text-white tracking-wide uppercase">
              {project.category}
            </span>
            {getStatusBadge(project.status)}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-18rem)] overflow-y-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-orange-400 font-medium text-sm sm:text-base mt-1 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-2">
                The Problem
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-2">
                The Proposed Solution
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3 font-mono">
              Key Features & System Capabilities
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3 font-mono">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-orange-950/40 text-orange-300 border border-orange-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#050608] border-t border-orange-500/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-orange-600 hover:bg-orange-500 text-white transition-colors shadow-lg shadow-orange-600/30"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <span className="text-xs text-slate-400 italic">
                Demo available upon project phase delivery
              </span>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-orange-500 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View Code
              </a>
            ) : (
              <span className="text-xs text-slate-500 font-mono">
                [Code available on request]
              </span>
            )}
          </div>

          <button
            onClick={() => {
              onClose();
              onSelectContact(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-orange-600 hover:bg-orange-500 text-white transition-all shadow-md shadow-orange-600/20 text-center"
          >
            Inquire About Similar Project
          </button>
        </div>
      </div>
    </div>
  );
};
