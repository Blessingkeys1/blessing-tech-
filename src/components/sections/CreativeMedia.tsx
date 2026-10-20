import React, { useState } from 'react';
import { creativeMediaData, profileData } from '../../data/portfolioData';
import type { CreativeMediaItem } from '../../types';
import {
  Play,
  Image as ImageIcon,
  ExternalLink,
} from 'lucide-react';
import { YoutubeIcon } from '../icons/BrandIcons';

interface CreativeMediaProps {
  onSelectMedia: (item: CreativeMediaItem) => void;
}

export const CreativeMedia: React.FC<CreativeMediaProps> = ({ onSelectMedia }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = [
    'All',
    'Video Editing',
    'Livestream Production',
    'Graphic Design',
    'Brand Identity',
  ];

  const filteredItems =
    filter === 'All'
      ? creativeMediaData
      : creativeMediaData.filter((item) => item.category === filter);

  return (
    <section id="creative-media" className="py-24 relative bg-[#07090e] light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pink-600/10 text-pink-400 border border-pink-500/20 uppercase tracking-wider">
            Visual Storytelling & Broadcast
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Creative Media Portfolio
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            Showcasing live church streaming setups, multi-camera broadcasting, post-production video editing, and modern promotional posters.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-slate-900/80 light:bg-white text-slate-300 light:text-slate-700 hover:bg-slate-800 border border-slate-800 light:border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isVideo =
              item.category === 'Livestream Production' ||
              item.category === 'Video Editing';

            return (
              <div
                key={item.id}
                onClick={() => onSelectMedia(item)}
                className="group rounded-3xl bg-[#0b0f1a] light:bg-white border border-slate-800 light:border-slate-200 overflow-hidden shadow-lg hover:border-purple-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent opacity-80" />

                    {/* Play/View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        {isVideo ? (
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        ) : (
                          <ImageIcon className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    {/* Category pill */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/70 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white light:text-slate-900 group-hover:text-purple-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Meta */}
                <div className="p-5 pt-0 border-t border-slate-800/60 light:border-slate-100 flex items-center justify-between text-[11px] text-slate-400 light:text-slate-500 mt-2">
                  <span className="truncate max-w-[150px]">{item.clientOrContext}</span>
                  <span className="text-purple-400 font-semibold group-hover:underline">
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Channel Link Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-rose-600/10 text-rose-500 border border-rose-500/20">
              <YoutubeIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white light:text-slate-900">
                Explore More Video Content & Streams
              </h4>
              <p className="text-xs text-slate-400 light:text-slate-600">
                Visit the YouTube and streaming channels for sermon replays and media setups.
              </p>
            </div>
          </div>

          <a
            href={profileData.contact.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-200 light:text-slate-800 border border-slate-700/80 light:border-slate-300 transition-colors"
          >
            <span>Visit YouTube Channel</span>
            <ExternalLink className="w-3.5 h-3.5 text-rose-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
