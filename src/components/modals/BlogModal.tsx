import React from 'react';
import type { BlogPost } from '../../types';
import { X, Calendar, Clock, Tag, Share2 } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl my-8 bg-[#0b0f19] text-slate-100 rounded-2xl border border-slate-700/70 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Share article"
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Published on {post.publishDate}</span>
              <span>•</span>
              <span className="text-blue-400 font-medium">By Blessing Technologies</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-base text-slate-300 italic mt-3 border-l-2 border-blue-500 pl-4 py-1 bg-blue-950/20 rounded-r">
              {post.excerpt}
            </p>
          </div>

          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            {post.content.map((paragraph, idx) => {
              if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.')) {
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/90 font-medium text-slate-200">
                    {paragraph}
                  </div>
                );
              }
              if (paragraph.endsWith(':')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-white pt-2">
                    {paragraph}
                  </h3>
                );
              }
              return (
                <p key={idx} className="text-slate-300">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-slate-400" />
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Author Bio Footer */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/blessing-avatar.jpg"
              alt="Blessing Technologies"
              className="w-9 h-9 rounded-full object-cover border border-blue-500/40"
            />
            <div>
              <div className="text-xs font-semibold text-white">Blessing Technologies</div>
              <div className="text-[11px] text-slate-400">Software Engineer & Creator</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
