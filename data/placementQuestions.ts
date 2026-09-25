import { PlacementQuestion, PlacementTier } from '@/lib/types';

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // --- 1. Lógica & Fundamentos (Módulos 1 e 2) ---
  {
    id: 'pq-1',
    category: 'logic',
    categoryLabel: { pt: 'Lógica & Fundamentos', en: 'Logic & Fundamentals' },
    difficulty: 'easy',
    codeSnippet: `x = int("15")
y = float("4.5")
resultado = x + y
print(type(resultado), resultado)`,
    question: 'Qual será a saída do código acima ao ser executado?',
    questionEn: 'What will be the output of the code above when executed?',
    options: [
      "<class 'float'> 19.5",
      "<class 'int'> 19",
      "<class 'str'> 154.5",
      "TypeError: cannot add int to float",
    ],
    optionsEn: [
      "<class 'float'> 19.5",
      "<class 'int'> 19",
      "<class 'str'> 154.5",
      "TypeError: cannot add int to float",
    ],
    correctIndex: 0,
    explanation: 'Ao somar um número inteiro (15) com um float (4.5), o Python realiza uma coerção implícita para float, resultando em 19.5 com tipo float.',
    explanationEn: 'When adding an integer (15) to a float (4.5), Python performs implicit coercion to float, producing 19.5 with type float.',
  },
  {
    id: 'pq-2',
    category: 'logic',
    categoryLabel: { pt: 'Lógica & Fundamentos', en: 'Logic & Fundamentals' },
    difficulty: 'easy',
    codeSnippet: `preco = 49.9
desconto = 0.15
final = preco * (1 - desconto)
print(f"Total: R$ {final:.2f}")`,
    question: 'Qual é o resultado da formatação com f-string neste trecho?',
    questionEn: 'What is the output of the f-string formatting in this snippet?',
    options: [
      'Total: R$ 42.41',
      'Total: R$ 42.415',
      'Total: R$ 42.4',
      'Total: R$ 49.90',
    ],
    optionsEn: [
      'Total: R$ 42.41',
      'Total: R$ 42.415',
      'Total: R$ 42.4',
      'Total: R$ 49.90',
    ],
    correctIndex: 0,
    explanation: '49.9 * 0.85 = 42.415. O especificador :.2f formata o número com exatamente duas casas decimais arredondadas: 42.41.',
    explanationEn: '49.9 * 0.85 = 42.415. The format specifier :.2f formats the number with exactly two rounded decimal places: 42.41.',
  },
  {
    id: 'pq-3',
    category: 'logic',
    categoryLabel: { pt: 'Lógica & Fundamentos', en: 'Logic & Fundamentals' },
    difficulty: 'easy',
    codeSnippet: `a = 17 // 4
b = 17 % 4
print(a, b)`,
    question: 'Quais valores serão impressos pelos operadores de divisão inteira (//) e módulo (%)?',
    questionEn: 'Which values will be printed by the floor division (//) and modulo (%) operators?',
    options: [
      '4 1',
      '4.25 1',
      '4 0.25',
      '3 5',
    ],
    optionsEn: [
      '4 1',
      '4.25 1',
      '4 0.25',
      '3 5',
    ],
    correctIndex: 0,
    explanation: '17 // 4 é a divisão inteira (quantas vezes 4 cabe em 17 = 4). 17 % 4 é o resto da divisão (17 - 16 = 1).',
    explanationEn: '17 // 4 is floor division (how many times 4 fits into 17 = 4). 17 % 4 is the remainder (17 - 16 = 1).',
  },

  // --- 2. Controle de Fluxo & Loops (Módulo 3) ---
  {
    id: 'pq-4',
    category: 'flow_control',
    categoryLabel: { pt: 'Controle de Fluxo & Loops', en: 'Flow Control & Loops' },
    difficulty: 'medium',
    codeSnippet: `idade = 20
tem_carteira = False

if idade >= 18 and not tem_carteira:
    print("Precisa tirar a CNH")
elif idade >= 18 and tem_carteira:
    print("Pode dirigir")
else:
    print("Menor de idade")`,
    question: 'Qual ramo condicional será executado e qual mensagem será impressa?',
    questionEn: 'Which branch will execute and what message will be printed?',
    options: [
      'Precisa tirar a CNH',
      'Pode dirigir',
      'Menor de idade',
      'Nenhum bloco será executado',
    ],
    optionsEn: [
      'Precisa tirar a CNH',
      'Pode dirigir',
      'Menor de idade',
      'No block will execute',
    ],
    correctIndex: 0,
    explanation: 'idade >= 18 é True e not tem_carteira é not False = True. Como True and True é True, o primeiro bloco executa imediatamente.',
    explanationEn: 'idade >= 18 is True and not tem_carteira is not False = True. Since True and True is True, the first block executes immediately.',
  },
  {
    id: 'pq-5',
    category: 'flow_control',
    categoryLabel: { pt: 'Controle de Fluxo & Loops', en: 'Flow Control & Loops' },
    difficulty: 'medium',
    codeSnippet: `valores = []
for i in range(1, 10, 3):
    valores.append(i)

print(valores)`,
    question: 'Qual é a lista resultante após a execução do laço for com range(1, 10, 3)?',
    questionEn: 'What is the resulting list after executing the for loop with range(1, 10, 3)?',
    options: [
      '[1, 4, 7]',
      '[1, 4, 7, 10]',
      '[3, 6, 9]',
      '[1, 3, 6, 9]',
    ],
    optionsEn: [
      '[1, 4, 7]',
      '[1, 4, 7, 10]',
      '[3, 6, 9]',
      '[1, 3, 6, 9]',
    ],
    correctIndex: 0,
    explanation: 'range(start=1, stop=10, step=3) gera os números 1, 4 (1+3) e 7 (4+3). O próximo seria 10, mas o limite stop=10 é exclusivo.',
    explanationEn: 'range(start=1, stop=10, step=3) generates 1, 4 (1+3), and 7 (4+3). The next step would be 10, but the stop=10 boundary is exclusive.',
  },
  {
    id: 'pq-6',
    category: 'flow_control',
    categoryLabel: { pt: 'Controle de Fluxo & Loops', en: 'Flow Control & Loops' },
    difficulty: 'medium',
    codeSnippet: `soma = 0
for n in [2, 5, 8, 11, 14]:
    if n % 2 != 0:
        continue
    if n > 10:
        break
    soma += n

print(soma)`,
    question: 'Qual é o valor final impresso pela variável soma?',
    questionEn: 'What is the final value printed for the soma variable?',
    options: [
      '10',
      '2',
      '24',
      '40',
    ],
    optionsEn: [
      '10',
      '2',
      '24',
      '40',
    ],
    correctIndex: 0,
    explanation: 'Para 2: par, soma=2. Para 5: ímpar, continue (pula). Para 8: par, soma=2+8=10. Para 11: ímpar, continue. Para 14: 14 > 10, break (interrompe). Soma final = 10.',
    explanationEn: 'For 2: even, soma=2. For 5: odd, continue (skips). For 8: even, soma=2+8=10. For 11: odd, continue. For 14: 14 > 10, break (terminates). Final soma = 10.',
  },

  // --- 3. Estruturas de Dados (Módulo 4) ---
  {
    id: 'pq-7',
    category: 'data_structures',
    categoryLabel: { pt: 'Estruturas de Dados', en: 'Data Structures' },
    difficulty: 'medium',
    codeSnippet: `frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga']
sub = frutas[1:4]
print(sub)`,
    question: 'Qual sublista é obtida através do fatiamento (slice) frutas[1:4]?',
    questionEn: 'Which sublist is obtained through the slicing frutas[1:4]?',
    options: [
      "['banana', 'laranja', 'uva']",
      "['maçã', 'banana', 'laranja']",
      "['banana', 'laranja', 'uva', 'manga']",
      "['laranja', 'uva', 'manga']",
    ],
    optionsEn: [
      "['banana', 'laranja', 'uva']",
      "['maçã', 'banana', 'laranja']",
      "['banana', 'laranja', 'uva', 'manga']",
      "['laranja', 'uva', 'manga']",
    ],
    correctIndex: 0,
    explanation: 'O índice 1 corresponde a "banana". O fatiamento vai até o índice 4 (exclusivo), pegando os índices 1, 2 e 3: banana, laranja e uva.',
    explanationEn: 'Index 1 is "banana". Slicing goes up to index 4 (exclusive), selecting indices 1, 2, and 3: banana, laranja, and uva.',
  },
  {
    id: 'pq-8',
    category: 'data_structures',
    categoryLabel: { pt: 'Estruturas de Dados', en: 'Data Structures' },
    difficulty: 'medium',
    codeSnippet: `usuario = {"nome": "Lucas", "cargo": "Desenvolvedor"}
cidade = usuario.get("cidade", "São Paulo")
print(cidade)`,
    question: 'O que o método dict.get() retorna quando a chave consultada não existe no dicionário?',
    questionEn: 'What does dict.get() return when the requested key does not exist in the dictionary?',
    options: [
      'São Paulo',
      'None',
      'KeyError: "cidade"',
      'Lucas',
    ],
    optionsEn: [
      'São Paulo',
      'None',
      'KeyError: "cidade"',
      'Lucas',
    ],
    correctIndex: 0,
    explanation: 'O método .get(chave, padrao) busca a chave; caso não exista, ele retorna com segurança o valor padrão fornecido ("São Paulo") sem disparar KeyError.',
    explanationEn: 'The .get(key, default) method looks up the key; if not found, it safely returns the provided default value ("São Paulo") without raising a KeyError.',
  },
  {
    id: 'pq-9',
    category: 'data_structures',
    categoryLabel: { pt: 'Estruturas de Dados', en: 'Data Structures' },
    difficulty: 'hard',
    codeSnippet: `numeros = [1, 2, 3, 4, 5, 6]
quadrados = [n**2 for n in numeros if n % 2 == 0]
print(quadrados)`,
    question: 'Qual é o resultado da expressão de List Comprehension acima?',
    questionEn: 'What is the result of the List Comprehension expression above?',
    options: [
      '[4, 16, 36]',
      '[1, 9, 25]',
      '[2, 4, 6]',
      '[1, 4, 9, 16, 25, 36]',
    ],
    optionsEn: [
      '[4, 16, 36]',
      '[1, 9, 25]',
      '[2, 4, 6]',
      '[1, 4, 9, 16, 25, 36]',
    ],
    correctIndex: 0,
    explanation: 'O filtro if n % 2 == 0 seleciona apenas os números pares [2, 4, 6]. A expressão n**2 eleva cada um ao quadrado: 2²=4, 4²=16, 6²=36.',
    explanationEn: 'The if n % 2 == 0 filter selects only the even numbers [2, 4, 6]. The n**2 expression squares each one: 2²=4, 4²=16, 6²=36.',
  },

  // --- 4. Funções & Modularidade (Módulo 5) ---
  {
    id: 'pq-10',
    category: 'functions',
    categoryLabel: { pt: 'Funções & Modularidade', en: 'Functions & Modularity' },
    difficulty: 'medium',
    codeSnippet: `def operacoes(a, b):
    return a + b, a * b

soma, produto = operacoes(4, 5)
print(soma, produto)`,
    question: 'Como o Python lida com retornos múltiplos separados por vírgula em uma função?',
    questionEn: 'How does Python handle multiple comma-separated return values from a function?',
    options: [
      'Empacota os valores em uma tupla, que pode ser desempacotada em variáveis (imprime 9 20)',
      'Retorna apenas o último valor retornado (imprime 20)',
      'Gera erro de sintaxe por ter dois valores após o return',
      'Empacota os valores em uma lista mutável',
    ],
    optionsEn: [
      'Packs the values into a tuple, which can be unpacked into variables (prints 9 20)',
      'Returns only the last returned value (prints 20)',
      'Raises a syntax error for having two values after return',
      'Packs the values into a mutable list',
    ],
    correctIndex: 0,
    explanation: 'Em Python, return a + b, a * b retorna a tupla (9, 20). A atribuição soma, produto = ... realiza o desempacotamento direto.',
    explanationEn: 'In Python, return a + b, a * b returns the tuple (9, 20). The assignment soma, produto = ... performs direct tuple unpacking.',
  },
  {
    id: 'pq-11',
    category: 'functions',
    categoryLabel: { pt: 'Funções & Modularidade', en: 'Functions & Modularity' },
    difficulty: 'hard',
    codeSnippet: `def calcular_total(*precos, taxa=0.1):
    return sum(precos) * (1 + taxa)

print(calcular_total(100, 200, 300))`,
    question: 'Qual é o papel da sintaxe *precos na definição desta função?',
    questionEn: 'What is the role of the *precos syntax in this function definition?',
    options: [
      'Coletar qualquer quantidade de argumentos posicionais em uma tupla (retorna 660.0)',
      'Multiplicar os argumentos por uma referência ponteiro',
      'Exigir que o usuário passe obrigatoriamente uma lista precos=[...]',
      'Definir precos como argumento de palavra-chave (keyword argument)',
    ],
    optionsEn: [
      'Collects any amount of positional arguments into a tuple (returns 660.0)',
      'Multiplies arguments through a pointer reference',
      'Requires the caller to pass an explicit list precos=[...]',
      'Defines precos as a keyword-only argument',
    ],
    correctIndex: 0,
    explanation: '*precos agrupa todos os argumentos posicionais em uma tupla (100, 200, 300). A soma é 600, multiplicada por 1.10 = 660.0.',
    explanationEn: '*precos groups all positional arguments into a tuple (100, 200, 300). The sum is 600, multiplied by 1.10 = 660.0.',
  },
  {
    id: 'pq-12',
    category: 'functions',
    categoryLabel: { pt: 'Funções & Modularidade', en: 'Functions & Modularity' },
    difficulty: 'hard',
    codeSnippet: `produtos = [
    {"nome": "Monitor", "preco": 800},
    {"nome": "Teclado", "preco": 150},
    {"nome": "Mouse", "preco": 90}
]
ordenados = sorted(produtos, key=lambda p: p["preco"])
print(ordenados[0]["nome"])`,
    question: 'O que o código acima imprimirá e qual o papel da função lambda?',
    questionEn: 'What will the code above print and what is the role of the lambda function?',
    options: [
      'Mouse (lambda define o preço como chave de ordenação)',
      'Monitor (ordena em ordem decrescente)',
      'Teclado (pega o valor do meio)',
      'TypeError: dict não pode ser ordenado',
    ],
    optionsEn: [
      'Mouse (lambda defines the price as the sorting key)',
      'Monitor (sorts in descending order)',
      'Teclado (takes the middle value)',
      'TypeError: dict cannot be sorted',
    ],
    correctIndex: 0,
    explanation: 'A função anônima lambda p: p["preco"] instrui sorted a ordenar pelo valor da chave "preco". O menor preço é 90 (Mouse), ficando na posição 0.',
    explanationEn: 'The lambda p: p["preco"] anonymous function tells sorted to order by the "preco" key value. The lowest price is 90 (Mouse), placing it at index 0.',
  },

  // --- 5. Orientação a Objetos & Exceções (Módulos 6 e 7) ---
  {
    id: 'pq-13',
    category: 'oop',
    categoryLabel: { pt: 'POO & Exceções', en: 'OOP & Exceptions' },
    difficulty: 'medium',
    codeSnippet: `class Conta:
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self.saldo = saldo

    def depositar(self, valor):
        self.saldo += valor

c = Conta("Marina", 100)
c.depositar(50)
print(c.saldo)`,
    question: 'Qual é a função do parâmetro self dentro dos métodos da classe?',
    questionEn: 'What is the purpose of the self parameter inside class methods?',
    options: [
      'Referenciar a instância atual do objeto que está executando o método',
      'Declarar uma variável global compartilhada entre todas as instâncias',
      'Definir que o método é estático e pertence à classe em si',
      'É opcional e pode ser omitido na chamada e na assinatura do método',
    ],
    optionsEn: [
      'References the current instance of the object executing the method',
      'Declares a global variable shared among all instances',
      'Defines that the method is static and belongs to the class itself',
      'It is optional and can be omitted in method signature and call',
    ],
    correctIndex: 0,
    explanation: 'self representa a instância em execução. Através de self.saldo += valor, modificamos o saldo daquele objeto específico c.',
    explanationEn: 'self represents the current instance. Through self.saldo += valor, we mutate the saldo attribute of that specific object c.',
  },
  {
    id: 'pq-14',
    category: 'oop',
    categoryLabel: { pt: 'POO & Exceções', en: 'OOP & Exceptions' },
    difficulty: 'hard',
    codeSnippet: `class Funcionario:
    def __init__(self, nome, salario):
        self.nome = nome
        self.salario = salario

class Gerente(Funcionario):
    def __init__(self, nome, salario, bonus):
        super().__init__(nome, salario)
        self.bonus = bonus

g = Gerente("Ana", 7000, 2000)
print(g.nome, g.salario, g.bonus)`,
    question: 'Qual é o papel da chamada super().__init__(nome, salario) na subclasse Gerente?',
    questionEn: 'What is the role of super().__init__(nome, salario) in the Gerente subclass?',
    options: [
      'Executar o construtor da superclasse Funcionario, inicializando nome e salario corretamente',
      'Sobrescrever todos os métodos da classe pai',
      'Criar uma nova instância separada de Funcionario na memória',
      'Impedir que a classe Gerente herde os atributos de Funcionario',
    ],
    optionsEn: [
      'Executes the constructor of superclass Funcionario, initializing nome and salario properly',
      'Overrides all methods in the parent class',
      'Creates a new separate instance of Funcionario in memory',
      'Prevents the Gerente class from inheriting attributes from Funcionario',
    ],
    correctIndex: 0,
    explanation: 'super() permite invocar o método da classe pai (Funcionario), reutilizando a lógica de inicialização de nome e salario.',
    explanationEn: 'super() allows calling the method of the parent class (Funcionario), reusing the initialization logic for nome and salario.',
  },
  {
    id: 'pq-15',
    category: 'oop',
    categoryLabel: { pt: 'POO & Exceções', en: 'OOP & Exceptions' },
    difficulty: 'hard',
    codeSnippet: `def dividir(a, b):
    try:
        res = a / b
    except ZeroDivisionError:
        return "Erro: divisão por zero"
    else:
        return f"Sucesso: {res}"
    finally:
        print("Operação concluída")

print(dividir(10, 2))`,
    question: 'Qual é a ordem correta de execução e saída quando a chamada dividir(10, 2) ocorre?',
    questionEn: 'What is the correct order of execution and output when calling dividir(10, 2)?',
    options: [
      'Executa o try, o bloco finally imprime "Operação concluída" e retorna "Sucesso: 5.0"',
      'Executa apenas o try e o else, ignorando o finally',
      'Gera ZeroDivisionError pois 2 é par',
      'Retorna "Operação concluída" no lugar do resultado',
    ],
    optionsEn: [
      'Executes try, the finally block prints "Operação concluída" and returns "Sucesso: 5.0"',
      'Executes only try and else, ignoring finally',
      'Raises ZeroDivisionError because 2 is even',
      'Returns "Operação concluída" instead of the result',
    ],
    correctIndex: 0,
    explanation: 'Como 10/2 não dá erro, o bloco except é ignorado. O bloco else prepara o retorno "Sucesso: 5.0", mas o bloco finally sempre executa antes de a função retornar!',
    explanationEn: 'Since 10/2 succeeds, except is skipped. The else block prepares the return "Sucesso: 5.0", but the finally block always executes before returning!',
  },
];

export const PLACEMENT_TIERS: PlacementTier[] = [
  {
    id: 'beginner',
    minScore: 0,
    maxScore: 3,
    titlePt: 'Iniciante Absoluto',
    titleEn: 'Absolute Beginner',
    badge: '🌱',
    summaryPt: 'Você está dando seus primeiros passos na programação. Começar pelos fundamentos de lógica e sintaxe básica vai construir uma base sólida para o seu sucesso.',
    summaryEn: 'You are taking your first steps in programming. Starting with fundamental logic and basic syntax will build a solid foundation for your success.',
    recommendedModuleSlug: 'logica-de-programacao',
    recommendedModuleTitlePt: 'Módulo 1: Lógica de Programação',
    recommendedModuleTitleEn: 'Module 1: Programming Logic',
    unlockModuleOrder: 1,
  },
  {
    id: 'apprentice',
    minScore: 4,
    maxScore: 6,
    titlePt: 'Aprendiz de Sintaxe',
    titleEn: 'Syntax Apprentice',
    badge: '🐍',
    summaryPt: 'Você já conhece tipos básicos e expressões simples, mas precisa dominar controle de fluxo com condicionais e loops para criar lógica autônoma.',
    summaryEn: 'You already understand basic types and expressions, but need to master flow control with conditionals and loops to write autonomous logic.',
    recommendedModuleSlug: 'estruturas-de-controle',
    recommendedModuleTitlePt: 'Módulo 3: Estruturas de Controle',
    recommendedModuleTitleEn: 'Module 3: Control Structures',
    unlockModuleOrder: 3,
  },
  {
    id: 'junior',
    minScore: 7,
    maxScore: 9,
    titlePt: 'Desenvolvedor Júnior',
    titleEn: 'Junior Developer',
    badge: '⚙️',
    summaryPt: 'Você domina loops, condicionais e estruturas de dados básicas. Seu próximo grande salto é aprender a modularizar programas complexos com funções reutilizáveis.',
    summaryEn: 'You master loops, conditionals, and core data structures. Your next leap is learning how to modularize complex programs with reusable functions.',
    recommendedModuleSlug: 'funcoes',
    recommendedModuleTitlePt: 'Módulo 5: Funções',
    recommendedModuleTitleEn: 'Module 5: Functions',
    unlockModuleOrder: 5,
  },
  {
    id: 'mid',
    minScore: 10,
    maxScore: 12,
    titlePt: 'Programador Pleno',
    titleEn: 'Mid-Level Programmer',
    badge: '🏗️',
    summaryPt: 'Você já escreve código estruturado e compreende funções avançadas. O momento ideal para dominar a Orientação a Objetos profissional, encapsulamento e arquitetura.',
    summaryEn: 'You write structured code and understand advanced functions. Perfect timing to master professional Object-Oriented Programming, encapsulation, and architecture.',
    recommendedModuleSlug: 'poo',
    recommendedModuleTitlePt: 'Módulo 6: Programação Orientada a Objetos',
    recommendedModuleTitleEn: 'Module 6: Object-Oriented Programming',
    unlockModuleOrder: 6,
  },
  {
    id: 'senior',
    minScore: 13,
    maxScore: 15,
    titlePt: 'Desenvolvedor Avançado',
    titleEn: 'Advanced Developer',
    badge: '🚀',
    summaryPt: 'Excelente domínio de lógica, estruturas, funções e POO! Você já tem excelente bagagem e está pronto para o ecossistema profissional (NumPy, Pandas, APIs) e projetos de mercado.',
    summaryEn: 'Excellent mastery of logic, data structures, functions, and OOP! You have strong skills and are ready for the professional ecosystem (NumPy, Pandas, APIs) and market projects.',
    recommendedModuleSlug: 'bibliotecas-python',
    recommendedModuleTitlePt: 'Módulo 8: Bibliotecas Python',
    recommendedModuleTitleEn: 'Module 8: Python Libraries',
    unlockModuleOrder: 8,
  },
];

export function getPlacementTier(score: number): PlacementTier {
  return PLACEMENT_TIERS.find(t => score >= t.minScore && score <= t.maxScore) || PLACEMENT_TIERS[0];
}
