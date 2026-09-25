'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Brain, Trophy, Zap, Users, BookOpen, CheckCircle2, Star } from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLevelProgress } from '@/lib/progress';
import { MODULES } from '@/data/modules';

export default function HomePage() {
  const { progress } = useProgress();
  const { t, language } = useLanguage();
  const isReturning = progress.completedLessons.length > 0;
  const levelData = getLevelProgress(progress.xp, language);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(99,102,241,0.15) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-8"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: 'var(--primary)',
              }}
            >
              <Star size={14} />
              {t('Do Zero ao Mercado de Trabalho', 'From Zero to Job Market')}
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ color: 'var(--foreground)' }}
            >
              {t('Aprenda', 'Learn')}{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {t('Programação', 'Programming')}
              </span>{' '}
              {t('do jeito certo', 'the right way')}
            </h1>

            <p
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {t(
                'Uma plataforma completa para aprender Lógica de Programação e Python, com exercícios práticos, projetos reais, desafios e assistente de IA. Do zero ao mercado de trabalho.',
                'A complete platform to learn Programming Logic and Python, with practical exercises, real projects, challenges and AI assistant. From zero to the job market.'
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={isReturning ? '/dashboard' : '/modulos'}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  boxShadow: '0 8px 32px rgba(99,102,241,0.3)',
                }}
              >
                {isReturning ? t('Continuar Aprendendo', 'Continue Learning') : t('Começar Agora', 'Start Now')}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/roadmap"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors"
                style={{
                  background: 'var(--muted)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                }}
              >
                {t('Ver Roadmap', 'View Roadmap')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats or Progress */}
      {isReturning ? (
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div
            className="rounded-2xl p-6 border"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {t('Seu Progresso', 'Your Progress')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard emoji="⭐" label={t('XP Total', 'Total XP')} value={progress.xp.toString()} />
              <StatCard emoji="🎓" label={t('Nível', 'Level')} value={`${progress.level} — ${levelData.levelTitle}`} />
              <StatCard emoji="📚" label={t('Aulas', 'Lessons')} value={progress.completedLessons.length.toString()} />
              <StatCard emoji="🔥" label="Streak" value={`${progress.streak} ${t('dias', 'days')}`} />
            </div>
          </div>
        </section>
      ) : (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon={<Brain size={24} />} title={t('Do Zero', 'From Zero')} description={t('Começa do absoluto zero. Sem pré-requisitos.', 'Start from absolute zero. No prerequisites.')} color="from-violet-500 to-purple-600" />
            <FeatureCard icon={<Code2 size={24} />} title={t('100% Prático', '100% Practical')} description={t('Editor de código Python diretamente no site.', 'Python code editor directly on the site.')} color="from-emerald-500 to-teal-600" />
            <FeatureCard icon={<Zap size={24} />} title={t('Assistente IA', 'AI Assistant')} description={t('Tire dúvidas com o DevBot, seu tutor de IA.', 'Get help from DevBot, your AI tutor.')} color="from-orange-500 to-amber-600" />
            <FeatureCard icon={<Trophy size={24} />} title={t('Gamificado', 'Gamified')} description={t('XP, níveis, conquistas e desafios cronometrados.', 'XP, levels, achievements and timed challenges.')} color="from-pink-500 to-rose-600" />
          </div>
        </section>
      )}

      {/* Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
              {t('Trilha de Aprendizado', 'Learning Track')}
            </h2>
            <p className="mt-1" style={{ color: 'var(--muted-foreground)' }}>
              {t(`${MODULES.length} módulos, do básico ao avançado`, `${MODULES.length} modules, from basic to advanced`)}
            </p>
          </div>
          <Link
            href="/modulos"
            className="text-sm font-medium flex items-center gap-1 hover:opacity-80"
            style={{ color: 'var(--primary)' }}
          >
            {t('Ver todos', 'See all')} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES.slice(0, 6).map((module) => {
            const completed = progress.completedLessons.filter(
              l => l.startsWith(module.id.replace('modulo', 'l').charAt(0) + module.id.slice(-1))
            ).length;
            const total = module.lessons.length;
            const pct = Math.round((completed / total) * 100);

            return (
              <Link
                key={module.id}
                href={`/modulos/${module.slug}`}
                className="group rounded-2xl p-5 border transition-all hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${module.color}`}
                  >
                    {module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--muted-foreground)' }}>
                      {t('Módulo', 'Module')} {module.order}
                    </div>
                    <h3 className="font-bold text-sm leading-tight" style={{ color: 'var(--foreground)' }}>
                      {(language === 'en' && module.titleEn) ? module.titleEn : module.title}
                    </h3>
                  </div>
                  {pct === 100 && <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />}
                </div>
                <p className="text-xs mb-3 line-clamp-2" style={{ color: 'var(--muted-foreground)' }}>
                  {(language === 'en' && module.descriptionEn) ? module.descriptionEn : module.description}
                </p>
                <div className="flex items-center justify-between text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  <span>{module.lessons.length} {t('aulas', 'lessons')}</span>
                  <span>{module.estimatedHours}h</span>
                  <span className="font-semibold" style={{ color: 'var(--primary)' }}>{module.xpReward} XP</span>
                </div>
                {pct > 0 && (
                  <div className="mt-3">
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          background: 'linear-gradient(to right, #6366f1, #a855f7)',
                        }}
                      />
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div
          className="rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1), transparent 60%)',
            }}
          />
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {t('Pronto para começar?', 'Ready to start?')}
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              {t('Sua jornada de programador começa com o primeiro passo.', 'Your programming journey starts with the first step.')}
            </p>
            <Link
              href="/modulos/logica-de-programacao"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-indigo-600 bg-white hover:bg-gray-50 transition-colors"
            >
              {t('Começar a Aprender', 'Start Learning')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon, title, description, color
}: {
  icon: React.ReactNode; title: string; description: string; color: string;
}) {
  return (
    <div
      className="rounded-2xl p-5 border"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${color} mb-3`}>
        {icon}
      </div>
      <h3 className="font-bold mb-1" style={{ color: 'var(--foreground)' }}>{title}</h3>
      <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{description}</p>
    </div>
  );
}

function StatCard({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div
      className="rounded-xl p-4 text-center border"
      style={{ background: 'var(--muted)', borderColor: 'var(--border)' }}
    >
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="text-xs mb-0.5" style={{ color: 'var(--muted-foreground)' }}>{label}</div>
      <div className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>{value}</div>
    </div>
  );
}
