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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Clock className="w-3.5 h-3.5" />
            In Progress
          </span>
        );
      case 'Concept':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Proposed Concept / Architecture
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-3xl my-8 bg-[#0d121f] text-slate-100 rounded-2xl border border-slate-700/60 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-[#0d121f]/40 to-transparent" />
          
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
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/90 text-white tracking-wide uppercase">
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
            <p className="text-blue-400 font-medium text-sm sm:text-base mt-1">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Key Features & System Capabilities
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-950/60 text-blue-300 border border-blue-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-lg shadow-blue-600/30"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
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
            className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all shadow-md shadow-purple-600/20"
          >
            Inquire About Similar Project
          </button>
        </div>
      </div>
    </div>
  );
};
