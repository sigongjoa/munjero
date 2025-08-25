import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizModal from '@/components/QuizModal';
import { quizzes } from '@/data/quizzes';

const QuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const quizId = Number(id);

  const quiz = quizzes.find(q => q.id === quizId);

  if (!quiz || !quiz.jsonUrl) {
    // Handle case where quiz is not found or no jsonUrl
    // Maybe redirect to a 404 page or the problem list
    navigate('/'); // Redirect to home if quiz not found
    return null;
  }

  const handleClose = () => {
    navigate('/'); // Go back to the problem list
  };

  return (
    <QuizModal jsonUrl={quiz.jsonUrl} onClose={handleClose} />
  );
};

export default QuizPage;