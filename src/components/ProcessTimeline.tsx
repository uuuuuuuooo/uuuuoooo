import React from 'react';
import { Search, FileEdit, Code2, CheckCircle, Rocket, Bot, Sparkles, UserCheck } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: 'Step 01',
      title: '자료 조사 및 결함 분석',
      period: 'Phase 1 · Research',
      role: '100% 1인 전담',
      icon: Search,
      badge: '불편 발굴',
      summary:
        '기존 모바일/데스크톱 메모장들이 단일 문장 삭제를 지원하지 않고, 파일 단위로만 관리되어 메모 간 관계성이 단절되는 문제를 사용자 관점에서 심층 분석하고 개선 지점을 도출했습니다.',
      highlights: [
        '기존 메모앱 UX 한계(통째 삭제 난항, 부분 삭제 비효율) 분석',
        '메모가 1회성으로 버려지는 원인 규명: 문장 간 관계 부재',
        '해결 가설 수립: "줄마다 태그를 달면 사전이 된다"',
      ],
    },
    {
      step: 'Step 02',
      title: '데이터 모델 및 UX 기획',
      period: 'Phase 2 · Planning',
      role: '100% 1인 전담',
      icon: FileEdit,
      badge: '아키텍처 정의',
      summary:
        '전체 텍스트 블록이 아닌 개별 문장(Line Item) 단위로 ID와 태그 목록을 갖는 데이터 구조를 설계하고, 원클릭 삭제와 역색인 사전 뷰의 사용자 경험(UX) 와이어프레임을 기획했습니다.',
      highlights: [
        'Line Item 스키마 정의 (id, content, tags, timestamp)',
        '단일 라인 삭제(Single Line Deletion) 동작 흐름 구체화',
        '태그를 표제어로 전환하는 Dictionary Mode 인터페이스 기획',
      ],
    },
    {
      step: 'Step 03',
      title: 'AI 프롬프트 엔지니어링 제작',
      period: 'Phase 3 · Production',
      role: '100% 1인 전담 (AI 페어)',
      icon: Code2,
      badge: 'AI 페어링',
      summary:
        'Claude 무료 버전과 Chat GPT sol 5.6을 전략적으로 교차 활용하여 요구사항 명세, 컴포넌트 스캐폴딩, 상태 관리 로직, 라인 필터링 알고리즘을 프롬프트 주도 방식으로 개발했습니다.',
      highlights: [
        'Claude 무료 버전: 아키텍처 구조화 및 상태 흐름 프롬프트 작성',
        'Chat GPT sol 5.6: 세부 로직 및 인터랙티브 핸들러 보완',
        '프롬프트 컨트롤을 통해 코딩 전 과정을 혼자 이끄는 개발 역량 습득',
      ],
    },
    {
      step: 'Step 04',
      title: '기능 검증 및 단위 테스트',
      period: 'Phase 4 · Testing',
      role: '100% 1인 전담',
      icon: CheckCircle,
      badge: '품질 검증',
      summary:
        '특정 라인을 지웠을 때 인접 라인의 태그 및 순서가 훼손되지 않는지 불변성을 검증하고, 대량 태그 등록 시 실시간 필터링 성능과 에지 케이스를 철저히 점검했습니다.',
      highlights: [
        '단일 라인 삭제 시 사이드이펙트 격리 및 데이터 무결성 테스트',
        '복수 태그 교차 필터링 및 사전 뷰 인덱싱 속도 검증',
        '특수문자 태그 및 공백 입력 방어 로직 완료',
      ],
    },
    {
      step: 'Step 05',
      title: '포트폴리오 강의 수료 및 배포 준비',
      period: 'Phase 5 · Release',
      role: '100% 1인 전담',
      icon: Rocket,
      badge: '런칭 대기',
      summary:
        '개인용 앱 개발을 성공적으로 마무리했으며, 현재 수강 중인 포트폴리오 강의를 수료하는 즉시 정식 웹/앱 서비스로 퍼블릭 배포를 진행할 수 있도록 빌드 및 패키징 준비를 마쳤습니다.',
      highlights: [
        '개인 사용 목적에서 대외 포트폴리오 프로젝트로 완성도 고도화',
        '강의 커리큘럼 이수와 연계된 프로덕션 릴리즈 계획 수립',
        '실제 사용 가능한 반응형 단일 페이지 패키징 완료',
      ],
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
            <span>04. End-to-End Workflow</span>
            <span aria-hidden="true">·</span>
            <span>전 과정 1인 개발 프로세스</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            조사부터 기획, AI 제작, 테스트까지 <br />
            <span className="font-italic-accent text-indigo-400 font-normal">모든 과정을 1인</span>으로 완수한 여정
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            외부 인력이나 유료 도구 없이, AI 모델과의 정교한 프롬프트 대화를 통해
            하나의 완전한 어플리케이션을 단독으로 완성한 5단계 개발 파이프라인입니다.
          </p>
        </div>

        {/* Timeline Pipeline */}
        <div className="space-y-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
              >
                {/* Left Meta & Identity */}
                <div className="flex items-start gap-4 lg:w-1/3 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                      <span>{st.step}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400">{st.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-indigo-300 transition-colors">
                      {st.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{st.role}</span>
                    </div>
                  </div>
                </div>

                {/* Middle Description */}
                <div className="lg:w-5/12">
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {st.summary}
                  </p>
                </div>

                {/* Right Highlights */}
                <div className="lg:w-1/4 space-y-1.5 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                  {st.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-indigo-400 font-mono shrink-0">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Solo Engineer Commitment Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/30 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              1인 완주와 다음 단계: "강의 끝나면 배포할거야!"
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              아이디어 착안부터 기획, 프롬프트 엔지니어링, 기능 테스트까지 모든 공정을 혼자 전담했습니다.
              현재 수강 중인 포트폴리오 강의가 마무리되면 실 사용자 피드백을 수집할 정식 웹/앱 배포를 시작합니다.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/60">
              배포 준비 완료 (Ready for Launch)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
