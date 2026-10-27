import React, { useState } from 'react';
import { Trash2, Hash, BookOpen, Bot, Check, ArrowRight, CornerDownRight } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const [activeInteractiveDemo, setActiveInteractiveDemo] = useState<number>(0);

  const features = [
    {
      num: '01',
      title: '한 줄 단위 핀포인트 삭제 & 편집',
      subtitle: 'Single-Line Precision Deletion',
      description:
        '전체 문서를 건드리지 않고도 불필요해진 단 하나의 문장만 즉시 영구 삭제합니다. 메모장 전체를 지우거나 수작업으로 지워야 했던 불편을 구조적으로 제거했습니다.',
      accent: 'border-rose-500/30 text-rose-400',
      tag: '데이터 무결성',
      details: [
        '각 라인별 불변성(Immutability) 유지 삭제',
        '실수 방지를 위한 신속한 상태 롤백 지원',
        '남은 문장들의 순서와 연결 관계 자동 보존',
      ],
      interactiveType: 'delete',
    },
    {
      num: '02',
      title: '라인별 태깅 & 연관 메모 클러스터링',
      subtitle: 'Relational Tag Clustering',
      description:
        '문서 전체가 아닌 개별 문장에 복수의 태그를 부여합니다. 작성 날짜나 파일이 달라도 동일한 태그가 달린 문장들을 실시간으로 엮어 관계성을 형성합니다.',
      accent: 'border-indigo-500/30 text-indigo-400',
      tag: '관계망 형성',
      details: [
        '문장 단위 다중 태그(#아이디어, #할일) 매핑',
        '태그 원클릭 시 동일 맥락 문장 즉시 필터링',
        '1회성으로 잊혀지던 메모의 유기적 재발견',
      ],
      interactiveType: 'tag',
    },
    {
      num: '03',
      title: '단순 메모를 지식 사전(Dictionary)으로 확장',
      subtitle: 'Personal Knowledge Dictionary',
      description:
        '태그가 쌓이면 단순한 메모 더미가 백과사전 형태의 표제어 사전으로 자동 재구성됩니다. 내가 기록한 문장들이 모여 개인만의 지식 위키가 완성됩니다.',
      accent: 'border-emerald-500/30 text-emerald-400',
      tag: '지식 구조화',
      details: [
        '태그별 역색인(Inverted Index) 기반 자동 사전화',
        '개념별 용례와 작성 히스토리 일목요연 정렬',
        '검색이 필요 없는 브라우징형 지식 내비게이션',
      ],
      interactiveType: 'dict',
    },
    {
      num: '04',
      title: 'Claude & GPT sol 5.6 프롬프트 엔지니어링',
      subtitle: '100% Solo AI-Driven Development',
      description:
        '기획, 아키텍처 모델링, 코드 생성, 엣지 케이스 테스트까지 AI 무료 모델과의 정밀한 프롬프트 페어 프로그래밍을 통해 1인 전담으로 완성했습니다.',
      accent: 'border-amber-500/30 text-amber-400',
      tag: 'AI 개발 성과',
      details: [
        'Claude 무료 버전: 아키텍처 및 상태 흐름 설계',
        'Chat GPT sol 5.6: 버그 디버깅 및 테스트 시나리오 도출',
        '프롬프트 설계로 완전한 앱을 빌드하는 역량 획득',
      ],
      interactiveType: 'ai',
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
            <span>02. Core Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>핵심 기능 아키텍처</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            불편을 해소하고 <br />
            <span className="font-italic-accent text-indigo-400 font-normal">관계와 사전</span>을 만들어낸 4가지 설계
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            한 줄 삭제부터 지식 사전화, 그리고 1인 AI 프롬프트 개발까지
            기존 메모장에는 없던 구체적이고 실용적인 기능들을 담았습니다.
          </p>
        </div>

        {/* 4 Bento Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feat, index) => (
            <div
              key={feat.num}
              className="p-8 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold font-mono text-indigo-400">{feat.num}.</span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {feat.subtitle}
                    </span>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                  {feat.description}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-800/60 space-y-2.5">
                  {feat.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-card interactive micro-indicator */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>{feat.num} / 04 Component Matrix</span>
                <span className="group-hover:text-indigo-400 flex items-center gap-1 transition-colors">
                  직접 테스트하기
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
