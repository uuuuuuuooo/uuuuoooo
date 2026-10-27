import React, { useState } from 'react';
import { Bot, Terminal, Cpu, Check, Code, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export const AiWorkflow: React.FC = () => {
  const [selectedPromptIdx, setSelectedPromptIdx] = useState<number>(0);

  const promptCases = [
    {
      title: '01. 라인 단위 독립 삭제 모델링 프롬프트',
      model: 'Claude 무료 버전',
      target: '데이터 구조 및 불변성 핸들러',
      promptSnippet: `기존 메모장처럼 통째로 글을 다루지 않고, 각 문장을 고유 ID(string)와 tags(string[])를 가진 독립 레코드로 관리하고 싶어.
특정 라인 ID를 받아서 배열의 불변성을 유지하며 삭제하는 함수 handleDeleteLine(id: string)과,
삭제 후 남아있는 라인들의 순서 및 태그 인덱스가 깨지지 않도록 React 상태를 갱신하는 로직을 작성해줘.`,
      resultOutcome:
        'LineItem 단위 불변성(Immutable) 상태 모델링 수립 및 삭제 사이드이펙트 0% 달성.',
    },
    {
      title: '02. 태그 기반 역색인(Inverted Index) 사전화 프롬프트',
      model: 'Chat GPT sol 5.6',
      target: '지식 사전(Dictionary View) 변환 알고리즘',
      promptSnippet: `메모장 속 모든 문장에 달려있는 태그들을 수집해서 중복을 제거한 뒤,
각 태그를 Key로 하고 해당 태그를 포함한 문장들의 배열을 Value로 갖는 역색인(Inverted Index) 사전 객체를 만들어줘.
예: { "자료구조": [문장1, 문장4], "기획": [문장2] }
이 객체를 활용해 태그를 누르면 사전 표제어처럼 펼쳐지는 UI 렌더링 함수를 최적화해줘.`,
      resultOutcome:
        '태그 클릭 시 O(1)에 준하는 즉각적인 지식 사전 뷰 렌더링 구현.',
    },
    {
      title: '03. 에지 케이스 및 사용자 입력 예외 방어 프롬프트',
      model: 'Claude 무료 버전 + GPT sol 5.6 교차 검증',
      target: '품질 보증 및 결함 방어',
      promptSnippet: `사용자가 공백 라인을 추가하거나, # 기호 없이 태그를 입력하거나,
연속으로 같은 라인을 여러 번 삭제 클릭할 때 발생할 수 있는 레이스 컨디션과 렌더링 오류를 찾아내줘.
각 케이스에 대한 방어 코드(Guard Clauses)를 추가해줘.`,
      resultOutcome:
        '공백 파싱, 해시태그 자동 정규화, 삭제 무결성 테스트 케이스 100% 통과.',
    },
  ];

  return (
    <section className="py-24 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
            <span>05. AI Collaboration Architecture</span>
            <span aria-hidden="true">·</span>
            <span>AI 도구 및 프롬프트 엔지니어링</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            무료 AI 모델을 조율하여 <br />
            <span className="font-italic-accent text-indigo-400 font-normal">완전한 단일 앱</span>을 이끌어낸 노하우
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            비용이 들지 않는 <strong className="text-white font-semibold">클로드 무료 버전</strong>과{' '}
            <strong className="text-white font-semibold">Chat GPT sol 5.6</strong>을 적재적소에 배치하여,
            단순 질문 답변을 넘어 실제 작동하는 프로덕션 레벨 앱을 지휘하는 프롬프트 엔지니어링 역량을 터득했습니다.
          </p>
        </div>

        {/* AI Tools Breakdown 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Claude Free */}
          <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm">
                  C
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">클로드 무료 버전 (Claude Free)</h3>
                  <span className="text-[11px] font-mono text-slate-400">Main Architect & Logic Scaffold</span>
                </div>
              </div>
              <span className="text-xs font-mono text-orange-400 bg-orange-950/40 px-2.5 py-1 rounded border border-orange-800/40">
                0원 무료 플랜
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              기존 메모장의 1회성 결함을 타파하기 위한 데이터 구조(라인 단위 분할, 태그 매핑)와
              React 상태의 불변성 유지 등 아키텍처 관점의 깊이 있는 프롬프트 설계에 주력했습니다.
            </p>

            <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>문장 단위 고유 ID 부여 및 상태 변경 파이프라인 수립</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>단일 라인 삭제 시 성능 저하 없는 필터링 설계</span>
              </li>
            </ul>
          </div>

          {/* ChatGPT sol 5.6 */}
          <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  G
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Chat GPT sol 5.6</h3>
                  <span className="text-[11px] font-mono text-slate-400">Algorithm & Edge-Case Validator</span>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800/40">
                sol 5.6 모델
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              메모 줄들의 태그를 집계해 사전(Dictionary)으로 묶어주는 역색인 알고리즘 최적화 및
              실사용 시 발생 가능한 엣지 케이스와 디버깅 프롬프트 검증을 수행했습니다.
            </p>

            <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>태그별 역색인 사전 변환 속도 최적화</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>공백 입력, 특수기호 파싱 등 예외 케이스 방어 로직</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Real Interactive Prompt Inspector */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                Prompt Engineering Showcase
              </div>
              <h3 className="text-base font-bold text-white mt-1">
                실제 개발에 투입된 핵심 프롬프트 명세
              </h3>
            </div>

            {/* Prompt Selector Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
              {promptCases.map((pc, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPromptIdx(idx)}
                  className={`px-3 py-1.5 rounded font-medium transition-all ${
                    selectedPromptIdx === idx
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  사례 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Prompt Box */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-slate-200">
                {promptCases[selectedPromptIdx].title}
              </span>
              <span className="font-mono text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                적용 모델: {promptCases[selectedPromptIdx].model}
              </span>
            </div>

            {/* Code / Prompt Block */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-indigo-200/90 leading-relaxed overflow-x-auto whitespace-pre-wrap">
              {promptCases[selectedPromptIdx].promptSnippet}
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-start gap-2.5 text-xs text-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-emerald-300">구현 결과 및 성과: </strong>
                <span>{promptCases[selectedPromptIdx].resultOutcome}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Box */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">1인 AI 개발 회고: </strong>
          "단순히 AI에게 '코드 짜줘'라고 요청하는 것을 넘어, 구체적인 도메인 제약조건(라인 단위 삭제, 역색인 태그 사전)과
          불변성 규칙을 설계하여 프롬프트로 전달할 때, 1인 개발자라도 상용 수준의 견고한 풀스택 애플리케이션을 완성할 수 있음을 입증했습니다."
        </div>
      </div>
    </section>
  );
};
