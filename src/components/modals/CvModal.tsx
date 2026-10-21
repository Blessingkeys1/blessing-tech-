import React from 'react';
import { X, Download, Printer, ExternalLink, MapPin, Mail, Phone, Award, BookOpen, Terminal } from 'lucide-react';
import { profileData } from '../../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.open('/blessing-technologies-cv.html', '_blank')?.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl my-6 bg-[#0b0f19] text-slate-100 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-sm sm:text-base font-bold text-white">
              Curriculum Vitae — Blessing Technologies
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/blessing-technologies-cv.html"
              download="Blessing_Technologies_CV.html"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <a
              href="/blessing-technologies-cv.html"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Open full page"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090d16]">
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white">
                  BLESSING TECHNOLOGIES
                </h1>
                <p className="text-blue-400 font-medium text-sm sm:text-base mt-1">
                  Software Engineer | Full-Stack Web Developer | Creative Digital Professional
                </p>
                <p className="text-xs text-purple-400 font-semibold tracking-wide uppercase mt-1">
                  Brand: {profileData.brand} • "{profileData.slogan}"
                </p>
              </div>
              <img
                src="/images/blessing-avatar.jpg"
                alt="Blessing Technologies"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500/50 shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 text-xs text-slate-300 pt-3 border-t border-slate-800/60">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {profileData.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {profileData.contact.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                {profileData.contact.phone}
              </span>
            </div>
          </div>

          {/* Professional Objective */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-blue-400 font-bold mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Professional Objective & Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              {profileData.objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Education & Academic Foundation
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="flex flex-wrap items-center justify-between">
                <h4 className="text-sm font-bold text-white">Diploma in Software Engineering</h4>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  2024 – Present (Ongoing)
                </span>
              </div>
              <p className="text-xs text-slate-400">Higher Education Institute • Kampala, Uganda</p>
              <p className="text-xs text-slate-300 pt-1">
                Pursuing diploma studies emphasizing backend systems, relational database architecture (MySQL, SQLite), algorithms, web development, and practical software engineering.
              </p>
            </div>
          </div>

          {/* Technical & Creative Capabilities */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              Core Technical & Creative Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wide mb-2">
                  Software Development
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><strong>Backend:</strong> PHP, Python, Django, REST APIs, Server Logic</li>
                  <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, TypeScript, React</li>
                  <li><strong>Databases:</strong> MySQL, SQLite, Schema Design & SQL</li>
                  <li><strong>Dev Tools:</strong> Git, GitHub, VS Code, Android Studio</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wide mb-2">
                  Creative & Digital Support
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><strong>Video Editing:</strong> Premiere Pro, DaVinci Resolve, Color Grading</li>
                  <li><strong>Livestreaming:</strong> OBS Studio, vMix, Multi-camera Switching</li>
                  <li><strong>Graphic Design:</strong> Photoshop, Event Posters, Visual Branding</li>
                  <li><strong>Remote Support:</strong> Data Entry, Virtual Assistance, Documentation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Practical Projects */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
              Practical Projects & Systems
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white">Wellspring School Management System</h4>
                  <span className="text-[11px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                    Offline Financial Software Concept
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Offline-first financial ledger tracking school fees, automated receipt generation with QR validation, and student requirement clearance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white">Faith Connect Application</h4>
                  <span className="text-[11px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
                    Community Mobile App Concept
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Unified Christian community application featuring sermons streaming, prayer request wall, event notifications, and giving.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white">Church Media & Livestream Production</h4>
                  <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    Practical Experience
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Live multi-camera church broadcasts, audio board mixing, sermon reels post-production, and promotional graphic design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Available for remote roles & freelance inquiries
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
