'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Globe, Code2, LayoutDashboard, Map, Trophy, Zap } from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLevelProgress } from '@/lib/progress';
import { useState, useEffect } from 'react';

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const { progress } = useProgress();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const levelData = getLevelProgress(progress.xp);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        background: 'color-mix(in srgb, var(--background) 90%, transparent)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Code2 size={16} className="text-white" />
          </div>
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            DevStart
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="/modulos" icon={<Code2 size={15} />}>
            {t('Módulos', 'Modules')}
          </NavLink>
          <NavLink href="/roadmap" icon={<Map size={15} />}>
            Roadmap
          </NavLink>
          <NavLink href="/dashboard" icon={<LayoutDashboard size={15} />}>
            Dashboard
          </NavLink>
          <NavLink href="/desafios" icon={<Zap size={15} />}>
            {t('Desafios', 'Challenges')}
          </NavLink>
          <NavLink href="/conquistas" icon={<Trophy size={15} />}>
            {t('Conquistas', 'Achievements')}
          </NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          {/* XP Bar + Level */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>
              {t('Nv.', 'Lv.')}{progress.level}
            </div>
            <div className="w-24 h-2 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${levelData.percentage}%`,
                  background: 'linear-gradient(to right, #6366f1, #a855f7)',
                }}
              />
            </div>
            <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
              {progress.xp} XP
            </div>
          </div>

          {/* Streak */}
          {progress.streak > 0 && (
            <div className="hidden sm:flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full"
              style={{ background: 'var(--muted)', color: 'var(--foreground)' }}>
              🔥 {progress.streak}
            </div>
          )}

          {/* Language toggle */}
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-1 text-xs px-2 py-1.5 rounded-lg transition-colors hover:opacity-80"
            style={{ background: 'var(--muted)', color: 'var(--muted-foreground)' }}
            title={t('Mudar para Inglês', 'Change to Portuguese')}
          >
            <Globe size={14} />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg transition-colors hover:opacity-80"
              style={{ background: 'var(--muted)', color: 'var(--muted-foreground)' }}
              title={t('Alternar tema', 'Toggle theme')}
            >
              {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
      style={{ color: 'var(--muted-foreground)' }}
    >
      {icon}
      {children}
    </Link>
  );
}
