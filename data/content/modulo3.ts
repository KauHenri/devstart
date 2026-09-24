// Módulo 3: Estruturas de Controle - Conteúdo Didático Completo

export const MODULO_3_CONTENT: Record<string, string> = {
  'l3-1': `
# Condicionais em Python: if, elif e else 🔀

Até aqui, todos os nossos programas rodavam de cima para baixo em linha reta. Mas um programa de verdade precisa saber **tomar decisões**:
* Se o usuário digitar a senha certa, entra no sistema.
* Se errar, exibe uma mensagem de erro.

Em Python, usamos as palavras reservadas:
* **\`if\`** ("se")
* **\`elif\`** (abreviação de "else if" - "senão se")
* **\`else\`** ("senão")

---

## 📐 A Regra de Ouro do Python: A Indentação!

Em outras linguagens como C ou JavaScript, blocos de código são cercados por chaves \`{ }\`.
No Python, **a indentação (o espaçamento com 4 espaços ou tecla Tab) define quem está dentro do bloco**:

\`\`\`python
idade = 18

if idade >= 18:
    print("Linha de dentro do if (tem 4 espaços)")
    print("Também de dentro do if")

print("Linha fora do if (executa sempre, sem espaços)")
\`\`\`

> 🚨 **Atenção:** Nunca se esqueça dos dois pontos **\`:\`** no final da linha do \`if\`, \`elif\` ou \`else\`!

---

## 🚦 Exemplo Prático: Classificador de Faixa Etária

\`\`\`python
idade = int(input("Digite a sua idade: "))

if idade < 12:
    print("Você é uma Criança.")
elif idade < 18:
    print("Você é um Adolescente.")
elif idade < 60:
    print("Você é um Adulto.")
else:
    print("Você é um Idoso.")
\`\`\`

O Python testa de cima para baixo: no momento em que encontrar uma condição verdadeira, ele executa aquele bloco específico e pula todos os outros direto para o final!
`,

  'l3-2': `
# Operadores Lógicos: and, or e not 🧩

E se precisarmos verificar mais de uma condição ao mesmo tempo?
Por exemplo: para entrar na montanha-russa, você precisa ter **mais de 12 anos E medir mais de 1.40m**.

Em Python, combinamos condições com palavras em inglês legíveis:
* **\`and\`** (ambas as condições precisam ser verdadeiras)
* **\`or\`** (basta pelo menos UMA das condições ser verdadeira)
* **\`not\`** (inverte o valor: transforma True em False e vice-versa)

---

## 📊 A Tabela da Verdade Explicada com Café ☕

### 1. O Operador \`and\` (Exigente):
Imagine que você só toma café se tiver **café E açúcar**:
* Tem café + Tem açúcar ➔ **Tomo o café (\`True\`)**
* Tem café + Falta açúcar ➔ **Não tomo (\`False\`)**
* Falta café + Tem açúcar ➔ **Não tomo (\`False\`)**

\`\`\`python
tem_cafe = True
tem_acucar = True

if tem_cafe and tem_acucar:
    print("Café quentinho pronto!")
\`\`\`

### 2. O Operador \`or\` (Flexível):
Imagine que você aceita pagar a conta com **Cartão de Crédito OU Pix**:
* Pagou com Cartão? ➔ **Aprovado (\`True\`)**
* Pagou com Pix? ➔ **Aprovado (\`True\`)**
* Pagou com os dois? ➔ **Aprovado (\`True\`)**
* Não tem nenhum dos dois? ➔ **Recusado (\`False\`)**

\`\`\`python
cartao = False
pix = True

if cartao or pix:
    print("Pagamento confirmado com sucesso!")
\`\`\`

### 3. O Operador \`not\` (Inversor):
\`\`\`python
chovendo = False

if not chovendo:
    print("Tempo bom, vamos passear no parque!")
\`\`\`
`,

  'l3-3': `
# O Loop while: Repetindo Enquanto uma Condição for Verdadeira 🔄

O comando **\`while\`** ("enquanto") serve para repetir um bloco de instruções quantas vezes forem necessárias, até que uma determinada condição mude e passe a ser falsa.

---

## 🔢 Anatomia de um Loop while

Todo loop \`while\` seguro é composto por três partes:
1. **Inicialização:** Criar uma variável contadora antes do loop começar.
2. **Condição:** A pergunta que define se o loop continua rodando.
3. **Atualização (Passo):** Alterar a variável dentro do loop para evitar loops infinitos!

Veja este exemplo que conta de 1 até 5:
\`\`\`python
contador = 1 # 1. Inicialização

while contador <= 5: # 2. Condição
    print(f"Número atual: {contador}")
    contador += 1 # 3. Atualização (soma 1 a cada volta)

print("Fim da contagem!")
\`\`\`

---

## 🛡️ Menu Interativo com Saída do Usuário

O \`while\` brilha quando você não sabe quantas vezes o usuário vai querer usar o programa antes de sair:

\`\`\`python
opcao = ""

while opcao != "3":
    print("\n--- MENU DO SISTEMA ---")
    print("1. Ver Saldo")
    print("2. Fazer Depósito")
    print("3. Sair")
    
    opcao = input("Escolha uma opção: ")
    
    if opcao == "1":
        print("Seu saldo é R$ 1.500,00")
    elif opcao == "2":
        print("Depósito realizado com sucesso!")
    elif opcao == "3":
        print("Obrigado por usar nosso sistema. Até logo!")
    else:
        print("Opção inválida, tente novamente.")
\`\`\`
`,

  'l3-4': `
# O Loop for e a Função range() 🎯

Se o \`while\` é ótimo quando você não sabe quantas repetições acontecerão, o **\`for\`** é o rei absoluto quando você quer percorrer uma sequência ou repetir um número exato de vezes!

---

## 🎛️ Dominando a Função \`range()\`

A função \`range()\` cria uma sequência de números sob medida para o \`for\`. Ela aceita até 3 argumentos:
\`range(início, fim, passo)\`

> ⚠️ **Lembre-se:** O valor de **fim** nunca é incluído! (É sempre até \`fim - 1\`).

### 1. Apenas 1 argumento (vai de 0 até antes do número):
\`\`\`python
for i in range(5):
    print(i) # Imprime: 0, 1, 2, 3, 4
\`\`\`

### 2. Com início e fim:
\`\`\`python
for i in range(1, 6):
    print(i) # Imprime: 1, 2, 3, 4, 5
\`\`\`

### 3. Com passo (pula de quanto em quanto):
\`\`\`python
# Números pares de 0 a 10:
for i in range(0, 11, 2):
    print(i) # Imprime: 0, 2, 4, 6, 8, 10
\`\`\`

### 4. Contagem regressiva (passo negativo):
\`\`\`python
for contagem in range(5, 0, -1):
    print(contagem)
print("🚀 Lançamento!")
\`\`\`

---

## 🔤 Percorrendo Letras de uma Palavra

O \`for\` pode iterar diretamente sobre qualquer string:

\`\`\`python
palavra = "PYTHON"
for letra in palavra:
    print(f"Letra: {letra}")
\`\`\`
`,

  'l3-5': `
# Controle Avançado de Loops: break e continue ⏹️

Às vezes, dentro de uma repetição, acontece um evento extraordinário e você precisa mudar os planos do loop na hora. O Python nos dá dois comandos para isso:

---

## 🛑 O Comando \`break\` (Pare Tudo e Saia!)

O \`break\` cancela e encerra imediatamente o loop, pulando para a primeira linha após ele.

Imagine uma busca por um item em um depósito:
\`\`\`python
produtos = ["arroz", "feijão", "macarrão", "azeite", "sal"]

for item in produtos:
    print(f"Verificando prateleira: {item}")
    if item == "macarrão":
        print("🎯 Achei o macarrão! Não preciso continuar procurando.")
        break # Interrompe o loop imediatamente!

print("Busca concluída.")
\`\`\`

---

## ⏭️ O Comando \`continue\` (Pule para a Próxima Volta!)

O \`continue\` não encerra o loop; ele apenas ignora o resto da volta atual e pula direto para a próxima repetição.

Exemplo: imprimir números de 1 a 10, **pulando o número 5**:
\`\`\`python
for num in range(1, 11):
    if num == 5:
        print("Pulando o número proibido...")
        continue # Pula o print(num) e vai para o 6!
    
    print(f"Número: {num}")
\`\`\`
`,

  'l3-6': `
# Desafio Prático: Mini Calculadora Interativa 🧮

Chegou a hora de reunir todo o conhecimento do Módulo 3 em uma aplicação real de terminal!

---

## 📋 Especificações do Projeto:

Você vai construir uma calculadora de terminal completa que:
1. Apresente um menu contínuo de operações (\`+\`, \`-\`, \`*\`, \`/\`, ou \`S\` para Sair).
2. Peça dois números ao usuário.
3. Trate a divisão por zero (não deixe o programa quebrar se o usuário tentar dividir por zero!).
4. Mostre o resultado formatado.
5. Só feche o programa quando o usuário digitar expressamente a opção de sair.

---

## 💻 Código de Referência Completo:

\`\`\`python
while True:
    print("\n" + "=" * 30)
    print("      MINI CALCULADORA")
    print("=" * 30)
    print("[ + ] Adição")
    print("[ - ] Subtração")
    print("[ * ] Multiplicação")
    print("[ / ] Divisão")
    print("[ S ] Sair")
    
    opcao = input("Escolha a operação desejada: ").strip().upper()
    
    if opcao == "S":
        print("Obrigado por usar a Mini Calculadora! Até logo! 👋")
        break
        
    if opcao not in ["+", "-", "*", "/"]:
        print("❌ Opção inválida! Escolha um dos símbolos da lista.")
        continue
        
    num1 = float(input("Digite o 1º número: "))
    num2 = float(input("Digite o 2º número: "))
    
    if opcao == "+":
        resultado = num1 + num2
        print(f"✅ Resultado: {num1} + {num2} = {resultado}")
    elif opcao == "-":
        resultado = num1 - num2
        print(f"✅ Resultado: {num1} - {num2} = {resultado}")
    elif opcao == "*":
        resultado = num1 * num2
        print(f"✅ Resultado: {num1} * {num2} = {resultado}")
    elif opcao == "/":
        if num2 == 0:
            print("❌ Erro Matemático: Impossível dividir por zero!")
        else:
            resultado = num1 / num2
            print(f"✅ Resultado: {num1} / {num2} = {resultado:.2f}")
\`\`\`

Esse projeto reúne variáveis, conversão de tipo (\`float\`), condicionais (\`if/elif/else\`), loop infinito com parada (\`while True\` + \`break\`), f-strings e tratamento de casos de borda!
`,
};
