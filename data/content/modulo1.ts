// Módulo 1: Lógica de Programação - Conteúdo Didático Completo

export const MODULO_1_CONTENT: Record<string, string> = {
  'l1-1': `
# O que é Programação? 🧠

Imagine que você quer ensinar alguém a fazer um bolo. Você precisa escrever uma **receita** — uma lista de passos na ordem certa. Se você esquecer de colocar "unte a forma" antes de "despeje a massa", o bolo vai grudar. Se esquecer de "ligue o forno", o bolo não assa.

**Programar é exatamente isso**: escrever uma receita de bolo para o computador.

---

## 🖥️ O que é um Programa de Computador?

Um programa nada mais é do que um conjunto ordenado de **instruções** que dizem ao computador o que fazer com determinadas informações.

> 💡 **A Grande Verdade:**
> O computador é extremamente rápido e nunca se cansa, mas ele é **completamente literal**. Ele não tem bom senso, não adivinha intenções e não toma iniciativas. Se você disser *"ande até a parede"*, ele andará até bater a cabeça nela se você não tiver dito *"pare quando chegar a 10cm da parede"*.

---

## 🔍 Como o Computador Pensa?

No nível mais básico do hardware, o computador só entende sinais elétricos:
* **Ligado (1)**
* **Desligado (0)**

Isso é o que chamamos de **código binário**. Seria horrível para nós, seres humanos, escrevermos programas inteiros usando apenas zeros e uns como \`01001000 01100101 01101100 01101100 01101111\`.

Por isso, foram inventadas as **Linguagens de Programação**:
\`\`\`
Nós (Humanos) ➔ Escrevemos em Python (Legível) ➔ O Interpretador traduz ➔ O Processador executa em Binário (0 e 1)
\`\`\`

---

## 🐍 Por que Python é a Melhor Linguagem para Começar?

Criada por **Guido van Rossum** em 1991, Python foi desenhada com um objetivo central: **ser tão legível quanto o inglês**.

Veja este exemplo:
\`\`\`python
idade = 18

if idade >= 18:
    print("Você é maior de idade!")
else:
    print("Você é menor de idade.")
\`\`\`

Mesmo quem nunca programou na vida consegue bater o olho e entender: *"Se a idade for maior ou igual a 18, imprima que é maior de idade; senão, imprima que é menor."*

---

## 📌 Os 3 Pilares Fundamentais de Qualquer Programa

Praticamente todo software do planeta — de uma calculadora simples ao Instagram ou ao algoritmo do YouTube — é composto por três etapas básicas:

1. **Entrada (Input):** Dados que entram no programa (ex: o que você digita, o clique do mouse, a foto da câmera).
2. **Processamento:** O que o programa faz com esses dados (ex: faz uma conta matemática, verifica se a senha confere, corta uma imagem).
3. **Saída (Output):** O resultado entregue de volta para você (ex: mensagem na tela, som na caixa de som, salvar um arquivo).

---

## 🎯 Resumo da Aula

* **Programação** = dar instruções lógicas e ordenadas para o computador resolver um problema.
* **Computadores são literais** = a precisão dos seus comandos importa muito.
* **Python** = a linguagem mais intuitiva, moderna e versátil do mercado atual.

Na próxima aula, vamos aprender sobre **Algoritmos**: a técnica que estrutura essas instruções passo a passo! 🚀
`,

  'l1-2': `
# Algoritmos: O Passo a Passo da Solução 📋

Todo mundo executa dezenas de algoritmos todos os dias sem nem perceber.

Quando você acorda, você provavelmente segue uma sequência:
1. Desligar o despertador
2. Levantar da cama
3. Ir até o banheiro
4. Escovar os dentes
5. Lavar o rosto

Se você tentar escovar os dentes antes de colocar a pasta na escova, não funciona. A **ordem dos passos** importa tanto quanto os passos em si.

---

## 🧩 O que define um Algoritmo?

Um **algoritmo** é uma **sequência finita de passos lógicos e bem definidos** que têm como objetivo solucionar um problema específico.

Para um algoritmo ser considerado válido, ele precisa de 5 características:

1. **Finitude:** Precisa ter um fim garantido. Nunca pode ficar rodando para sempre sem propósito.
2. **Clareza (Não-ambiguidade):** Cada instrução deve ter apenas uma interpretação possível. *"Coloque um pouco de açúcar"* não é algorítmico, mas *"Coloque 2 colheres de sopa de açúcar"* é.
3. **Entrada de dados:** O que o algoritmo precisa receber antes de começar.
4. **Saída de dados:** O resultado final entregue.
5. **Efetividade:** Cada passo precisa ser simples o suficiente para poder ser executado na prática.

---

## 🧮 Exemplo Real: Algoritmo de Média de Notas de um Aluno

Imagine que uma escola precisa saber se um aluno foi aprovado com base em duas provas:

\`\`\`
Passo 1: Receba a Nota 1 da prova.
Passo 2: Receba a Nota 2 da prova.
Passo 3: Some a Nota 1 com a Nota 2.
Passo 4: Divida o resultado da soma por 2 para achar a Média.
Passo 5: Se a Média for maior ou igual a 7:
           Mostre "Parabéns, você foi aprovado!"
         Senão:
           Mostre "Você ficou de recuperação."
Passo 6: Fim do algoritmo.
\`\`\`

Veja como cada passo é cristalino e impossível de ser mal interpretado!

---

## 🛠️ Como Desenvolver o Pensamento Algorítmico?

Quando estiver diante de um problema novo de programação, **nunca saia digitando código direto no editor**. Siga esta fórmula:

1. **Entenda o objetivo final:** O que o cliente ou usuário quer ver na tela?
2. **Identifique a matéria-prima:** Quais dados eu já tenho ou preciso pedir?
3. **Divida o problema grande em pedacinhos (Decomposição):** Resolver 3 problemas pequenos é 10x mais fácil do que resolver 1 problema gigante de uma vez só.
4. **Escreva em português primeiro:** Se você não consegue explicar a solução com palavras normais, o computador com certeza não vai entender em Python.
`,

  'l1-3': `
# Variáveis e Tipos de Dados: Guardando Informações 📦

Quando você joga um videogame, onde fica guardada a sua pontuação atual, a quantidade de vidas do seu personagem e o nome do seu jogador?

Na memória do computador, dentro de **Variáveis**!

---

## 📦 A Metáfora das Caixas Etiquetadas

Pense em uma variável como uma caixa organizadora:
* A caixa tem uma **etiqueta com um nome** (para você encontrar ela facilmente).
* A caixa tem um **conteúdo guardado lá dentro** (o valor).
* O conteúdo pode **variar** (mudar com o tempo) — por isso se chama *variável*!

Por exemplo:
\`\`\`
[ nome_usuario ] ➔ "Ana Clara"
[ saldo_bancario ] ➔ 1450.75
[ nivel_jogador ] ➔ 5
[ vip_ativo ] ➔ True
\`\`\`

---

## 🏷️ Os 4 Tipos de Dados Fundamentais

Em programação, computadores tratam números, textos e valores lógicos de maneiras completamente diferentes. Os 4 tipos básicos que você usará todo santo dia são:

| Tipo em Python | Nome Completo | O que guarda | Exemplos |
|---|---|---|---|
| **\`int\`** | Integer (Inteiro) | Números inteiros (positivos ou negativos) sem casas decimais | \`10\`, \`0\`, \`-5\`, \`2026\` |
| **\`float\`** | Floating Point (Ponto Flutuante) | Números reais que contêm casas decimais | \`3.14\`, \`99.90\`, \`-0.5\` |
| **\`str\`** | String (Cadeia de Caracteres) | Textos, palavras, símbolos e frases entre aspas | \`"Olá Mundo"\`, \`'Python'\`, \`"123"\` |
| **\`bool\`** | Boolean (Booleano) | Apenas dois estados: Verdadeiro ou Falso | \`True\`, \`False\` |

> ⚠️ **Atenção crucial com decimais:**
> Em programação, usamos **ponto (.)** e nunca vírgula (,) para separar casas decimais:
> * Correto: \`preco = 19.99\`
> * Errado: \`preco = 19,99\` (o Python vai achar que são dois números separados!)

---

## 🚫 Regras para Dar Nomes às suas Variáveis

Para não confundir o Python, existem regras que você deve seguir:

1. **Não pode começar com números:**
   * ❌ \`1nome = "Pedro"\` (Erro de sintaxe!)
   * ✅ \`nome1 = "Pedro"\` ou \`primeiro_nome = "Pedro"\`
2. **Não pode conter espaços:**
   * ❌ \`salario mensal = 3000\`
   * ✅ \`salario_mensal = 3000\` (use o underscore \`_\` para separar palavras - padrão chamado de *snake_case*)
3. **Sensível a maiúsculas e minúsculas (*Case Sensitive*):**
   * \`Idade\`, \`idade\` e \`IDADE\` são três caixas completamente diferentes para o Python!
`,

  'l1-4': `
# Estruturas de Decisão: Ensinando o Computador a Escolher 🔀

Até agora, nossos algoritmos seguiam uma linha reta: faz o passo 1, depois o 2, depois o 3.

Mas a vida real é cheia de bifurcações na estrada:
* **SE** chover ➔ levo guarda-chuva.
* **SENÃO** ➔ saio de óculos escuros.

As **Estruturas de Decisão** (ou estruturas condicionais) permitem que o seu programa tome caminhos diferentes dependendo da situação.

---

## 🚦 A Estrutura Lógica: SE, SENÃO SE e SENÃO

Em lógica pura e em pseudocódigo, a decisão funciona assim:

\`\`\`
SE (condição for Verdadeira):
    Executa este bloco de ações A
SENÃO SE (outra condição for Verdadeira):
    Executa este bloco de ações B
SENÃO:
    Se nada do que foi testado acima for verdade, executa a ação C
\`\`\`

---

## ⚖️ Operadores de Comparação

Como o computador sabe se algo é verdadeiro ou falso? Ele compara valores usando estes símbolos:

| Operador | Significado | Exemplo | Resultado |
|---|---|---|---|
| \`==\` | Igual a | \`5 == 5\` | Verdadeiro (\`True\`) |
| \`!=\` | Diferente de | \`5 != 3\` | Verdadeiro (\`True\`) |
| \`>\` | Maior que | \`10 > 2\` | Verdadeiro (\`True\`) |
| \`<\` | Menor que | \`4 < 1\` | Falso (\`False\`) |
| \`>=\` | Maior ou igual a | \`18 >= 18\` | Verdadeiro (\`True\`) |
| \`<=\` | Menor ou igual a | \`7 <= 10\` | Verdadeiro (\`True\`) |

> 🚨 **Cuidado de Ouro do Iniciante:**
> * Um único \`=\` significa **GUARDAR** um valor na caixa (\`pontos = 10\`).
> * Dois iguais \`==\` significa **COMPARAR** se dois valores são iguais (\`pontos == 10\`).

---

## 💡 Exemplo Prático: Semáforo Inteligente

\`\`\`python
cor_semaforo = "verde"

if cor_semaforo == "verde":
    print("Siga em frente com segurança!")
elif cor_semaforo == "amarelo":
    print("Atenção! Diminua a velocidade.")
elif cor_semaforo == "vermelho":
    print("Pare totalmente o veículo!")
else:
    print("Sinal intermitente ou com defeito. Redobre a cautela.")
\`\`\`
`,

  'l1-5': `
# Estruturas de Repetição: O Superpoder da Automação 🔁

Seres humanos odeiam fazer a mesma tarefa 1.000 vezes seguidas. Nós ficamos entediados, cansados e começamos a errar.

Os computadores foram criados justamente para isso: **eles amam repetição**! Um computador pode repetir um cálculo 1 bilhão de vezes por segundo sem reclamar e com 100% de precisão.

Em programação, chamamos essas estruturas de **Loops** ou **Laços de Repetição**.

---

## 🔄 Os Dois Tipos de Repetição na Vida Real

Existem duas formas de mandar alguém repetir algo:

### 1. Repetição por Condição (ENQUANTO / \`while\`)
Você não sabe exatamente quantas vezes vai acontecer, mas sabe a condição de parada:
> *"Coma sopa **ENQUANTO** ainda tiver comida no prato."*
> *"Fique no elevador **ENQUANTO** não chegar no 10º andar."*

### 2. Repetição por Contagem (PARA CADA / \`for\`)
Você sabe exatamente o número de repetições ou a lista de itens a percorrer:
> *"Dê **10 voltas** na pista de corrida."*
> *"Envie um email para **CADA cliente** da nossa lista de contatos."*

---

## ⚠️ O Pesadelo do Programador: O Loop Infinito!

Imagine que você escreve o seguinte algoritmo:
\`\`\`
ENQUANTO (a bateria do celular for menor que 100%):
    espere
\`\`\`
Se o carregador estiver desconectado da tomada, a bateria **nunca** vai subir. O que acontece? O programa fica preso para sempre esperando, trava e congela o sistema.

Isso é chamado de **Loop Infinito**. Sempre que você cria uma repetição condicional, precisa garantir que em algum momento a condição vai deixar de ser verdadeira para o programa poder prosseguir!
`,

  'l1-6': `
# Fluxogramas: Desenhando o Pensamento 📐

Antes de construir uma casa, um arquiteto faz a planta baixa. Antes de gravar um filme, o diretor monta um storyboard com desenhos cena a cena.

Na programação, o **Fluxograma** é o desenho visual do seu algoritmo. Ele permite que você e sua equipe vejam os caminhos possíveis do sistema antes de escrever uma única linha de código.

---

## 🔷 As Formas Padrão de um Fluxograma

Existe um padrão internacional (norma ISO) para as formas geométricas usadas em diagramas de software:

| Símbolo | Nome | Para que serve |
|---|---|---|
| 🟡 **Oval / Círculo** | **Terminador** | Indica o **INÍCIO** ou o **FIM** do algoritmo. |
| 🔲 **Retângulo** | **Processamento** | Uma ação ou cálculo interno (ex: \`soma = a + b\`). |
| 🔷 **Losango** | **Decisão** | Uma pergunta de Sim/Não (ex: \`idade >= 18?\`). Dele saem 2 setas! |
| ▱ **Paralelogramo** | **Entrada/Saída** | Entrada de dados pelo usuário ou exibição na tela. |
| ➔ **Setas de Fluxo** | **Linha de Fluxo** | Conectam as formas mostrando a direção da execução. |

---

## 🗺️ Visualizando uma Decisão em Fluxograma

Imagine a validação de uma senha de login:

\`\`\`text
   [ INÍCIO ]
       │
       ▼
  / Digite a Senha /
       │
       ▼
    < A Senha é "1234"? > ─── NÃO ───➔ [ Exibir "Senha Errada" ] ──➔ [ FIM ]
       │
      SIM
       │
       ▼
  [ Exibir "Bem-vindo!" ]
       │
       ▼
    [ FIM ]
\`\`\`

Ver o problema em formato de diagrama elimina 90% das dúvidas lógicas antes mesmo de você abrir o editor de código.
`,

  'l1-7': `
# Pseudocódigo: Falando a Língua dos Algoritmos ✍️

O **Pseudocódigo** (frequentemente chamado de *Portugol* no Brasil) é um jeito de escrever programas usando a nossa própria língua materna (português), mas estruturado com a mesma rigidez e lógica de uma linguagem de computador.

Ele é perfeito porque **não se preocupa com a sintaxe ou regras chatas de uma linguagem específica** — ele foca 100% no seu raciocínio puro.

---

## 📝 Comparando: Linguagem Natural vs. Pseudocódigo vs. Python

Veja a evolução do mesmo problema: calcular o desconto de uma compra.

### 1. Português Comum (Linguagem Natural):
> *"Pega o valor da compra. Se passou de cem reais, dá dez por cento de desconto e mostra o valor final com o desconto aplicado."*

### 2. Pseudocódigo (Estruturado):
\`\`\`text
ALGORITMO CalcularDesconto
VARIÁVEIS
    valor_compra, desconto, valor_final : REAL
INÍCIO
    ESCREVA("Digite o valor da compra:")
    LEIA(valor_compra)
    
    SE valor_compra > 100 ENTÃO
        desconto 🡨 valor_compra * 0.10
        valor_final 🡨 valor_compra - desconto
        ESCREVA("Desconto aplicado de 10%!")
    SENÃO
        valor_final 🡨 valor_compra
        ESCREVA("Sem desconto para este valor.")
    FIM_SE
    
    ESCREVA("Total a pagar: R$ ", valor_final)
FIM
\`\`\`

### 3. Em Python (O Código Real):
\`\`\`python
valor_compra = float(input("Digite o valor da compra: "))

if valor_compra > 100:
    desconto = valor_compra * 0.10
    valor_final = valor_compra - desconto
    print("Desconto aplicado de 10%!")
else:
    valor_final = valor_compra
    print("Sem desconto para este valor.")

print(f"Total a pagar: R$ {valor_final:.2f}")
\`\`\`

Percebe como quem dominou o passo 2 consegue escrever o código em Python (ou JavaScript, C++, Java) em minutos? O raciocínio é idêntico!
`,

  'l1-8': `
# Desafio de Lógica: Pense como um Programador 🏆

Parabéns por chegar até o final do **Módulo 1**! Você agora já tem a base conceitual mais importante da ciência da computação.

---

## 🧠 O Grande Desafio: O Enigma dos Baldes d'Água

Este é um clássico teste de raciocínio lógico usado em entrevistas técnicas reais em empresas de tecnologia (como Google e Microsoft):

> **Cenário:**
> Você está na beira de um rio com água infinita e tem apenas **dois baldes vazios**:
> * Um balde cabe exatamente **5 litros**.
> * Outro balde cabe exatamente **3 litros**.
> 
> Os baldes não têm nenhuma marcação de medição no meio. Como você consegue medir **exatamente 4 litros** de água usando apenas esses dois baldes?

---

### 💡 A Resolução Algorítmica Passo a Passo:

Pense no algoritmo como uma sequência de transferências:

1. **Encha totalmente o balde de 5L** até a borda. (Balde 5L = 5, Balde 3L = 0)
2. **Despeje a água do balde de 5L no balde de 3L** até o balde menor encher.
   * *Resultado:* O balde de 3L ficou cheio e sobraram **exatamente 2 litros** no balde de 5L!
3. **Esvazie completamente o balde de 3L** jogando a água fora no rio. (Balde 5L = 2, Balde 3L = 0)
4. **Despeje os 2 litros do balde grande para dentro do balde de 3L**.
   * *Resultado:* O balde de 3L agora tem 2 litros de água e ainda tem espaço para exatamente mais 1 litro! (Balde 5L = 0, Balde 3L = 2)
5. **Encha novamente o balde de 5L totalmente no rio**. (Balde 5L = 5, Balde 3L = 2)
6. **Despeje do balde de 5L para o balde de 3L até ele encher**.
   * Como o balde de 3L só precisava de mais 1 litro para encher, ele vai receber 1L.
   * *Resultado Final:* **Sobram exatamente 4 LITROS no balde de 5L!** 🎯

---

## 🚀 Você concluiu o Módulo 1!
Agora você pensa como um programador: você decompõe problemas, entende variáveis, decisões e repetições.

No **Módulo 2**, vamos colocar as mãos no teclado e escrever nossos primeiros programas reais em Python!
`,
};
