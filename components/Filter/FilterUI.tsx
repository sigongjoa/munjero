import React from 'react';

interface FilterUIProps {
  variant: "modal" | "topbar" | "sidebar";
  filters: any; // TODO: Define a proper type for filters
  onChange: (newFilters: any) => void; // TODO: Define a proper type for newFilters
  isModalOpen?: boolean; // New prop for modal visibility
  onCloseModal?: () => void; // New prop to close modal
  onOpenModal?: () => void; // New prop to open modal (for the button in modal variant)
}

export function FilterUI({ variant, filters, onChange, isModalOpen, onCloseModal, onOpenModal }: FilterUIProps) {
  // Helper function to handle filter changes
  const handleFilterChange = (category: string, value: string) => {
    onChange({ ...filters, [category]: value });
  };

  if (variant === "modal") {
    return (
      <>
        {/* Button to open the modal, only visible in modal variant */}
        <button onClick={onOpenModal} className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold flex items-center space-x-2">
          <span className="material-icons">tune</span>
          <span>필터</span>
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50"> {/* Added z-50 for stacking context */}
            <div className="bg-white w-full rounded-t-2xl p-4 space-y-6 relative animate-slide-up">
              <style>
                {`
                  @keyframes slide-up {
                    from {
                      transform: translateY(100%);
                    }
                    to {
                      transform: translateY(0);
                    }
                  }
                  .animate-slide-up {
                    animation: slide-up 0.3s ease-out;
                  }
                `}
              </style>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">필터</h2>
                <button onClick={onCloseModal} className="text-gray-500"> {/* Changed <a> to <button> */}
                  <span className="material-icons">close</span>
                </button>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="material-icons mr-2">bookmark_border</span>북마크
                </h3>
                <div className="flex space-x-2">
                  <button
                    className={`flex-1 py-2 rounded-md ${filters.bookmark === 'all' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('bookmark', 'all')}
                  >
                    전체
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-md ${filters.bookmark === 'bookmarked' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('bookmark', 'bookmarked')}
                  >
                    북마크
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="material-icons mr-2">star_border</span>난이도
                </h3>
                <div className="flex space-x-2">
                  <button
                    className={`flex-1 py-2 rounded-md ${filters.difficulty === 'all' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('difficulty', 'all')}
                  >
                    전체
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-md ${filters.difficulty === 'easy' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('difficulty', 'easy')}
                  >
                    쉬움
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-md ${filters.difficulty === 'normal' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('difficulty', 'normal')}
                  >
                    보통
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-md ${filters.difficulty === 'hard' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('difficulty', 'hard')}
                  >
                    어려움
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="material-icons mr-2">inventory_2</span>시험 유형
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className={`py-2 rounded-md ${filters.quizType === 'all' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('quizType', 'all')}
                  >
                    전체
                  </button>
                  <button
                    className={`py-2 rounded-md ${filters.quizType === 'etc' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('quizType', 'etc')}
                  >
                    기타
                  </button>
                  <button
                    className={`py-2 rounded-md ${filters.quizType === 'ai_generated' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('quizType', 'ai_generated')}
                  >
                    AI 생성
                  </button>
                  <button
                    className={`py-2 rounded-md ${filters.quizType === 'ai_mock' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('quizType', 'ai_mock')}
                  >
                    AI 생성 모의고사
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="material-icons mr-2">tag</span>과목
                </h3>
                <div className="flex space-x-2">
                  <button
                    className={`flex-1 py-2 rounded-md ${filters.subject === 'all' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
                    onClick={() => handleFilterChange('subject', 'all')}
                  >
                    전체
                  </button>
                  {/* Other subject chips would go here dynamically */}
                </div>
              </div>
              <div className="sticky bottom-0 bg-white py-4 flex space-x-2">
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md font-semibold">초기화</button>
                <button className="flex-1 bg-purple-600 text-white py-3 rounded-md font-semibold">적용하기</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  if (variant === "topbar") {
    return (
      <div className="flex flex-wrap gap-4 p-4 bg-white shadow-md rounded-lg mb-4">
        {/* Bookmark Filter */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-600">bookmark_border</span>
          <select
            className="border rounded-md p-2"
            value={filters.bookmark}
            onChange={(e) => handleFilterChange('bookmark', e.target.value)}
          >
            <option value="all">북마크: 전체</option>
            <option value="bookmarked">북마크: 북마크</option>
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-600">star_border</span>
          <select
            className="border rounded-md p-2"
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
          >
            <option value="all">난이도: 전체</option>
            <option value="easy">난이도: 쉬움</option>
            <option value="normal">난이도: 보통</option>
            <option value="hard">난이도: 어려움</option>
          </select>
        </div>

        {/* Quiz Type Filter */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-600">inventory_2</span>
          <select
            className="border rounded-md p-2"
            value={filters.quizType}
            onChange={(e) => handleFilterChange('quizType', e.target.value)}
          >
            <option value="all">시험 유형: 전체</option>
            <option value="etc">시험 유형: 기타</option>
            <option value="ai_generated">시험 유형: AI 생성</option>
            <option value="ai_mock">시험 유형: AI 생성 모의고사</option>
          </select>
        </div>

        {/* Subject Filter */}
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-600">tag</span>
          <select
            className="border rounded-md p-2"
            value={filters.subject}
            onChange={(e) => handleFilterChange('subject', e.target.value)}
          >
            <option value="all">과목: 전체</option>
            {/* Add more subject options dynamically */}
            <option value="korean">국어</option>
            <option value="science">과학</option>
          </select>
        </div>
      </div>
    );
  }
  return (
    <aside className="w-48 p-4 bg-white shadow-md rounded-lg mr-4">
      <h3 className="text-lg font-semibold mb-4">필터</h3>

      {/* Bookmark Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2 flex items-center">
          <span className="material-icons mr-2">bookmark_border</span>북마크
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.bookmark === 'all' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('bookmark', 'all')}
          >
            전체
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.bookmark === 'bookmarked' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('bookmark', 'bookmarked')}
          >
            북마크
          </button>
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2 flex items-center">
          <span className="material-icons mr-2">star_border</span>난이도
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.difficulty === 'all' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('difficulty', 'all')}
          >
            전체
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.difficulty === 'easy' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('difficulty', 'easy')}
          >
            쉬움
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.difficulty === 'normal' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('difficulty', 'normal')}
          >
            보통
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.difficulty === 'hard' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('difficulty', 'hard')}
          >
            어려움
          </button>
        </div>
      </div>

      {/* Quiz Type Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2 flex items-center">
          <span className="material-icons mr-2">inventory_2</span>시험 유형
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.quizType === 'all' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('quizType', 'all')}
          >
            전체
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.quizType === 'etc' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('quizType', 'etc')}
          >
            기타
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.quizType === 'ai_generated' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('quizType', 'ai_generated')}
          >
            AI 생성
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.quizType === 'ai_mock' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('quizType', 'ai_mock')}
          >
            AI 생성 모의고사
          </button>
        </div>
      </div>

      {/* Subject Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2 flex items-center">
          <span className="material-icons mr-2">tag</span>과목
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.subject === 'all' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('subject', 'all')}
          >
            전체
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.subject === 'korean' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('subject', 'korean')}
          >
            국어
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm ${filters.subject === 'science' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 border'}`}
            onClick={() => handleFilterChange('subject', 'science')}
          >
            과학
          </button>
          {/* Add more subject options dynamically */}
        </div>
      </div>
    </aside>
  );
}
