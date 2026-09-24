'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '@/lib/types';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';

const SYSTEM_PROMPT = `Você é o DevBot, assistente de IA da plataforma DevStart — uma plataforma de aprendizado de programação em Python. 

Seu papel é ser um tutor pedagógico excepcional. Siga estas diretrizes:

1. ENSINE, não resolva: Quando o aluno pedir ajuda em exercícios, dê dicas e guie o raciocínio. Nunca dê a resposta direta. Use perguntas socráticas.
2. ADAPTE sua linguagem ao nível do aluno (iniciante por padrão).
3. USE exemplos simples, analogias do dia a dia e metáforas para explicar conceitos difíceis.
4. ELOGIE o progresso e incentive quando o aluno acertar.
5. Quando mostrar código Python, use blocos de código markdown.
6. Responda sempre em português (a menos que o aluno pergunte em inglês).
7. Seja amigável, paciente e encorajador — nunca seja condescendente.
8. Contexto: o aluno está aprendendo Lógica de Programação e Python do zero ao avançado.

Lembre-se: seu objetivo é que o aluno ENTENDA, não apenas copie respostas.`;

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { progress } = useProgress();
  const { t } = useLanguage();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: ChatMessage = {
        id: 'greeting',
        role: 'assistant',
        content: `Olá! 👋 Eu sou o **DevBot**, seu assistente de programação!\n\nEstou aqui para te ajudar a aprender Python e Lógica de Programação. Pode me perguntar sobre:\n\n- 🐍 Conceitos de Python\n- 🧠 Lógica e algoritmos\n- 💡 Dicas nos exercícios (sem spoilers!)\n- 🐛 Como corrigir erros no seu código\n\nO que você quer aprender hoje?`,
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages.filter(m => !m.content.startsWith('❌ Ops!')), userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
          systemPrompt: SYSTEM_PROMPT,
          context: {
            level: progress.level,
            completedLessons: progress.completedLessons.length,
            xp: progress.xp,
          },
        }),
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.text,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '❌ Ops! Ocorreu um erro ao conectar com a IA. Verifique se a API Key do Gemini está configurada corretamente nas variáveis de ambiente.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
          }}
          title="Abrir assistente de IA"
        >
          <Bot size={24} className="text-white" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: '380px',
            height: isMinimized ? '64px' : '520px',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            transition: 'height 0.3s ease',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">DevBot</div>
                <div className="text-white/70 text-xs">Assistente de IA</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{
                        background: message.role === 'user'
                          ? 'linear-gradient(135deg, #6366f1, #a855f7)'
                          : 'var(--muted)',
                      }}
                    >
                      {message.role === 'user'
                        ? <User size={14} className="text-white" />
                        : <Bot size={14} style={{ color: 'var(--primary)' }} />
                      }
                    </div>
                    <div
                      className="max-w-[80%] px-3 py-2 rounded-xl text-sm"
                      style={{
                        background: message.role === 'user'
                          ? 'linear-gradient(135deg, #6366f1, #a855f7)'
                          : 'var(--muted)',
                        color: message.role === 'user' ? 'white' : 'var(--foreground)',
                        whiteSpace: 'pre-wrap',
                        lineHeight: '1.5',
                      }}
                    >
                      <FormattedMessage content={message.content} />
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'var(--muted)' }}
                    >
                      <Bot size={14} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div
                      className="px-3 py-2 rounded-xl text-sm flex items-center gap-2"
                      style={{ background: 'var(--muted)', color: 'var(--muted-foreground)' }}
                    >
                      <Loader2 size={14} className="animate-spin" />
                      Pensando...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div
                className="p-3 border-t flex gap-2 items-end"
                style={{ borderColor: 'var(--border)' }}
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t('Pergunte algo sobre programação...', 'Ask something about programming...')}
                  rows={1}
                  className="flex-1 resize-none rounded-lg px-3 py-2 text-sm outline-none"
                  style={{
                    background: 'var(--muted)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                    maxHeight: '100px',
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-opacity disabled:opacity-40 shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

function FormattedMessage({ content }: { content: string }) {
  // Simple markdown-like formatting
  const parts = content.split(/(```[\s\S]*?```|`[^`]+`|\*\*[^*]+\*\*)/g);
  
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('```') && part.endsWith('```')) {
          const code = part.slice(3, -3).replace(/^python\n/, '');
          return (
            <pre key={i} className="mt-2 p-2 rounded-lg text-xs overflow-x-auto" style={{ background: '#1e293b', color: '#e2e8f0' }}>
              <code>{code}</code>
            </pre>
          );
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i} className="px-1 py-0.5 rounded text-xs" style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8' }}>{part.slice(1, -1)}</code>;
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
