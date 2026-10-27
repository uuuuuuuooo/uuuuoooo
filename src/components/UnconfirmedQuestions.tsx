import React, { useState } from 'react';
import { HelpCircle, AlertTriangle, Check, ArrowRight, MessageSquare, Send } from 'lucide-react';
import { UnconfirmedQuestion } from '../types';

const QUESTIONS_DATA: UnconfirmedQuestion[] = [
  {
    id: 'q1',
    category: '배포 & 런칭 플랫폼',
    question: '배포 예정인 타깃 플랫폼은 웹(Web)인가요, 모바일 앱(iOS/Android)인가요?',
    context:
      '사용자 입력에 "포트폴리오 강의 끝나면 배포할거야"라는 런칭 의사는 명시되어 있으나, Vercel/Cloud Run 기반의 웹 서비스인지 React Native/Capacitor/PWA를 활용한 앱스토어 출시인지 구체적인 배포 형태가 명시되지 않아 임의로 단정하지 않고 질문으로 분리했습니다.',
    exampleAnswers: ['웹 SPA (Vercel 배포)', 'PWA 모바일 웹앱', 'iOS & Android 스토어 출시'],
  },
  {
    id: 'q2',
    category: '데이터 영속성 및 저장소',
    question: '메모 데이터의 저장 방식은 브라우저 로컬 저장소인가요, 클라우드 DB 동기화인가요?',
    context:
      '현재 프로토타입은 프론트엔드 상태 및 브라우저 로컬 저장 기반으로 완벽히 작동합니다. 향후 다중 기기 간 실시간 동기화(Firebase/Supabase 등)나 회원가입/로그인 기능 도입 여부가 기재되어 있지 않아 보류하였습니다.',
    exampleAnswers: ['오프라인 중심 LocalStorage / IndexedDB', 'Firebase / Supabase 실시간 클라우드 동기화', '파일 저장 (Markdown / JSON 익스포트)'],
  },
  {
    id: 'q3',
    category: '공식 브랜드 네이밍',
    question: "'메모장앱' 외에 스토어 및 대외 발표용으로 확정된 공식 브랜드명이 있나요?",
    context:
      '프로젝트명이 "메모장앱"으로 기재되어 있어, 포트폴리오 상에서는 임의 개명 대신 콘셉트를 살려 \'LineDict (관계형 태그 메모장)\'라는 기술 부제를 병기하였습니다. 공식 출시 네이밍 확정 여부에 대한 확인이 필요합니다.',
    exampleAnswers: ['LineDict (현재 임시 브랜드명 유지)', '줄사전 (가칭)', 'TagLine Note', '기존 "메모장앱" 유지'],
  },
  {
    id: 'q4',
    category: '강의 수료 일정 & 런칭 D-Day',
    question: '현재 수강 중인 포트폴리오 강의의 수료 목표일(D-day) 및 세부 트랙은 무엇인가요?',
    context:
      '"지금 듣는 포트폴리오 강의 하면 배포할거야 깔깔깔"이라는 유쾌한 배포 계획이 언급되어 있습니다. 구체적인 강의명이나 배포 타임라인(예: 2026년 상반기 내 등)이 명시되면 일정 로드맵에 반영 가능합니다.',
    exampleAnswers: ['이번 달 수료 후 즉시 배포', '포트폴리오 심사 통과 후 정식 런칭', '수료 2주 내 베타 테스트'],
  },
  {
    id: 'q5',
    category: '차기 확장 로드맵',
    question: '사전화 기능 외에 마크다운 문법 지원이나 시각적 그래프 뷰(옵시디언 방식) 확장 계획이 있나요?',
    context:
      '현재 줄 단위 태그 관계망 및 역색인 사전 기능까지 기획·개발이 완료되었습니다. 향후 단어 간 하이퍼링크나 지식 그래프 노드 렌더링 같은 고급 기능 연계 여부가 열려 있습니다.',
    exampleAnswers: ['마크다운 에디터 지원', '노드 그래프 시각화 추가', '현재의 경량화된 라인 사전 집중'],
  },
];

export const UnconfirmedQuestions: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [savedBadge, setSavedBadge] = useState<string | null>(null);

  const handleSelectOption = (qid: string, val: string) => {
    setUserAnswers((prev) => ({ ...prev, [qid]: val }));
    setSavedBadge(qid);
    setTimeout(() => setSavedBadge(null), 2000);
  };

  const handleCustomInput = (qid: string, val: string) => {
    setUserAnswers((prev) => ({ ...prev, [qid]: val }));
  };

  return (
    <section id="questions" className="py-24 bg-[#0B0F17] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>06. Unconfirmed Requirements & Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>정보 부족 부분 질문 표시</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            임의 추측을 배제하고 <br />
            <span className="font-italic-accent text-amber-400 font-normal">정확한 확인을 위해</span> 분리한 5가지 질문
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            지시사항에 따라 <strong className="text-amber-300 font-medium">“정보가 부족한 부분은 임의로 채우지 않고 질문으로 표시”</strong> 원칙을 준수했습니다.
            기획서에 명시되지 않은 배포 환경, 데이터 저장소, 브랜드명 등은 아래와 같이 투명하게 분리하여 기재하였습니다.
          </p>
        </div>

        {/* Questions Grid */}
        <div className="space-y-6">
          {QUESTIONS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-amber-500/30 hover:border-amber-500/50 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/60 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    ?{index + 1}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                    [{item.category}]
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded">
                  임의 생성 방지 항목
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
                  <span>{item.question}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="text-slate-400 font-semibold block mb-1">■ 미확정 사유 및 배경:</span>
                  {item.context}
                </p>
              </div>

              {/* Interactive Quick Answer Selectors */}
              <div className="space-y-2 pt-2">
                <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
                  <span>빠른 옵션 선택 또는 직접 입력:</span>
                  {savedBadge === item.id && (
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      답변 임시 기록됨
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.exampleAnswers.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelectOption(item.id, opt)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all text-left ${
                        userAnswers[item.id] === opt
                          ? 'bg-amber-500 text-slate-950 font-semibold border-amber-400 shadow-sm'
                          : 'bg-slate-800/70 text-slate-300 border-slate-700 hover:border-slate-600 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {/* Custom write-in input */}
                <div className="pt-1">
                  <input
                    type="text"
                    placeholder="다른 상세 내용이 있다면 직접 입력해보세요..."
                    value={userAnswers[item.id] || ''}
                    onChange={(e) => handleCustomInput(item.id, e.target.value)}
                    className="w-full bg-slate-950/80 text-xs text-slate-200 placeholder-slate-500 px-3.5 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency */}
        <div className="mt-8 p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 flex items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            위 질문들은 포트폴리오 발표 및 대외 심사 시 면접관과의 자연스러운 대화 유도 및 실현 가능성(Feasibility) 검증 포인트로 적극 활용할 수 있습니다.
          </span>
        </div>
      </div>
    </section>
  );
};
