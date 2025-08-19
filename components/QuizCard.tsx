import React from 'react';
import { Quiz } from '../data/quizzes';

const tagColors = [
    'tag-purple',
    'tag-blue',
    'tag-pink',
    'tag-green',
    'tag-gray',
];

const getTagColor = (index: number) => {
    return tagColors[index % tagColors.length];
};

const getDifficultyColor = (difficulty: string | undefined) => {
    switch (difficulty) {
        case '어려움':
            return 'bg-red-100 text-red-700';
        case '보통':
            return 'bg-yellow-100 text-yellow-700';
        case '쉬움':
            return 'bg-green-100 text-green-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

const QuizCard: React.FC<{ quiz: Quiz; isSelected: boolean; onSelect: () => void; onPreview: () => void; onStartQuiz: (quizId: number) => void; onDownloadPreview: (quiz: Quiz) => void; }> = ({ quiz, isSelected, onSelect, onPreview, onStartQuiz, onDownloadPreview }) => {
    const uniqueTags = [...new Set([quiz.subject, ...(quiz.tags || [])])];

    return (
        <div className="card">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start">
                        {quiz.difficulty && (
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full mr-3 mt-1 ${getDifficultyColor(quiz.difficulty)}`}>
                                {quiz.difficulty}
                            </span>
                        )}
                        <h3
                            className="text-lg font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors flex-1"
                            onClick={onPreview}
                        >
                            {quiz.title}
                        </h3>
                    </div>
                    <input
                        className="h-5 w-5 rounded text-blue-500 border-gray-300 focus:ring-blue-200"
                        type="checkbox"
                        checked={isSelected}
                        onChange={onSelect}
                        aria-label={`Select quiz: ${quiz.title}`}
                    />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="card-tag tag-gray">{quiz.examType}</span>
                    {uniqueTags.map((tag, index) => (
                        <span key={tag} className={`card-tag ${getTagColor(index)}`}>{tag}</span>
                    ))}
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-1">
                    <span className="material-icons text-base mr-2">description</span>
                    <span>{quiz.size || 'N/A'}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                    <span className="material-icons text-base mr-2">calendar_today</span>
                    <span>{quiz.date}</span>
                </div>
            </div>
            <div className="mt-6 flex flex-col space-y-2">
                <button
                    onClick={() => onStartQuiz(quiz.id)}
                    disabled={!quiz.jsonUrl}
                    className="w-full bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    문제 풀기
                </button>
                <button
                    onClick={() => quiz.fileUrl && onDownloadPreview(quiz)}
                    disabled={!quiz.fileUrl}
                    className="w-full download-button text-xs font-bold py-3 px-6"
                >
                    다운로드
                </button>
                {quiz.shortsLink && (
                    <button
                        onClick={() => window.open(quiz.shortsLink, '_blank')}
                        className="w-full bg-purple-500 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out"
                    >
                        쇼츠 보러가기
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizCard;
