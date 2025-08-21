

import React, { useState, useMemo, useEffect } from 'react';
import QuizList from './components/QuizList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import DocumentPreview from './components/DocumentPreview';
import { quizzes as initialQuizzes, Quiz } from './data/quizzes';
import Pagination from './components/Pagination';
import { QUIZZES_PER_PAGE } from './constants';
import QuizModal from './components/QuizModal';

// Filters type definition
interface Filters {
  exam: string;
  subject: string;
  difficulty: string;
}

const App: React.FC = () => {
  // The quizzes state now holds the master list, sorted by ID ascending.
  const [quizzes, setQuizzes] = useState<Quiz[]>(initialQuizzes);
  const [filters, setFilters] = useState<Filters>({ exam: '전체', subject: '전체', difficulty: '전체' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
  const [isBookmarkFilterActive, setIsBookmarkFilterActive] = useState(false); // New state for bookmark filter
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [selectedQuizForPreview, setSelectedQuizForPreview] = useState<Quiz | null>(null);
  const [quizModalJsonUrl, setQuizModalJsonUrl] = useState<string | null>(null);
  

  useEffect(() => {
    // The data is now static from the generated quizzes.ts, so no dynamic fetching is needed here.
    // The sorting logic is handled by reversing the array for display.
    const handleHashChange = () => {
        const hash = window.location.hash;
        setRoute(hash || '#/');
        
        const quizMatch = hash.match(/^#\/quiz\/(\d+)$/);
        const solveMatch = hash.match(/^#\/solve\/(\d+)$/);

        if (quizMatch) {
          const quizId = parseInt(quizMatch[1], 10);
          const quiz = quizzes.find(q => q.id === quizId);
          setSelectedQuizForPreview(quiz || null);
          setQuizModalJsonUrl(null); // Close solve modal if preview is opened
        } else if (solveMatch) {
          const quizId = parseInt(solveMatch[1], 10);
          const quiz = quizzes.find(q => q.id === quizId);
          if (quiz && quiz.jsonUrl) {
            setQuizModalJsonUrl(quiz.jsonUrl);
          } else {
            setQuizModalJsonUrl(null); // Close if quiz or jsonUrl not found
            window.location.hash = '#/'; // Redirect to home
          }
          setSelectedQuizForPreview(null); // Close preview modal if solve is opened
        } else if (hash === '#/' || hash === '') {
          setSelectedQuizForPreview(null);
          setQuizModalJsonUrl(null);
        }
        
        window.scrollTo(0, 0);
      };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [quizzes]); // Depend on quizzes state

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentPage(1);
  };
  
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToggleBookmarkFilter = () => {
    setIsBookmarkFilterActive(prev => !prev);
    setCurrentPage(1); // Reset page when filter changes
  };

  const filteredQuizzes = useMemo(() => {
    // Reverse the array for display (newest first) and then filter
    let currentQuizzes = quizzes.slice().reverse();

    if (isBookmarkFilterActive) {
      const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedQuizIds') || '[]');
      currentQuizzes = currentQuizzes.filter(quiz => storedBookmarks.includes(quiz.id));
    }

    return currentQuizzes.filter(quiz => {
      const examMatch = filters.exam === '전체' || quiz.examType === filters.exam;
      const subjectMatch = filters.subject === '전체' || quiz.subject === filters.subject;
      const difficultyMatch = filters.difficulty === '전체' || quiz.difficulty === filters.difficulty;
      const searchMatch = searchTerm === '' || quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
      return examMatch && subjectMatch && difficultyMatch && searchMatch;
    });
  }, [quizzes, filters, searchTerm, isBookmarkFilterActive]);

  const startIndex = (currentPage - 1) * QUIZZES_PER_PAGE;
  const currentQuizzesOnPage = filteredQuizzes.slice(startIndex, startIndex + QUIZZES_PER_PAGE);

  

  const handleStartQuiz = (quizId: number) => {
    window.location.hash = `#/solve/${quizId}`;
  };

  const handleDownloadPreview = (quiz: Quiz) => {
    setSelectedQuizForPreview(quiz);
    setTimeout(() => {
      window.location.hash = `#/quiz/${quiz.id}`;
    }, 50);
  };

  const AppHeader = () => (
    <header className="flex items-center mb-8">
      <span className="material-icons text-3xl text-gray-700">help_outline</span>
      <h1 className="text-3xl font-bold ml-2 text-gray-800">문제로</h1>
    </header>
  );

  const DailyQuizBanner: React.FC<{ onChallenge: (quizId: number) => void }> = ({ onChallenge }) => {
    if (quizzes.length === 0) return null; // Use the state quizzes
    const today = new Date();
    let seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    const dailyQuiz = quizzes[Math.floor(seededRandom() * quizzes.length)];

    return (
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-lg flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">오늘의 문제 ✨</h2>
          <p className="text-indigo-100">{dailyQuiz.title}</p>
        </div>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors" onClick={() => onChallenge(dailyQuiz.id)}>도전하기</button>
      </div>
    );
  };

  const renderMainContent = () => {
    return (
      <div className="flex gap-8">
        <aside className="w-1/4">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
            filters={filters}
            onFilterChange={handleFilterChange}
            examTypes={['전체', ...Array.from(new Set(quizzes.map(q => q.examType)))]}
            subjects={['전체', ...Array.from(new Set(quizzes.map(q => q.subject as string)))]}
            difficulties={['전체', '쉬움', '보통', '어려움']}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            isBookmarkFilterActive={isBookmarkFilterActive}
            onToggleBookmarkFilter={handleToggleBookmarkFilter}
          />
        </aside>
        <main className="w-3/4 space-y-6">
          <DailyQuizBanner onChallenge={handleStartQuiz} />
          <div className="space-y-4">
            <QuizList 
                quizzes={currentQuizzesOnPage}
                onStartQuiz={handleStartQuiz}
                onDownloadPreview={handleDownloadPreview}
            />
          </div>
          <Pagination 
            totalCount={filteredQuizzes.length} 
            currentPage={currentPage}
            itemsPerPage={QUIZZES_PER_PAGE} 
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    );
  };

  const renderContent = () => {
    switch (route) {
      case '#/terms': return <TermsOfService />;
      case '#/privacy': return <PrivacyPolicy />;
      case '#/contact': return <ContactUs />;
      default:
        return renderMainContent();
    }
  };

  return (
    <>
    
    <div className="container mx-auto p-8">
      <AppHeader />
      {renderContent()}
    </div>
    <Footer />
      
      {selectedQuizForPreview && (
        <DocumentPreview
          quiz={selectedQuizForPreview}
          onClose={() => {
            setSelectedQuizForPreview(null);
            window.location.hash = '#/';
          }}
        />
      )}

      {quizModalJsonUrl && (
        <QuizModal 
          jsonUrl={quizModalJsonUrl} 
          onClose={() => {
            setQuizModalJsonUrl(null);
            window.location.hash = '#/';
          }} 
        />
      )}
    </>
  );
};

export default App;

