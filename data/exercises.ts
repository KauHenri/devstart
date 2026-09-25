// Banco completo de exercícios práticos por aula
// NOTA: Strings Python usam String.raw (py) para evitar conflitos com template literals do TypeScript.

export interface ExerciseData {
  id: string;
  lessonId: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  starterCode: string;
  solution: string;
  expectedOutput: string;
  hints: string[];
  hintsEn?: string[];
  xpReward: number;
}

const py = String.raw;

export const EXERCISES: ExerciseData[] = [
  // ==========================================
  // ===== MÓDULO 1: LÓGICA DE PROGRAMAÇÃO =====
  // ==========================================

  // --- l1-3: Variáveis e Tipos ---
  {
    id: 'ex-l1-3-1',
    lessonId: 'l1-3',
    title: 'Cartão de Apresentação',
    titleEn: 'Business Card',
    description: 'Crie quatro variáveis: nome ("Guilherme"), idade (25), cidade ("Curitiba") e altura (1.82). Depois exiba cada uma em uma linha com o formato indicado.',
    descriptionEn: 'Create four variables: nome ("Guilherme"), idade (25), cidade ("Curitiba"), and altura (1.82). Then print each on a line with the indicated format.',
    difficulty: 'easy',
    starterCode: py`# Crie suas variáveis e use print() para exibir
# Formato esperado:
# Nome: Guilherme
# Idade: 25 anos
# Cidade: Curitiba
# Altura: 1.82 m

# Escreva seu código abaixo:
`,
    solution: py`nome = "Guilherme"
idade = 25
cidade = "Curitiba"
altura = 1.82

print("Nome:", nome)
print("Idade:", idade, "anos")
print("Cidade:", cidade)
print("Altura:", altura, "m")`,
    expectedOutput: `Nome: Guilherme
Idade: 25 anos
Cidade: Curitiba
Altura: 1.82 m`,
    hints: [
      'Textos exigem aspas duplas ou simples: nome = "Guilherme"',
      'Números inteiros não levam aspas nem pontos: idade = 25',
      'Use vírgulas dentro do print() para separar rótulos e variáveis: print("Nome:", nome)',
    ],
    hintsEn: [
          "Strings require single or double quotes: nome = \"Guilherme\"",
          "Integers take no quotes or decimal points: idade = 25",
          "Use commas inside print() to separate labels and variables: print(\"Nome:\", nome)"
    ],
    xpReward: 30,
  },
  {
    id: 'ex-l1-3-2',
    lessonId: 'l1-3',
    title: 'Conversor de Idade em Dias',
    titleEn: 'Age to Days Converter',
    description: 'Crie uma variável "anos" com valor 20. Calcule o total aproximado de dias vividos (considerando cada ano com 365 dias) e exiba "Total de dias: X".',
    descriptionEn: 'Create a variable "anos" with value 20. Calculate the approximate total of days lived (assuming 365 days per year) and display "Total de dias: X".',
    difficulty: 'medium',
    starterCode: py`anos = 20

# Calcule os dias e exiba no formato: Total de dias: 7300
# Escreva seu código abaixo:
`,
    solution: py`anos = 20
dias = anos * 365
print("Total de dias:", dias)`,
    expectedOutput: 'Total de dias: 7300',
    hints: [
      'Multiplique a variável anos pelo número de dias do ano usando o operador *',
      'Armazene o cálculo em uma variável como dias = anos * 365',
      'Exiba com print("Total de dias:", dias)',
    ],
    hintsEn: [
          "Multiply the anos variable by 365 using the * operator",
          "Store the calculation in a variable such as dias = anos * 365",
          "Print with print(\"Total de dias:\", dias)"
    ],
    xpReward: 40,
  },

  // --- l1-4: Decisões ---
  {
    id: 'ex-l1-4-1',
    lessonId: 'l1-4',
    title: 'Verificador de Maioridade',
    titleEn: 'Legal Age Verifier',
    description: 'Dada a variável idade = 17, crie uma estrutura if/else que imprima "Maior de idade" se tiver 18 anos ou mais, ou "Menor de idade" caso contrário.',
    descriptionEn: 'Given idade = 17, create an if/else structure that prints "Maior de idade" if 18 or older, or "Menor de idade" otherwise.',
    difficulty: 'easy',
    starterCode: py`idade = 17

# Escreva a estrutura if / else abaixo:
`,
    solution: py`idade = 17

if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")`,
    expectedOutput: 'Menor de idade',
    hints: [
      'A condição de teste é idade >= 18',
      'Lembre-se dos dois-pontos (:) ao final das linhas do if e do else',
      'Indente o bloco interno com 4 espaços antes do comando print()',
    ],
    hintsEn: [
          "The test condition is idade >= 18",
          "Remember colons (:) at the end of if and else statements",
          "Indent the inner block with 4 spaces before the print() call"
    ],
    xpReward: 40,
  },
  {
    id: 'ex-l1-4-2',
    lessonId: 'l1-4',
    title: 'Par ou Ímpar',
    titleEn: 'Even or Odd',
    description: 'Dado o número 14, verifique se ele é par ou ímpar utilizando o operador de resto (%). Se o resto da divisão por 2 for 0, imprima "Par", senão imprima "Ímpar".',
    descriptionEn: 'Given number 14, check whether it is even or odd using the modulo operator (%). If division remainder by 2 is 0, print "Par", else print "Ímpar".',
    difficulty: 'medium',
    starterCode: py`numero = 14

# Verifique se o numero e par ou impar:
`,
    solution: py`numero = 14

if numero % 2 == 0:
    print("Par")
else:
    print("Ímpar")`,
    expectedOutput: 'Par',
    hints: [
      'O operador % retorna o resto da divisão: numero % 2',
      'Use o operador de igualdade dupla == para comparar com zero',
      'Se numero % 2 == 0 então o número é divisível por 2 (par)',
    ],
    hintsEn: [
          "The % operator returns the remainder of division: numero % 2",
          "Use equality comparison == to compare with zero",
          "If numero % 2 == 0 then the number is divisible by 2 (even)"
    ],
    xpReward: 50,
  },

  // --- l1-5: Repetição ---
  {
    id: 'ex-l1-5-1',
    lessonId: 'l1-5',
    title: 'Contagem Simples',
    titleEn: 'Simple Counting',
    description: 'Utilize um loop for com a função range() para exibir os números de 1 até 5, um por linha.',
    descriptionEn: 'Use a for loop with the range() function to display numbers from 1 to 5, one per line.',
    difficulty: 'easy',
    starterCode: py`# Imprima os números de 1 a 5 usando for e range:
`,
    solution: py`for i in range(1, 6):
    print(i)`,
    expectedOutput: `1
2
3
4
5`,
    hints: [
      'A função range(inicio, fim) é exclusiva no final: para ir até 5, use range(1, 6)',
      'A variável de iteração (ex: i) assume cada valor a cada volta do laço',
      'Basta dar print(i) dentro do laço',
    ],
    hintsEn: [
          "The range(start, stop) function is exclusive on stop: to reach 5, use range(1, 6)",
          "The iteration variable takes each value on each loop cycle",
          "Simply print(i) inside the loop"
    ],
    xpReward: 40,
  },
  {
    id: 'ex-l1-5-2',
    lessonId: 'l1-5',
    title: 'Somatório de 1 a 10',
    titleEn: 'Sum from 1 to 10',
    description: 'Calcule a soma acumulada de todos os números inteiros de 1 até 10 usando um laço for e imprima "Soma total: X".',
    descriptionEn: 'Calculate the accumulated sum of all integers from 1 to 10 using a for loop and print "Soma total: X".',
    difficulty: 'medium',
    starterCode: py`# Crie uma variável acumuladora e calcule a soma de 1 até 10:
`,
    solution: py`total = 0
for n in range(1, 11):
    total += n
print("Soma total:", total)`,
    expectedOutput: 'Soma total: 55',
    hints: [
      'Inicie uma variável antes do loop: total = 0',
      'Percorra com for n in range(1, 11):',
      'Acrescente o valor com total += n e exiba após o término do laço',
    ],
    hintsEn: [
          "Initialize a variable before the loop: total = 0",
          "Iterate with for n in range(1, 11):",
          "Add the value with total += n and display it after the loop"
    ],
    xpReward: 50,
  },

  // --- l1-8: Desafio de Lógica ---
  {
    id: 'ex-l1-8-1',
    lessonId: 'l1-8',
    title: 'Classificador de Triângulos',
    titleEn: 'Triangle Classifier',
    description: 'Dados os lados a=5, b=5 e c=5, verifique se o triângulo é "Equilátero" (3 lados iguais), "Isósceles" (2 lados iguais) ou "Escaleno" (todos diferentes).',
    descriptionEn: 'Given sides a=5, b=5, and c=5, check if the triangle is "Equilátero" (3 equal sides), "Isósceles" (2 equal sides), or "Escaleno" (all different).',
    difficulty: 'medium',
    starterCode: py`a = 5
b = 5
c = 5

# Verifique o tipo do triângulo e imprima o nome correspondente:
`,
    solution: py`a = 5
b = 5
c = 5

if a == b == c:
    print("Equilátero")
elif a == b or b == c or a == c:
    print("Isósceles")
else:
    print("Escaleno")`,
    expectedOutput: 'Equilátero',
    hints: [
      'Em Python você pode encadear comparações: a == b == c para três iguais',
      'Use elif para verificar se pelo menos dois lados são iguais com or',
      'O else cobrirá o caso em que todos os três lados são distintos',
    ],
    hintsEn: [
          "In Python you can chain comparisons: a == b == c for three equal values",
          "Use elif to check if at least two sides are equal with or",
          "The else branch covers the case where all three sides differ"
    ],
    xpReward: 60,
  },

  // ==========================================
  // ===== MÓDULO 2: PYTHON BÁSICO ============
  // ==========================================

  // --- l2-3: Variáveis em Python ---
  {
    id: 'ex-l2-3-1',
    lessonId: 'l2-3',
    title: 'Cálculo de Desconto Comercial',
    titleEn: 'Commercial Discount Calculation',
    description: 'Dado preco_original = 200 e desconto_pct = 15, calcule o valor economizado e o preco_final. Exiba exatamente as 4 linhas do gabarito.',
    descriptionEn: 'Given preco_original = 200 and desconto_pct = 15, calculate the amount saved and preco_final. Display the exact 4 lines of expected output.',
    difficulty: 'easy',
    starterCode: py`preco_original = 200
desconto_pct = 15

# Calcule o desconto e o preço final e exiba os resultados:
`,
    solution: py`preco_original = 200
desconto_pct = 15

desconto = preco_original * (desconto_pct / 100)
preco_final = preco_original - desconto

print("Preco original: R$", preco_original)
print("Desconto:", desconto_pct, "%")
print("Voce economizou: R$", desconto)
print("Preco final: R$", preco_final)`,
    expectedOutput: `Preco original: R$ 200
Desconto: 15 %
Voce economizou: R$ 30.0
Preco final: R$ 170.0`,
    hints: [
      'desconto = preco_original * (desconto_pct / 100)',
      'preco_final = preco_original - desconto',
      'Confira os textos exatos nos prints',
    ],
    hintsEn: [
          "desconto = preco_original * (desconto_pct / 100)",
          "preco_final = preco_original - desconto",
          "Check the exact text in prints"
    ],
    xpReward: 40,
  },
  {
    id: 'ex-l2-3-2',
    lessonId: 'l2-3',
    title: 'Troca de Variáveis Pythônica',
    titleEn: 'Pythonic Variable Swap',
    description: 'Dadas as variáveis x = 100 e y = 200, troque os valores entre elas em uma única linha usando a técnica pythônica de atribuição múltipla.',
    descriptionEn: 'Given variables x = 100 and y = 200, swap their values in a single line using Python multiple assignment.',
    difficulty: 'medium',
    starterCode: py`x = 100
y = 200

# Troque os valores de x e y em uma linha:

print("x =", x)
print("y =", y)`,
    solution: py`x = 100
y = 200

x, y = y, x

print("x =", x)
print("y =", y)`,
    expectedOutput: `x = 200
y = 100`,
    hints: [
      'Em Python, você não precisa de variável temporária!',
      'Utilize o desempacotamento de tuplas: a, b = b, a',
      'Escreva x, y = y, x',
    ],
    hintsEn: [
          "In Python, you do not need a temporary variable!",
          "Use tuple unpacking: a, b = b, a",
          "Write x, y = y, x"
    ],
    xpReward: 50,
  },

  // --- l2-4: Tipos de Dados ---
  {
    id: 'ex-l2-4-1',
    lessonId: 'l2-4',
    title: 'Conversão e Coerção de Tipos',
    titleEn: 'Type Conversion and Coercion',
    description: 'Dada a string valor_str = "42", converta-a para inteiro, some 8 ao valor, e exiba "Resultado: 50" e o tipo da variável convertida.',
    descriptionEn: 'Given string valor_str = "42", convert it to an integer, add 8, and display "Resultado: 50" along with the type of the converted variable.',
    difficulty: 'easy',
    starterCode: py`valor_str = "42"

# Converta para int, some 8 e imprima:
# Linha 1: Resultado: 50
# Linha 2: <class 'int'>
`,
    solution: py`valor_str = "42"
numero = int(valor_str) + 8
print("Resultado:", numero)
print(type(numero))`,
    expectedOutput: `Resultado: 50
<class 'int'>`,
    hints: [
      'Use a função nativa int(valor_str) para converter texto em número',
      'Adicione 8 ao resultado numérico',
      'Use type(numero) para inspecionar o tipo',
    ],
    hintsEn: [
          "Use built-in int(valor_str) to convert text to number",
          "Add 8 to the numeric result",
          "Use type(numero) to inspect the type"
    ],
    xpReward: 40,
  },

  // --- l2-5: Operadores ---
  {
    id: 'ex-l2-5-1',
    lessonId: 'l2-5',
    title: 'Operadores Aritméticos Completos',
    titleEn: 'Full Arithmetic Operators',
    description: 'Com a = 17 e b = 5, exiba o quociente da divisão inteira (//), o resto da divisão (%) e a potência (a elevado a b).',
    descriptionEn: 'With a = 17 and b = 5, display the floor division quotient (//), remainder (%), and power (a raised to b).',
    difficulty: 'easy',
    starterCode: py`a = 17
b = 5

# Exiba:
# Divisao inteira: 3
# Resto: 2
# Potencia: 1419857
`,
    solution: py`a = 17
b = 5

print("Divisao inteira:", a // b)
print("Resto:", a % b)
print("Potencia:", a ** b)`,
    expectedOutput: `Divisao inteira: 3
Resto: 2
Potencia: 1419857`,
    hints: [
      '// é a divisão inteira (descarta a parte fracionária)',
      '% calcula o resto da divisão',
      '** calcula a exponenciação',
    ],
    hintsEn: [
          "// is integer floor division (discards fractional part)",
          "% calculates division remainder",
          "** calculates exponentiation"
    ],
    xpReward: 40,
  },

  // --- l2-6: Strings ---
  {
    id: 'ex-l2-6-1',
    lessonId: 'l2-6',
    title: 'Limpeza e Métodos de String',
    titleEn: 'String Cleaning and Methods',
    description: 'Dada a string suja texto = "  python e incrivel  ", use .strip() para remover espaços e .upper() para torná-la maiúscula. Exiba o resultado final.',
    descriptionEn: 'Given dirty string texto = "  python e incrivel  ", use .strip() to remove spaces and .upper() to uppercase it. Display the result.',
    difficulty: 'easy',
    starterCode: py`texto = "  python e incrivel  "

# Trate o texto e exiba em maiúsculas sem espaços nas bordas:
`,
    solution: py`texto = "  python e incrivel  "
limpo = texto.strip().upper()
print(limpo)`,
    expectedOutput: 'PYTHON E INCRIVEL',
    hints: [
      'Métodos de string podem ser encadeados: texto.strip().upper()',
      'strip() retira espaços do início e fim',
      'upper() converte todas as letras para maiúsculas',
    ],
    hintsEn: [
          "String methods can be chained: texto.strip().upper()",
          "strip() strips whitespace from start and end",
          "upper() converts letters to uppercase"
    ],
    xpReward: 40,
  },
  {
    id: 'ex-l2-6-2',
    lessonId: 'l2-6',
    title: 'Gerador de Email Corporativo',
    titleEn: 'Corporate Email Generator',
    description: 'Dados nome = "Lucas" e sobrenome = "Mendes", gere o email no padrão: primeira letra do nome + sobrenome + "@empresa.com", tudo em minúsculas.',
    descriptionEn: 'Given nome = "Lucas" and sobrenome = "Mendes", generate the email matching: first letter of name + surname + "@empresa.com", all in lowercase.',
    difficulty: 'medium',
    starterCode: py`nome = "Lucas"
sobrenome = "Mendes"

# Gere e imprima: lmendes@empresa.com
`,
    solution: py`nome = "Lucas"
sobrenome = "Mendes"
email = (nome[0] + sobrenome + "@empresa.com").lower()
print(email)`,
    expectedOutput: 'lmendes@empresa.com',
    hints: [
      'nome[0] acessa o primeiro caractere da string',
      'Concatene strings com o operador + ou usando f-strings',
      'Use .lower() para garantir que tudo fique em caixa baixa',
    ],
    hintsEn: [
      "nome[0].lower() retrieves the first letter",
      "Concatenate strings or use f-string: f\"{nome[0].lower()}{sobrenome.lower()}@empresa.com\"",
      "Use .lower() to ensure all lowercase",
    ],
    xpReward: 50,
  },
  {
    id: 'ex-l2-6-3',
    lessonId: 'l2-6',
    title: 'Verificador de Palíndromo',
    titleEn: 'Palindrome Verifier',
    description: 'Dada a palavra "radar", verifique se ela é um palíndromo (se lida da mesma forma de trás para frente) usando fatiamento de string. Imprima "Palíndromo: True".',
    descriptionEn: 'Given word "radar", check if it is a palindrome using string slicing. Print "Palíndromo: True".',
    difficulty: 'hard',
    starterCode: py`palavra = "radar"

# Verifique se palavra invertida é igual a ela mesma:
# Formato: Palíndromo: True
`,
    solution: py`palavra = "radar"
eh_palindromo = palavra == palavra[::-1]
print("Palíndromo:", eh_palindromo)`,
    expectedOutput: 'Palíndromo: True',
    hints: [
      'O fatiamento [::-1] inverte uma string em Python',
      'Compare palavra == palavra[::-1]',
      'Exiba o booleano resultante com print',
    ],
    hintsEn: [
      "Slicing [::-1] reverses the string: palavra[::-1]",
      "Compare palavra == palavra[::-1]",
      "Display the resulting boolean with print",
    ],
    xpReward: 60,
  },

  // --- l2-7: Entrada e Saída ---
  {
    id: 'ex-l2-7-1',
    lessonId: 'l2-7',
    title: 'Formatação Elegante com f-strings',
    titleEn: 'Elegant Formatting with f-strings',
    description: 'Dados produto = "Notebook", preco = 3450.758 e quantidade = 2, exiba o total formatado com exatamente 2 casas decimais: "Total do Notebook: R$ 6901.52".',
    descriptionEn: 'Given produto = "Notebook", preco = 3450.758, and quantidade = 2, display formatted total to 2 decimals: "Total do Notebook: R$ 6901.52".',
    difficulty: 'easy',
    starterCode: py`produto = "Notebook"
preco = 3450.758
quantidade = 2

# Calcule o total e use f-string com :.2f para formatar:
`,
    solution: py`produto = "Notebook"
preco = 3450.758
quantidade = 2
total = preco * quantidade
print(f"Total do {produto}: R$ {total:.2f}")`,
    expectedOutput: 'Total do Notebook: R$ 6901.52',
    hints: [
      'Multiplique preco * quantidade',
      'Na f-string use {total:.2f} para travar em duas casas decimais com arredondamento',
    ],
    hintsEn: [
          "Multiply preco * quantidade",
          "In f-string use {total:.2f} to round and format to two decimal places"
    ],
    xpReward: 40,
  },

  // ==========================================
  // ===== MÓDULO 3: ESTRUTURAS DE CONTROLE ===
  // ==========================================

  // --- l3-1: if, elif e else ---
  {
    id: 'ex-l3-1-1',
    lessonId: 'l3-1',
    title: 'Classificação de Desempenho Escolar',
    titleEn: 'Academic Performance Classification',
    description: 'Dada a nota = 8.2, classifique o aluno: >= 9.0 ("Excelente"), >= 7.0 ("Aprovado"), >= 5.0 ("Recuperação") ou < 5.0 ("Reprovado").',
    descriptionEn: 'Given nota = 8.2, classify the student: >= 9.0 ("Excelente"), >= 7.0 ("Aprovado"), >= 5.0 ("Recuperação"), or < 5.0 ("Reprovado").',
    difficulty: 'easy',
    starterCode: py`nota = 8.2

# Escreva a árvore de condições com if, elif e else:
`,
    solution: py`nota = 8.2

if nota >= 9.0:
    print("Excelente")
elif nota >= 7.0:
    print("Aprovado")
elif nota >= 5.0:
    print("Recuperação")
else:
    print("Reprovado")`,
    expectedOutput: 'Aprovado',
    hints: [
      'Comece testando a faixa mais alta (>= 9.0)',
      'Use elif para a próxima faixa (>= 7.0)',
      'Como 8.2 é maior ou igual a 7.0, a saída esperada é Aprovado',
    ],
    hintsEn: [
          "Start checking the highest band (>= 9.0)",
          "Use elif for the next threshold (>= 7.0)",
          "Since 8.2 is >= 7.0, expected output is Aprovado"
    ],
    xpReward: 40,
  },

  // --- l3-2: Operadores Lógicos ---
  {
    id: 'ex-l3-2-1',
    lessonId: 'l3-2',
    title: 'Validação de Empréstimo',
    titleEn: 'Loan Approval Validation',
    description: 'Um cliente com renda = 4500, score = 720 e nome_limpo = True solicita crédito. A aprovação exige (renda >= 4000 OU score >= 700) E nome_limpo ser True. Exiba "Empréstimo Aprovado: True".',
    descriptionEn: 'A customer with renda = 4500, score = 720, and nome_limpo = True applies for credit. Approval requires (renda >= 4000 OR score >= 700) AND nome_limpo == True. Display "Empréstimo Aprovado: True".',
    difficulty: 'medium',
    starterCode: py`renda = 4500
score = 720
nome_limpo = True

# Escreva a expressão booleana combinando and e or:
`,
    solution: py`renda = 4500
score = 720
nome_limpo = True

aprovado = (renda >= 4000 or score >= 700) and nome_limpo
print("Empréstimo Aprovado:", aprovado)`,
    expectedOutput: 'Empréstimo Aprovado: True',
    hints: [
      'Agrupe as condições alternativas com parênteses: (renda >= 4000 or score >= 700)',
      'Conecte com a condição obrigatória usando and nome_limpo',
      'Exiba print("Empréstimo Aprovado:", aprovado)',
    ],
    hintsEn: [
          "Group alternative conditions in parentheses: (renda >= 4000 or score >= 700)",
          "Connect with mandatory condition using and nome_limpo",
          "Print with print(\"Empréstimo Aprovado:\", aprovado)"
    ],
    xpReward: 50,
  },

  // --- l3-3: Loop while ---
  {
    id: 'ex-l3-3-1',
    lessonId: 'l3-3',
    title: 'Contagem Regressiva e Lançamento',
    titleEn: 'Countdown and Launch',
    description: 'Faça uma contagem regressiva de 3 até 1 usando um loop while e ao final imprima "Decolagem autorizada!".',
    descriptionEn: 'Make a countdown from 3 to 1 using a while loop and at the end print "Decolagem autorizada!".',
    difficulty: 'easy',
    starterCode: py`contador = 3

# Escreva o loop while aqui:
`,
    solution: py`contador = 3
while contador > 0:
    print(contador)
    contador -= 1
print("Decolagem autorizada!")`,
    expectedOutput: `3
2
1
Decolagem autorizada!`,
    hints: [
      'A condição do while deve ser contador > 0',
      'Não esqueça de decrementar a variável a cada volta: contador -= 1',
      'O print("Decolagem autorizada!") deve ficar fora do loop',
    ],
    hintsEn: [
          "The while condition should be contador > 0",
          "Remember to decrement each cycle: contador -= 1",
          "The print(\"Decolagem autorizada!\") must stay outside the loop"
    ],
    xpReward: 40,
  },

  // --- l3-4: Loop for ---
  {
    id: 'ex-l3-4-1',
    lessonId: 'l3-4',
    title: 'Tabuada do 8',
    titleEn: 'Multiplication Table of 8',
    description: 'Gere a tabuada do número 8 (de 8 x 1 até 8 x 5) utilizando um laço for com range(1, 6).',
    descriptionEn: 'Generate the multiplication table of 8 (from 8 x 1 to 8 x 5) using a for loop with range(1, 6).',
    difficulty: 'easy',
    starterCode: py`numero = 8

# Use um for com range(1, 6) para imprimir a tabuada:
`,
    solution: py`numero = 8
for i in range(1, 6):
    print(f"{numero} x {i} = {numero * i}")`,
    expectedOutput: `8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40`,
    hints: [
      'range(1, 6) itera sobre os valores 1, 2, 3, 4, 5',
      'Use f-string para formatar: f"{numero} x {i} = {numero * i}"',
    ],
    hintsEn: [
          "range(1, 6) iterates over values 1, 2, 3, 4, 5",
          "Use f-string to format: f\"{numero} x {i} = {numero * i}\""
    ],
    xpReward: 40,
  },

  // --- l3-5: break e continue ---
  {
    id: 'ex-l3-5-1',
    lessonId: 'l3-5',
    title: 'Filtrando com continue',
    titleEn: 'Filtering with continue',
    description: 'Percorra os números de 1 a 6. Se o número for par, pule para a próxima iteração com continue. Imprima apenas os ímpares.',
    descriptionEn: 'Iterate over numbers from 1 to 6. If the number is even, skip to the next iteration with continue. Print only odd numbers.',
    difficulty: 'easy',
    starterCode: py`# Itere de 1 a 6 e pule os pares:
`,
    solution: py`for n in range(1, 7):
    if n % 2 == 0:
        continue
    print(n)`,
    expectedOutput: `1
3
5`,
    hints: [
      'Teste de paridade: n % 2 == 0',
      'A instrução continue encerra a volta atual imediatamente e vai para a próxima',
    ],
    hintsEn: [
          "Evenness check: n % 2 == 0",
          "The continue statement exits current iteration immediately and moves to the next"
    ],
    xpReward: 40,
  },

  // --- l3-6: Desafio Controle ---
  {
    id: 'ex-l3-6-1',
    lessonId: 'l3-6',
    title: 'Mini Calculadora de Operações',
    titleEn: 'Mini Operations Calculator',
    description: 'Dadas as variáveis num1 = 15, num2 = 3 e operacao = "/", execute a operação solicitada ("+", "-", "*", "/") e exiba o resultado: "Resultado: 5.0".',
    descriptionEn: 'Given num1 = 15, num2 = 3, and operacao = "/", perform the requested operation ("+", "-", "*", "/") and display the result: "Resultado: 5.0".',
    difficulty: 'medium',
    starterCode: py`num1 = 15
num2 = 3
operacao = "/"

# Calcule e exiba: Resultado: 5.0
`,
    solution: py`num1 = 15
num2 = 3
operacao = "/"

if operacao == "+":
    res = num1 + num2
elif operacao == "-":
    res = num1 - num2
elif operacao == "*":
    res = num1 * num2
elif operacao == "/":
    res = num1 / num2

print("Resultado:", res)`,
    expectedOutput: 'Resultado: 5.0',
    hints: [
      'Estruture comparações com if operacao == "+": ... elif ...',
      'Exiba com print("Resultado:", res)',
    ],
    hintsEn: [
          "Structure comparisons with if operacao == \"+\": ... elif ...",
          "Display with print(\"Resultado:\", res)"
    ],
    xpReward: 50,
  },

  // ==========================================
  // ===== MÓDULO 4: ESTRUTURAS DE DADOS ======
  // ==========================================

  // --- l4-1: Listas ---
  {
    id: 'ex-l4-1-1',
    lessonId: 'l4-1',
    title: 'Manipulação Básica de Lista',
    titleEn: 'Basic List Manipulation',
    description: 'Dada a lista itens = ["Mouse", "Teclado", "Monitor"], exiba o primeiro elemento, o último elemento e a quantidade total de itens.',
    descriptionEn: 'Given list itens = ["Mouse", "Teclado", "Monitor"], display the first element, the last element, and the total count of items.',
    difficulty: 'easy',
    starterCode: py`itens = ["Mouse", "Teclado", "Monitor"]

# Exiba:
# Primeiro: Mouse
# Ultimo: Monitor
# Total: 3
`,
    solution: py`itens = ["Mouse", "Teclado", "Monitor"]
print("Primeiro:", itens[0])
print("Ultimo:", itens[-1])
print("Total:", len(itens))`,
    expectedOutput: `Primeiro: Mouse
Ultimo: Monitor
Total: 3`,
    hints: [
      'Primeiro elemento: itens[0]',
      'Último elemento em Python: itens[-1]',
      'Quantidade total de itens: len(itens)',
    ],
    hintsEn: [
      "First element: itens[0]",
      "Last element: itens[-1]",
      "Total items: len(itens)",
    ],
    xpReward: 40,
  },

  // --- l4-2: Métodos de Lista ---
  {
    id: 'ex-l4-2-1',
    lessonId: 'l4-2',
    title: 'Estatísticas de Notas',
    titleEn: 'Grade Statistics',
    description: 'Dada a lista notas = [6.5, 8.0, 9.5], adicione a nota 7.0 usando .append(), e em seguida exiba a menor nota, a maior nota e a média com 2 casas decimais.',
    descriptionEn: 'Given list notas = [6.5, 8.0, 9.5], add grade 7.0 using .append(), then display min grade, max grade, and average to 2 decimal places.',
    difficulty: 'medium',
    starterCode: py`notas = [6.5, 8.0, 9.5]

# Adicione 7.0 e exiba menor, maior e média:
`,
    solution: py`notas = [6.5, 8.0, 9.5]
notas.append(7.0)

menor = min(notas)
maior = max(notas)
media = sum(notas) / len(notas)

print("Menor:", menor)
print("Maior:", maior)
print(f"Media: {media:.2f}")`,
    expectedOutput: `Menor: 6.5
Maior: 9.5
Media: 7.75`,
    hints: [
      'notas.append(7.0) insere no fim da lista',
      'min() e max() obtêm os extremos',
      'media = sum(notas) / len(notas)',
    ],
    hintsEn: [
          "notas.append(7.0) inserts at the end of the list",
          "min() and max() retrieve the extremes",
          "media = sum(notas) / len(notas)"
    ],
    xpReward: 50,
  },

  // --- l4-3: Tuplas ---
  {
    id: 'ex-l4-3-1',
    lessonId: 'l4-3',
    title: 'Desempacotamento de Coordenadas',
    titleEn: 'Coordinate Unpacking',
    description: 'Dada a tupla ponto = (19.43, -99.13), desempacote as coordenadas nas variáveis latitude e longitude, e exiba no formato indicado.',
    descriptionEn: 'Given tuple ponto = (19.43, -99.13), unpack coordinates into variables latitude and longitude, and display in the indicated format.',
    difficulty: 'easy',
    starterCode: py`ponto = (19.43, -99.13)

# Desempacote e exiba:
# Latitude: 19.43 | Longitude: -99.13
`,
    solution: py`ponto = (19.43, -99.13)
lat, lon = ponto
print(f"Latitude: {lat} | Longitude: {lon}")`,
    expectedOutput: 'Latitude: 19.43 | Longitude: -99.13',
    hints: [
      'Desempacotamento: lat, lon = ponto',
      'Use f-string com os nomes das variáveis para formatar a saída',
    ],
    hintsEn: [
          "Unpacking: lat, lon = ponto",
          "Use f-strings with variable names to format the output"
    ],
    xpReward: 40,
  },

  // --- l4-4: Dicionários ---
  {
    id: 'ex-l4-4-1',
    lessonId: 'l4-4',
    title: 'Atualização de Perfil de Usuário',
    titleEn: 'User Profile Update',
    description: 'Dado o dicionário usuario = {"nome": "Ana", "cargo": "Júnior", "ativo": True}, atualize o cargo para "Pleno", adicione a chave "salario": 6000 e exiba o dicionário.',
    descriptionEn: 'Given dict usuario = {"nome": "Ana", "cargo": "Júnior", "ativo": True}, update cargo to "Pleno", add key "salario": 6000, and display the dictionary.',
    difficulty: 'easy',
    starterCode: py`usuario = {"nome": "Ana", "cargo": "Júnior", "ativo": True}

# Modifique cargo e adicione salario:
`,
    solution: py`usuario = {"nome": "Ana", "cargo": "Júnior", "ativo": True}
usuario["cargo"] = "Pleno"
usuario["salario"] = 6000
print("Cargo atualizado:", usuario["cargo"])
print("Salário:", usuario["salario"])`,
    expectedOutput: `Cargo atualizado: Pleno
Salário: 6000`,
    hints: [
      'Para atualizar ou criar chave em dicionário: dicionario["chave"] = novo_valor',
      'Confira os prints solicitados',
    ],
    hintsEn: [
      'To update or create a key in a dict: usuario["cargo"] = "Pleno"',
      'Add salary with usuario["salario"] = 6000',
      'Check the requested print statements',
    ],
    xpReward: 40,
  },
  {
    id: 'ex-l4-4-2',
    lessonId: 'l4-4',
    title: 'Contador de Frequência de Palavras',
    titleEn: 'Word Frequency Counter',
    description: 'Dada a lista palavras = ["python", "java", "python", "go", "python", "java"], crie um dicionário contando quantas vezes cada linguagem aparece.',
    descriptionEn: 'Given list palavras = ["python", "java", "python", "go", "python", "java"], create a dictionary counting how many times each language appears.',
    difficulty: 'medium',
    starterCode: py`palavras = ["python", "java", "python", "go", "python", "java"]

# Conte a frequência e exiba o dicionário resultante:
`,
    solution: py`palavras = ["python", "java", "python", "go", "python", "java"]
contagem = {}
for p in palavras:
    contagem[p] = contagem.get(p, 0) + 1
print(contagem)`,
    expectedOutput: "{'python': 3, 'java': 2, 'go': 1}",
    hints: [
      'Inicie um dicionário vazio: contagem = {}',
      'O método .get(chave, valor_padrao) é perfeito para contagens acumulativas: contagem.get(p, 0) + 1',
    ],
    hintsEn: [
          "Initialize an empty dictionary: contagem = {}",
          "Method .get(key, default) is ideal for counting: contagem[p] = contagem.get(p, 0) + 1"
    ],
    xpReward: 60,
  },

  // --- l4-5: Sets ---
  {
    id: 'ex-l4-5-1',
    lessonId: 'l4-5',
    title: 'Eliminando Duplicatas',
    titleEn: 'Eliminating Duplicates',
    description: 'Dada a lista emails = ["a@a.com", "b@b.com", "a@a.com", "c@c.com"], converta para set para eliminar duplicatas e exiba a quantidade de emails únicos.',
    descriptionEn: 'Given list emails = ["a@a.com", "b@b.com", "a@a.com", "c@c.com"], convert to set to eliminate duplicates and display the count of unique emails.',
    difficulty: 'easy',
    starterCode: py`emails = ["a@a.com", "b@b.com", "a@a.com", "c@c.com"]

# Converta para set e exiba a contagem única:
`,
    solution: py`emails = ["a@a.com", "b@b.com", "a@a.com", "c@c.com"]
unicos = set(emails)
print("Emails únicos:", len(unicos))`,
    expectedOutput: 'Emails únicos: 3',
    hints: [
      'set(emails) descarta automaticamente valores repetidos',
      'len(unicos) retorna a quantidade de itens únicos restantes',
    ],
    hintsEn: [
          "set(emails) automatically removes duplicates",
          "len(unicos) returns count of remaining unique items"
    ],
    xpReward: 40,
  },

  // --- l4-6: List Comprehension ---
  {
    id: 'ex-l4-6-1',
    lessonId: 'l4-6',
    title: 'Quadrados dos Números Pares',
    titleEn: 'Squares of Even Numbers',
    description: 'Dada a lista numeros = [1, 2, 3, 4, 5, 6], utilize uma List Comprehension de linha única para gerar uma nova lista contendo os quadrados apenas dos números pares.',
    descriptionEn: 'Given list numeros = [1, 2, 3, 4, 5, 6], use a single-line List Comprehension to generate a new list containing squares of even numbers only.',
    difficulty: 'medium',
    starterCode: py`numeros = [1, 2, 3, 4, 5, 6]

# Crie a lista com List Comprehension e exiba:
`,
    solution: py`numeros = [1, 2, 3, 4, 5, 6]
quadrados_pares = [n ** 2 for n in numeros if n % 2 == 0]
print(quadrados_pares)`,
    expectedOutput: '[4, 16, 36]',
    hints: [
      'Sintaxe: [expressao for item in lista if condicao]',
      'Eleve ao quadrado com n ** 2',
      'Filtre os pares com if n % 2 == 0',
    ],
    hintsEn: [
      "Syntax: [expression for item in list if condition]",
      "Square using n ** 2",
      "Filter even numbers with if n % 2 == 0",
    ],
    xpReward: 50,
  },

  // ==========================================
  // ===== MÓDULO 5: FUNÇÕES ==================
  // ==========================================

  // --- l5-1: Definindo Funções ---
  {
    id: 'ex-l5-1-1',
    lessonId: 'l5-1',
    title: 'Função de Conversão Cambial',
    titleEn: 'Currency Conversion Function',
    description: 'Defina uma função chamada converter_dolar(reais, cotacao=5.50) que retorne o valor correspondente em dólares arredondado com round(valor, 2). Teste com 110 reais.',
    descriptionEn: 'Define a function converter_dolar(reais, cotacao=5.50) returning corresponding dollar value rounded with round(val, 2). Test with 110 reais.',
    difficulty: 'easy',
    starterCode: py`# Defina a função converter_dolar e chame com 110 reais:
`,
    solution: py`def converter_dolar(reais, cotacao=5.50):
    return round(reais / cotacao, 2)

resultado = converter_dolar(110)
print(f"Valor em Dólares: $ {resultado}")`,
    expectedOutput: 'Valor em Dólares: $ 20.0',
    hints: [
      'def converter_dolar(reais, cotacao=5.50):',
      'Retorne o valor com a instrução return round(reais / cotacao, 2)',
      '110 dividido por 5.50 é exatamente 20.0',
    ],
    hintsEn: [
          "def converter_dolar(reais, cotacao=5.50):",
          "Return value using return round(reais / cotacao, 2)",
          "110 divided by 5.50 is exactly 20.0"
    ],
    xpReward: 50,
  },

  // --- l5-2: Parâmetros Avançados ---
  {
    id: 'ex-l5-2-1',
    lessonId: 'l5-2',
    title: 'Somador Flexível com *args',
    titleEn: 'Flexible Summer with *args',
    description: 'Crie uma função somar_tudo(*valores) que retorne a soma de todos os números passados. Execute e imprima a soma dos números 10, 20, 30 e 40.',
    descriptionEn: 'Create a function somar_tudo(*valores) that returns the sum of all numbers passed. Call and print the sum of numbers 10, 20, 30, and 40.',
    difficulty: 'easy',
    starterCode: py`# Defina a função com *valores e teste:
`,
    solution: py`def somar_tudo(*valores):
    return sum(valores)

print("Soma total:", somar_tudo(10, 20, 30, 40))`,
    expectedOutput: 'Soma total: 100',
    hints: [
      '*valores agrupa todos os argumentos posicionais em uma tupla',
      'A função nativa sum(valores) soma todos os itens da tupla',
    ],
    hintsEn: [
          "*valores bundles all positional arguments into a tuple",
          "The built-in sum(valores) sums all items in the tuple"
    ],
    xpReward: 50,
  },

  // --- l5-4: Funções Lambda ---
  {
    id: 'ex-l5-4-1',
    lessonId: 'l5-4',
    title: 'Ordenação com Lambda',
    titleEn: 'Sorting with Lambda',
    description: 'Dada a lista de tuplas alunos = [("Bruno", 7.5), ("Alice", 9.8), ("Carlos", 6.0)], ordene a lista pela nota em ordem decrescente usando sorted() e uma expressão lambda.',
    descriptionEn: 'Given list of tuples alunos = [("Bruno", 7.5), ("Alice", 9.8), ("Carlos", 6.0)], sort by grade in descending order using sorted() and a lambda expression.',
    difficulty: 'medium',
    starterCode: py`alunos = [("Bruno", 7.5), ("Alice", 9.8), ("Carlos", 6.0)]

# Ordene por nota decrescente e exiba:
`,
    solution: py`alunos = [("Bruno", 7.5), ("Alice", 9.8), ("Carlos", 6.0)]
ordenados = sorted(alunos, key=lambda a: a[1], reverse=True)
print(ordenados)`,
    expectedOutput: "[('Alice', 9.8), ('Bruno', 7.5), ('Carlos', 6.0)]",
    hints: [
      'Use o parâmetro key=lambda a: a[1] para indicar que o critério é o segundo elemento (a nota)',
      'Adicione reverse=True para ordem decrescente',
    ],
    hintsEn: [
      "Use parameter key=lambda a: a[1] to sort by the second element (the grade)",
      "Add reverse=True for descending order",
    ],
    xpReward: 60,
  },

  // --- l5-5: Recursão ---
  {
    id: 'ex-l5-5-1',
    lessonId: 'l5-5',
    title: 'Fatorial Recursivo',
    titleEn: 'Recursive Factorial',
    description: 'Implemente uma função recursiva fatorial(n) com caso base n <= 1 retornando 1. Calcule e exiba o fatorial de 5.',
    descriptionEn: 'Implement a recursive function fatorial(n) with base case n <= 1 returning 1. Calculate and display the factorial of 5.',
    difficulty: 'medium',
    starterCode: py`# Implemente a função recursiva fatorial:
`,
    solution: py`def fatorial(n):
    if n <= 1:
        return 1
    return n * fatorial(n - 1)

print("5! =", fatorial(5))`,
    expectedOutput: '5! = 120',
    hints: [
      'Caso base: if n <= 1: return 1',
      'Caso recursivo: return n * fatorial(n - 1)',
      '5 * 4 * 3 * 2 * 1 = 120',
    ],
    hintsEn: [
          "Base case: if n <= 1: return 1",
          "Recursive case: return n * fatorial(n - 1)",
          "5 * 4 * 3 * 2 * 1 = 120"
    ],
    xpReward: 60,
  },

  // --- l5-6: Desafio Funções ---
  {
    id: 'ex-l5-6-1',
    lessonId: 'l5-6',
    title: 'Detector de Números Primos',
    titleEn: 'Prime Number Detector',
    description: 'Crie uma função eh_primo(n) que retorne True se n for primo e False se não for. Teste com os números 13 e 15.',
    descriptionEn: 'Create a function eh_primo(n) that returns True if n is prime and False otherwise. Test with numbers 13 and 15.',
    difficulty: 'medium',
    starterCode: py`# Crie a função eh_primo e teste:
`,
    solution: py`def eh_primo(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print("13 é primo?", eh_primo(13))
print("15 é primo?", eh_primo(15))`,
    expectedOutput: `13 é primo? True
15 é primo? False`,
    hints: [
      'Números <= 1 não são primos',
      'Percorra divisores de 2 até a raiz quadrada de n',
      'Se n % i == 0, então possui divisor e não é primo',
    ],
    hintsEn: [
          "Numbers <= 1 are not prime",
          "Check divisors from 2 up to the square root of n",
          "If n % i == 0, it has a divisor and is not prime"
    ],
    xpReward: 70,
  },

  // ==========================================
  // ===== MÓDULO 6: ORIENTAÇÃO A OBJETOS =====
  // ==========================================

  // --- l6-2: Métodos e Atributos ---
  {
    id: 'ex-l6-2-1',
    lessonId: 'l6-2',
    title: 'Classe Livro com Método Especial',
    titleEn: 'Book Class with Special Method',
    description: 'Crie uma classe Livro com construtor __init__(self, titulo, autor) e o método mágico __str__(self) retornando "Livro: {titulo} por {autor}". Instancie com "Dom Casmurro" e "Machado de Assis" e dê print().',
    descriptionEn: 'Create a Book class with constructor __init__(self, titulo, autor) and magic method __str__(self) returning "Livro: {titulo} por {autor}". Instantiate with "Dom Casmurro" and "Machado de Assis" and print it.',
    difficulty: 'easy',
    starterCode: py`# Crie a classe Livro com __init__ e __str__:
`,
    solution: py`class Livro:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor

    def __str__(self):
        return f"Livro: {self.titulo} por {self.autor}"

obra = Livro("Dom Casmurro", "Machado de Assis")
print(obra)`,
    expectedOutput: 'Livro: Dom Casmurro por Machado de Assis',
    hints: [
      'No __init__, guarde self.titulo = titulo e self.autor = autor',
      'O método __str__(self) deve retornar uma string',
      'Ao chamar print(obra), o Python executa o método __str__ do objeto',
    ],
    hintsEn: [
          "In __init__, store self.titulo = titulo and self.autor = autor",
          "Method __str__(self) must return a string",
          "When calling print(book), Python calls the __str__ method of the object"
    ],
    xpReward: 50,
  },

  // --- l6-3: Encapsulamento ---
  {
    id: 'ex-l6-3-1',
    lessonId: 'l6-3',
    title: 'Termômetro com @property',
    titleEn: 'Thermometer with @property',
    description: 'Crie uma classe Termometro com atributo interno _celsius inicializado em 0. Crie o getter @property celsius e o setter @celsius.setter validando que a temperatura não pode ser inferior ao zero absoluto (-273.15). Teste atribuindo 25.',
    descriptionEn: 'Create a Termometro class with internal attribute _celsius initialized to 0. Create getter @property celsius and setter @celsius.setter validating temperature cannot be below absolute zero (-273.15). Test by assigning 25.',
    difficulty: 'medium',
    starterCode: py`# Crie a classe Termometro com @property e @setter:
`,
    solution: py`class Termometro:
    def __init__(self, celsius=0.0):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, valor):
        if valor < -273.15:
            raise ValueError("Temperatura abaixo do zero absoluto!")
        self._celsius = valor

t = Termometro()
t.celsius = 25.0
print(f"Temperatura atual: {t.celsius}°C")`,
    expectedOutput: 'Temperatura atual: 25.0°C',
    hints: [
      'O decorador @property transforma o método em uma propriedade de leitura',
      'O decorador @celsius.setter é invocado na atribuição com o operador =',
    ],
    hintsEn: [
          "@property decorator turns method into a read property",
          "The @celsius.setter decorator is invoked on assignment with =",
          "Raise ValueError if val < -273.15"
    ],
    xpReward: 60,
  },

  // --- l6-4: Herança ---
  {
    id: 'ex-l6-4-1',
    lessonId: 'l6-4',
    title: 'Hierarquia de Veículos com super()',
    titleEn: 'Vehicle Hierarchy with super()',
    description: 'Crie a classe base Veiculo(marca, modelo) e a subclasse Carro que adiciona portas=4 usando super().__init__(). Crie um método exibir() que imprima "{marca} {modelo} com {portas} portas".',
    descriptionEn: 'Create base class Veiculo(marca, modelo) and subclass Carro adding portas=4 using super().__init__(). Create an exibir() method printing "{marca} {modelo} com {portas} portas".',
    difficulty: 'easy',
    starterCode: py`# Crie a classe base Veiculo e a subclasse Carro:
`,
    solution: py`class Veiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

class Carro(Veiculo):
    def __init__(self, marca, modelo, portas=4):
        super().__init__(marca, modelo)
        self.portas = portas

    def exibir(self):
        print(f"{self.marca} {self.modelo} com {self.portas} portas")

c = Carro("Toyota", "Corolla")
c.exibir()`,
    expectedOutput: 'Toyota Corolla com 4 portas',
    hints: [
      'class Carro(Veiculo): indica a herança',
      'super().__init__(marca, modelo) repassa os dados para o construtor pai',
    ],
    hintsEn: [
          "class Carro(Veiculo): denotes inheritance",
          "super().__init__(marca, modelo) passes arguments to parent constructor"
    ],
    xpReward: 50,
  },

  // --- l6-5: Polimorfismo ---
  {
    id: 'ex-l6-5-1',
    lessonId: 'l6-5',
    title: 'Notificadores Polimórficos',
    titleEn: 'Polymorphic Notifiers',
    description: 'Crie duas classes: NotificadorEmail e NotificadorSMS. Ambas devem ter o método enviar(mensagem). Percorra uma lista com instâncias de ambas invocando .enviar("Alerta do Sistema").',
    descriptionEn: 'Create two classes: NotificadorEmail and NotificadorSMS. Both must have an enviar(mensagem) method. Iterate over a list with instances of both calling .enviar("Alerta do Sistema").',
    difficulty: 'medium',
    starterCode: py`# Implemente o polimorfismo entre os dois notificadores:
`,
    solution: py`class NotificadorEmail:
    def enviar(self, msg):
        print(f"[EMAIL] Enviado: {msg}")

class NotificadorSMS:
    def enviar(self, msg):
        print(f"[SMS] Enviado: {msg}")

notificadores = [NotificadorEmail(), NotificadorSMS()]
for n in notificadores:
    n.enviar("Alerta do Sistema")`,
    expectedOutput: `[EMAIL] Enviado: Alerta do Sistema
[SMS] Enviado: Alerta do Sistema`,
    hints: [
      'Ambas as classes possuem o mesmo método enviar(self, msg)',
      'O loop trata os dois objetos da mesma maneira (polimorfismo)',
    ],
    hintsEn: [
          "Both classes have the same enviar(self, msg) method",
          "The loop treats both objects uniformly (polymorphism)"
    ],
    xpReward: 60,
  },

  // ==========================================
  // ===== MÓDULO 7: ARQUIVOS E ERROS =========
  // ==========================================

  // --- l7-1: try/except ---
  {
    id: 'ex-l7-1-1',
    lessonId: 'l7-1',
    title: 'Conversor Numérico com Tratamento de Exceções',
    titleEn: 'Numeric Converter with Exception Handling',
    description: 'Implemente uma função converter_para_inteiro(texto) que tente converter uma string com int(). Se ocorrer ValueError, capture o erro e retorne None. Teste com "123" e com "abc".',
    descriptionEn: 'Implement function converter_para_inteiro(texto) that tries converting a string with int(). If ValueError occurs, catch it and return None. Test with "123" and "abc".',
    difficulty: 'easy',
    starterCode: py`# Implemente a função segura com try/except ValueError:
`,
    solution: py`def converter_para_inteiro(texto):
    try:
        return int(texto)
    except ValueError:
        return None

print(converter_para_inteiro("123"))
print(converter_para_inteiro("abc"))`,
    expectedOutput: `123
None`,
    hints: [
      'Envolva int(texto) dentro do bloco try',
      'No bloco except ValueError: retorne None',
    ],
    hintsEn: [
          "Wrap int(texto) inside a try block",
          "In except ValueError: block return None"
    ],
    xpReward: 40,
  },

  // --- l7-2: Exceções Personalizadas ---
  {
    id: 'ex-l7-2-1',
    lessonId: 'l7-2',
    title: 'Criando Exceção de Saldo Negativo',
    titleEn: 'Creating Negative Balance Exception',
    description: 'Crie uma classe SaldoInsuficienteError que herda de Exception. Crie uma função validar_saque(saldo, valor) que levanta (raise) essa exceção caso o valor seja maior que o saldo.',
    descriptionEn: 'Create class SaldoInsuficienteError inheriting from Exception. Create function validar_saque(saldo, valor) raising this exception if valor > saldo.',
    difficulty: 'medium',
    starterCode: py`# Crie a exceção e teste capturando no try/except:
`,
    solution: py`class SaldoInsuficienteError(Exception):
    pass

def validar_saque(saldo, valor):
    if valor > saldo:
        raise SaldoInsuficienteError("Saldo insuficiente para o saque solicitado!")
    return saldo - valor

try:
    validar_saque(100, 250)
except SaldoInsuficienteError as erro:
    print("Erro capturado:", erro)`,
    expectedOutput: 'Erro capturado: Saldo insuficiente para o saque solicitado!',
    hints: [
      'class SaldoInsuficienteError(Exception): pass',
      'Use a palavra raise SaldoInsuficienteError("mensagem") quando valor > saldo',
    ],
    hintsEn: [
          "class SaldoInsuficienteError(Exception): pass",
          "Use raise SaldoInsuficienteError(\"mensagem\") when valor > saldo"
    ],
    xpReward: 60,
  },

  // --- l7-5: JSON ---
  {
    id: 'ex-l7-5-1',
    lessonId: 'l7-5',
    title: 'Serialização e Desserialização de JSON',
    titleEn: 'JSON Serialization and Deserialization',
    description: 'Dado o dicionário usuario = {"id": 1, "ativo": True}, serialize-o para string JSON com json.dumps() e depois desserialize de volta com json.loads(), exibindo o campo "id".',
    descriptionEn: 'Given dict usuario = {"id": 1, "ativo": True}, serialize to JSON string with json.dumps() and deserialize back with json.loads(), displaying the "id" field.',
    difficulty: 'easy',
    starterCode: py`import json

usuario = {"id": 1, "ativo": True}

# Converta para JSON string e de volta para dict:
`,
    solution: py`import json

usuario = {"id": 1, "ativo": True}
texto_json = json.dumps(usuario)
dados_recuperados = json.loads(texto_json)

print("JSON String:", texto_json)
print("ID recuperado:", dados_recuperados["id"])`,
    expectedOutput: `JSON String: {"id": 1, "ativo": true}
ID recuperado: 1`,
    hints: [
      'json.dumps() converte dicionário em string JSON',
      'json.loads() converte string JSON de volta para dicionário Python',
    ],
    hintsEn: [
          "json.dumps() converts dictionary to JSON string",
          "json.loads() converts JSON string back to Python dictionary"
    ],
    xpReward: 50,
  },

  // ==========================================
  // ===== MÓDULO 8: BIBLIOTECAS PYTHON =======
  // ==========================================

  // --- l8-2: NumPy ---
  {
    id: 'ex-l8-2-1',
    lessonId: 'l8-2',
    title: 'Operações Vetorizadas com Arrays',
    titleEn: 'Vectorized Operations with Arrays',
    description: 'Crie uma simulação conceitual de vetorização: dada uma lista precos = [100, 200, 300], aplique 10% de imposto em cada valor usando list comprehension e exiba a lista resultante.',
    descriptionEn: 'Create a conceptual simulation of vectorization: given list precos = [100, 200, 300], apply 10% tax to each value using list comprehension and display the resulting list.',
    difficulty: 'easy',
    starterCode: py`precos = [100, 200, 300]

# Calcule os preços com 10% de acréscimo e exiba:
`,
    solution: py`precos = [100, 200, 300]
com_imposto = [p * 1.10 for p in precos]
print("Preços com imposto:", com_imposto)`,
    expectedOutput: 'Preços com imposto: [110.0, 220.0, 330.0]',
    hints: [
      'Cada elemento deve ser multiplicado por 1.10',
      'Use a compreensão [p * 1.10 for p in precos]',
    ],
    hintsEn: [
      "Each element should be multiplied by 1.10",
      "Use comprehension [p * 1.10 for p in precos]",
    ],
    xpReward: 40,
  },

  // --- l8-3: Pandas ---
  {
    id: 'ex-l8-3-1',
    lessonId: 'l8-3',
    title: 'Filtragem Estruturada de Tabela',
    titleEn: 'Structured Table Filtering',
    description: 'Dado o conjunto de dados registros = [{"nome": "Ana", "vendas": 5000}, {"nome": "Bob", "vendas": 1200}, {"nome": "Clara", "vendas": 8000}], filtre apenas quem vendeu mais de 3000 e exiba os nomes.',
    descriptionEn: 'Given records = [{"nome": "Ana", "vendas": 5000}, {"nome": "Bob", "vendas": 1200}, {"nome": "Clara", "vendas": 8000}], filter those with sales > 3000 and display their names.',
    difficulty: 'medium',
    starterCode: py`registros = [
    {"nome": "Ana", "vendas": 5000},
    {"nome": "Bob", "vendas": 1200},
    {"nome": "Clara", "vendas": 8000}
]

# Filtre os destaques (vendas > 3000) e exiba os nomes:
`,
    solution: py`registros = [
    {"nome": "Ana", "vendas": 5000},
    {"nome": "Bob", "vendas": 1200},
    {"nome": "Clara", "vendas": 8000}
]

destaques = [r["nome"] for r in registros if r["vendas"] > 3000]
print("Vendedores destaque:", destaques)`,
    expectedOutput: "Vendedores destaque: ['Ana', 'Clara']",
    hints: [
      'Use compreensão com filtro: [r["nome"] for r in registros if r["vendas"] > 3000]',
    ],
    hintsEn: [
      'Use comprehension with filter: [r["nome"] for r in registros if r["vendas"] > 3000]',
      'Print the resulting list of names',
    ],
    xpReward: 50,
  },

  // --- l8-5: Requests ---
  {
    id: 'ex-l8-5-1',
    lessonId: 'l8-5',
    title: 'Parsing de Resposta de API',
    titleEn: 'API Response Parsing',
    description: 'Dada a string simulada de resposta de API payload = \'{"status": 200, "data": {"cotacao": 5.42}}\', faça o parse com json.loads() e imprima "Cotação recebida: 5.42".',
    descriptionEn: 'Given mock API JSON string payload = \'{"status": 200, "data": {"cotacao": 5.42}}\', parse it with json.loads() and print "Cotação recebida: 5.42".',
    difficulty: 'easy',
    starterCode: py`import json

payload = '{"status": 200, "data": {"cotacao": 5.42}}'

# Converta a string e acesse o campo de cotação:
`,
    solution: py`import json

payload = '{"status": 200, "data": {"cotacao": 5.42}}'
resposta = json.loads(payload)
cotacao = resposta["data"]["cotacao"]
print("Cotação recebida:", cotacao)`,
    expectedOutput: 'Cotação recebida: 5.42',
    hints: [
      'resposta = json.loads(payload)',
      'Acesse de forma encadeada: resposta["data"]["cotacao"]',
    ],
    hintsEn: [
      'resposta = json.loads(payload)',
      'Access chained keys: resposta["data"]["cotacao"]',
    ],
    xpReward: 40,
  },
];
