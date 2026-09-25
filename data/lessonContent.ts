import { MODULO_1_CONTENT } from './content/modulo1';
import { MODULO_2_CONTENT } from './content/modulo2';
import { MODULO_3_CONTENT } from './content/modulo3';
import { MODULO_4_CONTENT } from './content/modulo4';
import { MODULO_5_CONTENT } from './content/modulo5';
import { MODULO_6_CONTENT } from './content/modulo6';
import { MODULO_7_CONTENT } from './content/modulo7';
import { MODULO_8_CONTENT } from './content/modulo8';
import { MODULO_9_CONTENT } from './content/modulo9';
import { MODULO_10_CONTENT } from './content/modulo10';

import { MODULO_1_CONTENT_EN } from './content/modulo1_en';
import { MODULO_2_CONTENT_EN } from './content/modulo2_en';
import { MODULO_3_CONTENT_EN } from './content/modulo3_en';
import { MODULO_4_CONTENT_EN } from './content/modulo4_en';
import { MODULO_5_CONTENT_EN } from './content/modulo5_en';
import { MODULO_6_CONTENT_EN } from './content/modulo6_en';
import { MODULO_7_CONTENT_EN } from './content/modulo7_en';
import { MODULO_8_CONTENT_EN } from './content/modulo8_en';
import { MODULO_9_CONTENT_EN } from './content/modulo9_en';
import { MODULO_10_CONTENT_EN } from './content/modulo10_en';

// Aggregated Portuguese lesson content for the DevStart platform
export const LESSON_CONTENT: Record<string, string> = {
  ...MODULO_1_CONTENT,
  ...MODULO_2_CONTENT,
  ...MODULO_3_CONTENT,
  ...MODULO_4_CONTENT,
  ...MODULO_5_CONTENT,
  ...MODULO_6_CONTENT,
  ...MODULO_7_CONTENT,
  ...MODULO_8_CONTENT,
  ...MODULO_9_CONTENT,
  ...MODULO_10_CONTENT,
};

// Aggregated English lesson content for the DevStart platform
export const LESSON_CONTENT_EN: Record<string, string> = {
  ...MODULO_1_CONTENT_EN,
  ...MODULO_2_CONTENT_EN,
  ...MODULO_3_CONTENT_EN,
  ...MODULO_4_CONTENT_EN,
  ...MODULO_5_CONTENT_EN,
  ...MODULO_6_CONTENT_EN,
  ...MODULO_7_CONTENT_EN,
  ...MODULO_8_CONTENT_EN,
  ...MODULO_9_CONTENT_EN,
  ...MODULO_10_CONTENT_EN,
};

export function getLessonContent(lessonId: string, language: 'pt' | 'en' = 'pt'): string {
  if (language === 'en') {
    const enContent = LESSON_CONTENT_EN[lessonId];
    if (enContent) return enContent;
  }

  const ptContent = LESSON_CONTENT[lessonId];
  if (ptContent) return ptContent;

  if (language === 'en') {
    return `
# Lesson Under Review 🔍

The didactic material for this lesson is currently undergoing final formatting review.

You can:
- 💬 Chat with **DevBot** to explore this lesson's topic
- 📖 Review concepts from previous lessons
- 🏋️ Solve practical exercises and challenges available below
`;
  }

  return `
# Aula em Revisão 🔍

O material desta aula está passando pela revisão final de formatação.

Você pode:
- 💬 Conversar com o **DevBot** para explorar o tópico da aula
- 📖 Revisar os conceitos das aulas anteriores
- 🏋️ Resolver os exercícios e desafios práticos disponíveis
`;
}
