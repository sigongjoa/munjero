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
    "title": "도황 화법과 언어",
    "examType": "기타",
    "subject": "화법과 언어",
    "size": "2.8 MB",
    "date": "2025-08-03",
    "fileUrl": "/files/%EB%8F%84%ED%99%A9.pdf",
    "jsonUrl": "/files/%EB%8F%84%ED%99%A9.json",
    "tags": [
      "화법과 언어",
      "도황",
      "공동체적 의견교환"
    ],
    "difficulty": "보통"
  },
  {
    "id": 2,
    "title": "사회_원피스_루피로_보는_제왕학의_이해",
    "examType": "기타",
    "subject": "사회",
    "size": "6.1 MB",
    "date": "2025-08-04",
    "fileUrl": "/files/%EC%82%AC%ED%9A%8C_%EC%9B%90%ED%94%BC%EC%8A%A4_%EB%A3%A8%ED%94%BC%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%A0%9C%EC%99%95%ED%95%99%EC%9D%98_%EC%9D%B4%ED%95%B4.pdf",
    "jsonUrl": "/files/%EC%82%AC%ED%9A%8C_%EC%9B%90%ED%94%BC%EC%8A%A4_%EB%A3%A8%ED%94%BC%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%A0%9C%EC%99%95%ED%95%99%EC%9D%98_%EC%9D%B4%ED%95%B4.json",
    "tags": [
      "원피스",
      "루피",
      "제왕학"
    ],
    "difficulty": "보통"
  },
  {
    "id": 3,
    "title": "원피스 드래곤 양육비는?",
    "examType": "기타",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-05",
    "fileUrl": "/files/%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%96%91%EC%9C%A1%EB%B9%84.pdf",
    "jsonUrl": "/files/%EB%93%9C%EB%9E%98%EA%B3%A4%20%EC%96%91%EC%9C%A1%EB%B9%84.json",
    "tags": [
      "드래곤",
      "양육비",
      "원피스",
      "형법"
    ],
    "difficulty": "어려움"
  },
  {
    "id": 4,
    "title": "과학 유전공학의 핵심 기술에 대한 이해",
    "examType": "기타",
    "subject": "과학",
    "size": "93.8 KB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B3%BC%ED%95%99_%EC%9B%90%ED%94%BC%EC%8A%A4_%EC%8A%A4%EB%A7%88%EC%9D%BC%EC%97%B4%EB%A7%A4%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%9C%A0%EC%A0%84%EA%B3%B5%ED%95%99%EC%9D%98_%ED%95%B5%EC%8B%AC_%EA%B8%B0%EC%88%A0%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9D%B4%ED%95%B4.pdf",
    "jsonUrl": "/files/%EA%B3%BC%ED%95%99_%EC%9B%90%ED%94%BC%EC%8A%A4_%EC%8A%A4%EB%A7%88%EC%9D%BC%EC%97%B4%EB%A7%A4%EB%A1%9C_%EB%B3%B4%EB%8A%94_%EC%9C%A0%EC%A0%84%EA%B3%B5%ED%95%99%EC%9D%98_%ED%95%B5%EC%8B%AC_%EA%B8%B0%EC%88%A0%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9D%B4%ED%95%B4.json",
    "tags": [
      "유전공학",
      "생명과학",
      "스마일 열매"
    ],
    "difficulty": "보통"
  },
  {
    "id": 5,
    "title": "나태한 정의의 진짜 얼굴: 아오키지 쿠잔의 덕 윤리적 선택_쉬움",
    "examType": "기타",
    "subject": "국어",
    "size": "4.7 MB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%89%AC%EC%9B%80.json",
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
    "id": 6,
    "title": "나태한 정의의 진짜 얼굴: 아오키지 쿠잔의 덕 윤리적 선택_어려움",
    "examType": "기타",
    "subject": "국어",
    "size": "8.4 MB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%96%B4%EB%A0%A4%EC%9B%80.json",
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
    "id": 7,
    "title": "나태한 정의의 진짜 얼굴: 아오키지 쿠잔의 덕 윤리적 선택_중간",
    "examType": "기타",
    "subject": "국어",
    "size": "4.7 MB",
    "date": "2025-08-06",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%A4%91%EA%B0%84_%EC%84%A0%ED%83%9D.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%82%98%ED%83%9C%ED%95%9C_%EC%A0%95%EC%9D%98%EC%9D%98_%EC%A7%84%EC%A7%9C_%EC%96%BC%EA%B5%B4_%EC%95%84%EC%98%A4%ED%82%A4%EC%A7%80_%EC%BF%A0%EC%9E%94%EC%9D%98_%EB%8D%95_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EC%84%A0%ED%83%9D_%EC%A4%91%EA%B0%84_%EC%84%A0%ED%83%9D.json",
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
    "id": 8,
    "title": "키자루의 행동과 정의관에 대한 윤리적 분석_쉬움",
    "examType": "기타",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%89%AC%EC%9B%80.json",
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
    "id": 9,
    "title": "키자루의 행동과 정의관에 대한 윤리적 분석_어려움",
    "examType": "기타",
    "subject": "국어",
    "size": "12.0 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%96%B4%EB%A0%A4%EC%9B%80.json",
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
    "id": 10,
    "title": "키자루의 행동과 정의관에 대한 윤리적 분석_중간",
    "examType": "기타",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%A4%91%EA%B0%84.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%ED%82%A4%EC%9E%90%EB%A3%A8%EC%9D%98_%ED%96%89%EB%8F%99%EA%B3%BC_%EC%A0%95%EC%9D%98%EA%B4%80%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9C%A4%EB%A6%AC%EC%A0%81_%EB%B6%84%EC%84%9D_%EC%A4%91%EA%B0%84.json",
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
    "id": 11,
    "title": "사도 야스토라(차드)의 간지에서 웃음거리로의 전락 과정",
    "examType": "AI 생성 모의고사",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-08",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%82%AC%EB%8F%84_%EC%95%BC%EC%8A%A4%ED%86%A0%EB%9D%BC(%EC%B0%A8%EB%93%9C)%EC%9D%98_%EA%B0%84%EC%A7%80%EC%97%90%EC%84%9C_%EC%9B%83%EC%9D%8C%EA%B1%B0%EB%A6%AC%EB%A1%9C%EC%9D%98_%EC%A0%84%EB%9D%BD_%EA%B3%BC%EC%A0%95_%EC%A4%91%EA%B0%84.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%82%AC%EB%8F%84_%EC%95%BC%EC%8A%A4%ED%86%A0%EB%9D%BC(%EC%B0%A8%EB%93%9C)%EC%9D%98_%EA%B0%84%EC%A7%80%EC%97%90%EC%84%9C_%EC%9B%83%EC%9D%8C%EA%B1%B0%EB%A6%AC%EB%A1%9C%EC%9D%98_%EC%A0%84%EB%9D%BD_%EA%B3%BC%EC%A0%95_%EC%A4%91%EA%B0%84.json",
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
    "id": 12,
    "title": "군주론의 입장에서 아카이누를 바라본다면?",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-11",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EA%B5%B0%EC%A3%BC%EB%A1%A0%EC%9D%98_%EC%9E%85%EC%9E%A5%EC%97%90%EC%84%9C_%EC%95%84%EC%B9%B4%EC%9D%B4%EB%88%84%EB%A5%BC_%EB%B0%94%EB%9D%BC%EB%B3%B8%EB%8B%A4%EB%A9%B4_%EC%A4%91%EA%B0%84.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EA%B5%B0%EC%A3%BC%EB%A1%A0%EC%9D%98_%EC%9E%85%EC%9E%A5%EC%97%90%EC%84%9C_%EC%95%84%EC%B9%B4%EC%9D%B4%EB%88%84%EB%A5%BC_%EB%B0%94%EB%9D%BC%EB%B3%B8%EB%8B%A4%EB%A9%B4_%EC%A4%91%EA%B0%84.json",
    "tags": [
      "군주론",
      "마키아벨리",
      "아카이누",
      "통치술",
      "공포심유발"
    ],
    "difficulty": "보통"
  },
  {
    "id": 13,
    "title": "마키아벨리적 관점에서 타노스를 심층적으로 분석",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-12",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%A7%88%ED%82%A4%EC%95%84%EB%B2%A8%EB%A6%AC%EC%A0%81_%EA%B4%80%EC%A0%90%EC%97%90%EC%84%9C_%ED%83%80%EB%85%B8%EC%8A%A4%EB%A5%BC_%EC%8B%AC%EC%B8%B5%EC%A0%81%EC%9C%BC%EB%A1%9C_%EB%B6%84%EC%84%9D.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%A7%88%ED%82%A4%EC%95%84%EB%B2%A8%EB%A6%AC%EC%A0%81_%EA%B4%80%EC%A0%90%EC%97%90%EC%84%9C_%ED%83%80%EB%85%B8%EC%8A%A4%EB%A5%BC_%EC%8B%AC%EC%B8%B5%EC%A0%81%EC%9C%BC%EB%A1%9C_%EB%B6%84%EC%84%9D.json",
    "tags": [
      "마키아벨리",
      "타노스",
      "군주론",
      "정복자",
      "군주"
    ],
    "difficulty": "보통"
  },
  {
    "id": 14,
    "title": "지식재산권과 상표권 침해 심층 분석: 빙그레 '바나나맛 우유' 분쟁 사례를 중심으로",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-13",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EA%B3%BC_%EC%83%81%ED%91%9C%EA%B6%8C_%EC%B9%A8%ED%95%B4_%EC%8B%AC%EC%B8%B5_%EB%B6%84%EC%84%9D_%EB%B9%99%EA%B7%B8%EB%A0%88_'%EB%B0%94%EB%82%98%EB%82%98%EB%A7%9B_%EC%9A%B0%EC%9C%A0'_%EB%B6%84%EC%9F%81_%EC%82%AC%EB%A1%80%EB%A5%BC_%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EA%B3%BC_%EC%83%81%ED%91%9C%EA%B6%8C_%EC%B9%A8%ED%95%B4_%EC%8B%AC%EC%B8%B5_%EB%B6%84%EC%84%9D_%EB%B9%99%EA%B7%B8%EB%A0%88_'%EB%B0%94%EB%82%98%EB%82%98%EB%A7%9B_%EC%9A%B0%EC%9C%A0'_%EB%B6%84%EC%9F%81_%EC%82%AC%EB%A1%80%EB%A5%BC_%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C_%EC%89%AC%EC%9B%80.json",
    "tags": [
      "지식재산권",
      "상표권",
      "바나나맛우유",
      "상표침해",
      "요부관찰"
    ],
    "difficulty": "쉬움"
  },
  {
    "id": 15,
    "title": "지식재산권과 상표권 침해 심층 분석: 빙그레 '바나나맛 우유' 분쟁 사례를 중심으로",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "4.1 MB",
    "date": "2025-08-13",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EA%B3%BC_%EC%83%81%ED%91%9C%EA%B6%8C_%EC%B9%A8%ED%95%B4_%EC%8B%AC%EC%B8%B5_%EB%B6%84%EC%84%9D_%EB%B9%99%EA%B7%B8%EB%A0%88_'%EB%B0%94%EB%82%98%EB%82%98%EB%A7%9B_%EC%9A%B0%EC%9C%A0'_%EB%B6%84%EC%9F%81_%EC%82%AC%EB%A1%80%EB%A5%BC_%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C_%EB%B3%B4%ED%86%B5.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EA%B3%BC_%EC%83%81%ED%91%9C%EA%B6%8C_%EC%B9%A8%ED%95%B4_%EC%8B%AC%EC%B8%B5_%EB%B6%84%EC%84%9D_%EB%B9%99%EA%B7%B8%EB%A0%88_'%EB%B0%94%EB%82%98%EB%82%98%EB%A7%9B_%EC%9A%B0%EC%9C%A0'_%EB%B6%84%EC%9F%81_%EC%82%AC%EB%A1%80%EB%A5%BC_%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C_%EB%B3%B4%ED%86%B5.json",
    "tags": [
      "지식재산권",
      "상표권",
      "바나나맛우유",
      "요부관찰",
      "희석화이론"
    ],
    "difficulty": "보통"
  },
  {
    "id": 16,
    "title": "지식재산권과 상표권 침해 심층 분석: 빙그레 '바나나맛 우유' 분쟁 사례를 중심으로",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "4.0 MB",
    "date": "2025-08-13",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EA%B3%BC_%EC%83%81%ED%91%9C%EA%B6%8C_%EC%B9%A8%ED%95%B4_%EC%8B%AC%EC%B8%B5_%EB%B6%84%EC%84%9D_%EB%B9%99%EA%B7%B8%EB%A0%88_'%EB%B0%94%EB%82%98%EB%82%98%EB%A7%9B_%EC%9A%B0%EC%9C%A0'_%EB%B6%84%EC%9F%81_%EC%82%AC%EB%A1%80%EB%A5%BC_%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C_%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EA%B3%BC_%EC%83%81%ED%91%9C%EA%B6%8C_%EC%B9%A8%ED%95%B4_%EC%8B%AC%EC%B8%B5_%EB%B6%84%EC%84%9D_%EB%B9%99%EA%B7%B8%EB%A0%88_'%EB%B0%94%EB%82%98%EB%82%98%EB%A7%9B_%EC%9A%B0%EC%9C%A0'_%EB%B6%84%EC%9F%81_%EC%82%AC%EB%A1%80%EB%A5%BC_%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C_%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "tags": [
      "지식재산권",
      "상표권 침해",
      "요부관찰",
      "징벌적 손해배상",
      "바나나맛우유"
    ],
    "difficulty": "어려움"
  },
  {
    "id": 17,
    "title": "드래곤볼에서 나타나는 무협지의 요소: '무(武)'와 '협(俠)'의 조화",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "6.7 MB",
    "date": "2025-08-13",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%93%9C%EB%9E%98%EA%B3%A4%EB%B3%BC%EC%97%90%EC%84%9C_%EB%82%98%ED%83%80%EB%82%98%EB%8A%94_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EC%9A%94%EC%86%8C_'%EB%AC%B4(%E6%AD%A6)'%EC%99%80_'%ED%98%91(%E4%BF%A0)'%EC%9D%98_%EC%A1%B0%ED%99%94_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%93%9C%EB%9E%98%EA%B3%A4%EB%B3%BC%EC%97%90%EC%84%9C_%EB%82%98%ED%83%80%EB%82%98%EB%8A%94_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EC%9A%94%EC%86%8C_'%EB%AC%B4(%E6%AD%A6)'%EC%99%80_'%ED%98%91(%E4%BF%A0)'%EC%9D%98_%EC%A1%B0%ED%99%94_%EC%89%AC%EC%9B%80.json",
    "tags": [
      "드래곤볼",
      "무협지",
      "무(武)",
      "협(俠)",
      "손오공"
    ],
    "difficulty": "쉬움"
  },
  {
    "id": 18,
    "title": "강호의 도리에 대한 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-18",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EA%B0%95%ED%98%B8%EC%9D%98_%EB%8F%84%EB%A6%AC%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9D%B4%ED%95%B4_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EA%B0%95%ED%98%B8%EC%9D%98_%EB%8F%84%EB%A6%AC%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9D%B4%ED%95%B4_%EC%89%AC%EC%9B%80.json",
    "tags": [
      "강호의 도리",
      "밈",
      "언어 변화",
      "온라인 문화",
      "불문율"
    ],
    "difficulty": "쉬움"
  },
  {
    "id": 19,
    "title": "지식재산권의 기본 구분 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-18",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B5%AC%EB%B6%84_%EC%9D%B4%ED%95%B4_%EB%B3%B4%ED%86%B5.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B5%AC%EB%B6%84_%EC%9D%B4%ED%95%B4_%EB%B3%B4%ED%86%B5.json",
    "tags": [
      "지식재산권",
      "특허",
      "실용신안",
      "디자인권",
      "상표"
    ],
    "difficulty": "보통"
  },
  {
    "id": 20,
    "title": "지식재산권의 기본 구분 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-18",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B5%AC%EB%B6%84_%EC%9D%B4%ED%95%B4_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%A7%80%EC%8B%9D%EC%9E%AC%EC%82%B0%EA%B6%8C%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B5%AC%EB%B6%84_%EC%9D%B4%ED%95%B4_%EC%89%AC%EC%9B%80.json",
    "tags": [
      "지식재산권",
      "특허",
      "실용신안",
      "디자인권",
      "상표"
    ],
    "difficulty": "쉬움"
  },
  {
    "id": 21,
    "title": "리더십의 본질 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-19",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%A6%AC%EB%8D%94%EC%8B%AD%EC%9D%98_%EB%B3%B8%EC%A7%88_%EC%9D%B4%ED%95%B4_%EB%B3%B4%ED%86%B5.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%A6%AC%EB%8D%94%EC%8B%AD%EC%9D%98_%EB%B3%B8%EC%A7%88_%EC%9D%B4%ED%95%B4_%EB%B3%B4%ED%86%B5.json",
    "tags": [
      "리더십",
      "샹크스",
      "존F케네디",
      "텍스트해석",
      "공통점과차이점"
    ],
    "difficulty": "보통"
  },
  {
    "id": 22,
    "title": "리더십의 본질 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "100.3 KB",
    "date": "2025-08-19",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%A6%AC%EB%8D%94%EC%8B%AD%EC%9D%98_%EB%B3%B8%EC%A7%88_%EC%9D%B4%ED%95%B4_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%A6%AC%EB%8D%94%EC%8B%AD%EC%9D%98_%EB%B3%B8%EC%A7%88_%EC%9D%B4%ED%95%B4_%EC%89%AC%EC%9B%80.json",
    "tags": [
      "리더십",
      "샹크스",
      "존F케네디",
      "전쟁억제",
      "평화"
    ],
    "difficulty": "쉬움"
  },
  {
    "id": 23,
    "title": "리더십의 본질 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-19",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%A6%AC%EB%8D%94%EC%8B%AD%EC%9D%98_%EB%B3%B8%EC%A7%88_%EC%9D%B4%ED%95%B4_%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%A6%AC%EB%8D%94%EC%8B%AD%EC%9D%98_%EB%B3%B8%EC%A7%88_%EC%9D%B4%ED%95%B4_%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "tags": [
      "리더십",
      "샹크스",
      "존F케네디",
      "비교분석",
      "국어과역량"
    ],
    "difficulty": "어려움"
  },
  {
    "id": 24,
    "title": "무협지의 경공의 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-19",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EA%B2%BD%EA%B3%B5%EC%9D%98_%EC%9D%B4%ED%95%B4_%EC%89%AC%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EA%B2%BD%EA%B3%B5%EC%9D%98_%EC%9D%B4%ED%95%B4_%EC%89%AC%EC%9B%80.json",
    "tags": [
      "경공",
      "무협",
      "내공",
      "경신술",
      "애니메이션",
      "문화콘텐츠"
    ],
    "difficulty": "쉬움"
  },
  {
    "id": 25,
    "title": "무협지의 경공의 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-19",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EA%B2%BD%EA%B3%B5%EC%9D%98_%EC%9D%B4%ED%95%B4_%EB%B3%B4%ED%86%B5.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EA%B2%BD%EA%B3%B5%EC%9D%98_%EC%9D%B4%ED%95%B4_%EB%B3%B4%ED%86%B5.json",
    "tags": [
      "경공",
      "무협",
      "경신술",
      "내공",
      "애니메이션"
    ],
    "difficulty": "보통"
  },
  {
    "id": 26,
    "title": "국어_무협지의_경공의_이해_어려움",
    "examType": "기타",
    "subject": "국어",
    "size": "0.2 MB",
    "date": "2025-08-19",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EA%B2%BD%EA%B3%B5%EC%9D%98_%EC%9D%B4%ED%95%B4_%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EA%B2%BD%EA%B3%B5%EC%9D%98_%EC%9D%B4%ED%95%B4_%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "tags": [
      "경공",
      "내공",
      "경신술",
      "무협",
      "애니메이션"
    ],
    "difficulty": "어려움"
  },
  {
    "id": 27,
    "title": "무협지의 경공의 이해",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.2 MB",
    "date": "2025-08-19",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EA%B2%BD%EA%B3%B5%EC%9D%98_%EC%9D%B4%ED%95%B4_%EB%A7%A4%EC%9A%B0%20%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EB%AC%B4%ED%98%91%EC%A7%80%EC%9D%98_%EA%B2%BD%EA%B3%B5%EC%9D%98_%EC%9D%B4%ED%95%B4_%EB%A7%A4%EC%9A%B0%20%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "tags": [
      "경공",
      "내공",
      "경신술",
      "무협",
      "애니메이션",
      "문화콘텐츠"
    ],
    "difficulty": "매우 어려움"
  },
  {
    "id": 28,
    "title": "입체상표의 개념과 한계를 하리보 곰 젤리 판례를 통해 이해하고, 소비자 인식이 상표권 판단에 미치는 영향을 설명할 수 있다.",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-20",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%9E%85%EC%B2%B4%EC%83%81%ED%91%9C%EC%9D%98_%EA%B0%9C%EB%85%90%EA%B3%BC_%ED%95%9C%EA%B3%84%EB%A5%BC_%ED%95%98%EB%A6%AC%EB%B3%B4_%EA%B3%B0_%EC%A0%A4%EB%A6%AC_%ED%8C%90%EB%A1%80%EB%A5%BC_%ED%86%B5%ED%95%B4_%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0%2C_%EC%86%8C%EB%B9%84%EC%9E%90_%EC%9D%B8%EC%8B%9D%EC%9D%B4_%EC%83%81%ED%91%9C%EA%B6%8C_%ED%8C%90%EB%8B%A8%EC%97%90_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5%EC%9D%84_%EC%84%A4%EB%AA%85%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8B%A4._%EB%A7%A4%EC%9A%B0%20%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%9E%85%EC%B2%B4%EC%83%81%ED%91%9C%EC%9D%98_%EA%B0%9C%EB%85%90%EA%B3%BC_%ED%95%9C%EA%B3%84%EB%A5%BC_%ED%95%98%EB%A6%AC%EB%B3%B4_%EA%B3%B0_%EC%A0%A4%EB%A6%AC_%ED%8C%90%EB%A1%80%EB%A5%BC_%ED%86%B5%ED%95%B4_%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0%2C_%EC%86%8C%EB%B9%84%EC%9E%90_%EC%9D%B8%EC%8B%9D%EC%9D%B4_%EC%83%81%ED%91%9C%EA%B6%8C_%ED%8C%90%EB%8B%A8%EC%97%90_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5%EC%9D%84_%EC%84%A4%EB%AA%85%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8B%A4._%EB%A7%A4%EC%9A%B0%20%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "tags": [
      "입체상표",
      "3D 상표",
      "하리보 곰 젤리",
      "상표권",
      "소비자 인식",
      "출처 식별력",
      "지식재산권"
    ],
    "difficulty": "매우 어려움"
  },
  {
    "id": 29,
    "title": "입체상표의 개념과 한계를 하리보 곰 젤리 판례를 통해 이해하고, 소비자 인식이 상표권 판단에 미치는 영향을 설명할 수 있다.",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-20",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%9E%85%EC%B2%B4%EC%83%81%ED%91%9C%EC%9D%98_%EA%B0%9C%EB%85%90%EA%B3%BC_%ED%95%9C%EA%B3%84%EB%A5%BC_%ED%95%98%EB%A6%AC%EB%B3%B4_%EA%B3%B0_%EC%A0%A4%EB%A6%AC_%ED%8C%90%EB%A1%80%EB%A5%BC_%ED%86%B5%ED%95%B4_%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0%2C_%EC%86%8C%EB%B9%84%EC%9E%90_%EC%9D%B8%EC%8B%9D%EC%9D%B4_%EC%83%81%ED%91%9C%EA%B6%8C_%ED%8C%90%EB%8B%A8%EC%97%90_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5%EC%9D%84_%EC%84%A4%EB%AA%85%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8B%A4._%EB%B3%B4%ED%86%B5.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%9E%85%EC%B2%B4%EC%83%81%ED%91%9C%EC%9D%98_%EA%B0%9C%EB%85%90%EA%B3%BC_%ED%95%9C%EA%B3%84%EB%A5%BC_%ED%95%98%EB%A6%AC%EB%B3%B4_%EA%B3%B0_%EC%A0%A4%EB%A6%AC_%ED%8C%90%EB%A1%80%EB%A5%BC_%ED%86%B5%ED%95%B4_%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0%2C_%EC%86%8C%EB%B9%84%EC%9E%90_%EC%9D%B8%EC%8B%9D%EC%9D%B4_%EC%83%81%ED%91%9C%EA%B6%8C_%ED%8C%90%EB%8B%A8%EC%97%90_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5%EC%9D%84_%EC%84%A4%EB%AA%85%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8B%A4._%EB%B3%B4%ED%86%B5.json",
    "tags": [
      "입체상표",
      "상표권",
      "하리보",
      "소비자 인식",
      "독일 연방대법원"
    ],
    "difficulty": "보통"
  },
  {
    "id": 30,
    "title": "입체상표의 개념과 한계를 하리보 곰 젤리 판례를 통해 이해하고, 소비자 인식이 상표권 판단에 미치는 영향을 설명할 수 있다.",
    "examType": "AI 생성",
    "subject": "국어",
    "size": "0.1 MB",
    "date": "2025-08-20",
    "fileUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%9E%85%EC%B2%B4%EC%83%81%ED%91%9C%EC%9D%98_%EA%B0%9C%EB%85%90%EA%B3%BC_%ED%95%9C%EA%B3%84%EB%A5%BC_%ED%95%98%EB%A6%AC%EB%B3%B4_%EA%B3%B0_%EC%A0%A4%EB%A6%AC_%ED%8C%90%EB%A1%80%EB%A5%BC_%ED%86%B5%ED%95%B4_%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0%2C_%EC%86%8C%EB%B9%84%EC%9E%90_%EC%9D%B8%EC%8B%9D%EC%9D%B4_%EC%83%81%ED%91%9C%EA%B6%8C_%ED%8C%90%EB%8B%A8%EC%97%90_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5%EC%9D%84_%EC%84%A4%EB%AA%85%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8B%A4._%EC%96%B4%EB%A0%A4%EC%9B%80.pdf",
    "jsonUrl": "/files/%EA%B5%AD%EC%96%B4_%EC%9E%85%EC%B2%B4%EC%83%81%ED%91%9C%EC%9D%98_%EA%B0%9C%EB%85%90%EA%B3%BC_%ED%95%9C%EA%B3%84%EB%A5%BC_%ED%95%98%EB%A6%AC%EB%B3%B4_%EA%B3%B0_%EC%A0%A4%EB%A6%AC_%ED%8C%90%EB%A1%80%EB%A5%BC_%ED%86%B5%ED%95%B4_%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0%2C_%EC%86%8C%EB%B9%84%EC%9E%90_%EC%9D%B8%EC%8B%9D%EC%9D%B4_%EC%83%81%ED%91%9C%EA%B6%8C_%ED%8C%90%EB%8B%A8%EC%97%90_%EB%AF%B8%EC%B9%98%EB%8A%94_%EC%98%81%ED%96%A5%EC%9D%84_%EC%84%A4%EB%AA%85%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8B%A4._%EC%96%B4%EB%A0%A4%EC%9B%80.json",
    "tags": [
      "입체상표",
      "3D 상표",
      "하리보 판례",
      "상표권",
      "소비자 인식",
      "출처 식별력"
    ],
    "difficulty": "어려움"
  }
];