import React from 'react';
import { Quiz } from '../data/quizzes';

const getDifficultyColor = (difficulty: string | undefined) => {
    switch (difficulty) {
        case '어려움':
            return 'bg-red-50 text-red-500';
        case '보통':
            return 'bg-yellow-50 text-yellow-500';
        case '쉬움':
            return 'bg-green-50 text-green-500';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

const QuizCard: React.FC<{ quiz: Quiz; isSelected: boolean; onSelect: () => void; onPreview: () => void; onStartQuiz: (quizId: number) => void; onDownloadPreview: (quiz: Quiz) => void; }> = ({ quiz, isSelected, onSelect, onPreview, onStartQuiz, onDownloadPreview }) => {
    const uniqueTags = [...new Set([quiz.subject, ...(quiz.tags || [])])];

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center space-x-4">
            <input
                className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 ml-2"
                type="checkbox"
                checked={isSelected}
                onChange={onSelect}
                aria-label={`Select quiz: ${quiz.title}`}
            />
            <div className="flex-1">
                <div className="flex items-center gap-3">
                    {quiz.difficulty && (
                        <span className={`${getDifficultyColor(quiz.difficulty)} text-sm font-bold px-3 py-1 rounded-full`}>
                            {quiz.difficulty}
                        </span>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 truncate">{quiz.title}</h3>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-md">AI 생성</span>
                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-md">{quiz.subject}</span>
                    {uniqueTags.filter(tag => tag !== quiz.subject).slice(0, 1).map((tag) => (
                        <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-md">{tag}</span>
                    ))}
                    {uniqueTags.length > 2 && (
                        <button className="text-xs font-semibold text-gray-500 hover:text-gray-800">+{uniqueTags.length - 2} 더보기</button>
                    )}
                </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="flex items-center">
                    <span className="material-symbols-outlined text-base mr-1">draft</span>
                    <span>{quiz.size || 'N/A'}</span>
                </div>
                <div className="flex items-center">
                    <span className="material-symbols-outlined text-base mr-1">calendar_today</span>
                    <span>{quiz.date}</span>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => onStartQuiz(quiz.id)}
                    disabled={!quiz.jsonUrl}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    문제 풀기
                </button>
                <button
                    onClick={() => quiz.fileUrl && onDownloadPreview(quiz)}
                    disabled={!quiz.fileUrl}
                    className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    <span className="material-symbols-outlined">download</span>
                </button>
                {quiz.shortsLink && (
                    <button
                        onClick={() => window.open(quiz.shortsLink, '_blank')}
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                    >
                        <span className="material-symbols-outlined">slideshow</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizCard;
