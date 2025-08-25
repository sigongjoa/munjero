import React, { useState, useEffect } from 'react';
import { QuizData } from '../types';
import QuestionView from './QuestionView';
import QuizResultView from './QuizResultView';

interface QuizModalProps {
  jsonUrl: string;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ jsonUrl, onClose }) => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [quizState, setQuizState] = useState<'solving' | 'finished'>('solving');

  useEffect(() => {
    console.log('QuizModal received jsonUrl:', jsonUrl);
    const fetchQuizData = async () => {
      try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: QuizData = await response.json();
        console.log('Quiz data fetched successfully:', data);
        setQuizData(data);
        setUserAnswers(new Array(data.questionCount).fill(null));
      } catch (e) {
        setError('퀴즈 데이터를 불러오는 데 실패했습니다.');
        console.error('Error fetching quiz data:', e);
      } finally {
        setIsLoading(false);
      }
    };
    if (jsonUrl) {
      fetchQuizData();
    } else {
      setError('퀴즈 URL이 제공되지 않았습니다.');
      setIsLoading(false);
    }
  }, [jsonUrl]);

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (quizData && currentQuestionIndex < quizData.questionCount - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    setQuizState('finished');
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(quizData?.questionCount || 0).fill(null));
    setQuizState('solving');
  };

  const renderContent = () => {
    if (isLoading) return <div className="p-6 text-center">퀴즈를 불러오는 중...</div>;
    if (error) return <div className="p-6 text-center text-red-500">{error}</div>;
    if (!quizData) return <div className="p-6 text-center text-red-500">퀴즈 데이터를 불러오지 못했습니다.</div>;

    if (!quizData.questions || quizData.questions.length === 0) {
      return <div className="p-6 text-center text-red-500">표시할 문제가 없습니다.</div>;
    }

    if (quizState === 'finished') {
      return <QuizResultView questions={quizData.questions} userAnswers={userAnswers} onRetry={handleRetry} onClose={onClose} />;
    }

    const currentQuestion = quizData.questions[currentQuestionIndex];
    return (
      <>
        <div className="p-6 bg-gray-50 border-b">
          <h2 className="text-xl font-bold text-gray-800 truncate">{quizData.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{currentQuestionIndex + 1} / {quizData.questionCount}</p>
        </div>
        <div className="flex-grow overflow-y-auto">
            <QuestionView 
                question={currentQuestion} 
                userAnswer={userAnswers[currentQuestionIndex]}
                onSelectAnswer={handleSelectAnswer}
                passage={quizData.passage}
            />
        </div>
        <div className="p-4 border-t flex justify-between items-center">
          {quizState === 'solving' ? (
            <>
              <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50">이전</button>
              {
                currentQuestionIndex === quizData.questionCount - 1 ? (
                  <button onClick={handleFinish} className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">결과 보기</button>
                ) : (
                  <button onClick={handleNext} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">다음</button>
                )
              }
            </>
          ) : (
            <div className="flex justify-center w-full space-x-4 bg-red-200">
              <button onClick={handleRetry} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">다시 풀기</button>
              <button onClick={onClose} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors">닫기</button>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl h-full max-h-[90vh] flex flex-col">
        <div className="flex-shrink-0 p-4 border-b flex justify-end">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <span className="material-icons">close</span>
            </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;