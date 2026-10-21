import React from 'react';
import { experienceData } from '../../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Code2,
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const Experience: React.FC = () => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'project':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative bg-[#090d16] light:bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            Trajectory & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Education & Practical Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            A chronological timeline documenting my ongoing software engineering studies, system development initiatives, and hands-on media production leadership.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute top-2 bottom-2 left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-40" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b0f19] light:bg-white border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 z-20">
                    {getTimelineIcon(item.type)}
                  </div>

                  {/* Card Content Container */}
                  <div
                    className={`w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="p-6 rounded-3xl bg-[#0b0f1a] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl hover:border-slate-700 transition-all duration-300 space-y-3">
                      {/* Top Info Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white light:text-slate-900 tracking-tight">
                          {item.role}
                        </h3>
                        <div className="text-xs font-semibold text-slate-300 light:text-slate-700 flex items-center gap-1.5 mt-0.5">
                          <span>{item.institution}</span>
                          <span>•</span>
                          <span className="text-slate-400 light:text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-blue-400" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights Bullet points */}
                      <div className="pt-2 border-t border-slate-800/80 light:border-slate-200 space-y-1.5">
                        {item.highlights.map((hl, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-600"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
