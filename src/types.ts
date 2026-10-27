export interface MemoLine {
  id: string;
  content: string;
  tags: string[];
  createdAt: string;
  importance?: 'normal' | 'high';
}

export interface UnconfirmedQuestion {
  id: string;
  category: string;
  question: string;
  context: string;
  exampleAnswers: string[];
}
