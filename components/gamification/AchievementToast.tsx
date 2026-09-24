'use client';

import { useEffect, useState } from 'react';
import { useProgress } from '@/contexts/ProgressContext';
import { Achievement } from '@/lib/types';
import { X } from 'lucide-react';

export function AchievementToast() {
  const { newAchievements, clearNewAchievements } = useProgress();
  const [visible, setVisible] = useState<Achievement | null>(null);
  const [queue, setQueue] = useState<Achievement[]>([]);

  useEffect(() => {
    if (newAchievements.length > 0) {
      setQueue(prev => [...prev, ...newAchievements]);
      clearNewAchievements();
    }
  }, [newAchievements]);

  useEffect(() => {
    if (!visible && queue.length > 0) {
      setVisible(queue[0]);
      setQueue(prev => prev.slice(1));
    }
  }, [visible, queue]);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-24 right-4 z-50 achievement-pop max-w-sm"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{visible.icon}</div>
        <div className="flex-1">
          <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--primary)' }}>
            🏆 Conquista Desbloqueada!
          </div>
          <div className="font-bold" style={{ color: 'var(--foreground)' }}>
            {visible.title}
          </div>
          <div className="text-sm mt-0.5" style={{ color: 'var(--muted-foreground)' }}>
            {visible.description}
          </div>
          <div className="text-xs mt-1 font-medium" style={{ color: '#f59e0b' }}>
            +{visible.xpReward} XP
          </div>
        </div>
        <button
          onClick={() => setVisible(null)}
          style={{ color: 'var(--muted-foreground)' }}
          className="hover:opacity-70 transition-opacity"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
