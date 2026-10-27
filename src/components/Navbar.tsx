import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, BookOpen, HelpCircle, Layers, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenSpecs: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSpecs, onScrollTo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <span>
              Line<span className="font-italic-accent text-indigo-400 text-xl font-normal ml-0.5">Dict</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/60 ml-1">
              Solo AI Build
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => onScrollTo('problem-solution')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-left"
            >
              기획 배경
            </button>
            <button
              onClick={() => onScrollTo('features')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-left"
            >
              핵심 기능
            </button>
            <button
              onClick={() => onScrollTo('interactive-demo')}
              className="hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 text-left flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              라이브 데모
            </button>
            <button
              onClick={() => onScrollTo('process')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-left"
            >
              개발 과정 & AI
            </button>
            <button
              onClick={() => onScrollTo('questions')}
              className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 text-left flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              미확인 질문 [?]
            </button>
          </nav>

          {/* Zone 3: Primary action + Spec Table modal trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSpecs}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/70 hover:bg-slate-700/80 hover:text-white rounded-lg border border-slate-700 transition-colors whitespace-nowrap shrink-0"
              title="설계 시스템 요약표 및 원본 대비 변경점 확인"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              설계 시스템 명세
            </button>
            <button
              onClick={() => onScrollTo('interactive-demo')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>앱 체험하기</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
