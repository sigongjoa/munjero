import React, { useState, useEffect } from 'react';
import { Quiz } from '../data/quizzes';

const getDifficultyColor = (difficulty: string | undefined) => {
    switch (difficulty) {
        case '어려움':
            return 'bg-red-50 text-red-500';
        case '보통':
            return 'bg-yellow-50 text-yellow-500';
        case '쉬움':
            return 'bg-green-50 text-green-500';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

const BOOKMARKS_STORAGE_KEY = 'bookmarkedQuizIds';

const QuizCard: React.FC<{ quiz: Quiz; isSelected: boolean; onSelect: () => void; onPreview: () => void; onStartQuiz: (quizId: number) => void; onDownloadPreview: (quiz: Quiz) => void; }> = ({ quiz, isSelected, onSelect, onPreview, onStartQuiz, onDownloadPreview }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_STORAGE_KEY) || '[]');
        setIsBookmarked(storedBookmarks.includes(quiz.id));
    }, [quiz.id]);

    const handleBookmarkToggle = () => {
        let storedBookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_STORAGE_KEY) || '[]');
        if (isBookmarked) {
            storedBookmarks = storedBookmarks.filter((id: number) => id !== quiz.id);
        } else {
            storedBookmarks.push(quiz.id);
        }
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(storedBookmarks));
        setIsBookmarked(!isBookmarked);
    };

    const getDifficultyColor = (difficulty: string | undefined) => {
        switch (difficulty) {
            case '어려움':
                return 'bg-red-100 text-red-800';
            case '보통':
                return 'bg-blue-100 text-blue-800';
            case '쉬움':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm flex gap-6">
            <div className="w-24 h-24 bg-blue-100 flex-shrink-0 rounded-lg flex items-center justify-center">
                <span className="material-icons text-blue-400 text-5xl">description</span>
            </div>
            <div className="flex-grow min-w-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 ellipsis-2">{quiz.title}</h3>
                <div className="flex flex-row flex-wrap gap-1 mb-3 items-center">
                    <span className={`${getDifficultyColor(quiz.difficulty)} text-xs font-medium px-2 py-0.5 rounded-full`}>{quiz.difficulty}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">{typeof quiz.subject === 'object' ? quiz.subject.main : quiz.subject}</span>
                    {quiz.tags && quiz.tags.slice(0, 2).map((tag, index) => ( // Show first 2 tags
                        <span key={index} className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                    {quiz.tags && quiz.tags.length > 2 && ( // If more than 2 tags, show +N
                        <span className="bg-gray-300 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">+{quiz.tags.length - 2}</span>
                    )}
                </div>
                
            </div>
            <div className="flex flex-col items-end gap-3 flex-shrink-0">
                <div className="flex items-center gap-3">
                    
                    <button onClick={() => onStartQuiz(quiz.id)} className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">문제 풀기</button>
                    {quiz.jsonUrl && (
                        <button
                            onClick={async () => {
                                if (!quiz.jsonUrl) {
                                    alert('쇼츠 링크가 없습니다.');
                                    return;
                                }
                                console.log('Fetching JSON from:', quiz.jsonUrl);
                                try {
                                    const response = await fetch(quiz.jsonUrl);
                                    if (!response.ok) {
                                        console.error(`HTTP error! Status: ${response.status}, StatusText: ${response.statusText}`);
                                        const contentType = response.headers.get('Content-Type');
                                        if (contentType && contentType.includes('text/html')) {
                                            const htmlContent = await response.text();
                                            console.error('Received HTML instead of JSON:', htmlContent);
                                            alert('퀴즈 데이터를 불러오는 데 실패했습니다. 서버에서 HTML 응답을 받았습니다. 콘솔을 확인하세요.');
                                        } else {
                                            alert(`퀴즈 데이터를 불러오는 데 실패했습니다. 상태 코드: ${response.status}`);
                                        }
                                        return;
                                    }
                                    const data = await response.json();
                                    if (data.short_link) {
                                        window.open(data.short_link, '_blank');
                                    } else {
                                        alert('JSON 파일에서 쇼츠 링크(short_link)를 찾을 수 없습니다. JSON 내용을 확인하세요.');
                                        console.log('Received JSON data:', data);
                                    }
                                } catch (error) {
                                    console.error("Failed to fetch or parse shorts link JSON:", error);
                                    if (error instanceof SyntaxError) {
                                        // If parsing failed, try to read as text to see the raw response
                                        try {
                                            const rawResponse = await response.text();
                                            console.error('Raw response that caused parsing error:', rawResponse);
                                            alert('퀴즈 데이터를 파싱하는 데 실패했습니다. 서버 응답을 콘솔에서 확인하세요.');
                                        } catch (readError) {
                                            console.error('Failed to read raw response:', readError);
                                            alert('퀴즈 데이터를 파싱하는 데 실패했습니다. 원시 응답을 읽을 수 없습니다.');
                                        }
                                    } else {
                                        alert('쇼츠 링크 데이터를 처리하는 데 실패했습니다. 콘솔을 확인하세요.');
                                    }
                                }
                            }}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600"
                        >
                            쇼츠 보러가기
                        </button>
                    )}
                    <div className="relative group">
                        <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setShowDropdown(!showDropdown)}>
                            <span className="material-icons text-gray-500">more_vert</span>
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 block">
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#" onClick={() => { onDownloadPreview(quiz); setShowDropdown(false); }}><span className="material-icons-outlined text-base mr-2 align-bottom">download</span>다운로드</a>
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#" onClick={() => { handleBookmarkToggle(); setShowDropdown(false); }}><span className="material-icons-outlined text-base mr-2 align-bottom">{isBookmarked ? 'bookmark' : 'bookmark_border'}</span>북마크</a>
                                
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;
