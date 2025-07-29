
import React from 'react';

const PrivacyPolicy: React.FC = () => {
    const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#/';
    };

    return (
        <main className="mt-8 bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto">
            <div className="mb-8">
                <a href="#/" onClick={handleBack} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span>목록으로 돌아가기</span>
                </a>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">개인정보처리방침</h2>
            <div className="space-y-8 text-gray-700 leading-relaxed">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">1. 총칙</h3>
                    <p>문제로(이하 '회사')는 이용자의 개인정보를 중요시하며, '정보통신망 이용촉진 및 정보보호'에 관한 법률을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">2. 수집하는 개인정보 항목</h3>
                    <p>회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                    <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                        <li>수집항목: 이름, 이메일 주소, 접속 로그, 쿠키, 접속 IP 정보</li>
                        <li>수집방법: 홈페이지(회원가입, 문의하기), 생성정보 수집 툴을 통한 수집</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">3. 개인정보의 수집 및 이용목적</h3>
                    <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                    <p>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스, 회원 관리, 마케팅 및 광고에 활용.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">4. 개인정보의 보유 및 이용기간</h3>
                    <p>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>
                </div>
                <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                    <p>본 개인정보처리방침의 최종 수정일은 {new Date().toLocaleDateString('ko-KR')}입니다.</p>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
