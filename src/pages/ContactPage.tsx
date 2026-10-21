import React from 'react';
import { Contact } from '../components/sections/Contact';
import {
  Phone,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const faqs = [
    {
      q: 'What is your typical project turnaround time?',
      a: 'Landing pages and institutional portals typically take 5 to 14 business days. Custom full-stack systems, desktop software, or database migrations range from 3 to 6 weeks depending on scope.',
    },
    {
      q: 'Do you work with clients remotely or on-site?',
      a: 'Both! Software development, UI design, and backend engineering are handled remotely worldwide. For live church broadcasts, audiovisual installations, or on-site IT deployments, services are available across Kampala, Entebbe, and regional Uganda.',
    },
    {
      q: 'How does form submission and direct contact work?',
      a: 'All messages submitted through this portal are sent instantly to blessingstechnologies4@gmail.com. You can also reach out immediately via direct phone call or WhatsApp at +256 709 344 655.',
    },
    {
      q: 'Do you offer post-launch maintenance and support?',
      a: 'Yes, every delivered project includes a warranty period, complete code handover, documentation, and optional monthly retainer plans for updates, backups, and server monitoring.',
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#040507] text-slate-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="relative py-16 bg-tech-grid border-b border-orange-500/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
            Direct Communication • Available for Hire
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            Have a project in mind, need software development, or require professional livestream broadcast production? Reach out directly to {profileData.brand}.
          </p>
        </div>
      </div>

      {/* Main Interactive Contact Component (with Form, Direct WhatsApp, Phone, Map) */}
      <Contact />

      {/* Frequently Asked Questions Section */}
      <section className="py-20 border-t border-orange-500/15 bg-[#06070a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
              <span>Client Inquiries & FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers regarding engagements, timelines, and technical cooperation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090a0f] border border-orange-500/15 space-y-2.5 hover:border-orange-500/35 transition-all"
              >
                <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-orange-500" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Call / WhatsApp Quick Strip */}
      <section className="py-12 bg-[#040507] border-t border-orange-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-3xl bg-gradient-to-r from-orange-950/30 via-[#0a0c12] to-amber-950/20 border border-orange-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-orange-400">Urgent Project or Quick Call?</p>
                <h4 className="text-lg font-bold text-white">{profileData.contact.phone}</h4>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                className="flex-1 sm:flex-none text-center px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-orange-600 hover:bg-orange-500 text-white shadow-md shadow-orange-600/30 transition-all"
              >
                Call Directly
              </a>
              <a
                href={`https://wa.me/256709344655?text=${encodeURIComponent('Hello Blessing Technologies! I want to discuss a project.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none text-center px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
