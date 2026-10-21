import React from 'react';
import { testimonialsData } from '../../data/portfolioData';
import { Quote, AlertCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#040507] light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
            Feedback & Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Collaborator & Mentor Perspectives
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            Observations on work ethic, technical diligence, and creative reliability across academic and freelance engagements.
          </p>

          {/* Development Disclaimer Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs text-left max-w-xl mx-auto mt-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-400" />
            <span>
              <strong>Note:</strong> Displaying endorsement placeholders. Real client testimonials will replace these as project reviews are recorded.
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-[#090a0f] light:bg-white border border-orange-500/15 light:border-slate-200 shadow-xl flex flex-col justify-between relative group hover:border-orange-500/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-orange-500/20 group-hover:text-orange-500/40 transition-colors mb-4" />

              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 italic leading-relaxed mb-6">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-slate-800/80 light:border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-600 p-[1.5px] flex-shrink-0">
                  <div className="w-full h-full bg-[#050608] rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white light:text-slate-900 truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-orange-400 truncate font-mono font-medium">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {item.relationship}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
