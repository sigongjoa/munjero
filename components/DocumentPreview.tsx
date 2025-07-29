
import React from 'react';

const DocumentPreview: React.FC = () => {
  const imageUrl = 'https://storage.googleapis.com/pr-newsroom-wp/1/2024/05/170923057-1-6.png';

  return (
    <div className="relative h-64 w-full p-6 flex items-end bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
       <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/50 to-transparent backdrop-blur-sm"></div>
       <div className="relative z-10">
         <span className="inline-block bg-teal-400/10 text-teal-300 text-xs font-medium px-3 py-1 rounded-full">
           미리보기
         </span>
         <h3 className="mt-2 text-2xl font-bold text-white">
           국어 비문학 시험지
         </h3>
       </div>
    </div>
  );
};

export default DocumentPreview;
