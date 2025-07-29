
import React from 'react';

interface PaginationProps {
    totalCount: number;
    currentPage: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalCount, currentPage, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    if (totalPages <= 1) {
        return null; // Don't render pagination if there's only one page or less
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalCount);

    return (
        <nav aria-label="Table navigation" className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
            <span className="text-sm font-normal text-gray-600">
                Showing <span className="font-semibold text-gray-900">{startIndex}-{endIndex}</span> of <span className="font-semibold text-gray-900">{totalCount}</span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <button 
                        onClick={handlePrevious} 
                        disabled={currentPage === 1}
                        className="flex items-center justify-center h-8 px-3 ml-0 text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="material-symbols-outlined text-base">chevron_left</span>
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button 
                            onClick={() => onPageChange(number)}
                            className={`flex items-center justify-center h-8 px-3 border border-gray-300 ${currentPage === number ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button 
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center h-8 px-3 text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="material-symbols-outlined text-base">chevron_right</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
