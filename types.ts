export interface QuizData {
  specVersion: string;
  id: string;
  title: string;
  description: string;
  createdAt: string;
  sourceType: 'AI_GENERATED' | 'COMMUNITY_CREATED';
  author: {
    id: string;
    name: string;
  };
  tags: string[];
  subject: {
    main: string;
    sub?: string;
  };
  difficulty: '쉬움' | '중간' | '어려움';
  questionCount: number;
  generationConfig?: {
    goal: string;
    questionType: string;
    passageLength: string;
    useOriginalText: boolean;
  };
  questions: Question[];
}

export interface Question {
  questionNumber: number;
  questionText: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  knowledgeTag?: string;
}
