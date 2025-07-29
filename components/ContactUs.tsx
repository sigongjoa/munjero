
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
    const email = 'zeskywa499@gmail.com';
    const [copySuccess, setCopySuccess] = useState('');

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopySuccess('이메일 주소가 복사되었습니다.');
            setTimeout(() => setCopySuccess(''), 2000);
        }, () => {
            setCopySuccess('복사에 실패했습니다. 직접 복사해주세요.');
            setTimeout(() => setCopySuccess(''), 3000);
        });
    };

    const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#/';
    };

    return (
        <main className="mt-8 bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-md border border-gray-200 max-w-2xl mx-auto">
            <div className="text-left mb-8">
                <a href="#/" onClick={handleBack} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span>목록으로 돌아가기</span>
                </a>
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">문의하기</h2>
                <p className="text-gray-600 mb-8">
                    궁금한 점이나 서비스 개선을 위한 제안 사항이 있으시면 아래 이메일로 언제든지 연락주세요.
                </p>

                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-center justify-center mb-6">
                    <span className="text-lg font-mono text-gray-800 tracking-wide">{email}</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    <a
                        href={`mailto:${email}`}
                        className="w-full flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500"
                    >
                        <span className="material-symbols-outlined mr-2">email</span>
                        이메일 보내기
                    </a>
                    <button
                        onClick={handleCopy}
                        className="w-full flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-400"
                    >
                        <span className="material-symbols-outlined mr-2">content_copy</span>
                        주소 복사
                    </button>
                </div>
                {copySuccess && (
                    <p className="mt-6 text-sm text-green-600 transition-opacity duration-300">
                        {copySuccess}
                    </p>
                )}
            </div>
        </main>
    );
};

export default ContactUs;
