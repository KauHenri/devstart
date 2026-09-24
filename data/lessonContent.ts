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

// Aggregated lesson content for the DevStart platform
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

export function getLessonContent(lessonId: string): string {
  return (
    LESSON_CONTENT[lessonId] ||
    `
# Aula em Revisão 🔍

O material desta aula está passando pela revisão final de formatação.

Você pode:
- 💬 Conversar com o **DevBot** para explorar o tópico da aula
- 📖 Revisar os conceitos das aulas anteriores
- 🏋️ Resolver os exercícios e desafios práticos disponíveis
`
  );
}
