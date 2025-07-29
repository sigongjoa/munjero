
import React from 'react';

const Footer: React.FC = () => {

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    window.location.hash = path;
  };

  return (
    <footer className="w-full mt-16 py-8 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-4">
          <a href="#/terms" onClick={(e) => handleNavClick(e, '#/terms')} className="text-sm hover:text-gray-800 transition-colors">이용약관</a>
          <span className="text-gray-300">|</span>
          <a href="#/privacy" onClick={(e) => handleNavClick(e, '#/privacy')} className="text-sm hover:text-gray-800 transition-colors">개인정보처리방침</a>
          <span className="text-gray-300">|</span>
          <a href="#/contact" onClick={(e) => handleNavClick(e, '#/contact')} className="text-sm hover:text-gray-800 transition-colors">문의하기</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <a href="#/" onClick={(e) => handleNavClick(e, '#/')} className="hover:text-gray-800">문제로</a>. All Rights. Reserved.
        </p>
        <p className="text-xs mt-3 text-gray-400">
          본 사이트는 Google AdSense 광고를 포함할 수 있습니다. (광고 문의)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
