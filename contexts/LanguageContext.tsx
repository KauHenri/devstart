'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (pt: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = 'devstart_lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved === 'pt' || saved === 'en') {
        setLanguageState(saved);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const t = (pt: string, en: string) => (language === 'pt' ? pt : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
