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
    "title": "샘플 퀴즈",
    "examType": "모의고사",
    "subject": "국어",
    "size": "0 KB",
    "date": "2025-07-29",
    "fileUrl": "/files/sample_quiz.pdf",
    "shortsLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "tags": [
      "쉬움",
      "개념"
    ]
  }
];