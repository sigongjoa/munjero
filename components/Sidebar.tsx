import React from 'react';

type Filters = {
  exam: string;
  subject: string;
  difficulty: string;
};

interface FilterGroupProps {
  title: string;
  options: string[];
  activeOption: string;
  onSelect: (option: string) => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, options, activeOption, onSelect }) => (
  <div className="rounded-xl bg-white p-4 shadow-md">
    <div className="text-xs text-gray-500 mb-1">{title}</div>
    <ul className="space-y-1">
      {options.map(option => (
        <li key={option}>
          <button
            onClick={() => onSelect(option)}
            className={`block w-full text-left py-2 px-3 rounded-md text-sm transition-colors ${
              activeOption === option
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

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
  isOpen,
  onClose,
  filters,
  onFilterChange,
  examTypes,
  subjects,
  difficulties,
  searchTerm,
  onSearchChange,
}) => {
  // console.log("Current searchTerm:", searchTerm);

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      <aside
        className={`fixed lg:relative top-0 left-0 h-full lg:h-auto bg-gray-50 z-40 lg:z-auto transition-transform duration-300 ease-in-out
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                   lg:translate-x-0 lg:w-64 flex-shrink-0`}
      >
        <div className="space-y-4 lg:sticky top-8 p-4 lg:p-0">
          {/* Search Input Field */}
          <div className="rounded-xl bg-white p-4 shadow-md">
            <div className="text-xs text-gray-500 mb-1">시험지 검색</div>
            <div className="relative flex items-center"> 
              <span className="material-icons absolute left-3 text-gray-400 text-base" style={{ fontFamily: 'Material Symbols Outlined' }}>search</span> 
              <input
                type="text"
                placeholder="시험지 검색..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none leading-normal placeholder-gray-400 text-base"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          <FilterGroup
            title="난이도"
            options={difficulties}
            activeOption={filters.difficulty}
            onSelect={(option) => onFilterChange('difficulty', option)}
          />
          <FilterGroup
            title="시험"
            options={examTypes}
            activeOption={filters.exam}
            onSelect={(option) => onFilterChange('exam', option)}
          />
          <FilterGroup
            title="과목"
            options={subjects}
            activeOption={filters.subject}
            onSelect={(option) => onFilterChange('subject', option)}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;