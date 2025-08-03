export interface Quiz {
  id: number;
  title: string;
  examType: string;
  subject: string;
  size?: string;
  date: string;
  fileUrl?: string;
  shortsLink?: string;
  tags?: string[];
}

export const quizzes: Quiz[] = [
  {
    "id": 1,
    "title": "도황 화법과 언어",
    "examType": "모의고사",
    "subject": "화법과 언어",
    "size": "2.8 MB",
    "date": "2025-08-03",
    "fileUrl": "/files/%EB%8F%84%ED%99%A9.pdf",
    "tags": [
      "화법과 언어",
      "도황",
      "공동체적 의견교환"
    ]
  }
];