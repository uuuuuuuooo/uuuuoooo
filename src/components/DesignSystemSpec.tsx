import React from 'react';
import { X, Layers, Table, Check, ArrowRight, Palette, Type, Smartphone, Clock, Sparkles } from 'lucide-react';

interface DesignSystemSpecProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  isInlineSection?: boolean;
}

export const DesignSystemSpec: React.FC<DesignSystemSpecProps> = ({
  isOpenModal = false,
  onCloseModal,
  isInlineSection = false,
}) => {
  const content = (
    <div className="space-y-10">
      {/* 1-Line Summary of Changes vs Original */}
      <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>원본 대비 변경점 (색상·폰트·콘텐츠 매핑) 한 줄 요약</span>
        </div>
        <p className="text-sm text-slate-100 font-medium leading-relaxed">
          “기존 Azwedo Italic 템플릿의 SaaS 마케팅 레이아웃·볼드 이탤릭 타이포 대비·디바이스 목업 프레임워크를 기반으로, 
          폰트를 Plus Jakarta Sans &amp; Playfair Display Italic으로 독자 구성하고, 
          색상을 딥 오닉스/일렉트릭 인디고 팔레트로 재해석하여, 
          ‘1인 AI 프롬프트 엔지니어링 메모장앱’의 라인 단위 태그 사전화라는 문제 해결 스토리로 완전 매핑했습니다.”
        </p>
      </div>

      {/* Design System Summary Table */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Table className="w-4 h-4 text-indigo-400" />
            <h3 className="text-base font-bold text-white">참고한 설계 시스템 요약표</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Design System Specifications</span>
        </div>

        {/* Table Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300 font-mono">
                <th className="py-3 px-4 font-semibold w-1/5">시스템 항목</th>
                <th className="py-3 px-4 font-semibold w-2/5">규격 및 수치 (Specification)</th>
                <th className="py-3 px-4 font-semibold w-2/5">설계 의도 및 도메인 적용 (Rationale)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {/* Row 1: Spacing */}
              <tr className="hover:bg-slate-900/30">
                <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  간격 스케일
                </td>
                <td className="py-3.5 px-4 font-mono text-indigo-300">
                  4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px
                </td>
                <td className="py-3.5 px-4 leading-relaxed">
                  8pt 그리드 기반. 컨테이너 패딩(24~32px) ≥ 내부 자식 요소 간격(12~16px) 원칙을 준수하여 시각적 여백 위계 확립.
                </td>
              </tr>

              {/* Row 2: Typography */}
              <tr className="hover:bg-slate-900/30">
                <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  타이포 스케일
                </td>
                <td className="py-3.5 px-4 font-mono text-purple-300">
                  H1: clamp(2.5rem, 5vw, 3.5rem) <br />
                  H2: 32~36px / H3: 18~20px <br />
                  Body: 15~16px (1.65 line-height) <br />
                  Meta: 12~13px (unboxed, · 분리)
                </td>
                <td className="py-3.5 px-4 leading-relaxed">
                  Plus Jakarta Sans(모던 기하학 고딕) + Playfair Display Italic(감성적 강조) 조합. 
                  주요 핵심 단어(관계형 사전, 지식)에 이탤릭 악센트를 부여해 시선 유도.
                </td>
              </tr>

              {/* Row 3: Colors */}
              <tr className="hover:bg-slate-900/30">
                <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  색상 팔레트 <br />
                  (60-30-10 법칙)
                </td>
                <td className="py-3.5 px-4 font-mono text-emerald-300">
                  60% 캔버스: #0B0F17 (Deep Onyx) <br />
                  30% 표면: #131B2A / 테두리 #1E293B <br />
                  10% 액센트: #6366F1 (Indigo), #10B981 (Green), #F59E0B (Amber)
                </td>
                <td className="py-3.5 px-4 leading-relaxed">
                  AI 상투적 보라 그라데이션을 배제하고, 고대비 다크 테크 톤에 일렉트릭 인디고 포컬 포인트를 집중하여 높은 가독성과 전문성 확보.
                </td>
              </tr>

              {/* Row 4: Interactions */}
              <tr className="hover:bg-slate-900/30">
                <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  인터랙션 스펙
                </td>
                <td className="py-3.5 px-4 font-mono text-amber-300">
                  반응 지연: ≤ 150ms <br />
                  이징: cubic-bezier(0.16, 1, 0.3, 1) <br />
                  라인 삭제: opacity &amp; scale transition (200ms) <br />
                  모달: backdrop-blur-md (12px)
                </td>
                <td className="py-3.5 px-4 leading-relaxed">
                  합성기 속성(transform, opacity)만 애니메이션하여 레이아웃 리플로우 방지.
                  문장 삭제 시 다른 문장이 튀지 않도록 매끄러운 붕괴 애니메이션 적용.
                </td>
              </tr>

              {/* Row 5: Breakpoints */}
              <tr className="hover:bg-slate-900/30">
                <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  반응형 브레이크포인트
                </td>
                <td className="py-3.5 px-4 font-mono text-cyan-300">
                  Mobile: &lt; 640px (터치 타깃 ≥ 44px) <br />
                  Tablet: 640px ~ 1024px <br />
                  Desktop: ≥ 1024px (1440px 최대 폭 기준)
                </td>
                <td className="py-3.5 px-4 leading-relaxed">
                  모바일 환경에서 상단 고정 바가 15% 이상 가리지 않도록 콤팩트화. 
                  데스크톱에서는 시각적 앵커(MacBook 목업)와 본문이 조화롭게 분할.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // If rendered as inline page section
  if (isInlineSection) {
    return (
      <section id="design-system" className="py-24 bg-slate-950 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
              <span>07. Design Architecture & System Spec</span>
              <span aria-hidden="true">·</span>
              <span>설계 시스템 명세표</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Azwedo Italic 기반 <br />
              <span className="font-italic-accent text-indigo-400 font-normal">독자적 디자인 시스템</span> 및 변경점
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              요구사항에 제시된 산출물 규격에 맞춰 간격, 타이포그래피, 색상, 인터랙션, 반응형 스펙을 정밀 집계한 표입니다.
            </p>
          </div>

          {content}
        </div>
      </section>
    );
  }

  // If rendered as modal dialog
  if (!isOpenModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white">설계 시스템 요약표 및 원본 대비 변경점</h2>
          </div>
          <button
            onClick={onCloseModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {content}

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onCloseModal}
            className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
