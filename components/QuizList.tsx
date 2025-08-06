import React, { useState, useEffect } from 'react';
import { Quiz } from '../data/quizzes';
import QuizCard from './QuizCard';
import Pagination from './Pagination';
import Toolbar from './Toolbar'; // Import Toolbar
import { QUIZZES_PER_PAGE } from '../constants';

interface QuizListProps {
  quizzes: Quiz[];
  selectedIds: Set<number>;
  onSelectQuiz: (id: number) => void;
  // Props for Toolbar
  onToggleSidebar: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCount: number;
  isAllSelected: boolean;
  onSelectAll: () => void;
  onBulkDownload: () => Promise<void>;
}

const QuizList: React.FC<QuizListProps> = ({
  quizzes,
  selectedIds,
  onSelectQuiz,
  // Destructure Toolbar props
  onToggleSidebar,
  searchTerm,
  onSearchChange,
  selectedCount,
  isAllSelected,
  onSelectAll,
  onBulkDownload,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when quizzes prop changes (e.g., due to filtering)
  }, [quizzes]);

  if (quizzes.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-lg font-semibold">표시할 시험지가 없습니다.</p>
        <p className="mt-2">다른 필터를 선택하거나 검색어를 확인해 보세요.</p>
      </div>
    );
  }

  const handlePreview = (id: number) => {
    window.location.hash = `#/quiz/${id}`;
  };

  // Calculate the start and end index for quizzes on the current page
  const startIndex = (currentPage - 1) * QUIZZES_PER_PAGE;
  const endIndex = startIndex + QUIZZES_PER_PAGE;

  const currentQuizzes = quizzes.slice(startIndex, endIndex);

  const quizCards = currentQuizzes.map(quiz => 
    <QuizCard 
      key={quiz.id} 
      quiz={quiz}
      isSelected={selectedIds.has(quiz.id)}
      onSelect={() => onSelectQuiz(quiz.id)}
      onPreview={() => handlePreview(quiz.id)}
    />
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6"> {/* xl:grid-cols-2 for wider cards */}
        {quizCards}
      </div>
      {/* Toolbar moved here, below quiz cards and above pagination */}
      <div className="mt-6"> {/* Add margin top to separate from quiz cards */}
        <Toolbar
          onToggleSidebar={onToggleSidebar}
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          selectedCount={selectedCount}
          isAllSelected={isAllSelected}
          onSelectAll={onSelectAll}
          onBulkDownload={onBulkDownload}
        />
      </div>
      <Pagination 
        totalCount={quizzes.length} 
        currentPage={currentPage}
        itemsPerPage={QUIZZES_PER_PAGE} 
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default QuizList;
