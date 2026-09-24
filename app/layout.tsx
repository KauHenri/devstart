import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { AIChat } from "@/components/ai/AIChat";
import { AchievementToast } from "@/components/gamification/AchievementToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevStart — Aprenda Programação do Zero ao Avançado",
  description:
    "Plataforma interativa de aprendizado de programação com Python, exercícios práticos, desafios, projetos reais e assistente de IA. Aprenda programação do zero ao mercado de trabalho.",
  keywords: ["programação", "python", "aprender programação", "curso python", "lógica de programação"],
  authors: [{ name: "DevStart" }],
  openGraph: {
    title: "DevStart — Aprenda Programação",
    description: "Do zero ao avançado com Python, exercícios e IA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <ThemeProvider>
          <LanguageProvider>
            <ProgressProvider>
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <AIChat />
              <AchievementToast />
            </ProgressProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
