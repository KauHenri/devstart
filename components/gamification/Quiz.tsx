'use client';

import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizData {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
  xpReward: number;
}

export function Quiz({ quiz }: { quiz: QuizData }) {
  const { progress, addXP, completeLesson } = useProgress();
  const { t } = useLanguage();

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  
  const question = quiz.questions[currentQuestionIdx];
  const isCorrect = selectedOption === question?.correctIndex;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    
    if (idx === question.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < quiz.questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      // If they got at least half right, give XP and mark lesson complete
      const passed = score >= Math.ceil(quiz.questions.length / 2);
      if (passed && !progress.completedLessons.includes(quiz.lessonId)) {
        addXP(quiz.xpReward);
        completeLesson(quiz.lessonId, quiz.xpReward);
      }
    }
  };

  const passed = score >= Math.ceil(quiz.questions.length / 2);

  if (isFinished) {
    return (
      <div className="rounded-2xl p-8 border text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <div className="text-5xl mb-4">{passed ? '🎉' : '😅'}</div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
          {passed ? t('Excelente trabalho!', 'Excellent work!') : t('Quase lá!', 'Almost there!')}
        </h3>
        <p className="mb-6" style={{ color: 'var(--muted-foreground)' }}>
          {t(`Você acertou ${score} de ${quiz.questions.length} questões.`, `You got ${score} out of ${quiz.questions.length} questions right.`)}
        </p>
        
        {passed ? (
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-emerald-500" style={{ background: 'rgba(34,197,94,0.1)' }}>
            <CheckCircle2 /> {t('XP Resgatado!', 'XP Claimed!')} +{quiz.xpReward} XP
          </div>
        ) : (
          <button
            onClick={() => {
              setIsFinished(false);
              setCurrentQuestionIdx(0);
              setSelectedOption(null);
              setIsAnswered(false);
              setScore(0);
            }}
            className="px-6 py-3 rounded-xl font-semibold text-white transition-transform hover:scale-105"
            style={{ background: 'var(--primary)' }}
          >
            {t('Tentar Novamente', 'Try Again')}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      {/* Quiz Header */}
      <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2 font-bold" style={{ color: 'var(--foreground)' }}>
          <HelpCircle size={18} style={{ color: 'var(--primary)' }} />
          {t('Quiz de Revisão', 'Review Quiz')}
        </div>
        <div className="text-sm font-semibold" style={{ color: 'var(--muted-foreground)' }}>
          {currentQuestionIdx + 1} / {quiz.questions.length}
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--foreground)' }}>
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let btnStyle = { 
              background: 'transparent', 
              borderColor: 'var(--border)', 
              color: 'var(--foreground)' 
            };
            
            if (isAnswered) {
              if (idx === question.correctIndex) {
                // Correct answer is always green after answering
                btnStyle = { background: 'rgba(34,197,94,0.1)', borderColor: '#22c55e', color: '#22c55e' };
              } else if (idx === selectedOption) {
                // Wrong selected answer is red
                btnStyle = { background: 'rgba(239,68,68,0.1)', borderColor: '#ef4444', color: '#ef4444' };
              } else {
                btnStyle = { background: 'var(--muted)', borderColor: 'var(--border)', color: 'var(--muted-foreground)' };
              }
            } else if (selectedOption === idx) {
              btnStyle = { background: 'rgba(99,102,241,0.1)', borderColor: 'var(--primary)', color: 'var(--primary)' };
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className="w-full text-left p-4 rounded-xl border-2 transition-all hover:border-indigo-500/50 flex items-center justify-between"
                style={btnStyle}
              >
                <span>{opt}</span>
                {isAnswered && idx === question.correctIndex && <CheckCircle2 size={18} />}
                {isAnswered && idx === selectedOption && idx !== question.correctIndex && <XCircle size={18} />}
              </button>
            );
          })}
        </div>

        {/* Feedback & Next */}
        {isAnswered && (
          <div className="mt-6 p-4 rounded-xl border" style={{ 
            background: isCorrect ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
            borderColor: isCorrect ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)',
          }}>
            <h4 className="font-bold flex items-center gap-2 mb-1" style={{ color: isCorrect ? '#22c55e' : '#ef4444' }}>
              {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              {isCorrect ? t('Correto!', 'Correct!') : t('Incorreto!', 'Incorrect!')}
            </h4>
            <p className="text-sm mb-4" style={{ color: 'var(--foreground)' }}>
              {question.explanation}
            </p>
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-xl font-bold text-white transition-transform hover:scale-105 flex items-center gap-2"
              style={{ background: 'var(--primary)' }}
            >
              {currentQuestionIdx < quiz.questions.length - 1 ? t('Próxima', 'Next') : t('Finalizar Quiz', 'Finish Quiz')} 
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
