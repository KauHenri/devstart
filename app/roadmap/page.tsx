'use client';

import Link from 'next/link';
import { CheckCircle2, Circle, Lock, ArrowDown } from 'lucide-react';
import { MODULES } from '@/data/modules';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RoadmapPage() {
  const { progress } = useProgress();
  const { t, language } = useLanguage();

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedPct = totalLessons > 0 ? Math.round((progress.completedLessons.length / totalLessons) * 100) : 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
          🗺️ {t('Seu Roadmap', 'Your Roadmap')}
        </h1>
        <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
          {t('Acompanhe sua jornada do zero ao mercado de trabalho', 'Track your journey from zero to the job market')}
        </p>
        <div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium"
          style={{ background: 'var(--muted)', color: 'var(--foreground)' }}
        >
          <span>{completedPct}% {t('completo', 'complete')}</span>
          <div className="w-24 h-2 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${completedPct}%`,
                background: 'linear-gradient(to right, #6366f1, #a855f7)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Roadmap vertical */}
      <div className="relative">
        {MODULES.map((module, index) => {
          const completedInModule = progress.completedLessons.filter(l =>
            module.lessons.some(lesson => lesson.id === l)
          ).length;
          const isCompleted = completedInModule === module.lessons.length;
          const isStarted = completedInModule > 0;
          const isLocked = index > 0 && !MODULES[index - 1].lessons.some(l => progress.completedLessons.includes(l.id));
          const pct = module.lessons.length > 0 ? Math.round((completedInModule / module.lessons.length) * 100) : 0;

          return (
            <div key={module.id} className="relative">
              {/* Connector line */}
              {index < MODULES.length - 1 && (
                <div
                  className="absolute left-7 w-0.5 z-0"
                  style={{
                    top: '80px',
                    height: '60px',
                    background: isCompleted ? '#22c55e' : 'var(--border)',
                  }}
                />
              )}

              {/* Module card */}
              <div className="relative z-10 mb-4">
                <Link
                  href={isLocked ? '#' : `/modulos/${module.slug}`}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all ${
                    isLocked ? 'cursor-not-allowed opacity-50' : 'hover:border-indigo-500/40 hover:shadow-md'
                  }`}
                  style={{
                    background: isCompleted ? 'rgba(34,197,94,0.05)' : 'var(--card)',
                    borderColor: isCompleted ? 'rgba(34,197,94,0.4)' : 'var(--border)',
                  }}
                >
                  {/* Status icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${module.color} shrink-0 relative`}
                  >
                    {module.icon}
                    {/* Status badge */}
                    <div
                      className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2"
                      style={{
                        background: isCompleted ? '#22c55e' : isStarted ? '#6366f1' : isLocked ? 'var(--muted)' : 'var(--muted)',
                        borderColor: 'var(--background)',
                      }}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={14} className="text-white" />
                      ) : isLocked ? (
                        <Lock size={10} style={{ color: 'var(--muted-foreground)' }} />
                      ) : (
                        <Circle size={12} className="text-white" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
                        {t('Módulo', 'Module')} {module.order}
                      </span>
                      {isCompleted && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                          ✅ {t('Concluído', 'Done')}
                        </span>
                      )}
                      {isStarted && !isCompleted && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--primary)' }}>
                          🔄 {pct}%
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold" style={{ color: 'var(--foreground)' }}>
                      {(language === 'en' && module.titleEn) ? module.titleEn : module.title}
                    </h3>
                    <p className="text-sm mt-0.5 line-clamp-1" style={{ color: 'var(--muted-foreground)' }}>
                      {(language === 'en' && module.descriptionEn) ? module.descriptionEn : module.description}
                    </p>
                    <div className="flex gap-3 mt-2 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      <span>{module.lessons.length} {t('aulas', 'lessons')}</span>
                      <span>{module.estimatedHours}h</span>
                      <span className="font-semibold" style={{ color: 'var(--primary)' }}>{module.xpReward} XP</span>
                    </div>
                    {isStarted && (
                      <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: isCompleted ? '#22c55e' : 'linear-gradient(to right, #6366f1, #a855f7)',
                          }}
                        />
                      </div>
                    )}
                  </div>
                </Link>
              </div>

              {/* Arrow between modules */}
              {index < MODULES.length - 1 && (
                <div className="flex justify-center mb-4">
                  <ArrowDown size={20} style={{ color: 'var(--border)' }} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Finish */}
      {completedPct === 100 && (
        <div
          className="text-center p-8 rounded-3xl mt-4"
          style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
        >
          <div className="text-4xl mb-2">🏆</div>
          <h2 className="text-xl font-bold text-white">{t('Parabéns! Você concluiu toda a trilha!', 'Congratulations! You completed the entire track!')}</h2>
        </div>
      )}
    </div>
  );
}
