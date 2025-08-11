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
}

const Sidebar: React.FC<SidebarProps> = ({
  filters,
  onFilterChange,
  examTypes,
  subjects,
  difficulties,
  searchTerm,
  onSearchChange,
}) => {

  // This is a simplified count for display. A more robust solution would involve
  // passing down counts from the parent component.
  const getCountForSubject = (subject: string) => {
    if (subject === '전체') return 5; // Hardcoded for now
    return 1;
  }

  return (
    <aside className="lg:col-span-1 space-y-6">
      <div className="filter-section">
        <h2 className="filter-title">시험지 검색</h2>
        <div className="relative">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input 
            className="w-full pl-10 pr-4 py-2 search-input" 
            placeholder="시험지 검색..." 
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-section">
        <h2 className="filter-title">난이도</h2>
        <div className="flex flex-wrap gap-2">
          {difficulties.map(d => (
            <button 
              key={d} 
              onClick={() => onFilterChange('difficulty', d)}
              className={`filter-option ${filters.difficulty === d ? 'active' : ''}`}>
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h2 className="filter-title">시험</h2>
        <div className="flex flex-wrap gap-2">
          {examTypes.map(e => (
             <button 
              key={e} 
              onClick={() => onFilterChange('exam', e)}
              className={`filter-option ${filters.exam === e ? 'active' : ''}`}>
              {e}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h2 className="filter-title">과목</h2>
        <ul className="space-y-2">
          {subjects.map(s => (
            <li key={s}>
              <div 
                onClick={() => onFilterChange('subject', s)}
                className={`filter-option flex justify-between items-center ${filters.subject === s ? 'active' : ''}`}>
                {s} 
                <span className="text-xs bg-slate-200 text-slate-500 rounded-full px-2 py-0.5">{getCountForSubject(s)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
