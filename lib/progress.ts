import { UserProgress, Achievement } from './types';

const PROGRESS_KEY = 'devstart_progress';

export const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  completedExercises: [],
  completedChallenges: [],
  quizScores: {},
  xp: 0,
  level: 1,
  streak: 0,
  lastStudyDate: null,
  achievements: [],
  totalStudyMinutes: 0,
  language: 'pt',
};

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (!stored) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(stored);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completedChallenges: parsed.completedChallenges || [],
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function completeLesson(lessonId: string): UserProgress {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    updateStreak(progress);
  }
  saveProgress(progress);
  return progress;
}

export function completeExercise(exerciseId: string, xpReward: number): UserProgress {
  const progress = getProgress();
  if (!progress.completedExercises.includes(exerciseId)) {
    progress.completedExercises.push(exerciseId);
    progress.xp += xpReward;
    progress.level = calculateLevel(progress.xp);
    updateStreak(progress);
  }
  saveProgress(progress);
  return progress;
}

export function completeChallenge(challengeId: string, xpReward: number): UserProgress {
  const progress = getProgress();
  if (!progress.completedChallenges) {
    progress.completedChallenges = [];
  }
  if (!progress.completedChallenges.includes(challengeId)) {
    progress.completedChallenges.push(challengeId);
    if (!progress.completedExercises.includes(challengeId)) {
      progress.completedExercises.push(challengeId);
    }
    progress.xp += xpReward;
    progress.level = calculateLevel(progress.xp);
    updateStreak(progress);
  }
  saveProgress(progress);
  return progress;
}

export function addXP(amount: number): UserProgress {
  const progress = getProgress();
  progress.xp += amount;
  progress.level = calculateLevel(progress.xp);
  saveProgress(progress);
  return progress;
}

export function saveQuizScore(lessonId: string, score: number): UserProgress {
  const progress = getProgress();
  progress.quizScores[lessonId] = Math.max(progress.quizScores[lessonId] || 0, score);
  saveProgress(progress);
  return progress;
}

export function unlockAchievement(achievementId: string, xpReward: number): UserProgress {
  const progress = getProgress();
  if (!progress.achievements.includes(achievementId)) {
    progress.achievements.push(achievementId);
    progress.xp += xpReward;
    progress.level = calculateLevel(progress.xp);
    saveProgress(progress);
  }
  return progress;
}

export function setLanguage(lang: 'pt' | 'en'): UserProgress {
  const progress = getProgress();
  progress.language = lang;
  saveProgress(progress);
  return progress;
}

export function addStudyTime(minutes: number): void {
  const progress = getProgress();
  progress.totalStudyMinutes += minutes;
  saveProgress(progress);
}

function updateStreak(progress: UserProgress): void {
  const today = new Date().toDateString();
  const lastDate = progress.lastStudyDate;

  if (!lastDate) {
    progress.streak = 1;
    progress.lastStudyDate = today;
  } else if (lastDate === today) {
    // Already studied today, no change
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (lastDate === yesterday.toDateString()) {
      progress.streak += 1;
    } else {
      progress.streak = 1;
    }
    progress.lastStudyDate = today;
  }
}

export function calculateLevel(xp: number): number {
  // XP needed per level increases progressively
  // Level 1: 0-200, Level 2: 200-500, Level 3: 500-1000, etc.
  const thresholds = [0, 200, 500, 1000, 1800, 3000, 4500, 6500, 9000, 12000, 16000];
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (xp >= thresholds[i]) return i + 1;
  }
  return 1;
}

export function getLevelProgress(xp: number, lang: 'pt' | 'en' = 'pt'): { current: number; needed: number; percentage: number; levelTitle: string } {
  const thresholds = [0, 200, 500, 1000, 1800, 3000, 4500, 6500, 9000, 12000, 16000];
  const level = calculateLevel(xp);
  const levelTitlesPt = ['', 'Iniciante', 'Aprendiz', 'Desenvolvedor', 'Programador', 'Expert', 'Sênior', 'Mestre', 'Arquiteto', 'Guru', 'Lenda'];
  const levelTitlesEn = ['', 'Beginner', 'Apprentice', 'Developer', 'Programmer', 'Expert', 'Senior', 'Master', 'Architect', 'Guru', 'Legend'];
  const titles = lang === 'en' ? levelTitlesEn : levelTitlesPt;
  
  const currentThreshold = thresholds[level - 1] || 0;
  const nextThreshold = thresholds[level] || thresholds[thresholds.length - 1];
  const current = xp - currentThreshold;
  const needed = nextThreshold - currentThreshold;
  const percentage = Math.min(100, Math.round((current / needed) * 100));

  return { current, needed, percentage, levelTitle: titles[level] || (lang === 'en' ? 'Legend' : 'Lenda') };
}

export function checkAchievements(progress: UserProgress, allAchievements: Achievement[]): Achievement[] {
  const newlyUnlocked: Achievement[] = [];
  for (const achievement of allAchievements) {
    if (!progress.achievements.includes(achievement.id) && achievement.condition(progress)) {
      newlyUnlocked.push(achievement);
      unlockAchievement(achievement.id, achievement.xpReward);
    }
  }
  return newlyUnlocked;
}
