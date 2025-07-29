
import React from 'react';

const TermsOfService: React.FC = () => {
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">이용약관</h2>
            <div className="space-y-8 text-gray-700 leading-relaxed">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">제 1조 (목적)</h3>
                    <p>본 약관은 문제로 서비스(이하 '서비스')의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">제 2조 (정의)</h3>
                    <p>'서비스'라 함은 구현된 기능(AI 문제 생성 등)을 통해 회원이 시험지를 생성, 관리, 다운로드할 수 있도록 회사가 제공하는 제반 서비스를 의미합니다.</p>
                    <p>'회원'이라 함은 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">제 3조 (약관의 게시와 개정)</h3>
                    <p>회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 회사는 '약관의 규제에 관한 법률', '정보통신망 이용촉진 및 정보보호 등에 관한 법률' 등 관련 법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">제 4조 (서비스의 제공 및 변경)</h3>
                    <p>회사는 다음과 같은 업무를 수행합니다.</p>
                    <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                        <li>AI 기반 문제 생성 기능 제공</li>
                        <li>생성된 시험지 관리 및 보관 서비스</li>
                        <li>기타 회사가 정하는 업무</li>
                    </ul>
                    <p className="mt-2">회사는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.</p>
                </div>
                <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                    <p><strong>공고일자:</strong> {new Date().toLocaleDateString('ko-KR')}</p>
                    <p><strong>시행일자:</strong> {new Date().toLocaleDateString('ko-KR')}</p>
                </div>
            </div>
        </main>
    );
};

export default TermsOfService;
