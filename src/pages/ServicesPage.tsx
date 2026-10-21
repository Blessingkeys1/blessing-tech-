import React from 'react';
import { Link } from 'react-router-dom';
import { Skills } from '../components/sections/Skills';
import {
  Code2,
  Database,
  Server,
  Video,
  Monitor,
  Headphones,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const serviceOfferings = [
    {
      icon: Server,
      title: 'Backend Systems & API Architecture',
      description:
        'Custom RESTful APIs, robust server-side business logic in Python/Django and PHP, authentication schemas, and microservice integration.',
      deliverables: ['Custom REST APIs', 'Secure JWT/Session Auth', 'Data Validation Logic', 'Third-Party Webhooks'],
    },
    {
      icon: Database,
      title: 'Relational Database Design & SQL',
      description:
        'Database modeling, 3NF schema normalization, ACID-compliant transactions, query performance optimization, and migrations in MySQL and SQLite.',
      deliverables: ['Normalized Schema DDL', 'SQL Query Optimization', 'Backup & Recovery Schemes', 'Complex Relational Joins'],
    },
    {
      icon: Code2,
      title: 'Full-Stack Web Applications',
      description:
        'Responsive, reactive frontends built with modern React, TypeScript, and clean CSS, backed by dependable server endpoints.',
      deliverables: ['Interactive React Portals', 'Cross-Browser Responsiveness', 'Dynamic State Management', 'Fast Load Times'],
    },
    {
      icon: Monitor,
      title: 'Offline-First Desktop Systems',
      description:
        'Software engineered to operate without continuous internet, local transaction recording, automated receipt printing, and sync protocols.',
      deliverables: ['School & Bursar Systems', 'Local Financial Ledgers', 'Verifiable QR Receipts', 'Reliable Cashbooks'],
    },
    {
      icon: Video,
      title: 'Church Media & Broadcast Production',
      description:
        'Professional multi-camera livestream directing, OBS Studio & vMix workflows, audio routing, and live broadcast operations.',
      deliverables: ['Multi-Camera Switching', 'Broadcast Graphics & Lower Thirds', 'Audio Board Routing', 'YouTube/Facebook Streams'],
    },
    {
      icon: Headphones,
      title: 'Administrative & Remote Support',
      description:
        'Organized virtual support, meticulous data verification, system entry, document formatting, and technical communication.',
      deliverables: ['Data Verification & Entry', 'Online Research & Summaries', 'Digital Asset Filing', 'Virtual Assistance'],
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-[#040507] text-slate-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="relative py-16 bg-tech-grid border-b border-orange-500/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
            Professional Offerings • Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Technical & Creative Services
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            From robust backend software architecture and database engineering to cinematic video editing and live multi-camera broadcasts.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
            >
              <span>Book a Consultation or Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Specialized Service Pillars
            </h2>
            <p className="text-sm text-slate-400">
              Clear deliverables, honest timelines, and rigorous quality for regional and global clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceOfferings.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#090a0f] border border-orange-500/15 shadow-xl flex flex-col justify-between hover:border-orange-500/40 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600/10 text-orange-400 border border-orange-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 space-y-1.5">
                      <div className="text-[11px] font-mono font-semibold text-orange-400 uppercase tracking-wider mb-2">
                        Key Deliverables:
                      </div>
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800">
                    <Link
                      to="/contact"
                      className="text-xs font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Skills Categorized Component */}
      <Skills />

      {/* Workflow Process Banner */}
      <section className="py-20 border-t border-orange-500/15 bg-[#040507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
              Working Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Inquiry to Deployment
            </h2>
            <p className="text-sm text-slate-400">
              A transparent, step-by-step engagement model ensuring complete clarity at each milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation & Scope', desc: 'Understanding your problem statement, technical stack, timeline, and exact deliverables.' },
              { step: '02', title: 'System Blueprint', desc: 'Designing schema models, API endpoints, wireframes, and architectural structure.' },
              { step: '03', title: 'Development & Testing', desc: 'Writing clean, testable code, structuring databases, and performing edge-case validation.' },
              { step: '04', title: 'Delivery & Deployment', desc: 'Hosting on live servers or setting up local offline runtime with documentation.' },
            ].map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#090a0f] border border-orange-500/15 relative space-y-3">
                <span className="text-2xl font-black text-orange-400/40 font-mono">
                  {st.step}
                </span>
                <h3 className="text-base font-bold text-white">{st.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-xl shadow-orange-600/30 transition-all hover:scale-105"
            >
              <span>Initiate Your Project Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
