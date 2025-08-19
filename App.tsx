import React, { useState, useMemo, useEffect } from 'react';
import QuizList from './components/QuizList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import DocumentPreview from './components/DocumentPreview';
import PremiumCard from './components/PremiumCard';
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
  const [quizzes] = useState<Quiz[]>(initialQuizzes);
  const [filters, setFilters] = useState<Filters>({ exam: '전체', subject: '전체', difficulty: '전체' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState(new Set<number>());
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [selectedQuizForPreview, setSelectedQuizForPreview] = useState<Quiz | null>(null);
  const [quizModalJsonUrl, setQuizModalJsonUrl] = useState<string | null>(null);
  

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setRoute(hash || '#/');
      
      const quizMatch = hash.match(/^#\/quiz\/(\d+)$/);
      const solveMatch = hash.match(/^#\/solve\/(\d+)$/);

      if (quizMatch) {
        const quizId = parseInt(quizMatch[1], 10);
        const quiz = initialQuizzes.find(q => q.id === quizId);
        setSelectedQuizForPreview(quiz || null);
        setQuizModalJsonUrl(null); // Close solve modal if preview is opened
      } else if (solveMatch) {
        const quizId = parseInt(solveMatch[1], 10);
        const quiz = initialQuizzes.find(q => q.id === quizId);
        if (quiz && quiz.jsonUrl) {
          setQuizModalJsonUrl(quiz.jsonUrl);
        } else {
          setQuizModalJsonUrl(null); // Close if quiz or jsonUrl not found
          window.location.hash = '#/'; // Redirect to home
        }
        setSelectedQuizForPreview(null); // Close preview modal if solve is opened
      } else {
        setSelectedQuizForPreview(null);
        setQuizModalJsonUrl(null);
      }
      
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const filteredQuizzes = useMemo(() => 
    quizzes.filter(quiz => {
      const examMatch = filters.exam === '전체' || quiz.examType === filters.exam;
      const subjectMatch = filters.subject === '전체' || quiz.subject === filters.subject;
      const difficultyMatch = filters.difficulty === '전체' || quiz.difficulty === filters.difficulty;
      const searchMatch = searchTerm === '' || quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
      return examMatch && subjectMatch && difficultyMatch && searchMatch;
    }),
    [quizzes, filters, searchTerm]
  );

  const startIndex = (currentPage - 1) * QUIZZES_PER_PAGE;
  const currentQuizzes = filteredQuizzes.slice(startIndex, startIndex + QUIZZES_PER_PAGE);

  const handleSelectQuiz = (id: number) => {
    const newSelectedIds = new Set(selectedIds);
    if (newSelectedIds.has(id)) {
      newSelectedIds.delete(id);
    } else {
      newSelectedIds.add(id);
    }
    setSelectedIds(newSelectedIds);
  };

  const handleStartQuiz = (quizId: number) => {
    window.location.hash = `#/solve/${quizId}`;
  };

  const handleDownloadPreview = (quiz: Quiz) => {
    window.location.hash = `#/quiz/${quiz.id}`;
  };

  const AppHeader = () => (
    <header className="mb-8 flex items-center">
        <span className="material-symbols-outlined text-blue-500 text-3xl mr-2">help</span>
        <h1 className="text-3xl font-bold">문제로</h1>
    </header>
  );

  const renderMainContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <aside className="col-span-1 space-y-6">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          filters={filters}
          onFilterChange={handleFilterChange}
          examTypes={['전체', ...Array.from(new Set(initialQuizzes.map(q => q.examType)))]}
          subjects={['전체', ...Array.from(new Set(initialQuizzes.map(q => q.subject)))]}
          difficulties={['전체', '쉬움', '보통', '어려움']}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      </aside>
      <main className="col-span-1 lg:col-span-3 flex flex-col">
        
        <div className="space-y-4">
          <QuizList 
              quizzes={currentQuizzes}
              selectedIds={selectedIds}
              onSelectQuiz={handleSelectQuiz} 
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
      <div className="hidden lg:block lg:col-span-1">
          <PremiumCard />
      </div>
    </div>
  );

  const renderContent = () => {
    switch (route) {
      case '#/terms': return <TermsOfService />;
      case '#/privacy': return <PrivacyPolicy />;
      case '#/contact': return <ContactUs />;
      default:
        if (route.startsWith('#/quiz/')) {
          return renderMainContent();
        }
        return renderMainContent();
    }
  };

  return (
    <>
    <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }
    `}</style>
    <div class="container mx-auto p-8">
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