import React from 'react';
import { Quiz } from '../data/quizzes';
import QuizCard from './QuizCard';

interface QuizListProps {
  quizzes: Quiz[];
  selectedIds: Set<number>;
  onSelectQuiz: (id: number) => void;
  onStartQuiz: (quizId: number) => void;
  onDownloadPreview: (quiz: Quiz) => void;
}

const QuizList: React.FC<QuizListProps> = ({
  quizzes,
  selectedIds,
  onSelectQuiz,
  onStartQuiz,
  onDownloadPreview,
}) => {
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

  const quizCards = quizzes.map(quiz => 
    <QuizCard 
      key={quiz.id} 
      quiz={quiz}
      isSelected={selectedIds.has(quiz.id)}
      onSelect={() => onSelectQuiz(quiz.id)}
      onPreview={() => handlePreview(quiz.id)}
      onStartQuiz={() => onStartQuiz(quiz.id)}
      onDownloadPreview={onDownloadPreview}
    />
  );

  return (
    <>
      {quizCards}
    </>
  );
};

export default QuizList;
