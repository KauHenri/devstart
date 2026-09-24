'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { UserProgress, Achievement } from '@/lib/types';
import { getProgress, saveProgress, DEFAULT_PROGRESS, calculateLevel, addXP as addXPLib, completeLesson as completeLessonLib, completeExercise as completeExerciseLib, completeChallenge as completeChallengeLib, checkAchievements } from '@/lib/progress';
import { ACHIEVEMENTS } from '@/lib/achievements';

interface ProgressContextType {
  progress: UserProgress;
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string, xpReward: number) => void;
  completeExercise: (exerciseId: string, xpReward: number) => void;
  completeChallenge: (challengeId: string, xpReward: number) => void;
  newAchievements: Achievement[];
  clearNewAchievements: () => void;
  setLanguage: (lang: 'pt' | 'en') => void;
  isLoaded: boolean;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = getProgress();
    setProgress(stored);
    setIsLoaded(true);
  }, []);

  const addXP = (amount: number) => {
    const updated = addXPLib(amount);
    setProgress({ ...updated });
    const unlocked = checkAchievements(updated, ACHIEVEMENTS);
    if (unlocked.length > 0) {
      setNewAchievements(prev => [...prev, ...unlocked]);
      const final = getProgress();
      setProgress({ ...final });
    }
  };

  const completeLesson = (lessonId: string, xpReward: number) => {
    const updated = completeLessonLib(lessonId);
    updated.xp += xpReward;
    updated.level = calculateLevel(updated.xp);
    saveProgress(updated);
    setProgress({ ...updated });
    const unlocked = checkAchievements(updated, ACHIEVEMENTS);
    if (unlocked.length > 0) {
      setNewAchievements(prev => [...prev, ...unlocked]);
      const final = getProgress();
      setProgress({ ...final });
    }
  };

  const completeExercise = (exerciseId: string, xpReward: number) => {
    const updated = completeExerciseLib(exerciseId, xpReward);
    setProgress({ ...updated });
    const unlocked = checkAchievements(updated, ACHIEVEMENTS);
    if (unlocked.length > 0) {
      setNewAchievements(prev => [...prev, ...unlocked]);
      const final = getProgress();
      setProgress({ ...final });
    }
  };

  const completeChallenge = (challengeId: string, xpReward: number) => {
    const updated = completeChallengeLib(challengeId, xpReward);
    setProgress({ ...updated });
    const unlocked = checkAchievements(updated, ACHIEVEMENTS);
    if (unlocked.length > 0) {
      setNewAchievements(prev => [...prev, ...unlocked]);
      const final = getProgress();
      setProgress({ ...final });
    }
  };

  const setLanguage = (lang: 'pt' | 'en') => {
    const updated = { ...progress, language: lang };
    saveProgress(updated);
    setProgress(updated);
  };

  const clearNewAchievements = () => setNewAchievements([]);

  return (
    <ProgressContext.Provider value={{
      progress,
      addXP,
      completeLesson,
      completeExercise,
      completeChallenge,
      newAchievements,
      clearNewAchievements,
      setLanguage,
      isLoaded,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
