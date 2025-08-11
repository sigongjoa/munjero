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

const QuizCard: React.FC<{ quiz: Quiz; isSelected: boolean; onSelect: () => void; onPreview: () => void; onStartQuiz: (quizId: number) => void; onDownloadPreview: (quiz: Quiz) => void; }> = ({ quiz, isSelected, onSelect, onPreview, onStartQuiz, onDownloadPreview }) => {
    const uniqueTags = [...new Set([quiz.subject, ...(quiz.tags || [])])];

    return (
        <div className="card">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <h3
                        className="text-lg font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={onPreview}
                    >
                        {quiz.title}
                    </h3>
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
            <div className="mt-6 flex items-center">
                <button
                    onClick={() => onStartQuiz(quiz.id)}
                    disabled={!quiz.jsonUrl}
                    className="flex-1 mr-1 bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    문제 풀기
                </button>
                <button
                    onClick={() => quiz.fileUrl && onDownloadPreview(quiz)}
                    disabled={!quiz.fileUrl}
                    className="flex-1 download-button text-xs font-bold py-2 px-4"
                >
                    다운로드
                </button>
            </div>
        </div>
    );
};

export default QuizCard;
