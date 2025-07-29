
import React from 'react';
import { Quiz } from '../data/quizzes';

const CardActions: React.FC<{ fileUrl?: string; shortsLink?: string }> = ({ fileUrl, shortsLink }) => {
    return (
        <div className="p-4 bg-gray-100 border-t border-gray-200 rounded-b-xl flex items-center justify-between space-x-2">
            {shortsLink ? (
                 <a href={shortsLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm font-medium">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fillRule="evenodd"></path></svg>
                    <span>Shorts</span>
                </a>
            ) : <div />}
           {fileUrl ? (
                <div className="flex items-center space-x-2">
                    <a href={fileUrl} download className="font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm py-1 px-2 rounded-md hover:bg-gray-200">
                        <span className="material-symbols-outlined text-base">download</span>다운로드
                    </a>
                </div>
            ) : <div />}
        </div>
    );
};


const QuizCard: React.FC<{ quiz: Quiz; isSelected: boolean; onSelect: () => void; }> = ({ quiz, isSelected, onSelect }) => {
    return (
        <div className={`bg-white border rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex flex-col h-full ${isSelected ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200'}`}>
            <div className="p-4 flex-grow">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 pr-2">{quiz.title}</h3>
                    <input 
                        type="checkbox" 
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-1 flex-shrink-0"
                        checked={isSelected}
                        onChange={onSelect}
                        aria-label={`Select quiz: ${quiz.title}`}
                    />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{quiz.examType}</span>
                    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{quiz.subject}</span>
                    {quiz.tags && quiz.tags.map(tag => (
                        <span key={tag} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="mt-4 text-sm text-gray-600 space-y-2">
                    <p className="flex items-center"><span className="material-symbols-outlined text-base mr-2">folder_zip</span>{quiz.size || '-'}</p>
                    <p className="flex items-center"><span className="material-symbols-outlined text-base mr-2">calendar_today</span>{quiz.date}</p>
                </div>
            </div>
            <CardActions fileUrl={quiz.fileUrl} shortsLink={quiz.shortsLink} />
        </div>
    );
};

export default QuizCard;

