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
  },
  {
    "id": 2,
    "title": "사회_원피스_루피로_보는_제왕학의_이해",
    "examType": "모의고사",
    "subject": "사회",
    "size": "6.1 MB",
    "date": "2025-08-04",
    "fileUrl": "/files/%EC%82%AC%ED%9A%8C_%EC%9B%90%ED%94%BC%EC%8A%A4_%EB%A3%A8%ED%94%BC%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%A0%9C%EC%99%95%ED%95%99%EC%9D%98_%EC%9D%B4%ED%95%B4.pdf",
    "tags": [
      "원피스",
      "루피",
      "제왕학"
    ]
  },
  {
    "id": 3,
    "title": "원피스 드래곤 양육비는?",
    "examType": "모의고사",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-05",
    "fileUrl": "/files/%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%96%91%EC%9C%A1%EB%B9%84.pdf",
    "tags": [
      "드래곤",
      "양육비",
      "원피스",
      "양육비",
      "형법"
    ]
  },
  {
    "id": 4,
    "title": "원피스 스마일열매로 보는 유전공학의 핵심 기술에 대한 이해",
    "examType": "모의고사",
    "subject": "과학",
    "size": "93.8 KB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B3%BC%ED%95%99_%EC%9B%90%ED%94%BC%EC%8A%A4_%EC%8A%A4%EB%A7%88%EC%9D%BC%EC%97%B4%EB%A7%A4%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%9C%A0%EC%A0%84%EA%B3%B5%ED%95%99%EC%9D%98_%ED%95%B5%EC%8B%AC_%EA%B8%B0%EC%88%A0%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9D%B4%ED%95%B4.pdf",
    "tags": [
      "유전공학",
      "생명과학",
      "스마일 열매"
    ]
  }
];