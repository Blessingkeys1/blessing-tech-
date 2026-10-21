import React from 'react';
import type { CreativeMediaItem } from '../../types';
import { X, Play, Tag, ExternalLink } from 'lucide-react';

interface MediaModalProps {
  item: CreativeMediaItem | null;
  onClose: () => void;
  onSelectHire: (title: string) => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ item, onClose, onSelectHire }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl my-8 bg-[#0b0f19] text-slate-100 rounded-2xl border border-slate-700/70 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/20 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
              {item.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {item.clientOrContext}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="relative rounded-xl overflow-hidden bg-black border border-slate-800 flex items-center justify-center">
            {item.category === 'Livestream Production' || item.category === 'Video Editing' ? (
              <div className="w-full relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="text-sm font-semibold text-white bg-black/70 px-4 py-1.5 rounded-full border border-white/20">
                    Video Showcase Preview (Production Simulation)
                  </span>
                </div>
              </div>
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-h-[550px] object-contain mx-auto"
              />
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {item.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                {item.description}
              </p>
            </div>

            {/* Tools Used */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                Tools & Software Utilized
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Client / Project Context: <strong className="text-slate-200">{item.clientOrContext}</strong>
          </span>
          <button
            onClick={() => {
              onClose();
              onSelectHire(item.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            Book Similar Creative Service
          </button>
        </div>
      </div>
    </div>
  );
};
