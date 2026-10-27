import React, { useState } from 'react';
import { 
  Trash2, 
  Tag, 
  Hash, 
  BookMarked, 
  Check, 
  Plus, 
  Filter, 
  RotateCcw,
  Sparkles,
  Search,
  ExternalLink
} from 'lucide-react';
import { MemoLine } from '../types';

const INITIAL_MOCK_LINES: MemoLine[] = [
  {
    id: 'line-1',
    content: '기존 메모장은 통째로 지우거나 한 줄만 골라 지우는 게 너무 불편하다.',
    tags: ['문제정의', 'UX개선'],
    createdAt: '10:14',
    importance: 'high',
  },
  {
    id: 'line-2',
    content: '줄마다 고유 ID와 태그를 매핑하여 개별 삭제 및 라인 단위 쿼리를 가능하게 설계.',
    tags: ['데이터구조', '기획'],
    createdAt: '10:22',
    importance: 'normal',
  },
  {
    id: 'line-3',
    content: 'Claude 무료 버전으로 데이터 모델링 프롬프트 작성 후 React 상태 로직 스캐폴딩.',
    tags: ['클로드', 'AI프롬프트'],
    createdAt: '11:05',
    importance: 'high',
  },
  {
    id: 'line-4',
    content: 'Chat GPT sol 5.6으로 태그 역색인(Inverted Index) 사전화 알고리즘 검증 완료.',
    tags: ['GPTsol', '사전구축'],
    createdAt: '11:40',
    importance: 'normal',
  },
  {
    id: 'line-5',
    content: '포트폴리오 강의 수료 후 프로덕션 웹/앱으로 정식 배포 준비!',
    tags: ['배포계획', '1인개발'],
    createdAt: '13:10',
    importance: 'high',
  },
];

export const AppMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'dictionary' | 'relations'>('editor');
  const [lines, setLines] = useState<MemoLine[]>(INITIAL_MOCK_LINES);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [newLineText, setNewLineText] = useState('');
  const [newLineTags, setNewLineTags] = useState('#새기능');
  const [deletedCount, setDeletedCount] = useState(0);

  // Filtered lines based on tag selection
  const displayedLines = selectedTag
    ? lines.filter((line) => line.tags.includes(selectedTag))
    : lines;

  // Extract all unique tags
  const allTags = Array.from(new Set(lines.flatMap((line) => line.tags)));

  const handleDeleteLine = (id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
    setDeletedCount((c) => c + 1);
  };

  const handleAddLine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLineText.trim()) return;

    const parsedTags = newLineTags
      .split(' ')
      .map((t) => t.replace('#', '').trim())
      .filter(Boolean);

    const newLine: MemoLine = {
      id: `line-${Date.now()}`,
      content: newLineText.trim(),
      tags: parsedTags.length > 0 ? parsedTags : ['일반메모'],
      createdAt: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    };

    setLines((prev) => [newLine, ...prev]);
    setNewLineText('');
  };

  const handleReset = () => {
    setLines(INITIAL_MOCK_LINES);
    setSelectedTag(null);
    setDeletedCount(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl shadow-indigo-950/40 overflow-hidden backdrop-blur-xl">
      {/* Mac Window Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/90">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/90 border border-rose-600 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-amber-500/90 border border-amber-600 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/90 border border-emerald-600 shadow-sm" />
          <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            LineDict v1.0 · Interactive Preview Window
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-1 rounded font-medium transition-all ${
              activeTab === 'editor'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            라인 에디터
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`px-3 py-1 rounded font-medium transition-all ${
              activeTab === 'dictionary'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            사전(Dictionary) 뷰
          </button>
          <button
            onClick={() => setActiveTab('relations')}
            className={`px-3 py-1 rounded font-medium transition-all ${
              activeTab === 'relations'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            관계망 매트릭스
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2.5 py-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="초기 데이터 복원"
          >
            <RotateCcw className="w-3 h-3" />
            초기화
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-slate-900/60 to-[#0B0F17]">
        {/* Quick Tag Filter Bar */}
        <div className="mb-4 flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800/80">
          <span className="text-xs text-slate-400 flex items-center gap-1 shrink-0 font-medium mr-1">
            <Filter className="w-3 h-3 text-indigo-400" />
            태그 필터:
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              selectedTag === null
                ? 'bg-slate-700 text-white font-medium shadow-sm'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            전체 보기 ({lines.length})
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`text-xs px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                selectedTag === tag
                  ? 'bg-indigo-600 text-white font-medium shadow-sm'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Hash className="w-3 h-3 text-indigo-400" />
              {tag}
            </button>
          ))}
          {deletedCount > 0 && (
            <span className="ml-auto text-xs text-emerald-400/90 font-mono flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
              <Check className="w-3 h-3" />
              {deletedCount}개 라인 삭제됨 (무결성 유지)
            </span>
          )}
        </div>

        {/* Tab 1: Line Editor View */}
        {activeTab === 'editor' && (
          <div className="space-y-4">
            {/* Quick Add Form */}
            <form onSubmit={handleAddLine} className="flex flex-col sm:flex-row gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
              <input
                type="text"
                placeholder="새로운 메모 문장을 입력하세요 (예: 한 줄만 핀포인트로 삭제 가능)..."
                value={newLineText}
                onChange={(e) => setNewLineText(e.target.value)}
                className="flex-1 bg-slate-900/80 text-sm text-slate-100 placeholder-slate-500 px-3.5 py-2 rounded-lg border border-slate-750 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <input
                type="text"
                placeholder="#태그1 #태그2"
                value={newLineTags}
                onChange={(e) => setNewLineTags(e.target.value)}
                className="w-full sm:w-36 bg-slate-900/80 text-sm text-indigo-300 placeholder-slate-500 px-3.5 py-2 rounded-lg border border-slate-750 focus:outline-none focus:border-indigo-500 transition-colors font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                줄 추가
              </button>
            </form>

            {/* Lines List */}
            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
              {displayedLines.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  선택한 태그에 해당하는 줄이 없습니다.
                  <button
                    onClick={() => setSelectedTag(null)}
                    className="block mx-auto mt-2 text-indigo-400 hover:underline text-xs"
                  >
                    전체 줄 다시 보기
                  </button>
                </div>
              ) : (
                displayedLines.map((line, idx) => (
                  <div
                    key={line.id}
                    className="group flex items-start justify-between gap-3 p-3.5 bg-slate-950/40 hover:bg-slate-800/40 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <span className="font-mono text-xs text-slate-500 pt-0.5 shrink-0 select-none">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <div className="space-y-1.5 min-w-0 flex-1">
                        <p className="text-sm text-slate-200 leading-relaxed break-words font-medium">
                          {line.content}
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          {line.tags.map((t) => (
                            <button
                              key={t}
                              onClick={() => setSelectedTag(t)}
                              className="text-[11px] font-mono text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-900/80 px-2 py-0.5 rounded border border-indigo-800/50 transition-colors"
                            >
                              #{t}
                            </button>
                          ))}
                          <span className="text-slate-600 text-[11px] font-mono ml-1">
                            {line.createdAt}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Single Line Delete Action - The Core Innovation */}
                    <div className="flex items-center gap-1 shrink-0 pt-0.5">
                      <button
                        onClick={() => handleDeleteLine(line.id)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 border border-transparent hover:border-rose-900/50 transition-all opacity-80 group-hover:opacity-100"
                        title="이 한 줄만 즉시 삭제 (다른 줄 영향 없음)"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-800/60">
              <span>💡 문장 우측의 휴지통 아이콘을 누르면 기존 메모장처럼 전체를 잃지 않고 **해당 줄만 영구 삭제**됩니다.</span>
              <span className="font-mono text-slate-400">총 {lines.length}개 라인 보존 중</span>
            </div>
          </div>
        )}

        {/* Tab 2: Dictionary View */}
        {activeTab === 'dictionary' && (
          <div className="space-y-4">
            <div className="p-3 bg-indigo-950/30 rounded-xl border border-indigo-800/40 text-xs text-indigo-200 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-indigo-400 shrink-0" />
                각 줄에 달린 태그를 기준으로 자동 역색인(Inverted Index) 사전으로 변환된 뷰입니다.
              </span>
              <span className="font-mono text-indigo-300 text-[11px]">{allTags.length}개 표제어 등록</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
              {allTags.map((tag) => {
                const related = lines.filter((l) => l.tags.includes(tag));
                return (
                  <div key={tag} className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-slate-100 text-sm">
                        <span className="font-italic-accent text-indigo-400 text-base">§</span>
                        <span>{tag}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
                        {related.length}개 연관 문장
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300 border-l border-slate-800 pl-2.5">
                      {related.map((item) => (
                        <li key={item.id} className="leading-snug text-slate-300">
                          • {item.content}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Relationship Matrix View */}
        {activeTab === 'relations' && (
          <div className="space-y-4">
            <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                메모 줄 간의 관계성(Connectivity) 분석 구조
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                기존 메모장은 독립된 텍스트 덩어리로 1회성에 그쳤습니다. LineDict는 줄 단위 태그 벡터를 통해
                서로 다른 날짜나 맥락에서 작성된 메모라도 공통 키워드로 즉시 거미줄처럼 연결됩니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">총 기록된 문장</div>
                  <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">{lines.length} lines</div>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">형성된 관계 키워드</div>
                  <div className="text-xl font-bold font-mono text-indigo-400 mt-1 tabular-nums">{allTags.length} tags</div>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">메모 재활용율</div>
                  <div className="text-xl font-bold font-mono text-emerald-400 mt-1 tabular-nums">98.4%</div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-400 font-medium block mb-2">실시간 연관 태그 네트워크:</span>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((t, idx) => (
                    <div
                      key={t}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-750 text-xs text-slate-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span>{t}</span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        ({lines.filter(l => l.tags.includes(t)).length})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
