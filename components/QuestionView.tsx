import React from 'react';
import { Question } from '../types';

interface QuestionViewProps {
  question: Question;
  userAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  passage?: string;
}

const QuestionView: React.FC<QuestionViewProps> = ({ question, userAnswer, onSelectAnswer, passage }) => {
  return (
    <div className="p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">문제 {question.questionNumber}.</h3>
      <div>
        {passage && (
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mb-6 whitespace-pre-wrap">
            <p className="font-bold text-gray-700 mb-2">[제시문]</p>
            <p className="text-gray-700">{passage}</p>
          </div>
        )}
        <p className="text-gray-700 whitespace-pre-wrap mb-6">{question.questionText}</p>
        
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = userAnswer === index;
            const baseStyle = "flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200";
            const selectedStyle = "bg-blue-100 border-blue-500 ring-2 ring-blue-300";
            const hoverStyle = "hover:bg-gray-100 hover:border-gray-400";

            return (
              <div 
                key={index}
                onClick={() => onSelectAnswer(index)}
                className={`${baseStyle} ${isSelected ? selectedStyle : `bg-white border-gray-300 ${hoverStyle}`}`}>
                <span className={`w-6 h-6 flex items-center justify-center rounded-full mr-4 text-sm font-bold ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {index + 1}
                </span>
                <span className="flex-1 text-gray-800">{option}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionView;