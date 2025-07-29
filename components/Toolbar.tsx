
import React from 'react';

interface ToolbarProps {
    onToggleSidebar: () => void;
    searchTerm: string;
    onSearchChange: (term: string) => void;
    selectedCount: number;
    isAllSelected: boolean;
    onSelectAll: () => void;
    onBulkDownload: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ 
    onToggleSidebar, 
    searchTerm, 
    onSearchChange,
    selectedCount,
    isAllSelected,
    onSelectAll,
    onBulkDownload
}) => {
    const showBatchActions = selectedCount > 0;

    return (
        <div 
            className={`transition-all duration-300 rounded-lg border ${showBatchActions ? 'bg-blue-50 border-blue-200' : 'bg-transparent border-transparent'}`}
        >
            <div className="flex items-center justify-between gap-4 p-2">
                <div className="flex items-center gap-2 flex-grow">
                    <button onClick={onToggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-gray-200" aria-label="Toggle sidebar">
                        <span className="material-symbols-outlined text-gray-600">menu</span>
                    </button>
                    <input 
                        type="checkbox" 
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        aria-label="Select all items on this page"
                        checked={isAllSelected}
                        onChange={onSelectAll}
                    />

                    {showBatchActions ? (
                        <span className="font-semibold text-blue-800">{selectedCount}개 선택됨</span>
                    ) : (
                        <div className="relative w-full max-w-xs sm:max-w-sm">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="material-symbols-outlined text-gray-500">search</span>
                            </div>
                            <input 
                                type="text" 
                                id="table-search" 
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" 
                                placeholder="시험지 검색..."
                                value={searchTerm}
                                onChange={(e) => onSearchChange(e.target.value)}
                            />
                        </div>
                    )}
                </div>
                
                {showBatchActions && (
                     <button 
                        onClick={onBulkDownload}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                     >
                        <span className="material-symbols-outlined text-base">download</span>
                        <span>일괄 다운로드</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Toolbar;
