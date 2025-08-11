export interface Quiz {
  id: number;
  title: string;
  examType: string;
  subject: string;
  size?: string;
  date: string;
  fileUrl?: string;
  jsonUrl?: string;
  shortsLink?: string;
  tags?: string[];
  difficulty?: string; // Quiz 인터페이스에 difficulty 속성 추가
}

export const quizzes: Quiz[] = [
  {
    "id": 1,
    "title": "신창섭",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "98.1 KB",
    "date": "2025-08-11",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%8B%A0%EC%B0%BD%EC%84%AD_%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%8B%A0%EC%B0%BD%EC%84%AD_%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "신창섭의 건드림",
      "섬세한 소통",
      "상호작용적 소통",
      "비판적 사고",
      "자기 성찰"
    ],
    "difficulty": "어려움"
  },
  {
    "id": 2,
    "title": "도황 화법과 언어",
    "examType": "모의고사",
    "subject": "화법과 언어",
    "size": "2.8 MB",
    "date": "2025-08-03",
    "fileUrl": "/files/%EB%8F%84%ED%99%A9.pdf",
    "jsonUrl": "/files/%EB%8F%84%ED%99%A9.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "화법과 언어",
      "도황",
      "공동체적 의견교환"
    ],
    "difficulty": "보통"
  },
  {
    "id": 3,
    "title": "사회_원피스_루피로_보는_제왕학의_이해",
    "examType": "모의고사",
    "subject": "사회",
    "size": "6.1 MB",
    "date": "2025-08-04",
    "fileUrl": "/files/%EC%82%AC%ED%9A%8C_%EC%9B%90%ED%94%BC%EC%8A%A4_%EB%A3%A8%ED%94%BC%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%A0%9C%EC%99%95%ED%95%99%EC%9D%98_%EC%9D%B4%ED%95%B4.pdf",
    "jsonUrl": "/files/%EC%82%AC%ED%9A%8C_%EC%9B%90%ED%94%BC%EC%8A%A4_%EB%A3%A8%ED%94%BC%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%A0%9C%EC%99%95%ED%95%99%EC%9D%98_%EC%9D%B4%ED%95%B4.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "원피스",
      "루피",
      "제왕학"
    ],
    "difficulty": "보통"
  },
  {
    "id": 4,
    "title": "원피스 드래곤 양육비는?",
    "examType": "모의고사",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-05",
    "fileUrl": "/files/%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%96%91%EC%9C%A1%EB%B9%84.pdf",
    "jsonUrl": "/files/%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%96%91%EC%9C%A1%EB%B9%84.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "드래곤",
      "양육비",
      "원피스",
      "형법"
    ],
    "difficulty": "보통"
  },
  {
    "id": 5,
    "title": "과학 유전공학의 핵심 기술에 대한 이해",
    "examType": "모의고사",
    "subject": "과학",
    "size": "93.8 KB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B3%BC%ED%95%99_%EC%9B%90%ED%94%BC%EC%8A%A4_%EC%8A%A4%EB%A7%88%EC%9D%BC%EC%97%B4%EB%A7%A4%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%9C%A0%EC%A0%84%EA%B3%B5%ED%95%99%EC%9D%98_%ED%95%B5%EC%8B%AC_%EA%B8%B0%EC%88%A0%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9D%B4%ED%95%B4.pdf",
    "jsonUrl": "/files/%EA%B3%BC%ED%95%99_%EC%9B%90%ED%94%BC%EC%8A%A4_%EC%8A%A4%EB%A7%88%EC%9D%BC%EC%97%B4%EB%A7%A4%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%9C%A0%EC%A0%84%EA%B3%B5%ED%95%99%EC%9D%98_%ED%95%B5%EC%8B%AC_%EA%B8%B0%EC%88%A0%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9D%B4%ED%95%B4.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "유전공학",
      "생명과학",
      "스마일 열매"
    ],
    "difficulty": "보통"
  },
  {
    "id": 6,
    "title": "나태한 정의의 진짜 얼굴: 아오키지 쿠잔의 덕 윤리적 선택_쉬움",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "4.7 MB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%89%AC%EC%9B%80.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "아오키지 쿠잔",
      "덕 윤리",
      "나태한 정의",
      "유연한 도덕적 판단",
      "리더십"
    ],
    "difficulty": "쉬움"
  },
  {
    "id": 7,
    "title": "나태한 정의의 진짜 얼굴: 아오키지 쿠잔의 덕 윤리적 선택_어려움",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "8.4 MB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "덕 윤리",
      "아오키지 쿠잔",
      "나태한 정의",
      "윤리적 판단",
      "캐릭터 분석"
    ],
    "difficulty": "어려움"
  },
  {
    "id": 8,
    "title": "나태한 정의의 진짜 얼굴: 아오키지 쿠잔의 덕 윤리적 선택_중간",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "4.7 MB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%A4%91%EA%B0%84_%EC%84%A0%ED%83%9D.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%A4%91%EA%B0%84_%EC%84%A0%ED%83%9D.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "덕윤리",
      "아오키지 쿠잔",
      "나태한 정의",
      "유연한 도덕적 판단",
      "실천적 지혜"
    ],
    "difficulty": "중간"
  },
  {
    "id": 9,
    "title": "키자루의 행동과 정의관에 대한 윤리적 분석_쉬움",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%89%AC%EC%9B%80.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "키자루",
      "애매한정의",
      "의무론",
      "상황주의윤리",
      "원피스"
    ],
    "difficulty": "쉬움"
  },
  {
    "id": 10,
    "title": "키자루의 행동과 정의관에 대한 윤리적 분석_어려움",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "12.0 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "키자루",
      "애매한정의",
      "의무론",
      "상황주의윤리",
      "원피스"
    ],
    "difficulty": "어려움"
  },
  {
    "id": 11,
    "title": "키자루의 행동과 정의관에 대한 윤리적 분석_중간",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%A4%91%EA%B0%84.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%A4%91%EA%B0%84.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "키자루",
      "애매한 정의",
      "의무론",
      "상황주의 윤리",
      "원피스"
    ],
    "difficulty": "중간"
  },
  {
    "id": 12,
    "title": "사도 야스토라(차드)의 간지에서 웃음거리로의 전락 과정",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%82%AC%EB%8F%84_%EC%95%BC%EC%8A%A4%ED%86%A0%EB%9D%BC(%EC%B0%A8%EB%93%9C)%EC%9D%98_%EA%B0%84%EC%A7%80%EC%97%90%EC%84%9C_%EC%9B%83%EC%9D%8C%EA%B1%B0%EB%A6%AC%EB%A1%9C%EC%9D%98_%EC%A0%84%EB%9D%BD_%EA%B3%BC%EC%A0%95_%EC%A4%91%EA%B0%84.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%82%AC%EB%8F%84_%EC%95%BC%EC%8A%A4%ED%86%A0%EB%9D%BC(%EC%B0%A8%EB%93%9C)%EC%9D%98_%EA%B0%84%EC%A7%80%EC%97%90%EC%84%9C_%EC%9B%83%EC%9D%8C%EA%B1%B0%EB%A6%AC%EB%A1%9C%EC%9D%98_%EC%A0%84%EB%9D%BD_%EA%B3%BC%EC%A0%95_%EC%A4%91%EA%B0%84.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "사도 야스토라",
      "블리치",
      "캐릭터성 변화",
      "밈 문화",
      "파워 인플레"
    ],
    "difficulty": "중간"
  },
  {
    "id": 13,
    "title": "사도 야스토라(차드)의 간지에서 웃음거리로의 전락 과정",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%82%AC%EB%8F%84_%EC%95%BC%EC%8A%A4%ED%86%A0%EB%9D%BC(%EC%B0%A8%EB%93%9C)%EC%9D%98_%EA%B0%84%EC%A7%80%EC%97%90%EC%84%9C_%EC%9B%83%EC%9D%8C%EA%B1%B0%EB%A6%AC%EB%A1%9C%EC%9D%98_%EC%A0%84%EB%9D%BD_%EA%B3%BC%EC%A0%95_%EC%A4%91%EA%B0%84.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%82%AC%EB%8F%84_%EC%95%BC%EC%8A%A4%ED%86%A0%EB%9D%BC(%EC%B0%A8%EB%93%9C)%EC%9D%98_%EA%B0%84%EC%A7%80%EC%97%90%EC%84%9C_%EC%9B%83%EC%9D%8C%EA%B1%B0%EB%A6%AC%EB%A1%9C%EC%9D%98_%EC%A0%84%EB%9D%BD_%EA%B3%BC%EC%A0%95_%EC%A4%91%EA%B0%84.json",
    "shortsLink": "https://www.youtube.com/shorts/example",
    "tags": [
      "사도 야스토라",
      "블리치",
      "캐릭터성 변화",
      "밈 문화",
      "파워 인플레"
    ],
    "difficulty": "중간"
  }
];