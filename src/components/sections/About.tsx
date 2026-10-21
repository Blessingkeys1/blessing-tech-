import React from 'react';
import { profileData } from '../../data/portfolioData';
import {
  GraduationCap,
  Server,
  Video,
  Target,
  Download,
  CheckCircle2,
} from 'lucide-react';

interface AboutProps {
  onOpenCv: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCv }) => {
  return (
    <section id="about" className="py-24 relative bg-[#07090e] light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
            About Blessing Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Bridging Software Systems & Digital Creativity
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            A grounded look into my academic journey in software engineering, practical development projects, and creative media production in Kampala, Uganda.
          </p>
        </div>

        {/* Main Grid: Left Story, Right Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Authentic Biography & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-white light:text-slate-900 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                My Professional Journey
              </h3>

              <div className="space-y-4 text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                <p>
                  I am currently pursuing a <strong>Diploma in Software Engineering</strong>. Rather than treating programming merely as abstract theory, I believe in learning by constructing practical software that solves identifiable, real-world problems.
                </p>
                <p>
                  My deepest technical passion lies in <strong>backend development, relational databases, application logic, and APIs</strong>. Whether understanding how MySQL manages concurrent transactions or structuring robust routes in Python, Django, and PHP, I am driven by building systems that run reliably behind the scenes.
                </p>
                <p>
                  Alongside my engineering studies, I operate actively as a <strong>digital creator and media specialist</strong>. For over three years, I have directed live church broadcasts, managed multi-camera livestream productions, edited Christian video content, and designed high-impact event posters. This unique combination gives me both the technical rigor to write clean code and the creative vision to communicate ideas visually.
                </p>
              </div>

              {/* Career Goals */}
              <div className="pt-4 border-t border-slate-800/80 light:border-slate-200">
                <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  Primary Career Goals
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                  {profileData.objective}
                </p>
              </div>
            </div>

            {/* Downloadable CV Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold text-white">
                  Need a Comprehensive Overview?
                </h4>
                <p className="text-xs text-slate-300">
                  Inspect my complete academic qualifications, verified projects, and technical skills.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download / View CV
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait & Breakdown Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Professional Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/images/blessing-about.jpg"
                  alt="Blessing Technologies"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {profileData.brand}
                  </h4>
                  <p className="text-xs text-slate-300 italic">
                    "{profileData.slogan}"
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white light:text-slate-900">
                    Software Engineering Studies
                  </h4>
                  <span className="text-[11px] text-emerald-400 font-semibold">
                    Current Diploma Candidate
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">
                {profileData.educationSummary}
              </p>
            </div>

            {/* Technical Interests Card */}
            <div className="p-6 rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-600/10 text-purple-400 border border-purple-500/20">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white light:text-slate-900">
                    Technical & Backend Interests
                  </h4>
                  <span className="text-[11px] text-purple-400 font-semibold">
                    Systems, Data & Architecture
                  </span>
                </div>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 light:text-slate-600">
                {profileData.interests.technical.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creative Interests Card */}
            <div className="p-6 rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-pink-600/10 text-pink-400 border border-pink-500/20">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white light:text-slate-900">
                    Creative & Media Interests
                  </h4>
                  <span className="text-[11px] text-pink-400 font-semibold">
                    Broadcasting & Storytelling
                  </span>
                </div>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 light:text-slate-600">
                {profileData.interests.creative.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
