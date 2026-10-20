import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import type { Project, ProjectCategory } from '../../types';
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Web Development',
    'Software Systems',
    'Mobile Applications',
    'Creative Media',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Clock className="w-3 h-3" />
            In Progress
          </span>
        );
      case 'Concept':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <Sparkles className="w-3 h-3" />
            Concept
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#07090e] light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
            Featured Systems & Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Projects & Technical Prototypes
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            A filterable showcase of software applications, proposed offline systems, and creative media productions. Completed deliverables and proposed concepts are clearly distinguished.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 light:bg-white text-slate-300 light:text-slate-700 hover:bg-slate-800 border border-slate-800 light:border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#0b0f1a] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Preview */}
                <div
                  className="relative h-60 sm:h-64 w-full bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/30 to-transparent" />

                  {/* Status & Category overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>

                  {/* Quick inspect hint on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white shadow-lg">
                      <Info className="w-3.5 h-3.5" />
                      View Architecture & Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-blue-400 light:text-blue-600 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem & Solution Snippet */}
                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed">
                    {project.problem}
                  </p>

                  {/* Technologies Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/60 light:border-slate-100 mt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700 flex items-center gap-1 transition-colors"
                >
                  Inspect Case Study
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-200 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
