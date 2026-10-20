import React from 'react';
import { Home, Terminal } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex items-center justify-center p-6 relative overflow-hidden bg-tech-grid">
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto text-white shadow-xl shadow-blue-500/20">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            404
          </h1>
          <h2 className="text-xl font-bold text-white">System Route Not Found</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The page or resource you are searching for does not exist on the {profileData.brand} portfolio platform.
          </p>
        </div>

        <div>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-500 font-mono">
          {profileData.name} • {profileData.slogan}
        </p>
      </div>
    </div>
  );
};
