import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Zap, RefreshCw, Scissors, Network } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution' | 'comparison'>('comparison');

  return (
    <section id="problem-solution" className="py-24 bg-slate-950/60 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
            <span>01. Background & Core Thesis</span>
            <span aria-hidden="true">·</span>
            <span>기획 배경 및 문제 해결</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            왜 기존 메모장 대신 <br />
            <span className="font-italic-accent text-indigo-400 font-normal">라인 단위 관계형 사전</span>이 필요했는가?
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            시중의 메모 앱은 단편적인 메모를 한 파일로 묶어둘 뿐, 문장 사이의 유기적 연결이나
            선택적 줄 삭제를 지원하지 않아 한 번 작성하면 방치되는 1회성 메모 더미가 됩니다.
          </p>
        </div>

        {/* High-Impact 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Problem / Legacy Pain Points */}
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-rose-500/20 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>기존 메모장 앱의 한계와 비효율</span>
                </div>
                <span className="text-[11px] font-mono text-rose-400/80 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-800/40">
                  Legacy Pain Points
                </span>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-rose-950/80 text-rose-400 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 border border-rose-800/40">
                    ✕
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      통째로 삭제할 수 없거나 미세 줄 삭제 불가
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      작성 중 잘못 들어간 문장이나 특정 정보만 선별해 삭제하기 어렵고,
                      파일 단위로만 지우거나 본문을 번거롭게 드래그해 백스페이스를 눌러야 하는 불편함이 상존합니다.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-rose-950/80 text-rose-400 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 border border-rose-800/40">
                    ✕
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      메모 간 관계성이 없어 일회성으로 사장됨
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      어제 쓴 메모와 오늘 쓴 메모가 독립된 파일로 쪼개져, 유사한 아이디어나 지식이
                      축적되지 못하고 검색조차 어려워 1회성 기록으로 버려집니다.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-rose-950/80 text-rose-400 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 border border-rose-800/40">
                    ✕
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      분류 체계의 경직성과 검색 피로도
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      폴더나 카테고리 방식은 파일 전체에만 적용되어, 메모장 내부의 특정 문장이나 단어는
                      따로 묶어볼 수 없는 구조적 한계를 갖습니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-mono">
              결과: 시간이 지날수록 누적되는 텍스트 쓰레기통화
            </div>
          </div>

          {/* Card 2: Solution / LineDict Innovation */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-950/30 to-slate-900/60 border border-indigo-500/30 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-indigo-950/20">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-indigo-800/40">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>LineDict의 관계형 사전 아키텍처</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  Engineered Solution
                </span>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-indigo-950 text-indigo-300 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 border border-indigo-700">
                    <Scissors className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      한 줄 아예 영구 삭제 & 라인별 독립 관리
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      모든 문장을 독립적인 레코드(Line Item)로 분리해, 원하지 않는 특정 줄만 원클릭으로
                      깔끔하게 삭제하거나 수정할 수 있어 데이터 무결성을 유지합니다.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-indigo-950 text-indigo-300 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 border border-indigo-700">
                    <Network className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      줄마다 태그 부여 → 관계성 실시간 누적
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      각 문장에 다중 태그(#아이디어, #버그, #기획)를 부착하여 다른 메모장의 문장과도
                      상호 관계성을 형성하고, 클릭 한 번으로 동일 태그 줄을 즉시 모아봅니다.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-indigo-950 text-indigo-300 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 border border-indigo-700">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      단순 메모를 지식 사전(Dictionary)으로 승화
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      태그별 역색인(Inverted Index)을 통해 개별 메모가 백과사전의 표제어처럼 자동 집계되어
                      지속적으로 확장 가능한 나만의 지식 저장소가 됩니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-indigo-800/40 text-xs text-indigo-300/80 font-mono flex items-center justify-between">
              <span>Claude & GPT sol 5.6 프롬프트 페어링으로 전 과정 1인 완성</span>
              <span className="text-emerald-400 font-bold">100% Solo Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
