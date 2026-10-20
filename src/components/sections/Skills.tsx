import React, { useState } from 'react';
import { skillsData } from '../../data/portfolioData';
import {
  Code2,
  Video,
  Briefcase,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillsData
      : skillsData.filter((cat) => cat.id === activeTab);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#090d16] light:bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/10 text-purple-400 border border-purple-500/20 uppercase tracking-wider">
            Capabilities & Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Skills & Professional Services
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            A comprehensive, transparent inventory of my technical development competencies, creative multimedia services, and remote administrative support capabilities.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-800/80 light:bg-white text-slate-300 light:text-slate-700 hover:bg-slate-700 border border-slate-700/50 light:border-slate-200'
              }`}
            >
              All Categories
            </button>
            {skillsData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-800/80 light:bg-white text-slate-300 light:text-slate-700 hover:bg-slate-700 border border-slate-700/50 light:border-slate-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-7 rounded-3xl bg-[#0b0f1a] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white light:text-slate-900 tracking-tight">
                      {category.title}
                    </h3>
                    <span className="text-[11px] text-blue-400 font-mono">
                      {category.skills.length} Core Areas
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 light:text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Cards List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-slate-900/70 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 space-y-2 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white light:text-slate-800">
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {skill.proficiency}
                        </span>
                      </div>

                      {/* Tags */}
                      {skill.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#07090e] light:bg-white text-slate-300 light:text-slate-600 border border-white/5 light:border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Note */}
              <div className="pt-6 mt-6 border-t border-slate-800/70 light:border-slate-200 flex items-center justify-between text-[11px] text-slate-400 light:text-slate-500">
                <span>Honest proficiency standards</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Practical Experience
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
