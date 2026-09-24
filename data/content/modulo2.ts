// Módulo 2: Python Básico - Conteúdo Didático Completo

export const MODULO_2_CONTENT: Record<string, string> = {
  'l2-1': `
# Introdução ao Python: A Linguagem Mais Amada do Mundo 🐍

Seja muito bem-vindo ao mundo do **Python**! 

Criada em 1991 pelo programador holandês **Guido van Rossum**, Python foi projetada com um lema em mente: **código legível é mais importante do que código esperto**.

---

## 🎭 Curiosidade: De onde veio o nome "Python"?

Ao contrário do que a maioria pensa, o nome Python **não veio da cobra píton**! 

Guido van Rossum era muito fã de uma famosa trupe de comédia britânica dos anos 70 chamada **Monty Python's Flying Circus**. Ele queria um nome que fosse curto, único e um pouco misterioso. Por isso, a comunidade de Python até hoje adora fazer piadas com referências a Monty Python (por exemplo, usar as palavras *spam* e *eggs* como nomes de variáveis em tutoriais).

---

## 🌟 O Zen do Python (A Filosofia da Linguagem)

Se você abrir qualquer terminal Python e digitar:
\`\`\`python
import this
\`\`\`
Você verá um poema com os princípios fundamentais da linguagem:

* *Bonito é melhor que feio.*
* *Explícito é melhor que implícito.*
* *Simples é melhor que complexo.*
* *Complexo é melhor que complicado.*
* *Legibilidade conta.*
* *Se a implementação é difícil de explicar, é uma má ideia.*

---

## 🚀 Onde o Python domina o mundo hoje?

1. **Inteligência Artificial & Machine Learning:** Praticamente toda biblioteca de ponta de IA moderna (PyTorch, TensorFlow, Scikit-Learn) é escrita ou controlada em Python.
2. **Ciência e Análise de Dados:** Empresas como Netflix e Spotify usam Python (com Pandas e NumPy) para analisar o que você assiste e te recomendar filmes e músicas.
3. **Desenvolvimento Web e APIs:** Frameworks modernos como FastAPI e Django rodam os servidores de plataformas gigantescas como o Instagram.
4. **Automação de Tarefas e Scripts:** Fazer em 10 segundos o que um humano levaria 5 horas no Excel (copiar arquivos, ler PDFs, enviar emails automáticos).

---

## ⌨️ Sua Primeira Linha de Código

O ritual de passagem de todo programador na história é o famoso **"Hello World"**:

\`\`\`python
print("Hello, World!")
\`\`\`

A função \`print()\` é um comando nativo do Python que pega o que está dentro dos parênteses e exibe na tela para o usuário.
`,

  'l2-2': `
# Instalação e Ambiente de Desenvolvimento 💻

No DevStart, você pode rodar Python direto no seu navegador sem instalar nada! Mas para o mercado de trabalho real, você vai querer ter o ambiente configurado no seu computador.

---

## 🛠️ O que compõe o ambiente de um desenvolvedor Python?

1. **O Interpretador Python:** O programa que lê o seu arquivo de texto com código e executa no computador.
2. **Um Editor de Código (IDE):** Onde você digita seus códigos. O padrão da indústria hoje é o **Visual Studio Code (VSCode)** ou o **Antigravity IDE**.
3. **O Terminal:** A tela preta (Prompt de Comando ou PowerShell no Windows) onde você executa comandos e vê os resultados.

---

## 📥 Passo a Passo para Instalar no seu Computador (Windows)

1. Acesse o site oficial: **[python.org/downloads](https://www.python.org/downloads/)**
2. Baixe a versão mais recente do Python 3.
3. **MUITO IMPORTANTE no instalador:**
   > ⚠️ Logo na primeira tela do instalador, marque a caixinha:
   > **[X] Add Python to PATH** (ou *Adicionar Python às variáveis de ambiente*).
   > Se você esquecer de marcar essa caixinha, o Windows não vai reconhecer o comando \`python\` no terminal!
4. Clique em **Install Now** e aguarde concluir.

---

## 🔍 Como Testar se Funcionou?

Abra o seu terminal (pressione as teclas \`Win + R\`, digite \`cmd\` ou \`powershell\` e aperte Enter) e digite:

\`\`\`bash
python --version
\`\`\`

Se aparecer algo como \`Python 3.12.x\` (ou superior), parabéns! O Python está devidamente instalado e pronto para criar maravilhas.
`,

  'l2-3': `
# Variáveis em Python: Prática e Convenções 🔢

Em Python, criar uma variável é incrivelmente simples. Você só precisa escolher o nome e usar o sinal de igual \`=\` para atribuir um valor.

\`\`\`python
nome = "Kauã"
idade = 22
saldo = 350.50
ativo = True
\`\`\`

---

## 🔄 Tipagem Dinâmica: O Python é Esperto!

Em linguagens antigas (como C ou Java), você era obrigado a declarar o tipo da variável antes de criá-la:
\`\`\`c
int idade = 20; // Em C: você tinha que avisar que era um número inteiro
\`\`\`

No Python, você **não precisa avisar o tipo**! O Python descobre sozinho pelo valor que você colocou:
\`\`\`python
x = 10         # Python sabe automaticamente que é int (inteiro)
x = "DevStart" # Agora virou string (texto) sem nenhum erro!
\`\`\`

---

## 📝 O Padrão de Nomes: snake_case

A comunidade Python segue um guia oficial de estilo de código chamado **PEP 8**.

A regra para variáveis é o **snake_case** (todas as letras minúsculas separadas por sublinhado):

* ✅ **Excelente:** \`data_de_nascimento\`, \`total_pedidos\`, \`preco_com_desconto\`
* ❌ **Evite:** \`dataDeNascimento\` (estilo camelCase usado em JavaScript)
* ❌ **Evite:** \`totalpedidos\` (tudo junto fica difícil de ler)
* ❌ **Terrível:** \`x1\`, \`a\`, \`temp\` (nomes misteriosos que ninguém sabe o que significam)

---

## ⚡ Atribuição Múltipla e Truque de Troca de Valores

O Python tem alguns "superpoderes" que economizam muitas linhas de código:

### Criar várias variáveis na mesma linha:
\`\`\`python
nome, cargo, salario = "Lucas", "Analista", 4500.00
print(nome)    # Lucas
print(salario) # 4500.00
\`\`\`

### Inverter valores entre variáveis em 1 linha só:
\`\`\`python
copo_a = "suco de laranja"
copo_b = "refrigerante"

# No Python, trocamos os conteúdos instantaneamente:
copo_a, copo_b = copo_b, copo_a

print("Copo A agora tem:", copo_a) # refrigerante
print("Copo B agora tem:", copo_b) # suco de laranja
\`\`\`
`,

  'l2-4': `
# Tipos de Dados Fundamentais e Conversões 🏷️

Como saber qual tipo de dado está guardado dentro de uma variável? O Python nos dá uma função pronta para isso: **\`type()\`**.

\`\`\`python
nome = "Python"
ano = 2026
altura = 1.78
aprovado = True

print(type(nome))     # <class 'str'>
print(type(ano))      # <class 'int'>
print(type(altura))   # <class 'float'>
print(type(aprovado)) # <class 'bool'>
\`\`\`

---

## 🔄 Type Casting (Conversão de Tipos)

Muitas vezes, recebemos dados em um formato e precisamos transformá-los em outro. As 4 principais funções de conversão são:

1. **\`int()\`**: Converte para número inteiro.
   \`\`\`python
   texto = "50"
   numero = int(texto) # Agora é o número 50 real!
   print(numero + 10)  # Imprime: 60
   \`\`\`
2. **\`float()\`**: Converte para número decimal.
   \`\`\`python
   preco = float("19.90") # Vira o float 19.90
   \`\`\`
3. **\`str()\`**: Converte qualquer coisa para texto.
   \`\`\`python
   idade = 25
   texto = "Eu tenho " + str(idade) + " anos."
   \`\`\`
4. **\`bool()\`**: Converte para booleano.
   * Zero (\`0\`), strings vazias (\`""\`) e listas vazias viram \`False\`.
   * Qualquer número diferente de zero ou texto com conteúdo vira \`True\`.

---

## 🚨 A Pegadinha Clássica do Iniciante

Veja o que acontece se você somar dois números que estão guardados como strings (entre aspas):

\`\`\`python
num1 = "10"
num2 = "20"
resultado = num1 + num2
print(resultado)
\`\`\`

O que você acha que vai imprimir? 30?
**NÃO! Vai imprimir \`1020\`!** 

Por quê? Porque quando somamos strings (\`str + str\`), o Python faz **concatenação** (gruda os textos um no outro) em vez de somar matematicamente. Se você quer a conta matemática de verdade, deve converter: \`int(num1) + int(num2)\`!
`,

  'l2-5': `
# Operadores Matemáticos e de Comparação 🧮

O Python funciona como uma supercalculadora científica de altíssima precisão.

---

## ➕ Operadores Aritméticos

| Operador | Operação | Exemplo | Resultado |
|---|---|---|---|
| \`+\` | Adição | \`10 + 5\` | \`15\` |
| \`-\` | Subtração | \`10 - 5\` | \`5\` |
| \`*\` | Multiplicação | \`10 * 5\` | \`50\` |
| \`/\` | Divisão real (sempre dá float) | \`10 / 4\` | \`2.5\` |
| \`//\` | Divisão inteira (joga fora os decimais) | \`10 // 4\` | \`2\` |
| \`%\` | Módulo (Resto da divisão) | \`10 % 3\` | \`1\` |
| \`**\` | Potenciação (Exponencial) | \`2 ** 3\` | \`8\` (2 * 2 * 2) |

---

## 🎯 O Truque Secreto do Módulo (\`%\`)

O operador de resto \`%\` é um dos mais úteis de toda a programação. Como ele funciona?
* Se dividirmos 10 por 2, a divisão é exata e o resto é **0**.
* Se dividirmos 11 por 2, sobra **1**.

> 💡 **Como saber se qualquer número é Par ou Ímpar:**
> Basta testar: \`numero % 2 == 0\`. Se for igual a zero, é **PAR**. Se sobrar 1, é **ÍMPAR**!

---

## ⏩ Operadores de Atribuição Acelerada

Ao invés de digitar \`pontos = pontos + 10\`, você pode usar o atalho:
* \`pontos += 10\` (soma 10)
* \`vidas -= 1\` (subtrai 1)
* \`salario *= 1.10\` (aumenta em 10%)
`,

  'l2-6': `
# Trabalhando com Strings e f-Strings Modernas 📝

Strings são cadeias de caracteres usadas para guardar qualquer tipo de texto.

---

## ✂️ Fatiamento de Strings (String Slicing)

No Python, cada letra em uma string tem um endereço numérico chamado **índice**, que começa sempre do **zero**:

\`\`\`python
texto = "PYTHON"
# Índices:
#   P -> 0
#   Y -> 1
#   T -> 2
#   H -> 3
#   O -> 4
#   N -> 5
\`\`\`

Você pode "fatiar" a palavra como uma fatia de queijo com a sintaxe \`[início : fim : passo]\`:

\`\`\`python
linguagem = "Python"

print(linguagem[0])    # P (primeira letra)
print(linguagem[-1])   # n (última letra - índices negativos começam do final!)
print(linguagem[0:3])  # Pyt (do índice 0 até antes do 3)
print(linguagem[2:])   # thon (do índice 2 até o final)
print(linguagem[::-1]) # nohtyP (o truque supremo para inverter uma string!)
\`\`\`

---

## 🧰 Principais Métodos de String

\`\`\`python
mensagem = "  Aprender Python é Incrível  "

# Limpeza e maiúsculas
print(mensagem.strip())       # Remove os espaços em branco das pontas
print(mensagem.upper())       # APRENDER PYTHON É INCRÍVEL
print(mensagem.lower())       # aprender python é incrível
print(mensagem.replace("Python", "Lógica")) # Troca uma palavra por outra

# Descobrir tamanho
print(len(mensagem))          # Conta a quantidade total de caracteres
\`\`\`

---

## ✨ f-Strings: A Mágica da Interpolação

Antes do Python 3.6, juntar texto com variáveis era feio e cansativo. Hoje usamos as **f-strings** (basta colocar a letra \`f\` antes das aspas):

\`\`\`python
aluno = "Kauã"
nota = 9.856
curso = "Python"

# Coloque as variáveis diretamente dentro de chaves {}:
mensagem = f"O aluno {aluno} tirou nota {nota:.1f} no curso de {curso}!"
print(mensagem)
# Saída formatada com 1 casa decimal:
# "O aluno Kauã tirou nota 9.9 no curso de Python!"
\`\`\`
`,

  'l2-7': `
# Entrada e Saída: Interagindo com o Usuário 💬

Um programa que não recebe informações do usuário é apenas uma animação estática. A verdadeira utilidade surge quando você cria programas que reagem a perguntas!

---

## 📥 A Função \`input()\`

A função \`input()\` pausa a execução do programa e fica esperando o usuário digitar algo e apertar a tecla **Enter**.

\`\`\`python
nome = input("Qual é o seu nome? ")
print(f"Muito prazer em te conhecer, {nome}!")
\`\`\`

---

## ⚠️ A Regra Suprema do \`input()\`

> 🚨 **Grave isso para sempre na sua memória:**
> O \`input()\` **SEMPRE** entrega o valor digitado como **texto (\`str\`)**, mesmo que a pessoa digite apenas números!

Se você tentar fazer isso:
\`\`\`python
idade = input("Digite sua idade: ")
ano_que_vem = idade + 1 # 💥 ERRO! Não pode somar texto com número!
\`\`\`

Para fazer contas com o que o usuário digitou, você **precisa** converter o input:

\`\`\`python
idade = int(input("Digite sua idade: "))
ano_que_vem = idade + 1
print(f"No ano que vem você fará {ano_que_vem} anos!")
\`\`\`

---

## 🖨️ Truques Avançados do \`print()\`

O \`print()\` tem dois parâmetros opcionais incríveis:

### 1. O separador (\`sep\`):
\`\`\`python
# Por padrão ele separa por espaço, mas você pode mudar:
print("24", "09", "2026", sep="/") # Imprime: 24/09/2026
\`\`\`

### 2. O final (\`end\`):
\`\`\`python
# Por padrão ele pula linha ao terminar, mas você pode impedir:
print("Carregando", end="...")
print(" Concluído!")
# Imprime tudo na mesma linha: "Carregando... Concluído!"
\`\`\`
`,

  'l2-8': `
# Quiz e Revisão Completa: Python Básico 🎯

Parabéns por completar todas as lições práticas do **Módulo 2**!

---

## 🏆 Resumo das Competências que você adquiriu:

1. **Variáveis e Tipos:** Sabe usar \`int\`, \`float\`, \`str\` e \`bool\`.
2. **Entrada e Saída:** Sabe usar \`print()\` formatado com f-strings e receber dados com \`input()\`.
3. **Conversões:** Sabe transformar texto em números com \`int()\` e \`float()\` para evitar erros de cálculo.
4. **Manipulação de Texto:** Domina fatiamento, métodos de limpeza como \`strip()\` e caixa alta/baixa.
5. **Operadores:** Sabe calcular restos com \`%\`, potências com \`**\` e divisões inteiras com \`//\`.

---

## ❓ Teste Rápido de Fixação (Pense antes de olhar a resposta):

1. **Qual é o resultado de \`type(10.0)\`?**
   * *Resposta:* \`<class 'float'>\` (tem ponto decimal, então é float, mesmo sendo zero depois da vírgula).
2. **O que acontece ao rodar \`"3" * 4\` no Python?**
   * *Resposta:* \`"3333"\`! Em Python, multiplicar string por número repete o texto!
3. **Qual a diferença entre \`=\` e \`==\`?**
   * *Resposta:* \`=\` é atribuição (guarda valor na caixa), \`==\` é comparação de igualdade.

No **Módulo 3**, entraremos no coração dos sistemas: **Estruturas de Controle (if/else e Loops)**!
`,
};
