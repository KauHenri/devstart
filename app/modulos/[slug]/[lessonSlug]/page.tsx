'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Code, HelpCircle,
  BookOpen, FolderKanban, Clock, Star, Lightbulb, X
} from 'lucide-react';
import { getModuleBySlug } from '@/data/modules';
import { getLessonContent } from '@/data/lessonContent';
import { EXERCISES } from '@/data/exercises';
import { QUIZZES } from '@/data/quizzes';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { CodeEditor } from '@/components/editor/CodeEditor';
import { Quiz } from '@/components/gamification/Quiz';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lessonSlug: string }>;
}) {
  const { slug, lessonSlug } = use(params);
  const module = getModuleBySlug(slug);
  if (!module) notFound();

  const lesson = module.lessons.find(l => l.slug === lessonSlug);
  if (!lesson) notFound();

  const { progress, completeLesson, completeExercise, addXP } = useProgress();
  const { t } = useLanguage();

  const isCompleted = progress.completedLessons.includes(lesson.id);
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const lessonIndex = module.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = lessonIndex > 0 ? module.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < module.lessons.length - 1 ? module.lessons[lessonIndex + 1] : null;

  const content = getLessonContent(lesson.id);
  const exercises = EXERCISES.filter(e => e.lessonId === lesson.id);
  const quizData = QUIZZES.find(q => q.lessonId === lesson.id);

  // Exercise state
  const [exerciseResults, setExerciseResults] = useState<Record<string, 'success' | 'error' | null>>({});
  const [exerciseOutputs, setExerciseOutputs] = useState<Record<string, string>>({});
  const [exerciseErrors, setExerciseErrors] = useState<Record<string, string | null>>({});

  const handleMarkComplete = () => {
    if (!isCompleted) {
      completeLesson(lesson.id, lesson.xpReward);
    }
  };

  const handleCodeRun = (exerciseId: string, code: string, output: string, error: string | null) => {
    const exercise = exercises.find(e => e.id === exerciseId);
    setExerciseOutputs(prev => ({ ...prev, [exerciseId]: output }));
    setExerciseErrors(prev => ({ ...prev, [exerciseId]: error }));

    if (error) {
      setExerciseResults(prev => ({ ...prev, [exerciseId]: 'error' }));
      return;
    }

    if (exercise && exercise.expectedOutput) {
      const normalize = (str: string) =>
        str
          .replace(/\r\n/g, '\n')
          .split('\n')
          .map(line => line.trimEnd())
          .join('\n')
          .trim();

      const actualClean = normalize(output);
      const expectedClean = normalize(exercise.expectedOutput);

      const isMatch = actualClean === expectedClean;
      if (isMatch) {
        setExerciseResults(prev => ({ ...prev, [exerciseId]: 'success' }));
        if (!progress.completedExercises.includes(exerciseId)) {
          completeExercise(exerciseId, exercise.xpReward);
        }
      } else {
        setExerciseResults(prev => ({ ...prev, [exerciseId]: 'error' }));
      }
    } else {
      setExerciseResults(prev => ({ ...prev, [exerciseId]: 'success' }));
      if (exercise && !progress.completedExercises.includes(exerciseId)) {
        completeExercise(exerciseId, exercise.xpReward);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--muted-foreground)' }}>
        <Link href="/modulos" className="hover:opacity-70">{t('Módulos', 'Modules')}</Link>
        <span>/</span>
        <Link href={`/modulos/${module.slug}`} className="hover:opacity-70">{module.title}</Link>
        <span>/</span>
        <span style={{ color: 'var(--foreground)' }}>{lesson.title}</span>
      </div>

      {/* Lesson header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <LessonTypeIcon type={lesson.type} />
          <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
            Aula {lesson.order} de {module.lessons.length}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
            <Clock size={12} /> {lesson.estimatedMinutes} min
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--primary)' }}>
            <Star size={12} /> {lesson.xpReward} XP
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
              <CheckCircle2 size={12} /> {t('Concluída', 'Completed')}
            </span>
          )}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
          {lesson.title}
        </h1>
        <p className="mt-2" style={{ color: 'var(--muted-foreground)' }}>{lesson.description}</p>
      </div>

      {/* Lesson Content */}
      <div
        className="prose rounded-2xl p-6 md:p-8 mb-8 border"
        style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, className, children, ...props }) {
              const isInline = !className;
              if (isInline) {
                return (
                  <code
                    className="px-1.5 py-0.5 rounded text-sm font-mono"
                    style={{ background: 'var(--muted)', color: 'var(--primary)' }}
                    {...props}
                  >
                    {children}
                  </code>
                );
              }
              return (
                <pre
                  className="rounded-xl overflow-hidden"
                  style={{ background: '#1e293b', padding: '1rem' }}
                >
                  <code className="font-mono text-sm" style={{ color: '#e2e8f0' }} {...props}>
                    {children}
                  </code>
                </pre>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Interactive Exercises */}
      {exercises.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            💪 {t('Exercícios Práticos', 'Practical Exercises')}
          </h2>
          <div className="space-y-6">
            {exercises.map((exercise, idx) => (
              <div
                key={exercise.id}
                className="rounded-2xl border overflow-hidden"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: exercise.difficulty === 'easy'
                              ? 'rgba(34,197,94,0.1)' : exercise.difficulty === 'medium'
                                ? 'rgba(234,179,8,0.1)' : 'rgba(239,68,68,0.1)',
                            color: exercise.difficulty === 'easy'
                              ? '#22c55e' : exercise.difficulty === 'medium'
                                ? '#eab308' : '#ef4444',
                          }}
                        >
                          {exercise.difficulty === 'easy' ? '🟢 Fácil' : exercise.difficulty === 'medium' ? '🟡 Médio' : '🔴 Difícil'}
                        </span>
                        <span className="text-xs font-medium" style={{ color: 'var(--primary)' }}>
                          +{exercise.xpReward} XP
                        </span>
                        {progress.completedExercises.includes(exercise.id) && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-emerald-500/10 text-emerald-500 flex items-center gap-1">
                            <CheckCircle2 size={12} /> {t('Concluído', 'Completed')}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold" style={{ color: 'var(--foreground)' }}>
                        Exercício {idx + 1}: {exercise.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
                    {exercise.description}
                  </p>

                  {/* Hints */}
                  {exercise.hints.length > 0 && (
                    <div className="mb-4">
                      {!showHint || hintIndex !== idx ? (
                        <button
                          onClick={() => { setShowHint(true); setHintIndex(idx); }}
                          className="flex items-center gap-1.5 text-xs font-medium hover:opacity-70 transition-opacity"
                          style={{ color: 'var(--primary)' }}
                        >
                          <Lightbulb size={14} /> {t('Ver dica', 'See hint')}
                        </button>
                      ) : (
                        <div
                          className="flex items-start gap-2 p-3 rounded-xl text-sm"
                          style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--foreground)' }}
                        >
                          <Lightbulb size={16} style={{ color: 'var(--primary)' }} className="shrink-0 mt-0.5" />
                          <span>{exercise.hints[0]}</span>
                          <button
                            onClick={() => setShowHint(false)}
                            className="ml-auto hover:opacity-70"
                            style={{ color: 'var(--muted-foreground)' }}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Code Editor */}
                <CodeEditor
                  initialCode={exercise.starterCode}
                  height="220px"
                  fileName={`exercicio_${idx + 1}.py`}
                  onRun={(code, output, error) => handleCodeRun(exercise.id, code, output, error)}
                />

                {/* Real Validation Feedback */}
                {exerciseResults[exercise.id] === 'success' && (
                  <div
                    className="p-4 border-t flex items-center justify-between gap-3"
                    style={{ background: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.25)' }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                      <span className="text-sm font-semibold text-emerald-500">
                        {t('Parabéns! Saída validada com sucesso!', 'Congratulations! Output validated successfully!')}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-500">
                      +{exercise.xpReward} XP
                    </span>
                  </div>
                )}

                {exerciseResults[exercise.id] === 'error' && (
                  <div
                    className="p-4 border-t space-y-3"
                    style={{ background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.2)' }}
                  >
                    <div className="flex items-center gap-2">
                      <X size={18} className="text-red-500 shrink-0" />
                      <span className="text-sm font-semibold text-red-500">
                        {exerciseErrors[exercise.id]
                          ? t('Erro de Execução no Python', 'Python Execution Error')
                          : t('A saída não confere com o resultado esperado!', 'Output does not match expected result!')}
                      </span>
                    </div>

                    {exercise.expectedOutput && !exerciseErrors[exercise.id] && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-xl bg-black/30 border border-red-500/30">
                          <span className="block mb-1 font-sans font-semibold text-[11px] text-red-400">
                            {t('Sua Saída:', 'Your Output:')}
                          </span>
                          <pre className="whitespace-pre-wrap text-red-200">{exerciseOutputs[exercise.id] || '(sem saída)'}</pre>
                        </div>
                        <div className="p-3 rounded-xl bg-black/30 border border-emerald-500/30">
                          <span className="block mb-1 font-sans font-semibold text-[11px] text-emerald-400">
                            {t('Saída Esperada:', 'Expected Output:')}
                          </span>
                          <pre className="whitespace-pre-wrap text-emerald-200">{exercise.expectedOutput}</pre>
                        </div>
                      </div>
                    )}

                    <div className="pt-1">
                      <button
                        onClick={() => setShowSolution(prev => ({ ...prev, [exercise.id]: !prev[exercise.id] }))}
                        className="text-xs font-semibold text-amber-500 hover:underline inline-flex items-center gap-1"
                      >
                        {showSolution[exercise.id]
                          ? t('Ocultar Solução', 'Hide Solution')
                          : t('💡 Ver Solução / Gabarito', '💡 View Solution / Answer Key')}
                      </button>
                      {showSolution[exercise.id] && (
                        <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 overflow-x-auto">
                          <pre>{exercise.solution}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quiz */}
      {quizData && (
        <div className="mb-8">
          <Quiz quiz={quizData} />
        </div>
      )}

      {/* Mark as complete */}
      {!isCompleted && (
        <div
          className="rounded-2xl p-6 mb-8 border text-center"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <div className="text-4xl mb-3">✅</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--foreground)' }}>
            {t('Terminou esta aula?', 'Finished this lesson?')}
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--muted-foreground)' }}>
            {t(`Marque como concluída e ganhe ${lesson.xpReward} XP!`, `Mark as complete and earn ${lesson.xpReward} XP!`)}
          </p>
          <button
            onClick={handleMarkComplete}
            className="px-6 py-3 rounded-xl font-semibold text-white transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
          >
            {t('Marcar como Concluída', 'Mark as Complete')} +{lesson.xpReward} XP
          </button>
        </div>
      )}

      {isCompleted && (
        <div
          className="rounded-2xl p-4 mb-8 border flex items-center gap-3"
          style={{ background: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)' }}
        >
          <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
          <span className="font-medium" style={{ color: 'var(--foreground)' }}>
            {t('Aula concluída! Ótimo trabalho! 🎉', 'Lesson completed! Great work! 🎉')}
          </span>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        {prevLesson ? (
          <Link
            href={`/modulos/${module.slug}/${prevLesson.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-colors hover:opacity-80"
            style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
          >
            <ArrowLeft size={16} /> {prevLesson.title}
          </Link>
        ) : (
          <Link
            href={`/modulos/${module.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-colors hover:opacity-80"
            style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
          >
            <ArrowLeft size={16} /> {t('Voltar ao Módulo', 'Back to Module')}
          </Link>
        )}

        {nextLesson && (
          <Link
            href={`/modulos/${module.slug}/${nextLesson.slug}`}
            className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          >
            {nextLesson.title} <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

function LessonTypeIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    theory: <BookOpen size={14} />,
    exercise: <Code size={14} />,
    quiz: <HelpCircle size={14} />,
    project: <FolderKanban size={14} />,
  };
  const labels: Record<string, string> = {
    theory: 'Teoria',
    exercise: 'Exercício',
    quiz: 'Quiz',
    project: 'Projeto',
  };
  return (
    <span
      className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
      style={{ background: 'var(--muted)', color: 'var(--muted-foreground)' }}
    >
      {icons[type]} {labels[type]}
    </span>
  );
}
