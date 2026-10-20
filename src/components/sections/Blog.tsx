import React from 'react';
import { blogPostsData } from '../../data/portfolioData';
import type { BlogPost } from '../../types';
import {
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface BlogProps {
  onSelectPost: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onSelectPost }) => {
  return (
    <section id="blog" className="py-24 relative bg-[#090d16] light:bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
            Thoughts & Architecture Insights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Technical Blog & Engineering Notes
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            Documenting lessons learned in backend design, offline desktop software architecture, and the mechanics of high-quality livestream broadcasting.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group rounded-3xl bg-[#0b0f1a] light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-7 shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full font-semibold bg-blue-600/10 text-blue-400 border border-blue-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 light:text-slate-500 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 light:bg-slate-100 text-slate-400 light:text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 light:border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 light:text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.publishDate}</span>
                </div>
                <span className="inline-flex items-center gap-1 font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
