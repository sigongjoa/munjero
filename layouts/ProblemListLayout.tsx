import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import QuizList from '@/components/QuizList';
import { quizzes } from '@/data/quizzes';
import { Quiz } from '@/data/quizzes'; // Import Quiz type for handleDownloadPreview
import { FilterContainer } from '@/components/Filter/FilterContainer';
import { useMediaQuery } from 'react-responsive';

// Helper function for rendering tags
const renderTags = (allTags: string[]) => {
  const MAX_VISIBLE_TAGS = 3;
  const visibleTags = allTags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagsCount = allTags.length - MAX_VISIBLE_TAGS;

  const getTagClass = (tag: string) => {
    switch (tag) {
      case "보통": return "bg-blue-100 text-blue-800";
      case "쉬움": return "bg-green-100 text-green-800";
      case "어려움": return "bg-red-100 text-red-800";
      case "국어": return "bg-orange-100 text-orange-800";
      case "과학": return "bg-green-100 text-green-800"; // Assuming green for science
      // Add more cases for other subjects/difficulties if needed
      default: return "bg-gray-200 text-gray-700"; // General topic
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
      {visibleTags.map((tag, index) => (
        <span key={index} className={`${getTagClass(tag)} px-2 py-1 rounded-full font-medium`}>
          {tag}
        </span>
      ))}
      {hiddenTagsCount > 0 && (
        <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full font-bold">
          +{hiddenTagsCount}
        </span>
      )}
    </div>
  );
};

export default function ProblemListLayout() {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });

  let variant: "modal" | "topbar" | "sidebar" = "sidebar";
  if (isMobile) variant = "modal";
  else if (isTablet) variant = "topbar";
  const navigate = useNavigate();

  const handleStartQuiz = (quizId: number) => {
    navigate(`/quiz/${quizId}`);
  };

  const handleDownloadPreview = (quiz: Quiz) => {
    if (quiz.fileUrl) {
      window.open(quiz.fileUrl, '_blank');
    } else {
      alert('다운로드할 파일이 없습니다.');
    }
  };

  return (
    <div className="flex">
      {variant === "sidebar" && <FilterContainer variant={variant} />}
      <div className="flex-1 p-4">
        {/* Main content container */}
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6">문제</h1> {/* Changed from "문제 리스트" to "문제" */}

          {/* Search bar and filter button for mobile/tablet */}
          {(variant === "modal" || variant === "topbar") && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">시험지 검색</h2>
              <div className="relative flex items-center">
                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"> search </span>
                <input className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="찾고 있는 시험지의 제목, 과목, 태그를 입력해보세요" type="text"/>
                {variant === "modal" && (
                  <div className="ml-2">
                    <FilterContainer variant={variant} />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Today's Problem section */}
          <div className="bg-purple-600 text-white p-4 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">오늘의 문제 </p>
                <p className="text-sm">원피스 드래곤 양육비는?</p>
              </div>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-semibold">도전하기</button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">전체 시험지</h2>
            {/* The filter button for modal variant is now rendered by FilterContainer */}
            {variant === "modal" && (
              // This div is just to align the filter button with the original HTML structure
              // The actual button is rendered by FilterContainer when variant is "modal"
              <div className="bg-gray-200 p-2 rounded-full">
                <span className="material-icons text-gray-600">filter_list</span>
              </div>
            )}
          </div>

          {variant === "topbar" && <FilterContainer variant={variant} />}

          {/* Problem list items */}
          <div className="space-y-6 mb-6">
            <QuizList
              quizzes={quizzes}
              onStartQuiz={handleStartQuiz}
              onDownloadPreview={handleDownloadPreview}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}