
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import QuizList from './components/QuizList';
import Pagination from './components/Pagination';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import { quizzes as initialQuizzes, Quiz } from './data/quizzes';
import JSZip from 'jszip';

type Filters = {
  exam: string;
  subject: string;
};

const ITEMS_PER_PAGE = 5;

const App: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(initialQuizzes);
  const [filters, setFilters] = useState<Filters>({ exam: '전체', subject: '전체' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState(new Set<number>());
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
    setCurrentPage(1);
    setSelectedIds(new Set());
  };
  
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
    setSelectedIds(new Set());
  }
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedIds(new Set());
  }

  const filteredQuizzes = useMemo(() => 
    quizzes.filter(quiz => {
      const examMatch = filters.exam === '전체' || quiz.examType === filters.exam;
      const subjectMatch = filters.subject === '전체' || quiz.subject === filters.subject;
      const searchMatch = searchTerm === '' || quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
      return examMatch && subjectMatch && searchMatch;
    }),
    [quizzes, filters, searchTerm]
  );
  
  const paginatedQuizzes = useMemo(() => {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      return filteredQuizzes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredQuizzes, currentPage]);

  const currentIdsOnPage = useMemo(() => new Set(paginatedQuizzes.map(q => q.id)), [paginatedQuizzes]);
  const isAllSelectedOnPage = currentIdsOnPage.size > 0 && Array.from(currentIdsOnPage).every(id => selectedIds.has(id));

  const handleSelectQuiz = (id: number) => {
    const newSelectedIds = new Set(selectedIds);
    if (newSelectedIds.has(id)) {
      newSelectedIds.delete(id);
    } else {
      newSelectedIds.add(id);
    }
    setSelectedIds(newSelectedIds);
  };

  const handleSelectAll = () => {
    if (isAllSelectedOnPage) {
      const newSelectedIds = new Set(selectedIds);
      currentIdsOnPage.forEach(id => newSelectedIds.delete(id));
      setSelectedIds(newSelectedIds);
    } else {
      const newSelectedIds = new Set(selectedIds);
      currentIdsOnPage.forEach(id => newSelectedIds.add(id));
      setSelectedIds(newSelectedIds);
    }
  };

  const handleBulkDownload = async () => {
    const zip = new JSZip();
    const selectedQuizzes = quizzes.filter(q => selectedIds.has(q.id));

    for (const quiz of selectedQuizzes) {
      if (quiz.fileUrl) {
        try {
          const response = await fetch(quiz.fileUrl);
          const blob = await response.blob();
          const fileName = quiz.fileUrl.split('/').pop();
          if (fileName) {
            zip.file(fileName, blob);
          }
        } catch (error) {
          console.error(`Failed to fetch file: ${quiz.fileUrl}`, error);
        }
      }
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'quizzes.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  
  
  
  const examTypes = useMemo(() => ['전체', ...Array.from(new Set(initialQuizzes.map(q => q.examType)))], []);
  const subjects = useMemo(() => ['전체', ...Array.from(new Set(initialQuizzes.map(q => q.subject)))], []);

  const renderContent = () => {
    switch (route) {
      case '#/terms':
        return <TermsOfService />;
      case '#/privacy':
        return <PrivacyPolicy />;
      case '#/contact':
        return <ContactUs />;
      case '#/':
      default:
        if (route !== '#/') {
            // For any unknown hash, redirect to the main page.
            window.location.hash = '#/';
            // Render the main content immediately to prevent a blank page flash.
        }
        return (
          <div className="w-full flex flex-col lg:flex-row gap-8 mt-8">
            <Sidebar
              isOpen={isSidebarOpen}
              filters={filters}
              onFilterChange={handleFilterChange}
              examTypes={examTypes}
              subjects={subjects}
              onClose={() => setSidebarOpen(false)}
            />
            <main className="flex-1">
              <Toolbar 
                onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                selectedCount={selectedIds.size}
                isAllSelected={isAllSelectedOnPage}
                onSelectAll={handleSelectAll}
                onBulkDownload={handleBulkDownload}
              />
              <div className="mt-6">
                <QuizList 
                    quizzes={paginatedQuizzes}
                    selectedIds={selectedIds}
                    onSelectQuiz={handleSelectQuiz} 
                />
              </div>
              <Pagination 
                totalCount={filteredQuizzes.length}
                currentPage={currentPage}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={handlePageChange}
              />
            </main>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <div className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <Header totalCount={quizzes.length} />
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
