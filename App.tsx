import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProblemListPage from './pages/problem-list';
import QuizPage from './pages/quiz-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProblemListPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;