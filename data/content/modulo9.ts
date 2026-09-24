// Módulo 9: Engenharia de Software e Mercado de Trabalho - Conteúdo Didático Aprofundado

export const MODULO_9_CONTENT: Record<string, string> = {
  'l9-1': `
# Controle de Versão com Git e GitHub na Prática Profissional 🐙

Você pode ser o melhor programador do mundo com a sintaxe do Python; se não souber utilizar o **Git**, você não conseguirá trabalhar em nenhuma equipe de tecnologia profissional.

---

## 🧭 Git vs GitHub: Não Confunda!

* **Git:** É um software local de controle de versão distribuído que roda no seu terminal. Ele tira "fotografias" (*snapshots*) da história do seu código com data, hora e autor.
* **GitHub:** É uma plataforma em nuvem que hospeda seus repositórios Git, facilitando a colaboração em equipe, revisão de código e automações de CI/CD.

\`\`\`
       Seu Computador (Local)                         Nuvem (GitHub)
  ┌───────────────────────────────┐              ┌────────────────────────┐
  │ Área de Trabalho (Arquivos)   │              │ Repositório Remoto     │
  │              │                │              │ (origin/main)          │
  │       [git add]               │              └───────────▲────────────┘
  │              ▼                │                          │
  │ Área de Preparação (Staging)  │                          │
  │              │                │                          │
  │     [git commit]              │                          │
  │              ▼                │                          │
  │ Histórico Local (.git) ───────┼────────[git push]────────┘
  └───────────────────────────────┘
\`\`\`

---

## ⚡ Os 8 Comandos Essenciais do Dia a Dia

\`\`\`bash
# 1. Iniciar o rastreamento em uma pasta de projeto
git init

# 2. Consultar o estado dos arquivos modificados
git status

# 3. Adicionar arquivos alterados para a área de preparação (staging)
git add .

# 4. Criar um ponto na história com mensagem clara no tempo presente
git commit -m "Adiciona cálculo de frete por CEP no módulo de checkout"

# 5. Criar e navegar para uma nova branch (ramo de funcionalidade)
git checkout -b feature/autenticacao-jwt

# 6. Conectar o repositório local ao GitHub remoto
git remote add origin https://github.com/seu-usuario/seu-projeto.git

# 7. Enviar seus commits para o GitHub
git push -u origin feature/autenticacao-jwt

# 8. Atualizar seu repositório local com as alterações dos colegas de equipe
git pull origin main
\`\`\`

---

## 🛡️ O Arquivo \`.gitignore\`

Nunca suba para o GitHub:
* Senhas e chaves de API secretas (arquivos \`.env\`).
* A pasta do ambiente virtual (\`.venv/\`).
* Arquivos de cache do Python (\`__pycache__/\`).

Crie um arquivo chamado \`.gitignore\` na raiz do seu projeto contendo:
\`\`\`gitignore
.venv/
__pycache__/
*.pyc
.env
.DS_Store
\`\`\`
`,

  'l9-2': `
# Código Limpo (Clean Code) e Boas Práticas (PEP 8) 🧼

> *"Qualquer tolo pode escrever código que um computador entenda. Bons programadores escrevem código que humanos podem entender."* — Martin Fowler

Em empresas de tecnologia, você passa **10 vezes mais tempo lendo código antigo** do que escrevendo código novo. Um código limpo reduz bugs e acelera lançamentos de produtos.

---

## 🎯 As Regras de Ouro do Clean Code em Python

### 1. Nomes Significativos e Intencionais
\`\`\`python
# ❌ RUIM: Nomes enigmáticos que exigem ler o código para adivinhar
d = 86400
def p(l):
    return [x for x in l if x > 100]

# ✅ EXCELENTE: Código autoexplicativo
SEGUNDOS_POR_DIA = 86400
def filtrar_pedidos_com_frete_gratis(pedidos):
    LIMITE_FRETE_GRATIS = 100.0
    return [pedido for pedido in pedidos if pedido.valor > LIMITE_FRETE_GRATIS]
\`\`\`

### 2. Funções Pequenas com Responsabilidade Única (SRP)
Uma função deve fazer **uma única coisa**, e fazê-la de maneira impecável. Se sua função valida dados, grava no banco, envia email e formata relatório, ela precisa ser fatiada em 4 funções menores.

### 3. Anotações de Tipos (*Type Hints*)
Adicionadas a partir do Python 3.5, as anotações de tipo transformam a legibilidade em projetos corporativos e permitem que seu editor detecte erros antes mesmo de rodar o código:

\`\`\`python
def calcular_desconto(preco_base: float, percentual: float) -> float:
    """Calcula o valor final após dedução do percentual."""
    return preco_base * (1 - percentual / 100)
\`\`\`

### 4. Documentação com Docstrings (Google Style)
\`\`\`python
def transferir_fundos(origem_id: int, destino_id: int, valor: float) -> bool:
    """Efetua a transferência monetária entre duas contas cadastradas.

    Args:
        origem_id: Identificador único da conta de origem.
        destino_id: Identificador único da conta beneficiária.
        valor: Montante monetário a ser transferido em Reais (R$).

    Returns:
        True se a operação for concluída com sucesso.

    Raises:
        ValueError: Se o valor for negativo ou o saldo for insuficiente.
    """
    pass
\`\`\`
`,

  'l9-3': `
# Técnicas Profissionais de Debugging e Leitura de Tracebacks 🐛

Um programador Júnior que se depara com um erro no terminal costuma fechar os olhos e mudar linhas aleatórias de código na esperança de funcionar. 
Um programador Sênior **lê com calma o Traceback de baixo para cima**.

---

## 🔍 Como Ler um Traceback Python

O Traceback é a árvore genealógica de uma falha:

\`\`\`text
Traceback (most recent call last):
  File "app.py", line 42, in <module>
    processar_carrinho(meu_carrinho)
  File "app.py", line 28, in processar_carrinho
    total = calcular_total(carrinho.itens)
  File "app.py", line 15, in calcular_total
    return sum(item.preco for item in itens)
TypeError: unsupported operand type(s) for +: 'int' and 'str'
\`\`\`

1. **Olhe primeiro para a ÚLTIMA LINHA:** Ela revela exatamente **QUAL foi o erro** (\`TypeError\`) e o motivo explicativo (*tentativa de somar int com str*).
2. **Olhe para o arquivo e número da linha logo acima:** \`app.py\`, linha 15. Foi exatamente lá que a colisão aconteceu!

---

## 🛠️ O Depurador Interativo Nativo: \`breakpoint()\`

Esqueça ficar espalhando dezenas de \`print("aqui 1")\` e \`print("aqui 2")\` pelo seu código!
O Python possui o comando nativo **\`breakpoint()\`**, que pausa a execução do programa no meio do caminho e abre um console interativo (\`pdb\`) para você inspecionar as variáveis vivas na memória:

\`\`\`python
def processar_folha(funcionarios):
    for func in funcionarios:
        salario = func["salario"]
        beneficio = func["beneficio"]
        
        # O programa congelará aqui para você investigar!
        breakpoint()
        
        liquido = salario + beneficio
        print(f"{func['nome']}: R$ {liquido:.2f}")
\`\`\`

### Comandos Rápidos do Depurador (\`pdb\`):
* **\`p variavel\`**: Imprime (*print*) o valor atual daquela variável.
* **\`n\`**: Executa a próxima (*next*) linha de código.
* **\`s\`**: Entra (*step into*) para dentro da função que está sendo chamada.
* **\`c\`**: Continua (*continue*) a execução normal até o próximo breakpoint.
* **\`q\`**: Encerra (*quit*) a execução imediatamente.
`,

  'l9-4': `
# Construindo um Portfólio de Alto Impacto no GitHub 🌟

Os recrutadores técnicos e líderes de engenharia recebem centenas de currículos por semana. A forma mais rápida de se destacar é apresentar **projetos reais, funcionais e com documentação impecável**.

---

## 📁 A Anatomia do Repositório Perfeito

Um repositório que conquista entrevistas técnicas não é apenas um amontoado de arquivos \`.py\` jogados. Ele deve seguir este padrão:

\`\`\`
meu-projeto-automacao/
├── .github/workflows/      # Automações de teste (CI)
├── src/                    # Código fonte organizado
│   ├── __init__.py
│   ├── main.py
│   └── utils.py
├── tests/                  # Testes unitários comprovando que funciona
│   └── test_main.py
├── .gitignore              # Ignora ambientes virtuais e senhas
├── requirements.txt        # Dependências com versões fixadas
├── LICENSE                 # Licença open-source (MIT ou Apache 2.0)
└── README.md               # O cartão de visitas do seu projeto!
\`\`\`

---

## 📄 O Template Campeão de \`README.md\`

Seu arquivo README deve conter:
1. **Título com Badges:** Nome do projeto e badges de status (Python 3.12, License: MIT, Build: Passing).
2. **GIF Animado ou Captura de Tela:** Demonstração visual do programa rodando em 5 segundos.
3. **Problema que o Projeto Resolve:** Por que alguém usaria este software? Qual dor ele sana?
4. **Tecnologias Utilizadas:** Lista das bibliotecas e arquitetura.
5. **Guia Passo a Passo de Instalação e Execução:** Comandos de terminal copiáveis para qualquer pessoa clonar e rodar em 2 minutos.
6. **Autor:** Seu nome, LinkedIn e link para contato profissional.
`,

  'l9-5': `
# Como se Preparar e se Destacar em Entrevistas Técnicas 💼

A entrevista técnica é a barreira final entre você e a sua contratação como Desenvolvedor Python. Saber programar é apenas 50% da equação; os outros 50% são a sua **capacidade de comunicação e raciocínio estruturado**.

---

## 🧠 Como Abordar Desafios de Live Coding

Quando o entrevistador compartilhar a tela e pedir para você resolver um problema algorítmico ao vivo:

1. **NUNCA comece a codar imediatamente:** Respire e faça perguntas de clarificação sobre os casos de borda: *"Os números de entrada podem ser negativos?"*, *"A lista pode vir vazia?"*, *"Existe restrição de memória?"*.
2. **Pense em Voz Alta:** O avaliador não está apenas procurando a resposta correta; ele quer ver **como a sua mente organiza o problema**. Explique sua linha de raciocínio.
3. **Entregue Primeiro a Solução Força Bruta:** Resolva o problema de forma simples (mesmo que lenta). Diga: *"Podemos resolver assim em $O(n^2)$, e em seguida vamos otimizar com uma tabela hash para $O(n)$"*.
4. **Escreva Testes Mentais:** Antes de dizer que terminou, simule manualmente um caso de teste linha a linha na frente do entrevistador.

---

## 🗣️ O Método STAR para Perguntas Comportamentais

Quando perguntarem: *"Fale sobre uma vez em que seu código quebrou em produção ou você teve um conflito técnico com um colega"*, responda usando o método **STAR**:

* **S (Situação):** Contexto claro e objetivo (*"Na empresa anterior, tínhamos um script de automação que processava notas fiscais todo dia às 18h..."*).
* **T (Tarefa):** O que era o seu papel (*"Minha responsabilidade era garantir que 10.000 arquivos fossem validados sem travar o banco..."*).
* **A (Ação):** As decisões técnicas que VOCÊ tomou (*"Identifiquei um memory leak, refatorei para leitura em lotes com context managers e adicionei tratamento de erro com logs..."*).
* **R (Resultado):** O impacto palpável com métricas (*"O tempo de execução caiu de 45 minutos para 4 minutos e a taxa de erro foi a zero"*).
`,
};
