'use client';

import Link from 'next/link';
import { Clock, Star, ChevronRight, CheckCircle2, Lock } from 'lucide-react';
import { MODULES } from '@/data/modules';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ModulosPage() {
  const { progress } = useProgress();
  const { t, language } = useLanguage();

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalHours = MODULES.reduce((acc, m) => acc + m.estimatedHours, 0);
  const totalXP = MODULES.reduce((acc, m) => acc + m.xpReward, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
          {t('Trilha de Aprendizado', 'Learning Track')}
        </h1>
        <p className="text-lg mb-6" style={{ color: 'var(--muted-foreground)' }}>
          {t(
            'Uma jornada completa do pensamento computacional ao mercado de trabalho.',
            'A complete journey from computational thinking to the job market.'
          )}
        </p>
        <div className="flex flex-wrap gap-4">
          <StatPill emoji="📚" label={`${MODULES.length} ${t('módulos', 'modules')}`} />
          <StatPill emoji="🎓" label={`${totalLessons} ${t('aulas', 'lessons')}`} />
          <StatPill emoji="⏰" label={`${totalHours}h ${t('de conteúdo', 'of content')}`} />
          <StatPill emoji="⭐" label={`${totalXP} XP ${t('total', 'total')}`} />
        </div>
      </div>

      {/* Modules list */}
      <div className="space-y-4">
        {MODULES.map((module, index) => {
          const completedInModule = progress.completedLessons.filter(l =>
            module.lessons.some(lesson => lesson.id === l)
          ).length;
          const isCompleted = completedInModule === module.lessons.length;
          const isStarted = completedInModule > 0;
          const isLocked = index > 0 && !MODULES[index - 1].lessons.some(l => progress.completedLessons.includes(l.id));
          const pct = module.lessons.length > 0 ? Math.round((completedInModule / module.lessons.length) * 100) : 0;

          return (
            <Link
              key={module.id}
              href={isLocked ? '#' : `/modulos/${module.slug}`}
              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all group ${
                isLocked ? 'cursor-not-allowed opacity-60' : 'hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10'
              }`}
              style={{
                background: 'var(--card)',
                borderColor: isCompleted ? 'rgba(34,197,94,0.4)' : 'var(--border)',
              }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${module.color} shrink-0`}
              >
                {isLocked ? '🔒' : module.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
                    {t('Módulo', 'Module')} {module.order}
                  </span>
                  {isCompleted && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                      {t('Concluído', 'Completed')}
                    </span>
                  )}
                  {isStarted && !isCompleted && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--primary)' }}>
                      {t('Em Progresso', 'In Progress')}
                    </span>
                  )}
                </div>
                <h2 className="font-bold text-lg leading-tight mb-1" style={{ color: 'var(--foreground)' }}>
                  {(language === 'en' && module.titleEn) ? module.titleEn : module.title}
                </h2>
                <p className="text-sm mb-3 line-clamp-1" style={{ color: 'var(--muted-foreground)' }}>
                  {(language === 'en' && module.descriptionEn) ? module.descriptionEn : module.description}
                </p>
                <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  <span className="flex items-center gap-1"><Clock size={12} /> {module.estimatedHours}h</span>
                  <span>{module.lessons.length} {t('aulas', 'lessons')}</span>
                  <span className="font-semibold" style={{ color: 'var(--primary)' }}><Star size={11} className="inline" /> {module.xpReward} XP</span>
                </div>
                {isStarted && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          background: isCompleted ? '#22c55e' : 'linear-gradient(to right, #6366f1, #a855f7)',
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
                      {completedInModule}/{module.lessons.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Arrow */}
              <div className="shrink-0" style={{ color: 'var(--muted-foreground)' }}>
                {isCompleted ? <CheckCircle2 size={24} className="text-emerald-500" /> : isLocked ? <Lock size={20} /> : <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function StatPill({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
      style={{ background: 'var(--muted)', color: 'var(--foreground)', border: '1px solid var(--border)' }}
    >
      <span>{emoji}</span>
      <span>{label}</span>
    </div>
  );
}
