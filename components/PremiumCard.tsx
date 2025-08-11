import React from 'react';

const PremiumCard: React.FC = () => (
    <div className="ad-banner h-full">
        <div className="ad-badge">AD</div>
        <div className="bg-cyan-200 p-4 rounded-full mb-6">
            <span className="material-icons text-4xl text-cyan-600">auto_awesome</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">프리미엄 플랜으로 업그레이드</h3>
        <p className="text-gray-600">더 많은 기능과 무제한 시험 생성을 경험해보세요.</p>
    </div>
);

export default PremiumCard;
