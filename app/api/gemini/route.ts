import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === 'sua_chave_aqui') {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY não configurada no arquivo .env.local.' },
        { status: 500 }
      );
    }

    const { messages, systemPrompt, context } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Nenhuma mensagem enviada.' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const systemInstruction =
      systemPrompt +
      (context
        ? `\n\nContexto do aluno: Nível ${context.level}, ${context.completedLessons} aulas completadas, ${context.xp} XP total.`
        : '');

    // Prepare valid history for Gemini API:
    // 1. History must omit the last message (which is sent via sendMessage)
    // 2. History MUST start with role 'user' (cannot start with the initial bot greeting 'assistant' / 'model')
    const rawHistory = messages.slice(0, -1);
    const firstUserIndex = rawHistory.findIndex((m: { role: string }) => m.role === 'user');

    const history: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (firstUserIndex !== -1) {
      const sliced = rawHistory.slice(firstUserIndex);
      for (const msg of sliced) {
        const role = msg.role === 'assistant' ? 'model' : 'user';
        // Avoid two identical consecutive roles in history
        if (history.length > 0 && history[history.length - 1].role === role) {
          history[history.length - 1].parts[0].text += `\n${msg.content}`;
        } else {
          history.push({
            role,
            parts: [{ text: msg.content }],
          });
        }
      }
    }

    const lastMessage = messages[messages.length - 1];

    // Candidate models in order of stability and performance
    const candidateModels = ['gemini-2.5-flash', 'gemini-3.6-flash'];

    let lastError = null;
    for (const modelName of candidateModels) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction,
        });

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(lastMessage.content);
        const text = result.response.text();

        return NextResponse.json({ text });
      } catch (err) {
        console.warn(`Model ${modelName} failed, trying fallback:`, err);
        lastError = err;
      }
    }

    throw lastError;
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json(
      { error: 'Não foi possível obter resposta da IA no momento. Tente novamente em alguns segundos.' },
      { status: 500 }
    );
  }
}
