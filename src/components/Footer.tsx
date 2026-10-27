import React from 'react';
import { BookOpen, ArrowUp, Sparkles, Terminal, Code } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenSpecs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenSpecs }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span>
                Line<span className="font-italic-accent text-indigo-400 font-normal">Dict</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              기존 메모장앱의 1회성과 삭제 불편을 타파하기 위해 라인 단위 독립 삭제와 태그 관계망을 결합한 1인 개발 사전식 메모장 솔루션입니다.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span>기획·개발·테스트 100% 1인 전담</span>
              <span aria-hidden="true">·</span>
              <span>Claude Free &amp; GPT sol 5.6</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider font-mono">
              포트폴리오 내비게이션
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onScrollTo('problem-solution')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  기획 배경 및 문제 해결
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('features')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  4대 핵심 기능
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('interactive-demo')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  라이브 앱 샌드박스
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('process')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  5단계 개발 프로세스
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('questions')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  정보 부족 질문 표시 [?]
                </button>
              </li>
            </ul>
          </div>

          {/* Deliverables & Meta */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider font-mono">
              산출물 규격
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={onOpenSpecs}
                  className="text-indigo-400 hover:underline text-left flex items-center gap-1 font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  설계 시스템 요약표 보기
                </button>
              </li>
              <li>
                <span className="text-slate-400">원본 사이트: Azwedo Italic Template</span>
              </li>
              <li>
                <span className="text-emerald-400 font-medium">배포: 포트폴리오 강의 수료 후 릴리즈 예정</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © 2026 LineDict Memo App Project. Solo AI Prompt Engineering Portfolio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>맨 위로 스크롤</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
