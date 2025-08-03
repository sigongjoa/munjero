
import React, { useState, useEffect } from 'react';
import { Quiz } from '../data/quizzes';

interface DocumentPreviewProps {
  quiz: Quiz;
  onClose: () => void;
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ quiz, onClose }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  // Handle Escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Hide message after 2 seconds
    }, (err) => {
      console.error('Failed to copy URL: ', err);
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl h-full max-h-[90vh] flex flex-col overflow-hidden transform transition-all duration-300 ease-in-out scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="relative h-24 w-full p-6 flex items-end bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm border-b border-gray-200">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors z-20"
            aria-label="Close preview"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900">
              {quiz.title}
            </h3>
          </div>
        </div>

        <div className="flex-grow p-6 overflow-y-auto">
          {quiz.fileUrl && quiz.fileUrl.endsWith('.pdf') ? (
            <iframe src={quiz.fileUrl} className="w-full h-full border-0" title="PDF Preview"></iframe>
          ) : (
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center mt-4">
              <span className="text-gray-500">미리보기를 지원하지 않는 파일 형식입니다.</span>
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-end space-x-4">
          <button 
            onClick={handleShare}
            className="font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 text-sm py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span className="material-symbols-outlined text-base">share</span>
            <span>{copySuccess ? '복사 완료!' : '공유하기'}</span>
          </button>
          <a 
            href={quiz.fileUrl} 
            download 
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">download</span>
            <span>다운로드</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentPreview;
