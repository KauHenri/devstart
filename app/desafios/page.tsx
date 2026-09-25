'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  Clock,
  Trophy,
  Play,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { CodeEditor } from '@/components/editor/CodeEditor';

interface TimedChallenge {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimitMinutes: number;
  xpReward: number;
  starterCode: string;
  expectedGoal: string;
  expectedGoalEn?: string;
  validate?: (output: string) => boolean;
}

const CHALLENGES: TimedChallenge[] = [
  {
    id: 'ch-1',
    title: 'Corrida dos Pares',
    titleEn: 'Race of Evens',
    description: 'Escreva um código que imprima todos os números pares de 1 até 20, um por linha.',
    descriptionEn: 'Write code that prints all even numbers from 1 to 20, one per line.',
    difficulty: 'easy',
    timeLimitMinutes: 5,
    xpReward: 80,
    starterCode: `# Imprima os números pares de 1 a 20 (um por linha)
for num in range(1, 21):
    # Complete aqui com if para verificar se o número é par
    pass`,
    expectedGoal: 'Saída esperada: 2, 4, 6, ..., 20 (um por linha)',
    expectedGoalEn: 'Expected output: 2, 4, 6, ..., 20 (one per line)',
    validate: (output: string) => {
      const nums = output.trim().split(/\s+/).map(n => parseInt(n, 10)).filter(n => !isNaN(n));
      const expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      return nums.length === expected.length && nums.every((n, i) => n === expected[i]);
    },
  },
  {
    id: 'ch-2',
    title: 'Fatorial Relâmpago',
    titleEn: 'Lightning Factorial',
    description: 'Calcule o fatorial do número 6 (6! = 6 * 5 * 4 * 3 * 2 * 1 = 720) e exiba o resultado.',
    descriptionEn: 'Calculate the factorial of number 6 (6! = 6 * 5 * 4 * 3 * 2 * 1 = 720) and display the result.',
    difficulty: 'medium',
    timeLimitMinutes: 7,
    xpReward: 120,
    starterCode: `numero = 6
fatorial = 1

# Calcule o fatorial de 6 usando um laço for
# Complete aqui

print(f"O fatorial de {numero} é {fatorial}")`,
    expectedGoal: 'Saída esperada: O fatorial de 6 é 720',
    expectedGoalEn: 'Expected output: The factorial of 6 is 720',
    validate: (output: string) => output.includes('720'),
  },
  {
    id: 'ch-3',
    title: 'Inversor de Palavras',
    titleEn: 'Word Inverter',
    description: 'Crie uma variável com uma frase e exiba a frase invertida (de trás para frente).',
    descriptionEn: 'Create a variable with a phrase and display the reversed phrase (backward).',
    difficulty: 'easy',
    timeLimitMinutes: 4,
    xpReward: 70,
    starterCode: `frase = "DevStart"
# Inverta a string usando fatiamento [::-1] e guarde em 'invertida'
invertida = "" # Complete aqui

print(f"Invertida: {invertida}")`,
    expectedGoal: 'Saída esperada: Invertida: tratSveD',
    expectedGoalEn: 'Expected output: Inverted: tratSveD',
    validate: (output: string) => output.includes('tratSveD'),
  },
  {
    id: 'ch-4',
    title: 'Detector de Palíndromo',
    titleEn: 'Palindrome Detector',
    description: 'Verifique se a palavra "arara" é um palíndromo (se lê igual de trás pra frente). Se for, imprima "É palíndromo", senão "Não é palíndromo".',
    descriptionEn: 'Check if the word "arara" is a palindrome (reads the same forward and backward). If so, print "É palíndromo", else "Não é palíndromo".',
    difficulty: 'medium',
    timeLimitMinutes: 8,
    xpReward: 150,
    starterCode: `palavra = "arara"

# Verifique se palavra é igual a palavra invertida
# Se for, imprima "É palíndromo", senão "Não é palíndromo"
# Complete aqui
`,
    expectedGoal: 'Saída esperada: É palíndromo',
    expectedGoalEn: 'Expected output: É palíndromo',
    validate: (output: string) => {
      const clean = output.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return clean.includes('e palindromo') && !clean.includes('nao e');
    },
  },
];

interface FeedbackState {
  type: 'success' | 'warning' | 'error';
  message: string;
  alreadyCompleted?: boolean;
}

export default function DesafiosPage() {
  const { progress, completeChallenge } = useProgress();
  const { t, language } = useLanguage();
  const [selectedChallenge, setSelectedChallenge] = useState<TimedChallenge | null>(null);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);

  const completedList = progress.completedChallenges || [];
  const completedCount = completedList.filter(id => CHALLENGES.some(c => c.id === id)).length;
  const progressPercent = Math.round((completedCount / CHALLENGES.length) * 100);

  const selectedIndex = selectedChallenge
    ? CHALLENGES.findIndex(c => c.id === selectedChallenge.id)
    : -1;
  const nextChallenge =
    selectedIndex >= 0 && selectedIndex < CHALLENGES.length - 1
      ? CHALLENGES[selectedIndex + 1]
      : null;

  const handleRun = (code: string, output: string, error: string | null) => {
    if (!selectedChallenge) return;

    if (error) {
      setFeedback({
        type: 'error',
        message: t(
          'Ocorreu um erro na execução do código Python. Verifique o console acima.',
          'An error occurred during Python execution. Check the console above.'
        ),
      });
      return;
    }

    if (!output || output.trim() === '(sem saída)' || output.trim() === '(no output)') {
      setFeedback({
        type: 'warning',
        message: t(
          'O código executou mas não exibiu nada. Use print(...) para imprimir o resultado.',
          'Code executed but displayed nothing. Use print(...) to print the result.'
        ),
      });
      return;
    }

    const isValid = selectedChallenge.validate
      ? selectedChallenge.validate(output)
      : true;

    if (isValid) {
      const wasAlreadyDone = completedList.includes(selectedChallenge.id);
      if (!wasAlreadyDone) {
        completeChallenge(selectedChallenge.id, selectedChallenge.xpReward);
        setFeedback({
          type: 'success',
          message: t(
            `Desafio concluído com sucesso! +${selectedChallenge.xpReward} XP adicionados à sua conta!`,
            `Challenge completed successfully! +${selectedChallenge.xpReward} XP added to your account!`
          ),
          alreadyCompleted: false,
        });
      } else {
        setFeedback({
          type: 'success',
          message: t(
            'Desafio concluído com sucesso! (Você já resgatou o XP deste desafio anteriormente).',
            'Challenge completed successfully! (You already claimed this challenge XP).'
          ),
          alreadyCompleted: true,
        });
      }
    } else {
      setFeedback({
        type: 'warning',
        message: t(
          'O código rodou sem erros de sintaxe, mas a saída não confere com o objetivo esperado. Tente novamente!',
          'Code ran with no syntax errors, but output does not match expected result. Try again!'
        ),
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3"
              style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}
            >
              <Zap size={14} />
              {t('Modo Competição', 'Competition Mode')}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
              ⚡ {t('Desafios Cronometrados', 'Timed Challenges')}
            </h1>
            <p style={{ color: 'var(--muted-foreground)' }}>
              {t(
                'Teste sua agilidade e raciocínio lógico resolvendo problemas práticos contra o relógio para ganhar XP bônus.',
                'Test your speed and logic solving practical problems against the clock for bonus XP.'
              )}
            </p>
          </div>

          {/* Stats widget */}
          <div
            className="p-4 rounded-2xl border shrink-0 flex items-center gap-4"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Trophy size={20} />
            </div>
            <div>
              <div className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
                {t('Progresso dos Desafios', 'Challenges Progress')}
              </div>
              <div className="text-base font-bold" style={{ color: 'var(--foreground)' }}>
                {completedCount} / {CHALLENGES.length} {t('concluídos', 'completed')}
              </div>
              <div className="w-32 h-1.5 rounded-full overflow-hidden bg-slate-700 mt-1">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedChallenge ? (
        <div className="space-y-6">
          {/* Top navigation bar */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedChallenge(null);
                setFeedback(null);
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all hover:bg-white/5"
              style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
            >
              <ArrowLeft size={14} /> {t('Voltar para todos os desafios', 'Back to all challenges')}
            </button>

            {completedList.includes(selectedChallenge.id) && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <CheckCircle2 size={13} /> {t('Desafio Concluído', 'Challenge Completed')}
              </span>
            )}
          </div>

          <div
            className="p-6 rounded-2xl border"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-semibold mb-2 inline-block"
                  style={{
                    background:
                      selectedChallenge.difficulty === 'easy'
                        ? 'rgba(34,197,94,0.1)'
                        : 'rgba(234,179,8,0.1)',
                    color: selectedChallenge.difficulty === 'easy' ? '#22c55e' : '#eab308',
                  }}
                >
                  {selectedChallenge.difficulty === 'easy' ? t('🟢 Fácil', '🟢 Easy') : t('🟡 Médio', '🟡 Medium')}
                </span>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                  {(language === 'en' && selectedChallenge.titleEn) ? selectedChallenge.titleEn : selectedChallenge.title}
                </h2>
                <p className="mt-1" style={{ color: 'var(--muted-foreground)' }}>
                  {(language === 'en' && selectedChallenge.descriptionEn) ? selectedChallenge.descriptionEn : selectedChallenge.description}
                </p>
              </div>

              <div className="text-right shrink-0">
                <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: '#f59e0b' }}>
                  <Clock size={16} /> {selectedChallenge.timeLimitMinutes} min
                </div>
                <div className="text-xs font-bold mt-1" style={{ color: 'var(--primary)' }}>
                  {completedList.includes(selectedChallenge.id) ? (
                    <span className="text-emerald-400">+{selectedChallenge.xpReward} XP ({t('Resgatado', 'Claimed')})</span>
                  ) : (
                    <span>+{selectedChallenge.xpReward} XP</span>
                  )}
                </div>
              </div>
            </div>

            <div
              className="p-3 rounded-xl text-xs font-mono mb-4 border"
              style={{ background: 'var(--muted)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
            >
              🎯 {(language === 'en' && selectedChallenge.expectedGoalEn) ? selectedChallenge.expectedGoalEn : selectedChallenge.expectedGoal}
            </div>

            {/* Monaco + Pyodide */}
            <CodeEditor
              initialCode={selectedChallenge.starterCode}
              height="260px"
              fileName={`${selectedChallenge.id}.py`}
              onRun={handleRun}
            />

            {/* Execution / Validation Feedback */}
            {feedback && (
              <div className="mt-5">
                {feedback.type === 'success' && (
                  <div
                    className="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    style={{ background: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={22} />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-emerald-400">
                          {feedback.alreadyCompleted
                            ? t('Excelente prática!', 'Great practice!')
                            : t('Parabéns! Desafio concluído!', 'Congratulations! Challenge completed!')}
                        </div>
                        <p className="text-xs text-slate-300 mt-0.5">{feedback.message}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => {
                          setSelectedChallenge(null);
                          setFeedback(null);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-1.5 hover:bg-white/10"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          borderColor: 'var(--border)',
                          color: 'var(--foreground)',
                        }}
                      >
                        <ArrowLeft size={14} /> {t('Voltar aos Desafios', 'Back to Challenges')}
                      </button>

                      {nextChallenge && (
                        <button
                          onClick={() => {
                            setSelectedChallenge(nextChallenge);
                            setFeedback(null);
                          }}
                          className="px-4 py-2 rounded-xl text-xs font-semibold text-white shadow transition-all hover:scale-105 flex items-center gap-1.5"
                          style={{
                            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                          }}
                        >
                          {t('Próximo Desafio', 'Next Challenge')} <ArrowRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {feedback.type === 'warning' && (
                  <div
                    className="p-4 rounded-xl border flex items-center gap-3 text-xs"
                    style={{ background: 'rgba(234,179,8,0.1)', borderColor: 'rgba(234,179,8,0.3)', color: '#facc15' }}
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{feedback.message}</span>
                  </div>
                )}

                {feedback.type === 'error' && (
                  <div
                    className="p-4 rounded-xl border flex items-center gap-3 text-xs"
                    style={{ background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.3)', color: '#f87171' }}
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{feedback.message}</span>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Return Bar when not in success state */}
            {(!feedback || feedback.type !== 'success') && (
              <div className="flex items-center justify-between pt-4 mt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => {
                    setSelectedChallenge(null);
                    setFeedback(null);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:bg-white/5"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  <ArrowLeft size={14} /> {t('Voltar para a lista de desafios', 'Back to challenge list')}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {CHALLENGES.map(ch => {
            const isDone = completedList.includes(ch.id);
            return (
              <div
                key={ch.id}
                className="p-5 rounded-2xl border transition-all hover:border-indigo-500/40 flex flex-col justify-between"
                style={{
                  background: 'var(--card)',
                  borderColor: isDone ? 'rgba(34,197,94,0.4)' : 'var(--border)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background:
                            ch.difficulty === 'easy'
                              ? 'rgba(34,197,94,0.1)'
                              : 'rgba(234,179,8,0.1)',
                          color: ch.difficulty === 'easy' ? '#22c55e' : '#eab308',
                        }}
                      >
                        {ch.difficulty === 'easy' ? t('🟢 Fácil', '🟢 Easy') : t('🟡 Médio', '🟡 Medium')}
                      </span>
                      {isDone && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle2 size={11} /> {t('Concluído', 'Done')}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      <Clock size={12} /> {ch.timeLimitMinutes} min
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                    {(language === 'en' && ch.titleEn) ? ch.titleEn : ch.title}
                  </h3>
                  <p className="text-sm line-clamp-2 mb-4" style={{ color: 'var(--muted-foreground)' }}>
                    {(language === 'en' && ch.descriptionEn) ? ch.descriptionEn : ch.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-xs font-semibold" style={{ color: isDone ? '#22c55e' : 'var(--primary)' }}>
                    {isDone ? `+${ch.xpReward} XP (${t('Resgatado', 'Claimed')})` : `+${ch.xpReward} XP`}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedChallenge(ch);
                      setFeedback(null);
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg transition-transform hover:scale-105"
                    style={{
                      background: isDone
                        ? 'rgba(255,255,255,0.08)'
                        : 'linear-gradient(135deg, #6366f1, #a855f7)',
                      color: isDone ? 'var(--foreground)' : 'white',
                      border: isDone ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    {isDone ? (
                      <>
                        <RotateCcw size={13} className="text-emerald-400" /> {t('Praticar Novamente', 'Practice Again')}
                      </>
                    ) : (
                      <>
                        <Play size={13} /> {t('Iniciar Desafio', 'Start Challenge')}
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
