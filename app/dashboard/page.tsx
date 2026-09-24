'use client';

import Link from 'next/link';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLevelProgress } from '@/lib/progress';
import { ACHIEVEMENTS } from '@/lib/achievements';
import { MODULES } from '@/data/modules';
import { Trophy, Flame, BookOpen, Code, Clock, Star, ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  const { progress } = useProgress();
  const { t } = useLanguage();
  const levelData = getLevelProgress(progress.xp);

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedPct = totalLessons > 0 ? Math.round((progress.completedLessons.length / totalLessons) * 100) : 0;

  const unlockedAchievements = ACHIEVEMENTS.filter(a => progress.achievements.includes(a.id));
  const lockedAchievements = ACHIEVEMENTS.filter(a => !progress.achievements.includes(a.id));

  // Find next module to continue
  const nextModule = MODULES.find(m =>
    m.lessons.some(l => !progress.completedLessons.includes(l.id))
  );
  const nextLesson = nextModule?.lessons.find(l => !progress.completedLessons.includes(l.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
        {t('Meu Dashboard', 'My Dashboard')}
      </h1>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<Star className="text-yellow-400" size={20} />}
          label="XP Total"
          value={progress.xp.toString()}
          sublabel={`Nível ${progress.level} — ${levelData.levelTitle}`}
          color="#f59e0b"
        />
        <StatCard
          icon={<Flame className="text-orange-500" size={20} />}
          label={t('Streak', 'Streak')}
          value={`${progress.streak} ${t('dias', 'days')}`}
          sublabel={t('consecutivos', 'in a row')}
          color="#f97316"
        />
        <StatCard
          icon={<BookOpen className="text-indigo-500" size={20} />}
          label={t('Aulas', 'Lessons')}
          value={`${progress.completedLessons.length}/${totalLessons}`}
          sublabel={`${completedPct}% ${t('completo', 'complete')}`}
          color="#6366f1"
        />
        <StatCard
          icon={<Trophy className="text-purple-500" size={20} />}
          label={t('Conquistas', 'Achievements')}
          value={`${unlockedAchievements.length}/${ACHIEVEMENTS.length}`}
          sublabel={t('desbloqueadas', 'unlocked')}
          color="#a855f7"
        />
      </div>

      {/* XP Progress bar */}
      <div
        className="rounded-2xl p-6 border mb-8"
        style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>{t('Progresso de Nível', 'Level Progress')}</span>
            <div className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
              {t('Nível', 'Level')} {progress.level} — {levelData.levelTitle}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>{progress.xp} XP</div>
            <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
              {levelData.current}/{levelData.needed} {t('para próximo nível', 'to next level')}
            </div>
          </div>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
          <div
            className="h-full rounded-full xp-bar"
            style={{
              width: `${levelData.percentage}%`,
              background: 'linear-gradient(to right, #6366f1, #a855f7)',
            }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
          <span>Nv. {progress.level}</span>
          <span>{levelData.percentage}%</span>
          <span>Nv. {progress.level + 1}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Continue learning */}
        <div className="md:col-span-2 space-y-6">
          {nextModule && nextLesson && (
            <div
              className="rounded-2xl p-6 border"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                {t('Continuar de onde parei', 'Continue where I left off')}
              </h2>
              <Link
                href={`/modulos/${nextModule.slug}/${nextLesson.slug}`}
                className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-indigo-500/50 group"
                style={{ background: 'var(--muted)', borderColor: 'var(--border)' }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${nextModule.color} shrink-0`}>
                  {nextModule.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{nextModule.title}</div>
                  <div className="font-semibold" style={{ color: 'var(--foreground)' }}>{nextLesson.title}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{nextLesson.estimatedMinutes} min · {nextLesson.xpReward} XP</div>
                </div>
                <ArrowRight size={18} style={{ color: 'var(--muted-foreground)' }} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

          {/* Module progress */}
          <div
            className="rounded-2xl p-6 border"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {t('Progresso por Módulo', 'Progress by Module')}
            </h2>
            <div className="space-y-3">
              {MODULES.map(module => {
                const done = progress.completedLessons.filter(l => module.lessons.some(lesson => lesson.id === l)).length;
                const pct = module.lessons.length > 0 ? Math.round((done / module.lessons.length) * 100) : 0;
                return (
                  <div key={module.id}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                        <span>{module.icon}</span> {module.title}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{done}/{module.lessons.length}</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          background: pct === 100 ? '#22c55e' : 'linear-gradient(to right, #6366f1, #a855f7)',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          className="rounded-2xl p-6 border h-fit"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            {t('Conquistas', 'Achievements')} ({unlockedAchievements.length}/{ACHIEVEMENTS.length})
          </h2>
          <div className="space-y-3">
            {unlockedAchievements.map(a => (
              <div key={a.id} className="flex items-center gap-3">
                <span className="text-2xl">{a.icon}</span>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{a.title}</div>
                  <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{a.description}</div>
                </div>
              </div>
            ))}
            {lockedAchievements.slice(0, 3).map(a => (
              <div key={a.id} className="flex items-center gap-3 opacity-40">
                <span className="text-2xl grayscale">🔒</span>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{a.title}</div>
                  <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{a.description}</div>
                </div>
              </div>
            ))}
          </div>
          {lockedAchievements.length > 3 && (
            <Link
              href="/conquistas"
              className="mt-4 text-xs font-medium flex items-center gap-1 hover:opacity-70"
              style={{ color: 'var(--primary)' }}
            >
              {t(`Ver todas as ${ACHIEVEMENTS.length} conquistas`, `See all ${ACHIEVEMENTS.length} achievements`)} <ArrowRight size={12} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, sublabel, color }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sublabel: string;
  color: string;
}) {
  return (
    <div
      className="rounded-2xl p-5 border"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>{label}</span>
      </div>
      <div className="text-2xl font-bold mb-0.5" style={{ color: 'var(--foreground)' }}>{value}</div>
      <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{sublabel}</div>
    </div>
  );
}
