'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Star, CheckCircle2, BookOpen, Code, HelpCircle, FolderKanban, Lock } from 'lucide-react';
import { getModuleBySlug } from '@/data/modules';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { use } from 'react';

const LESSON_TYPE_ICONS = {
  theory: <BookOpen size={14} />,
  exercise: <Code size={14} />,
  quiz: <HelpCircle size={14} />,
  project: <FolderKanban size={14} />,
};

const LESSON_TYPE_LABELS = {
  theory: { pt: 'Teoria', en: 'Theory' },
  exercise: { pt: 'Exercício', en: 'Exercise' },
  quiz: { pt: 'Quiz', en: 'Quiz' },
  project: { pt: 'Projeto', en: 'Project' },
};

export default function ModuleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const module = getModuleBySlug(slug);
  if (!module) notFound();

  const { progress } = useProgress();
  const { t, language } = useLanguage();

  const completedCount = module.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
  const pct = Math.round((completedCount / module.lessons.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back */}
      <Link
        href="/modulos"
        className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
        style={{ color: 'var(--muted-foreground)' }}
      >
        <ArrowLeft size={16} /> {t('Todos os Módulos', 'All Modules')}
      </Link>

      {/* Module header */}
      <div
        className="rounded-3xl p-8 mb-8 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, var(--card), var(--muted))`, border: '1px solid var(--border)' }}
      >
        <div className="flex items-start gap-6">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br ${module.color} shrink-0`}>
            {module.icon}
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium mb-1" style={{ color: 'var(--muted-foreground)' }}>
              {t('Módulo', 'Module')} {module.order} {t('de', 'of')} 10
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
              {(language === 'en' && module.titleEn) ? module.titleEn : module.title}
            </h1>
            <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
              {(language === 'en' && module.descriptionEn) ? module.descriptionEn : module.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--muted-foreground)' }}>
              <span className="flex items-center gap-1"><Clock size={14} /> {module.estimatedHours}h</span>
              <span className="flex items-center gap-1"><BookOpen size={14} /> {module.lessons.length} {t('aulas', 'lessons')}</span>
              <span className="flex items-center gap-1"><Star size={14} /> {module.xpReward} XP</span>
              <span className="font-semibold" style={{ color: completedCount === module.lessons.length ? '#22c55e' : 'var(--primary)' }}>
                {completedCount}/{module.lessons.length} {t('concluídas', 'completed')}
              </span>
            </div>
            {completedCount > 0 && (
              <div className="mt-4">
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      background: pct === 100 ? '#22c55e' : 'linear-gradient(to right, #6366f1, #a855f7)',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lessons list */}
      <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
        {t('Aulas do Módulo', 'Module Lessons')}
      </h2>
      <div className="space-y-2">
        {module.lessons.map((lesson, index) => {
          const isDone = progress.completedLessons.includes(lesson.id);
          const isLocked = index > 0 && !progress.completedLessons.includes(module.lessons[index - 1].id);

          return (
            <Link
              key={lesson.id}
              href={isLocked ? '#' : `/modulos/${module.slug}/${lesson.slug}`}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all group ${
                isLocked ? 'cursor-not-allowed opacity-50' : 'hover:border-indigo-500/50'
              }`}
              style={{
                background: isDone ? 'rgba(34,197,94,0.05)' : 'var(--card)',
                borderColor: isDone ? 'rgba(34,197,94,0.3)' : 'var(--border)',
              }}
            >
              {/* Number / Check */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  background: isDone ? '#22c55e' : isLocked ? 'var(--muted)' : 'var(--muted)',
                  color: isDone ? 'white' : 'var(--muted-foreground)',
                }}
              >
                {isDone ? <CheckCircle2 size={16} /> : isLocked ? <Lock size={14} /> : lesson.order}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: 'var(--muted)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {LESSON_TYPE_ICONS[lesson.type]}
                    {LESSON_TYPE_LABELS[lesson.type][language as 'pt' | 'en']}
                  </span>
                </div>
                <div className="font-semibold" style={{ color: 'var(--foreground)' }}>
                  {(language === 'en' && lesson.titleEn) ? lesson.titleEn : lesson.title}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>
                  {(language === 'en' && lesson.descriptionEn) ? lesson.descriptionEn : lesson.description}
                </div>
              </div>

              {/* Meta */}
              <div className="text-right shrink-0">
                <div className="text-xs font-medium" style={{ color: 'var(--primary)' }}>+{lesson.xpReward} XP</div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{lesson.estimatedMinutes} min</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
