import React from 'react';

interface HeaderProps {
  totalCount: number;
}

const Header: React.FC<HeaderProps> = ({ totalCount }) => {
  return (
    <header className="text-center w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">문제로</h1>
        <p className="text-lg text-gray-600">생성된 시험지 목록입니다. (총 {totalCount}개)</p>
    </header>
  );
};

export default Header;