import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import QuizList from './components/QuizList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import DocumentPreview from './components/DocumentPreview';
import PremiumCard from './components/PremiumCard';
import { quizzes as initialQuizzes, Quiz } from './data/quizzes';
import JSZip from 'jszip';
import Pagination from './components/Pagination';
import { QUIZZES_PER_PAGE } from './constants';

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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setRoute(hash || '#/');
      
      const quizMatch = hash.match(/^#\/quiz\/(\d+)$/);
      if (quizMatch) {
        const quizId = parseInt(quizMatch[1], 10);
        const quiz = initialQuizzes.find(q => q.id === quizId);
        setSelectedQuizForPreview(quiz || null);
      } else {
        setSelectedQuizForPreview(null);
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

  const AppHeader = () => (
    <>
        <div className="flex items-center mb-8">
            <span className="material-icons text-4xl text-blue-500 mr-3">quiz</span>
            <h1 className="text-3xl font-bold text-gray-800">문제로</h1>
        </div>
    </>
  );

  const renderMainContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-2">
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
      </div>
      <main className="lg:col-span-8">
        <QuizList 
            quizzes={currentQuizzes}
            selectedIds={selectedIds}
            onSelectQuiz={handleSelectQuiz} 
        />
        <Pagination 
          totalCount={filteredQuizzes.length} 
          currentPage={currentPage}
          itemsPerPage={QUIZZES_PER_PAGE} 
          onPageChange={handlePageChange}
        />
      </main>
      <aside className="hidden lg:block lg:col-span-2">
          <PremiumCard />
      </aside>
    </div>
  );

  const renderContent = () => {
    switch (route) {
      case '#/terms': return <TermsOfService />;
      case '#/privacy': return <PrivacyPolicy />;
      case '#/contact': return <ContactUs />;
      default:
        if (route.startsWith('#/quiz/')) {
          // Even when a quiz is selected, we show the main layout.
          // The preview is an overlay.
          return renderMainContent();
        }
        return renderMainContent();
    }
  };

  return (
    <>
    <style>{`
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f8f9fa;
        }
        .filter-section {
            background-color: white;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        .filter-title {
            font-weight: 700;
            color: #334155;
            margin-bottom: 16px;
        }
        .filter-option {
            @apply px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ease-in-out text-sm font-medium border border-slate-200 text-slate-500;
        }
        .filter-option.active {
            @apply bg-blue-500 text-white border-blue-500;
        }
        .filter-option:not(.active):hover {
            @apply bg-slate-100 border-slate-300;
        }
        .search-input {
            border: 1px solid #e2e8f0;
            border-radius: 8px;
        }
        .search-input:focus {
            outline: none;
            border-color: #38bdf8;
            box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
        }
        .card {
            background-color: white;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .card-tag {
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 10px;
            font-weight: 500;
        }
        .tag-gray { background-color: #f1f5f9; color: #475569; }
        .tag-purple { background-color: #f5f3ff; color: #7c3aed; }
        .tag-blue { background-color: #eff6ff; color: #3b82f6; }
        .tag-pink { background-color: #fdf2f8; color: #db2777; }
        .tag-green { background-color: #f0fdf4; color: #16a34a; }
        .download-button {
            @apply bg-sky-500 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out w-full;
        }
        .download-button:hover { @apply bg-sky-600 shadow-md; }
        .ad-banner {
            background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
            border-radius: 20px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }
        .ad-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: rgba(255, 255, 255, 0.5);
            color: #0ea5e9;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: bold;
        }
    `}</style>
    <div className="bg-gray-50 p-4 md:p-6">
      <div className="max-w-screen-2xl mx-auto">
        <AppHeader totalCount={filteredQuizzes.length} />
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
    </div>
    </>
  );
};

export default App;