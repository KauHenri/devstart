# 🚀 DevStart — Plataforma Gamificada de Aprendizado de Python

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Python WebAssembly](https://img.shields.io/badge/Pyodide-WASM-3776AB?style=for-the-badge&logo=python)
![Gemini AI](https://img.shields.io/badge/Google_Gemini-2.5_Flash-8E75B2?style=for-the-badge&logo=google)

Uma plataforma educacional completa, densa e interativa para aprender **Lógica de Programação e Python** do zero absoluto até o mercado de trabalho, com execução de código em tempo real no navegador via WebAssembly, tutor de IA integrado e gamificação completa.

</div>

---

## ✨ Funcionalidades Principais

- 🐍 **Python Real no Navegador (Pyodide / WASM):** Execute código Python diretamente no browser sem precisar de backend ou instalação local.
- 💻 **Editor Monaco Integrado:** A mesma experiência de código do VS Code, com syntax highlighting, numeração de linhas e atalhos.
- 🤖 **DevBot (Tutor com IA):** Assistente pedagógico flutuante alimentado pelo **Google Gemini**, contextualizado com o nível, aulas concluídas e XP do aluno.
- 🎮 **Gamificação Completa:**
  - Sistema progressivo de **XP e 11 Níveis** (de *Iniciante* a *Lenda*).
  - **Streak diário** (dias consecutivos de estudo).
  - **14 Conquistas desbloqueáveis** com toasts animados.
  - **Dashboard pessoal** com métricas de estudo e progresso.
  - **Desafios cronometrados** com bônus de XP.
- 🎯 **Validação Real de Exercícios:** O terminal compara a saída real com a saída esperada do gabarito, com dicas graduais e exibição de solução caso o aluno fique travado.
- 🧠 **Quizzes Interativos de Fixação:** Perguntas conceituais com correção instantânea e explicações detalhadas em cada módulo.
- 🗺️ **Roadmap Visual:** Visualização clara de toda a trilha de aprendizado do zero ao nível profissional.
- 🌓 **Dark / Light Mode:** Suporte nativo a temas claro e escuro.

---

## 📚 Trilha de Conteúdo (10 Módulos & 60 Aulas)

1. 🧠 **Lógica de Programação:** Algoritmos, variáveis, operadores, decisões, laços, fluxogramas e pseudocódigo.
2. 🐍 **Python Básico:** Tipagem dinâmica, coerção de tipos, métodos de strings, f-strings e I/O.
3. 🔀 **Estruturas de Controle:** `if/elif/else`, operadores lógicos, `while`, `for`, `break/continue` e mini-calculadora.
4. 📦 **Estruturas de Dados:** Listas, métodos, tuplas, dicionários, sets e list comprehensions.
5. ⚙️ **Funções & Modularização:** `def`, retorno múltiplo, `*args`, `**kwargs`, escopo LEGB, closures, lambdas e recursão.
6. 🏗️ **Programação Orientada a Objetos (POO):** Classes, `self`, `__init__`, dunder methods, encapsulamento (`@property`), herança (`super()`) e polimorfismo.
7. 📁 **Arquivos e Tratamento de Erros:** `try/except/else/finally`, exceções personalizadas, `with open`, CSV e JSON.
8. 📊 **Bibliotecas Python:** `pip`, ambientes virtuais (`venv`), NumPy, Pandas, Matplotlib e consumo de APIs com `requests`.
9. 💼 **Mercado de Trabalho & Boas Práticas:** Git & GitHub, Clean Code, PEP 8, Type Hints, técnicas de debugging e preparação para entrevistas.
10. 🚀 **Projetos Finais Completos:**
    - Gerenciador de Tarefas (CLI + JSON)
    - Calculadora Científica e Financeira com Log
    - Consumidor de API Web com Cotações em Tempo Real
    - Pipeline ETL de Vendas com Pandas
    - Automação de Arquivos do Sistema Operacional

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + [Lucide Icons](https://lucide.dev/)
- **Editor de Código:** [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react)
- **Engine Python:** [Pyodide](https://pyodide.org/) (Python 3.12 compilado para WebAssembly)
- **Inteligência Artificial:** [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) (Google Gemini Flash)
- **Markdown:** [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm)

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Chave de API do Google Gemini (gratuita no [Google AI Studio](https://aistudio.google.com/app/apikey))

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/KauHenri/devstart.git
   cd devstart
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto com sua API Key:
   ```env
   GEMINI_API_KEY=sua_chave_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000).

---

## 📦 Build para Produção

```bash
npm run build
npm start
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
