'use client';

import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { ACHIEVEMENTS } from '@/lib/achievements';
import { Trophy } from 'lucide-react';

export default function ConquistasPage() {
  const { progress } = useProgress();
  const { t } = useLanguage();

  const unlocked = ACHIEVEMENTS.filter(a => progress.achievements.includes(a.id));
  const locked = ACHIEVEMENTS.filter(a => !progress.achievements.includes(a.id));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
          {t('Conquistas', 'Achievements')}
        </h1>
        <p style={{ color: 'var(--muted-foreground)' }}>
          {unlocked.length} {t('de', 'of')} {ACHIEVEMENTS.length} {t('conquistadas', 'earned')}
        </p>
        {/* Progress bar */}
        <div className="mt-4 h-3 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${Math.round((unlocked.length / ACHIEVEMENTS.length) * 100)}%`,
              background: 'linear-gradient(to right, #f59e0b, #f97316)',
            }}
          />
        </div>
      </div>

      {/* Unlocked */}
      {unlocked.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <Trophy size={20} className="text-yellow-400" />
            {t('Desbloqueadas', 'Unlocked')} ({unlocked.length})
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {unlocked.map(a => (
              <div
                key={a.id}
                className="achievement-pop flex items-center gap-4 p-4 rounded-2xl border"
                style={{
                  background: 'var(--card)',
                  borderColor: 'rgba(251,191,36,0.4)',
                }}
              >
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <div className="font-bold" style={{ color: 'var(--foreground)' }}>{a.title}</div>
                  <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{a.description}</div>
                  <div className="text-xs font-semibold mt-1" style={{ color: '#f59e0b' }}>+{a.xpReward} XP</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Locked */}
      {locked.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            {t('Bloqueadas', 'Locked')} ({locked.length})
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {locked.map(a => (
              <div
                key={a.id}
                className="flex items-center gap-4 p-4 rounded-2xl border opacity-50"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                <span className="text-3xl grayscale">{a.icon}</span>
                <div>
                  <div className="font-bold" style={{ color: 'var(--foreground)' }}>{a.title}</div>
                  <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{a.description}</div>
                  <div className="text-xs font-semibold mt-1" style={{ color: 'var(--muted-foreground)' }}>+{a.xpReward} XP</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
