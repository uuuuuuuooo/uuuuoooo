import React from 'react';
import { ArrowRight, Terminal, Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { AppMockup } from './AppMockup';

interface HeroProps {
  onScrollTo: (id: string) => void;
  onOpenSpecs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo, onOpenSpecs }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Natural human editorial kicker */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
            <span>Solo Product Engineering</span>
            <span aria-hidden="true">·</span>
            <span>AI Prompt Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Claude & GPT sol 5.6</span>
          </div>

          {/* Typographic Headline with Italic Contrast (The signature of 'Italic') */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
            단순한 1회성 메모를 넘어, <br />
            문장마다 엮이는{' '}
            <span className="font-italic-accent text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-400 font-normal">
              관계형 지식 사전
            </span>
          </h1>

          {/* Subtitle / Lead Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            기존 메모장의 고질적 결함인 <strong className="text-slate-100 font-semibold">“통째로 삭제하기 어렵고 한 줄만 골라 지울 수 없는 문제”</strong>와{' '}
            <strong className="text-slate-100 font-semibold">“메모 간 무관계성”</strong>을 극복하기 위해,
            라인별 독립 삭제와 태그 클러스터링으로 개인 사전을 완성한 1인 개발 프로젝트입니다.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onScrollTo('interactive-demo')}
              className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all flex items-center gap-2 active:scale-95"
            >
              <span>라인 에디터 라이브 체험</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onScrollTo('problem-solution')}
              className="px-6 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
            >
              <span>기획 배경 & 해결 방식</span>
            </button>
          </div>

          {/* Clean Unboxed Metadata Strip */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span>기획 100%</span>
            <span aria-hidden="true">·</span>
            <span>AI 프롬프트 개발 100%</span>
            <span aria-hidden="true">·</span>
            <span>테스트 100%</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-medium">강의 수료 후 배포 예정</span>
          </div>
        </div>

        {/* Hero Visual Anchor: Interactive MacBook App Mockup Window */}
        <div className="mt-14 sm:mt-18">
          <AppMockup />
        </div>

        {/* Full-width 4-Column KPI / Metric Strip below hero split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 text-center">
            <div className="text-xs text-slate-400 font-medium">전담 역할</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 font-mono tabular-nums">
              100%
            </div>
            <div className="text-[12px] text-slate-400 mt-1">기획·조사·개발·테스트 1인 전담</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 text-center">
            <div className="text-xs text-slate-400 font-medium">삭제 & 편집 단위</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1.5 font-mono tabular-nums">
              1-Line
            </div>
            <div className="text-[12px] text-slate-400 mt-1">원치 않는 문장만 핀포인트 삭제</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 text-center">
            <div className="text-xs text-slate-400 font-medium">AI 페어 엔지니어링</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 font-mono tabular-nums">
              Claude + GPT
            </div>
            <div className="text-[12px] text-slate-400 mt-1">클로드 무료 + GPT sol 5.6 협업</div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 text-center">
            <div className="text-xs text-slate-400 font-medium">릴리즈 상태</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1.5 font-mono tabular-nums">
              배포 준비
            </div>
            <div className="text-[12px] text-slate-400 mt-1">포트폴리오 강의 완강 후 즉시 런칭</div>
          </div>
        </div>
      </div>
    </section>
  );
};
