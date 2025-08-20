import React from 'react';

type Filters = {
  exam: string;
  subject: string;
  difficulty: string;
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: Filters;
  onFilterChange: (filterType: keyof Filters, value: string) => void;
  examTypes: string[];
  subjects: string[];
  difficulties: string[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isBookmarkFilterActive: boolean; // New prop
  onToggleBookmarkFilter: () => void; // New prop
}

const Sidebar: React.FC<SidebarProps> = ({
  filters,
  onFilterChange,
  examTypes,
  subjects,
  difficulties,
  searchTerm,
  onSearchChange,
  isBookmarkFilterActive,
  onToggleBookmarkFilter,
}) => {

  // This is a simplified count for display. A more robust solution would involve
  // passing down counts from the parent component.
  const getCountForSubject = (subject: string) => {
    if (subject === '전체') return 5; // Hardcoded for now
    return 1;
  }

  return (
    <aside className="lg:col-span-1 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">시험지 검색</h2>
        <div className="relative">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="시험지 검색..." type="text" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <span className="material-icons-outlined mr-2">bookmark</span>북마크
        </h2>
        <button 
          onClick={onToggleBookmarkFilter}
          className={`w-full py-2 rounded-lg text-sm ${isBookmarkFilterActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {isBookmarkFilterActive ? '북마크 해제' : '북마크된 시험지 보기'}
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <span className="material-icons-outlined mr-2">star_border</span>난이도
        </h2>
        <div className="flex space-x-2">
          {difficulties.map(d => (
            <button key={d} onClick={() => onFilterChange('difficulty', d)} className={`flex-1 py-2 rounded-lg text-sm ${filters.difficulty === d ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{d}</button>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <span className="material-icons-outlined mr-2">book</span>시험
        </h2>
        <div className="flex space-x-2 mb-4">
          {examTypes.map(e => (
            <button key={e} onClick={() => onFilterChange('exam', e)} className={`flex-1 py-2 rounded-lg text-sm ${filters.exam === e ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{e}</button>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <span className="material-icons-outlined mr-2">tag</span>과목
        </h2>
        <ul className="space-y-2">
          {subjects.map(s => (
            <li key={s}>
              <div onClick={() => onFilterChange('subject', s)} className={`flex justify-between items-center p-3 rounded-lg ${filters.subject === s ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}>
                <span>{s}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${filters.subject === s ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>{getCountForSubject(s)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
