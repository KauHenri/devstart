'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Compass, CheckCircle2, ArrowRight, ArrowLeft, RotateCcw,
  Sparkles, Clock, Target, Award, BookOpen, LockOpen, Check, HelpCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/contexts/ProgressContext';
import { PLACEMENT_QUESTIONS, getPlacementTier, PLACEMENT_TIERS } from '@/data/placementQuestions';
import { getModuleBySlug, MODULES } from '@/data/modules';

export default function NivelamentoPage() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const { progress, savePlacement, unlockUpToModule } = useProgress();

  const [mode, setMode] = useState<'intro' | 'testing' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [unlockedSuccess, setUnlockedSuccess] = useState(false);

  const currentQuestion = PLACEMENT_QUESTIONS[currentIndex];
  const totalQuestions = PLACEMENT_QUESTIONS.length;
  const progressPct = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Score calculation
  const resultData = useMemo(() => {
    let score = 0;
    const categoryStats: Record<string, { correct: number; total: number; label: { pt: string; en: string } }> = {
      logic: { correct: 0, total: 0, label: { pt: 'Lógica & Fundamentos', en: 'Logic & Fundamentals' } },
      flow_control: { correct: 0, total: 0, label: { pt: 'Controle de Fluxo & Loops', en: 'Flow Control & Loops' } },
      data_structures: { correct: 0, total: 0, label: { pt: 'Estruturas de Dados', en: 'Data Structures' } },
      functions: { correct: 0, total: 0, label: { pt: 'Funções & Modularidade', en: 'Functions & Modularity' } },
      oop: { correct: 0, total: 0, label: { pt: 'POO & Exceções', en: 'OOP & Exceptions' } },
    };

    PLACEMENT_QUESTIONS.forEach(q => {
      if (categoryStats[q.category]) {
        categoryStats[q.category].total += 1;
      }
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
        if (categoryStats[q.category]) {
          categoryStats[q.category].correct += 1;
        }
      }
    });

    const tier = getPlacementTier(score);
    const percentage = Math.round((score / totalQuestions) * 100);

    return { score, total: totalQuestions, percentage, tier, categoryStats };
  }, [selectedAnswers, totalQuestions]);

  const handleSelectOption = (index: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: index,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finish test
      savePlacement(
        resultData.score,
        resultData.total,
        resultData.tier.id,
        resultData.tier.recommendedModuleSlug
      );
      setMode('result');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setUnlockedSuccess(false);
    setMode('intro');
  };

  const handleUnlockAndGo = () => {
    unlockUpToModule(resultData.tier.unlockModuleOrder);
    setUnlockedSuccess(true);
    setTimeout(() => {
      router.push(`/modulos/${resultData.tier.recommendedModuleSlug}`);
    }, 1200);
  };

  const recommendedModule = getModuleBySlug(resultData.tier.recommendedModuleSlug);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* ==================================================== */}
      {/* 1. INTRO SCREEN                                      */}
      {/* ==================================================== */}
      {mode === 'intro' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header Card */}
          <div
            className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.05))',
              borderColor: 'var(--border)',
            }}
          >
            <div
              className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                color: 'white',
              }}
            >
              <Compass size={40} className="animate-spin-slow" />
            </div>

            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: 'var(--primary)',
              }}
            >
              <Sparkles size={13} />
              {t('Diagnóstico Personalizado', 'Personalized Diagnostic')}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>
              {t('Teste de Nivelamento em Python', 'Python Placement Test')}
            </h1>

            <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              {t(
                'Já tem experiência com programação ou Python? Faça nosso diagnóstico em 10 minutos. Avaliaremos seus conhecimentos para que você comece exatamente no módulo mais desafiador e relevante para você.',
                'Already have experience with programming or Python? Take our 10-minute diagnostic. We will assess your knowledge so you can jump right to the most relevant module.'
              )}
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
              <div className="p-3.5 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-center gap-1.5 text-indigo-500 mb-1">
                  <Target size={18} />
                </div>
                <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                  15 {t('Questões', 'Questions')}
                </div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {t('Práticas & Código', 'Practice & Code')}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-center gap-1.5 text-purple-500 mb-1">
                  <Clock size={18} />
                </div>
                <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                  ~10 min
                </div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {t('No seu ritmo', 'At your pace')}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-1">
                  <LockOpen size={18} />
                </div>
                <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                  {t('Desbloqueio', 'Unlock')}
                </div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {t('Pule módulos', 'Skip modules')}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                <div className="flex items-center justify-center gap-1.5 text-emerald-500 mb-1">
                  <Award size={18} />
                </div>
                <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                  +100 XP
                </div>
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  {t('Conquista Bússola', 'Compass Badge')}
                </div>
              </div>
            </div>

            {/* Previous completion alert */}
            {progress.placementCompleted && (
              <div
                className="max-w-xl mx-auto mb-8 p-4 rounded-2xl border flex items-center justify-between text-left"
                style={{
                  background: 'rgba(34,197,94,0.08)',
                  borderColor: 'rgba(34,197,94,0.3)',
                }}
              >
                <div>
                  <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wide">
                    {t('Nivelamento Anteriormente Concluído', 'Placement Previously Completed')}
                  </div>
                  <div className="text-sm font-bold mt-0.5" style={{ color: 'var(--foreground)' }}>
                    {t('Nota', 'Score')}: {progress.placementScore}/{progress.placementTotal || 15} · {t('Nível', 'Level')}: {progress.placementLevel?.toUpperCase()}
                  </div>
                </div>
                <Link
                  href={progress.placementRecommendedModule ? `/modulos/${progress.placementRecommendedModule}` : '/modulos'}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: '#22c55e' }}
                >
                  {t('Ir para o Módulo', 'Go to Module')}
                </Link>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setMode('testing')}
                className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 text-base"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  boxShadow: '0 10px 30px rgba(99,102,241,0.35)',
                }}
              >
                <Compass size={20} />
                {progress.placementCompleted
                  ? t('Refazer Teste de Nivelamento', 'Retake Placement Test')
                  : t('Iniciar Teste de Nivelamento', 'Start Placement Test')}
              </button>

              <Link
                href="/modulos"
                className="px-6 py-4 rounded-2xl font-semibold transition-colors border text-sm"
                style={{
                  background: 'var(--card)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--border)',
                }}
              >
                {t('Prefiro Começar do Zero', 'I Prefer to Start from Zero')}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* 2. TESTING SCREEN                                    */}
      {/* ==================================================== */}
      {mode === 'testing' && currentQuestion && (
        <div className="space-y-6 animate-fadeIn">
          {/* Top Bar with Progress */}
          <div
            className="rounded-2xl p-5 border shadow-sm"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    color: 'var(--primary)',
                  }}
                >
                  {currentQuestion.categoryLabel[language as 'pt' | 'en'] || currentQuestion.categoryLabel.pt}
                </span>

                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    currentQuestion.difficulty === 'easy'
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : currentQuestion.difficulty === 'medium'
                      ? 'bg-amber-500/10 text-amber-500'
                      : 'bg-rose-500/10 text-rose-500'
                  }`}
                >
                  {currentQuestion.difficulty === 'easy'
                    ? t('Fácil', 'Easy')
                    : currentQuestion.difficulty === 'medium'
                    ? t('Médio', 'Medium')
                    : t('Desafiador', 'Hard')}
                </span>
              </div>

              <div className="text-sm font-bold" style={{ color: 'var(--muted-foreground)' }}>
                {t('Questão', 'Question')} <span style={{ color: 'var(--primary)' }}>{currentIndex + 1}</span> / {totalQuestions}
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progressPct}%`,
                  background: 'linear-gradient(to right, #6366f1, #a855f7)',
                }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div
            className="rounded-3xl p-6 md:p-8 border shadow-md"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            {/* Question prompt */}
            <h2 className="text-xl md:text-2xl font-bold mb-5 leading-snug" style={{ color: 'var(--foreground)' }}>
              {language === 'en' ? currentQuestion.questionEn : currentQuestion.question}
            </h2>

            {/* Code Snippet if applicable */}
            {currentQuestion.codeSnippet && (
              <div className="rounded-2xl overflow-hidden mb-6 border" style={{ borderColor: '#334155' }}>
                <div
                  className="flex items-center justify-between px-4 py-2 border-b text-xs font-mono"
                  style={{ background: '#0f172a', borderColor: '#334155', color: '#94a3b8' }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2">script.py</span>
                  </div>
                  <span>Python 3</span>
                </div>
                <pre
                  className="p-4 text-sm font-mono overflow-x-auto leading-relaxed"
                  style={{ background: '#1e293b', color: '#f8fafc' }}
                >
                  <code>{currentQuestion.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Options */}
            <div className="space-y-3">
              {(language === 'en' ? currentQuestion.optionsEn : currentQuestion.options).map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestion.id] === idx;
                const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                        : 'hover:border-indigo-500/40 hover:bg-white/5'
                    }`}
                    style={{
                      background: isSelected ? 'rgba(99,102,241,0.08)' : 'var(--muted)',
                      borderColor: isSelected ? 'var(--primary)' : 'var(--border)',
                    }}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md'
                          : 'border'
                      }`}
                      style={{
                        background: isSelected ? undefined : 'var(--card)',
                        borderColor: 'var(--border)',
                        color: isSelected ? 'white' : 'var(--muted-foreground)',
                      }}
                    >
                      {isSelected ? <Check size={16} /> : optionLetter}
                    </div>

                    <span
                      className={`flex-1 text-sm md:text-base font-medium ${
                        isSelected ? 'font-semibold' : ''
                      }`}
                      style={{ color: isSelected ? 'var(--foreground)' : 'var(--foreground)' }}
                    >
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed border"
                style={{
                  background: 'var(--muted)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--border)',
                }}
              >
                <ArrowLeft size={16} />
                {t('Anterior', 'Previous')}
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion.id] === undefined}
                className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                }}
              >
                {currentIndex === totalQuestions - 1
                  ? t('Finalizar e Ver Resultado', 'Finish and See Result')
                  : t('Próxima Questão', 'Next Question')}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* 3. RESULT & DIAGNOSTIC SCREEN                        */}
      {/* ==================================================== */}
      {mode === 'result' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header Diagnostic Card */}
          <div
            className="rounded-3xl p-8 md:p-10 text-center border relative overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, var(--card), var(--muted))',
              borderColor: 'var(--border)',
            }}
          >
            {/* Badge Icon */}
            <div className="text-6xl mb-3 animate-bounce">{resultData.tier.badge}</div>

            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3"
              style={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: 'var(--primary)',
              }}
            >
              <Award size={14} />
              {t('Diagnóstico Concluído', 'Diagnostic Completed')}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: 'var(--foreground)' }}>
              {language === 'en' ? resultData.tier.titleEn : resultData.tier.titlePt}
            </h1>

            <p className="text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              {language === 'en' ? resultData.tier.summaryEn : resultData.tier.summaryPt}
            </p>

            {/* Score Pill */}
            <div
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border font-bold text-lg mb-8"
              style={{
                background: 'rgba(99,102,241,0.08)',
                borderColor: 'rgba(99,102,241,0.3)',
                color: 'var(--primary)',
              }}
            >
              <span>{resultData.score} / {resultData.total} {t('acertos', 'correct')}</span>
              <span>·</span>
              <span>{resultData.percentage}%</span>
            </div>

            {/* Category Performance Breakdown */}
            <div className="max-w-2xl mx-auto text-left space-y-3 mb-8 p-6 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>
                {t('Desempenho por Habilidade', 'Skill Breakdown')}
              </h3>

              {Object.entries(resultData.categoryStats).map(([key, stat]) => {
                const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                return (
                  <div key={key}>
                    <div className="flex items-center justify-between text-xs font-medium mb-1">
                      <span style={{ color: 'var(--foreground)' }}>
                        {stat.label[language as 'pt' | 'en'] || stat.label.pt}
                      </span>
                      <span style={{ color: 'var(--muted-foreground)' }}>
                        {stat.correct}/{stat.total} ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${pct}%`,
                          background:
                            pct === 100
                              ? '#22c55e'
                              : pct >= 60
                              ? 'linear-gradient(to right, #6366f1, #a855f7)'
                              : '#f59e0b',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recommended Module Card */}
            {recommendedModule && (
              <div
                className="max-w-2xl mx-auto p-6 rounded-3xl border text-left relative overflow-hidden mb-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.05), rgba(168,85,247,0.08))',
                  borderColor: 'rgba(99,102,241,0.4)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${recommendedModule.color} shrink-0 text-white shadow-md`}
                  >
                    {recommendedModule.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-indigo-500 uppercase tracking-wide mb-1">
                      🎯 {t('Ponto de Partida Recomendado', 'Recommended Starting Point')}
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                      {language === 'en' ? recommendedModule.titleEn : recommendedModule.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--muted-foreground)' }}>
                      {language === 'en' ? recommendedModule.descriptionEn : recommendedModule.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>
                      <span>{recommendedModule.lessons.length} {t('aulas', 'lessons')}</span>
                      <span>·</span>
                      <span>{recommendedModule.estimatedHours}h</span>
                      <span>·</span>
                      <span className="text-indigo-500">+{recommendedModule.xpReward} XP</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Success message banner upon unlock */}
            {unlockedSuccess && (
              <div
                className="max-w-md mx-auto mb-6 p-4 rounded-2xl border flex items-center justify-center gap-2 text-sm font-bold animate-pulse"
                style={{
                  background: 'rgba(34,197,94,0.1)',
                  borderColor: '#22c55e',
                  color: '#22c55e',
                }}
              >
                <CheckCircle2 size={18} />
                {t('Trilha atualizada! Redirecionando...', 'Track unlocked! Redirecting...')}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {resultData.tier.unlockModuleOrder > 1 && !unlockedSuccess && (
                <button
                  onClick={handleUnlockAndGo}
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 text-base"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    boxShadow: '0 8px 30px rgba(34,197,94,0.35)',
                  }}
                >
                  <LockOpen size={18} />
                  {t(
                    `Desbloquear até Módulo ${resultData.tier.unlockModuleOrder} e Iniciar`,
                    `Unlock Up to Module ${resultData.tier.unlockModuleOrder} & Start`
                  )}
                </button>
              )}

              <Link
                href={recommendedModule ? `/modulos/${recommendedModule.slug}` : '/modulos'}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-white transition-all hover:scale-105 active:scale-95 text-sm"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                }}
              >
                <BookOpen size={16} />
                {t('Ir para o Módulo Recomendado', 'Go to Recommended Module')}
              </Link>

              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-5 py-4 rounded-2xl font-semibold transition-colors border text-sm"
                style={{
                  background: 'var(--card)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--border)',
                }}
              >
                <RotateCcw size={15} />
                {t('Refazer Teste', 'Retake Test')}
              </button>

              <Link
                href="/roadmap"
                className="flex items-center gap-2 px-5 py-4 rounded-2xl font-semibold transition-colors border text-sm"
                style={{
                  background: 'var(--card)',
                  color: 'var(--muted-foreground)',
                  borderColor: 'var(--border)',
                }}
              >
                <Compass size={15} />
                {t('Ver Roadmap', 'View Roadmap')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
