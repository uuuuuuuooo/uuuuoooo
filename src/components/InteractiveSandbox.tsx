import React, { useState } from 'react';
import { 
  Trash2, 
  Plus, 
  Tag, 
  Search, 
  BookMarked, 
  Filter, 
  RotateCcw, 
  Download, 
  Check, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { MemoLine } from '../types';

const PRESET_SCENARIOS: { name: string; description: string; lines: MemoLine[] }[] = [
  {
    name: '사전 구축 시나리오',
    description: '라인마다 태그를 달아 나만의 IT 기술 용어 사전을 만드는 워크플로우',
    lines: [
      {
        id: 'p1',
        content: '인버티드 인덱스: 키워드(태그)가 위치한 문장의 포인터를 역으로 매핑하는 검색 기법.',
        tags: ['자료구조', '검색엔진'],
        createdAt: '09:30',
      },
      {
        id: 'p2',
        content: '불변성(Immutability): 원본 상태를 직접 수정하지 않고 새 배열을 반환해 1줄 삭제의 사이드이펙트 차단.',
        tags: ['React', '개발'],
        createdAt: '10:15',
      },
      {
        id: 'p3',
        content: '프롬프트 체이닝: 복잡한 앱 개발 요구사항을 단계별로 쪼개어 AI에게 순차 전달하는 기법.',
        tags: ['클로드', 'AI프롬프트'],
        createdAt: '11:20',
      },
      {
        id: 'p4',
        content: '선택적 라인 소멸: 전체 파일을 지우지 않고 원하는 문장만 안전하게 데이터베이스에서 삭제.',
        tags: ['자료구조', '핵심기능'],
        createdAt: '13:00',
      },
    ],
  },
  {
    name: '1인 개발 회고 시나리오',
    description: '조사부터 기획, AI 페어 개발, 테스트, 배포 준비까지의 기록',
    lines: [
      {
        id: 'r1',
        content: '기존 메모앱은 왜 불편한가? 통째로 삭제하기 어렵고 메모 간 고립으로 인해 1회성에 그침.',
        tags: ['문제정의', '조사'],
        createdAt: '14:00',
      },
      {
        id: 'r2',
        content: 'Claude 무료 버전으로 컴포넌트 구조도와 줄 단위 태그 상태 트리 스캐폴딩.',
        tags: ['클로드', 'AI프롬프트'],
        createdAt: '15:10',
      },
      {
        id: 'r3',
        content: 'Chat GPT sol 5.6 모델로 단위 테스트 케이스 및 에지 케이스 예외 처리 작성.',
        tags: ['GPTsol', '테스트'],
        createdAt: '16:00',
      },
      {
        id: 'r4',
        content: '현재 수강 중인 포트폴리오 강의 수료 후 프로덕션 환경으로 정식 배포 예정!',
        tags: ['배포계획', '1인개발'],
        createdAt: '17:30',
      },
    ],
  },
];

export const InteractiveSandbox: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<number>(0);
  const [lines, setLines] = useState<MemoLine[]>(PRESET_SCENARIOS[0].lines);
  const [activeFilterTag, setActiveFilterTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newText, setNewText] = useState('');
  const [newTagsInput, setNewTagsInput] = useState('#새메모 #아이디어');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<'lines' | 'dictionary'>('lines');

  // Trigger temporary toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSelectScenario = (idx: number) => {
    setSelectedScenario(idx);
    setLines(PRESET_SCENARIOS[idx].lines);
    setActiveFilterTag(null);
    setSearchQuery('');
    showToast(`'${PRESET_SCENARIOS[idx].name}' 데이터가 로드되었습니다.`);
  };

  const handleAddLine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;

    const parsedTags = newTagsInput
      .split(' ')
      .map((t) => t.replace('#', '').trim())
      .filter(Boolean);

    const created: MemoLine = {
      id: `usr-${Date.now()}`,
      content: newText.trim(),
      tags: parsedTags.length > 0 ? parsedTags : ['일반'],
      createdAt: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    };

    setLines([created, ...lines]);
    setNewText('');
    showToast('새 문장이 등록되었습니다.');
  };

  const handleDeleteLine = (id: string, content: string) => {
    setLines(lines.filter((l) => l.id !== id));
    showToast(`"${content.slice(0, 15)}..." 라인이 영구 삭제되었습니다.`);
  };

  // Compute all unique tags
  const allUniqueTags = Array.from(new Set(lines.flatMap((l) => l.tags)));

  // Filter lines
  const filteredLines = lines.filter((l) => {
    const matchesTag = activeFilterTag ? l.tags.includes(activeFilterTag) : true;
    const matchesSearch = searchQuery
      ? l.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    return matchesTag && matchesSearch;
  });

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(lines, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'linedict-memo-export.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('JSON 파일로 메모 데이터가 내보내졌습니다.');
  };

  return (
    <section id="interactive-demo" className="py-24 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
            <span>03. Live Interactive Sandbox</span>
            <span aria-hidden="true">·</span>
            <span>라이브 샌드박스 체험</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            지금 브라우저에서 <br />
            <span className="font-italic-accent text-indigo-400 font-normal">직접 한 줄 삭제와 태그 사전</span>을 시험해보세요
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            프롬프트 엔지니어링으로 구현된 라인 태그 메모장의 모든 동작을 실시간으로 확인하실 수 있습니다.
            문장을 추가하고, 원하는 줄만 지워보고, 태그를 눌러 사전 형태로 모아보세요.
          </p>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl border border-indigo-500/50 shadow-2xl flex items-center gap-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Scenario Selectors */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono mr-2">사전 데이터 프리셋:</span>
            {PRESET_SCENARIOS.map((sc, idx) => (
              <button
                key={sc.name}
                onClick={() => handleSelectScenario(idx)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedScenario === idx
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {sc.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveMode('lines')}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  activeMode === 'lines' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                라인 리스트
              </button>
              <button
                onClick={() => setActiveMode('dictionary')}
                className={`px-3 py-1 rounded font-medium transition-all ${
                  activeMode === 'dictionary' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                지식 사전 뷰
              </button>
            </div>
            <button
              onClick={handleExportJson}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="데이터 JSON 내보내기"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sandbox Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Line Management & Editor (8 cols) */}
          <div className="lg:col-span-8 space-y-5">
            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="본문 키워드 또는 태그로 실시간 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 text-sm text-slate-200 placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {activeFilterTag && (
                <div className="flex items-center gap-1.5 bg-indigo-950/80 px-3 py-2 rounded-xl border border-indigo-700 text-xs text-indigo-300 shrink-0">
                  <span>선택된 태그: #{activeFilterTag}</span>
                  <button
                    onClick={() => setActiveFilterTag(null)}
                    className="ml-1 text-indigo-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleAddLine} className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span>신규 라인 등록</span>
                <span className="font-mono text-slate-500 text-[11px]">줄 단위 독립 저장</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="기억하고 싶은 문장을 입력하세요..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="flex-1 bg-slate-950 text-sm text-slate-200 placeholder-slate-500 px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="#태그1 #태그2"
                  value={newTagsInput}
                  onChange={(e) => setNewTagsInput(e.target.value)}
                  className="w-full sm:w-44 bg-slate-950 text-sm text-indigo-300 placeholder-slate-500 px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500 font-mono"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  문장 추가
                </button>
              </div>
            </form>

            {/* Lines List or Dictionary View */}
            {activeMode === 'lines' ? (
              <div className="space-y-3">
                {filteredLines.length === 0 ? (
                  <div className="p-12 text-center rounded-2xl bg-slate-900/30 border border-slate-800/80 text-slate-400">
                    일치하는 문장이 없습니다.
                    <button
                      onClick={() => {
                        setActiveFilterTag(null);
                        setSearchQuery('');
                      }}
                      className="block mx-auto mt-2 text-indigo-400 hover:underline text-xs"
                    >
                      모든 필터 초기화
                    </button>
                  </div>
                ) : (
                  filteredLines.map((line, idx) => (
                    <div
                      key={line.id}
                      className="p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start justify-between gap-4 group"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <span className="font-mono text-xs text-slate-500 pt-1 shrink-0 select-none">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="space-y-2 min-w-0 flex-1">
                          <p className="text-sm text-slate-200 leading-relaxed font-normal">
                            {line.content}
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {line.tags.map((tg) => (
                              <button
                                key={tg}
                                onClick={() => setActiveFilterTag(tg === activeFilterTag ? null : tg)}
                                className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                                  activeFilterTag === tg
                                    ? 'bg-indigo-600 text-white font-medium'
                                    : 'bg-slate-800 text-indigo-300 hover:bg-indigo-950/70 hover:text-white'
                                }`}
                              >
                                #{tg}
                              </button>
                            ))}
                            <span className="text-[11px] font-mono text-slate-500 ml-1">
                              {line.createdAt}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Line Deletion Button */}
                      <button
                        onClick={() => handleDeleteLine(line.id, line.content)}
                        className="p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 border border-transparent hover:border-rose-900/50 transition-all shrink-0"
                        title="이 한 줄만 즉시 삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            ) : (
              /* Dictionary Headword View */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allUniqueTags.map((t) => {
                  const items = lines.filter((l) => l.tags.includes(t));
                  return (
                    <div
                      key={t}
                      className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <div className="flex items-center gap-1.5 font-bold text-white text-base">
                          <span className="font-italic-accent text-indigo-400">#</span>
                          <span>{t}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                          {items.length}개 엔트리
                        </span>
                      </div>
                      <div className="space-y-2 text-xs text-slate-300">
                        {items.map((it) => (
                          <div key={it.id} className="p-2 rounded-lg bg-slate-950/60 border border-slate-850 leading-relaxed">
                            {it.content}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Statistics & Design Thesis Card (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Tag Cloud & Knowledge Cluster */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-indigo-400" />
                  누적 태그 클러스터
                </h3>
                <span className="text-xs font-mono text-slate-400">{allUniqueTags.length}개 등록</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                클릭하면 해당 태그가 달린 문장들만 즉시 필터링됩니다. 여러 메모장에 흩어진 지식이 하나의 주제로 수렴합니다.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {allUniqueTags.map((tg) => {
                  const count = lines.filter((l) => l.tags.includes(tg)).length;
                  return (
                    <button
                      key={tg}
                      onClick={() => setActiveFilterTag(activeFilterTag === tg ? null : tg)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-mono flex items-center gap-1 transition-colors ${
                        activeFilterTag === tg
                          ? 'bg-indigo-600 text-white font-medium shadow-sm'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <span>#{tg}</span>
                      <span className="text-[10px] opacity-70">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Architecture Metrics Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-indigo-950/20 to-slate-900/60 border border-indigo-900/40 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                LineDict 아키텍처 성과
              </h3>
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">데이터 조작 단위</span>
                  <span className="font-mono text-slate-200 font-semibold">Line Record (문장별 ID)</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">삭제 사이드이펙트</span>
                  <span className="font-mono text-emerald-400 font-semibold">0% (완전 격리)</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <span className="text-slate-400">사전 색인 복잡도</span>
                  <span className="font-mono text-indigo-300 font-semibold">O(1) 해시 룩업</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">1인 개발 기여도</span>
                  <span className="font-mono text-white font-semibold">100% (기획·개발·테스트)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('process');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>1인 개발 프로세스 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
