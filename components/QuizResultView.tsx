import React from 'react';
import { Question } from '../types';

interface QuizResultViewProps {
  questions: Question[];
  userAnswers: (number | null)[];
  onRetry: () => void;
  onClose: () => void;
}

const QuizResultView: React.FC<QuizResultViewProps> = ({ questions, userAnswers, onRetry, onClose }) => {
  const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answerIndex).length;
  const score = Math.round((correctAnswers / questions.length) * 100);

  const getResultStyle = (question: Question, userAnswer: number | null, optionIndex: number) => {
    const isCorrectAnswer = question.answerIndex === optionIndex;
    const isSelected = userAnswer === optionIndex;

    if (isCorrectAnswer) return 'bg-green-100 border-green-500';
    if (isSelected && !isCorrectAnswer) return 'bg-red-100 border-red-500';
    return 'bg-white border-gray-300';
  };

  return (
    <div className="p-4 flex flex-col">
      <div className="text-center mb-8 flex-shrink-0">
        <h2 className="text-2xl font-bold text-gray-800">퀴즈 결과</h2>
        <p className="text-4xl font-bold text-blue-600 my-2">{score}점</p>
        <p className="text-gray-600">총 {questions.length}문제 중 {correctAnswers}문제를 맞혔습니다.</p>
      </div>

      <div className="space-y-6 mb-8">
        {questions.map((q, i) => (
          <div key={q.questionNumber} className="border rounded-lg p-4">
            <p className="font-semibold mb-2">문제 {q.questionNumber}. {userAnswers[i] === q.answerIndex ? <span className='text-green-600'> (정답)</span> : <span className='text-red-600'> (오답)</span>}</p>
            <p className="text-gray-600 whitespace-pre-wrap mb-4">{q.questionText}</p>
            <div className="bg-gray-100 p-3 rounded-md">
              <p className="font-bold text-gray-800">해설</p>
              <p className="text-gray-700 whitespace-pre-wrap">{q.explanation}</p>
            </div>
          </div>
        ))}
      </div>

      </div>
  );
};

export default QuizResultView;
