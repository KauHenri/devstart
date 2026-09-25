// Tipos principais da plataforma DevStart

export interface Module {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  order: number;
  estimatedHours: number;
  xpReward: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn?: string;
  order: number;
  type: 'theory' | 'exercise' | 'project' | 'quiz';
  estimatedMinutes: number;
  xpReward: number;
  content: string; // Markdown content
  contentEn?: string;
  exercises?: Exercise[];
  quiz?: QuizQuestion[];
}

export interface Exercise {
  id: string;
  lessonId?: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  starterCode: string;
  solution: string;
  expectedOutput?: string;
  testCases?: TestCase[];
  hints: string[];
  hintsEn?: string[];
  xpReward: number;
  timeLimit?: number; // seconds, for timed challenges
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
  descriptionEn?: string;
  isHidden?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionEn?: string;
  options: string[];
  optionsEn?: string[];
  correctIndex: number;
  explanation: string;
  explanationEn?: string;
}

export interface UserProgress {
  completedLessons: string[];
  completedExercises: string[];
  completedChallenges: string[];
  quizScores: Record<string, number>;
  xp: number;
  level: number;
  streak: number;
  lastStudyDate: string | null;
  achievements: string[];
  totalStudyMinutes: number;
  language: 'pt' | 'en';
  placementCompleted?: boolean;
  placementScore?: number;
  placementTotal?: number;
  placementLevel?: string;
  placementDate?: string;
  placementRecommendedModule?: string;
}

export type PlacementCategory = 'logic' | 'flow_control' | 'data_structures' | 'functions' | 'oop';

export interface PlacementQuestion {
  id: string;
  category: PlacementCategory;
  categoryLabel: { pt: string; en: string };
  difficulty: 'easy' | 'medium' | 'hard';
  codeSnippet?: string;
  question: string;
  questionEn: string;
  options: string[];
  optionsEn: string[];
  correctIndex: number;
  explanation: string;
  explanationEn: string;
}

export interface PlacementTier {
  id: string;
  minScore: number;
  maxScore: number;
  titlePt: string;
  titleEn: string;
  badge: string;
  summaryPt: string;
  summaryEn: string;
  recommendedModuleSlug: string;
  recommendedModuleTitlePt: string;
  recommendedModuleTitleEn: string;
  unlockModuleOrder: number;
}

export interface Achievement {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  condition: (progress: UserProgress) => boolean;
  xpReward: number;
}

export interface Level {
  level: number;
  title: string;
  titleEn: string;
  minXP: number;
  maxXP: number;
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
