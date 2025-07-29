import React from 'react';

const PremiumCard: React.FC = () => (
    <div className="relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col p-4 justify-center items-center text-center bg-gradient-to-br from-teal-50 to-blue-100 h-full">
        <span className="absolute top-3 right-3 text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">AD</span>
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-teal-600 text-4xl">auto_awesome</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">프리미엄 플랜으로 업그레이드</h3>
        <p className="text-sm text-gray-600 mb-4">광고 없이 더 많은 기능을 무제한으로 사용해 보세요! (광고 문의)</p>
        <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">자세히 보기</a>
    </div>
);

export default PremiumCard;