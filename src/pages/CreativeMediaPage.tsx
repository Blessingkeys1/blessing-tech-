import React from 'react';
import { Link } from 'react-router-dom';
import { CreativeMedia } from '../components/sections/CreativeMedia';
import type { CreativeMediaItem } from '../types';
import {
  Tv,
  Mic2,
  Film,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { YoutubeIcon } from '../components/icons/BrandIcons';
import { profileData } from '../data/portfolioData';

interface CreativeMediaPageProps {
  onSelectMedia: (m: CreativeMediaItem) => void;
}

export const CreativeMediaPage: React.FC<CreativeMediaPageProps> = ({ onSelectMedia }) => {
  return (
    <div className="pt-24 pb-16 bg-[#040507] text-slate-100 min-h-screen">
      {/* Page Hero Header */}
      <div className="relative py-16 bg-tech-grid border-b border-orange-500/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
            Creative Multimedia • Broadcast Operations
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cinematic Video Editing & Live Church Broadcasting
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            Showcasing over three years of directing live multi-camera broadcasts, color grading Christian video sermons, and designing digital brand visuals.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
            >
              <span>Book Livestream or Video Editing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={profileData.contact.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-orange-500/20 transition-all"
            >
              <YoutubeIcon className="w-4 h-4 text-rose-500" />
              <span>Watch Broadcasts on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Gallery Component */}
      <CreativeMedia onSelectMedia={onSelectMedia} />

      {/* Production Toolstack & Equipment Specs */}
      <section className="py-20 border-t border-orange-500/15 bg-[#06070a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-orange-600/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider font-mono">
              Hardware & Software Pipeline
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Workflow & Equipment
            </h2>
            <p className="text-sm text-slate-400">
              The tools, capture cards, and software suites powering reliable broadcasting and editing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#090a0f] border border-orange-500/15 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
                <Tv className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Livestream Switching</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                vMix & OBS Studio multi-camera switcher setups, lower-third titles, scripture overlays, and simultaneous RTMP multistreaming to YouTube and Facebook.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090a0f] border border-orange-500/15 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <Mic2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Live Audio Routing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Balancing pulpit mics, worship band inputs, and ambient room sound. Live audio gating, compressor settings, and clean digital audio interface feeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090a0f] border border-orange-500/15 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600/10 text-orange-400 border border-orange-500/20 flex items-center justify-center">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Non-Linear Editing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adobe Premiere Pro and DaVinci Resolve. Full-length sermons, sermon reels (9:16 vertical shorts), color grading, and subtitle synchronization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090a0f] border border-orange-500/15 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Graphic Visuals</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                High-impact conference posters, event promotional banners, sermon title screens, social media carousel posts, and digital brand identities.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white shadow-xl shadow-orange-600/30 transition-all hover:scale-105"
            >
              <span>Book Church Streaming or Video Production</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
