// Módulo 5: Funções em Python - Conteúdo Didático Aprofundado

export const MODULO_5_CONTENT: Record<string, string> = {
  'l5-1': `
# Definindo Funções em Python (\`def\`, Parâmetros e Retorno) ⚙️

Na engenharia de software profissional, existe um mantra absoluto: **DRY — Don't Repeat Yourself** (Não se repita). Se você copia e cola o mesmo bloco de código em múltiplos lugares do seu projeto, você acaba de criar uma bomba-relógio de manutenção: quando uma regra de negócio mudar, você terá que lembrar de alterar manualmente cada cópia.

Uma **função** é um bloco nomeado de código autônomo, projetado para executar uma tarefa específica e bem delimitada. Pense em uma função como uma **máquina de suco industrial**:
1. Ela possui uma **entrada** (frutas colocadas no compartimento).
2. Ela realiza um **processamento** interno (lâminas triturando e espremendo).
3. Ela entrega uma **saída** palpável (um copo de suco fresco na bandeja).

---

## 🏗️ Anatomia de uma Função em Python

Para ensinar uma nova função ao interpretador Python, utilizamos a palavra reservada \`def\` (do inglês *define*), seguida pelo nome da função em \`snake_case\`, parênteses para os parâmetros e dois-pontos (\`:\`).

\`\`\`
  def   nome_da_funcao  (  parametro_1, parametro_2  )  :
   │          │                        │                │
palavra     identificador          parâmetros de     início do
reserva     em snake_case             entrada          bloco
\`\`\`

\`\`\`python
# 1. DEFINIÇÃO DA FUNÇÃO
def saudar_desenvolvedor(nome, linguagem):
    """Exibe uma mensagem acolhedora personalizada."""
    mensagem = f"Olá, {nome}! Bem-vindo à jornada de domínio em {linguagem}."
    print(mensagem)

# 2. CHAMADA / INVOCANDO A FUNÇÃO
saudar_desenvolvedor("Alice", "Python")
saudar_desenvolvedor("Bob", "TypeScript")
\`\`\`

---

## 🔄 \`print()\` vs \`return\`: A Diferença Fundamental

Um dos equívocos mais frequentes entre programadores iniciantes é confundir **exibir na tela** com **retornar um valor**.

| Recurso | O que realmente faz? | Analogia do Restaurante |
| :--- | :--- | :--- |
| **\`print()\`** | Apenas exibe caracteres no terminal/console. O dado se perde no vácuo logo após. | O garçom grita o nome do prato no salão, mas não coloca a comida na sua mesa. |
| **\`return\`** | Finaliza a função e **entrega o resultado computado** de volta para quem a chamou. | O garçom entrega a bandeja com o prato em mãos para você poder almoçar. |

\`\`\`python
# Exemplo com print (o resultado NÃO pode ser reaproveitado):
def calcular_area_print(largura, altura):
    area = largura * altura
    print(area)

resultado = calcular_area_print(5, 4) # Imprime 20 no console
print("Tipo do resultado:", type(resultado)) # <class 'NoneType'> -> VAZIO!

# Exemplo correto com return (o resultado É devolvido):
def calcular_area_return(largura, altura):
    area = largura * altura
    return area

area_sala = calcular_area_return(5, 4)
# Agora podemos fazer cálculos matemáticos, salvar no banco, etc:
preco_piso_por_metro = 45.0
custo_total = area_sala * preco_piso_por_metro
print(f"Custo total para cobrir {area_sala}m²: R$ {custo_total:.2f}")
\`\`\`

---

## 📦 Retorno Múltiplo de Valores

Em Python, uma função pode devolver múltiplos valores simultaneamente separados por vírgula. Por baixo dos panos, o Python empacota esses valores em uma **Tupla** imutável, permitindo o desempacotamento direto (*unpacking*):

\`\`\`python
def analisar_numeros(lista):
    menor = min(lista)
    maior = max(lista)
    media = sum(lista) / len(lista)
    return menor, maior, media  # Retorna uma tupla: (menor, maior, media)

dados = [12, 45, 7, 89, 23, 56]
minimo, maximo, media_aritmetica = analisar_numeros(dados)

print(f"Mínimo: {minimo} | Máximo: {maximo} | Média: {media_aritmetica:.1f}")
\`\`\`

---

## ⚠️ Pegadinhas e Erros Comuns

1. **Esquecer os parênteses na chamada:**
   \`\`\`python
   def obter_status():
       return "Servidor Ativo"

   print(obter_status)   # Exibe: <function obter_status at 0x...> (aponta para a função na memória!)
   print(obter_status()) # Exibe: "Servidor Ativo" (executa a função!)
   \`\`\`
2. **Código inalcançável (*Unreachable Code*) após o \`return\`:**
   Qualquer linha escrita após o \`return\` dentro do mesmo fluxo nunca será executada, pois o \`return\` encerra a função imediatamente.

---

## 💡 Boas Práticas (PEP 8)

* **Docstrings:** Documente sempre suas funções com uma string explicativa na primeira linha usando aspas triplas (\`"""\`).
* **Nomes em \`snake_case\` descritivos:** Use verbos no infinitivo para indicar ações claras (\`calcular_desconto\`, \`validar_cpf\`, \`enviar_email\`). Evite nomes genéricos como \`f()\`, \`coisa()\` ou \`processa()\`.
`,

  'l5-2': `
# Parâmetros Avançados: Defaults, *args e **kwargs 📦

Em sistemas corporativos, nem todos os dados são obrigatórios, e funções flexíveis são essenciais para construir APIs robustas e bibliotecas reutilizáveis.

---

## 1. Valores Padrão (*Default Parameters*)

Você pode atribuir valores padrão a parâmetros. Se o chamador não fornecer aquele argumento, o valor padrão entra em ação automaticamente:

\`\`\`python
def conectar_banco(host="localhost", porta=5432, timeout=30):
    print(f"Conectando a {host}:{porta} (Timeout: {timeout}s)...")

# Chamadas com diferentes níveis de flexibilidade:
conectar_banco()                           # Usa todos os defaults
conectar_banco("192.168.1.100")            # Altera apenas o host
conectar_banco(porta=5433, timeout=60)     # Argumentos nomeados (keyword arguments)
\`\`\`

> 🚨 **Atenção à Regra de Ouro da Sintaxe:** Parâmetros com valores padrão SEMPRE devem vir **depois** dos parâmetros obrigatórios, caso contrário ocorrerá \`SyntaxError: non-default argument follows default argument\`.

---

## 2. \`*args\` (Argumentos Posicionais Variáveis)

Quando você não sabe com antecedência quantos dados serão passados para a função (por exemplo, uma calculadora que soma uma quantidade indeterminada de números), usamos o prefixo asterisco \`*args\`.

O Python coleta todos os argumentos extras passados por posição e os agrupa em uma **Tupla**:

\`\`\`python
def somar_numeros(*args):
    # args é uma tupla, ex: (10, 20, 30)
    print(f"Valores recebidos: {args} (Tipo: {type(args).__name__})")
    total = sum(args)
    return total

print("Resultado 1:", somar_numeros(5, 10))
print("Resultado 2:", somar_numeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
\`\`\`

---

## 3. \`**kwargs\` (Argumentos Nomeados Variáveis)

O prefixo duplo asterisco \`**kwargs\` (*Keyword Arguments*) captura todos os argumentos passados no formato \`chave=valor\` e os empacota em um **Dicionário**:

\`\`\`python
def cadastrar_produto(id_produto, nome, preco, **kwargs):
    print(f"--- Produto #{id_produto}: {nome} (R$ {preco:.2f}) ---")
    for chave, valor in kwargs.items():
        print(f"  • {chave.replace('_', ' ').title()}: {valor}")

# Passando atributos dinâmicos sem alterar a assinatura da função:
cadastrar_produto(
    101, "Mouse Gamer", 250.00,
    marca="Logitech", dpi=16000, rgb=True, garantia_meses=24
)
\`\`\`

---

## 🗺️ Ordem Universal de Parâmetros

Ao combinar diferentes tipos de parâmetros na mesma função, a PEP 8 e a sintaxe do Python exigem estritamente esta ordem:

\`\`\`
def funcao(posicionais_obrigatorios, *args, default_values=..., **kwargs):
\`\`\`

---

## ⚠️ Pegadinha Crítica: Objetos Mutáveis como Valor Default

**NUNCA use listas, dicionários ou sets como valor padrão de um parâmetro!**
O valor padrão é avaliado **uma única vez** quando a função é definida pelo Python, e não a cada chamada.

\`\`\`python
# ❌ ERRO GRAVE: A lista padrão é compartilhada entre chamadas!
def adicionar_item(item, lista=[]):
    lista.append(item)
    return lista

print(adicionar_item("A")) # ['A']
print(adicionar_item("B")) # ['A', 'B'] -> CUIDADO! O 'A' persistiu!

# ✅ FORMA CORRETA E PROFISSIONAL:
def adicionar_item_seguro(item, lista=None):
    if lista is None:
        lista = [] # Uma nova lista independente criada em tempo de execução
    lista.append(item)
    return lista
\`\`\`
`,

  'l5-3': `
# Escopo de Variáveis: Local, Enclosing, Global e Built-in (LEGB) 🌍

Uma variável criada no seu código não é acessível em qualquer lugar sem critérios. O Python possui regras rígidas de **visibilidade de identificadores**, conhecidas pela sigla **LEGB**:

\`\`\`
┌──────────────────────────────────────────────┐
│  L - Local (Dentro da própria função)        │
│   ┌──────────────────────────────────────────┤
│   │  E - Enclosing (Funções aninhadas)       │
│   │   ┌──────────────────────────────────────┤
│   │   │  G - Global (No nível do arquivo/módulo)
│   │   │   ┌──────────────────────────────────┤
│   │   │   │  B - Built-in (print, len, range)│
└───┴───┴───┴──────────────────────────────────┘
\`\`\`

---

## 1. Escopo Local vs Escopo Global

\`\`\`python
taxa_juros = 0.05  # Variável GLOBAL (visível no arquivo todo)

def calcular_parcela(valor_emprestimo, meses):
    # taxa_juros é lida do escopo global
    # total_juros e valor_final são variáveis LOCAIS
    total_juros = valor_emprestimo * (taxa_juros * meses)
    valor_final = valor_emprestimo + total_juros
    return valor_final / meses

parcela = calcular_parcela(1000, 12)
print(f"Valor da parcela: R$ {parcela:.2f}")

# Tentativa de acessar variável local fora da função:
# print(total_juros) # 💥 NameError: name 'total_juros' is not defined!
\`\`\`

---

## 2. A Palavra-Chave \`global\` (e por que evitá-la)

Quando você tenta **atribuir** um valor a uma variável que já existe globalmente dentro de uma função, o Python cria uma **nova variável local** com o mesmo nome (fenômeno chamado de *Shadowing*).

\`\`\`python
pontuacao = 0

def marcar_ponto():
    global pontuacao  # Avisa ao Python que queremos alterar a variável GLOBAL
    pontuacao += 10

marcar_ponto()
print("Pontuação global:", pontuacao) # 10
\`\`\`

> 💡 **Boas Práticas de Engenharia:** Evite usar \`global\` em projetos reais. O uso de variáveis globais mutáveis gera "efeitos colaterais" (*side-effects*) difíceis de rastrear em sistemas grandes. A abordagem correta é passar dados por **parâmetros** e obter resultados pelo **\`return\`**.

---

## 3. Escopo Enclosing e a Palavra \`nonlocal\` (Closures)

Quando temos uma função definida dentro de outra função, a função interna tem acesso ao escopo da função que a envolve (*Enclosing Scope*):

\`\`\`python
def criar_contador():
    contagem = 0
    def incrementar():
        nonlocal contagem  # Altera a variável do escopo da função pai
        contagem += 1
        return contagem
    return incrementar

meu_contador = criar_contador()
print(meu_contador()) # 1
print(meu_contador()) # 2
print(meu_contador()) # 3
\`\`\`
`,

  'l5-4': `
# Funções de Primeira Classe e Expressões Lambda λ

Em Python, funções são **cidadãs de primeira classe** (*First-Class Citizens*). Isso significa que funções podem ser tratadas como qualquer outro dado: podem ser atribuídas a variáveis, passadas como argumentos para outras funções e retornadas de funções.

---

## 1. Atribuindo Funções a Variáveis

\`\`\`python
def gritar(texto):
    return texto.upper() + "!!!"

# Atribuindo a função sem os parênteses:
anunciador = gritar
print(anunciador("atenção para o comunicado")) # ATENÇÃO PARA O COMUNICADO!!!
\`\`\`

---

## 2. O que são Expressões Lambda?

Uma **expressão lambda** é uma função anônima (sem nome explícito) de uma única linha. Sua sintaxe é compacta:

\`\`\`
lambda parametro1, parametro2: expressao_de_retorno
\`\`\`

Comparação direta:
\`\`\`python
# Função tradicional:
def calcular_imposto(preco):
    return preco * 0.15

# Expressão lambda equivalente:
calcular_imposto_lambda = lambda preco: preco * 0.15

print(calcular_imposto(100))        # 15.0
print(calcular_imposto_lambda(100)) # 15.0
\`\`\`

---

## 3. Uso Prático: \`sorted()\`, \`map()\` e \`filter()\`

Expressões lambda brilham quando usadas como argumentos temporários para funções de alta ordem (*Higher-Order Functions*).

### Ordenação Customizada:
\`\`\`python
usuarios = [
    {"nome": "Beatriz", "idade": 29},
    {"nome": "Carlos", "idade": 19},
    {"nome": "Ana", "idade": 35}
]

# Ordenar a lista de dicionários pelo campo 'idade':
usuarios_ordenados = sorted(usuarios, key=lambda u: u["idade"])
for u in usuarios_ordenados:
    print(f"{u['nome']} - {u['idade']} anos")
\`\`\`

### Filtragem Rápida com \`filter()\`:
\`\`\`python
precos = [15.50, 89.90, 120.00, 45.00, 310.00]
# Filtrar apenas produtos caros (>= 100 reais):
caros = list(filter(lambda p: p >= 100.0, precos))
print("Produtos premium:", caros) # [120.0, 310.0]
\`\`\`

---

## ⚠️ Quando NÃO Usar Lambdas

Se a lógica exigir mais de uma operação, condicionais complexas ou laços de repetição, **NUNCA force uma lambda**. Crie uma função normal com \`def\`, pois legibilidade é prioridade absoluta no ecossistema Python.
`,

  'l5-5': `
# Recursão: Funções que Invocam a Si Mesmas 🌀

A **recursão** é uma técnica elegante e poderosa onde uma função resolve um problema dividindo-o em instâncias menores do mesmo problema, chamando a si mesma até atingir um caso trivial já conhecido.

---

## 🧱 Os 2 Elementos Obrigatórios de Toda Função Recursiva

Toda função recursiva precisa obrigatoriamente de duas partes bem definidas:
1. **Caso Base (Condição de Parada):** É a situação mais simples onde a resposta é imediata, sem necessidade de nova recursão. Sem o caso base, a função roda infinitamente até estourar a memória (\`RecursionError: maximum recursion depth exceeded\`).
2. **Caso Recursivo:** A etapa onde a função quebra o problema e invoca a si mesma com um argumento reduzido, aproximando-se do caso base.

---

## 🧮 Exemplo Clássico 1: Fatorial ($n!$)

O fatorial de um número natural $n$ é definido como o produto de todos os inteiros de 1 até $n$.
Matematicamente:
$$5! = 5 \times 4!$$
$$4! = 4 \times 3!$$
$$1! = 1 \quad \text{(Caso Base)}$$

\`\`\`python
def fatorial(n):
    # 1. CASO BASE:
    if n <= 1:
        return 1
    # 2. CASO RECURSIVO:
    return n * fatorial(n - 1)

print("5! =", fatorial(5)) # 120
\`\`\`

### Visualização da Pilha de Chamadas (*Call Stack*):
\`\`\`
fatorial(3)
  ├── 3 * fatorial(2)
  │         ├── 2 * fatorial(1)
  │         │         └── retorna 1 (Caso Base)
  │         └── retorna 2 * 1 = 2
  └── retorna 3 * 2 = 6
\`\`\`

---

## 🌿 Exemplo Clássico 2: Sequência de Fibonacci

A sequência onde cada termo é a soma dos dois anteriores: $0, 1, 1, 2, 3, 5, 8, 13, 21 \dots$

\`\`\`python
def fibonacci(n):
    """Retorna o n-ésimo termo da sequência de Fibonacci."""
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

# Exibindo os 10 primeiros termos:
sequencia = [fibonacci(i) for i in range(10)]
print("Sequência de Fibonacci:", sequencia)
\`\`\`

---

## ⚠️ Limite de Recursão do Python

O interpretador CPython possui um limite padrão de profundidade de recursão (geralmente 1000 chamadas) para proteger a máquina contra estouro de pilha (*stack overflow*). Você pode consultar esse limite com:
\`\`\`python
import sys
print("Limite padrão de recursão:", sys.getrecursionlimit())
\`\`\`
`,

  'l5-6': `
# Desafio Prático: Biblioteca de Utilitários Matemáticos 🏆

Neste projeto de consolidação do Módulo 5, vamos aplicar todos os conceitos de funções (parâmetros, retornos, defaults, recursão e docstrings) para estruturar um módulo de ferramentas matemáticas e estatísticas profissionais.

---

## 📋 Especificação dos Requisitos

Nossa biblioteca deve conter as seguintes funções desacopladas e testadas:

1. **\`calcular_estatisticas(*numeros)\`**:
   - Recebe quantidade arbitrária de números via \`*args\`.
   - Retorna um dicionário contendo: \`quantidade\`, \`soma\`, \`media\`, \`minimo\`, \`maximo\`.
2. **\`converter_temperatura(valor, de="C", para="F")\`**:
   - Converte temperaturas entre Celsius, Fahrenheit e Kelvin com validação de escala.
3. **\`potencia_recursiva(base, expoente)\`**:
   - Calcula $base^{expoente}$ usando recursão (sem usar o operador \`**\`).
4. **\`eh_primo(n)\`**:
   - Retorna \`True\` se o número for primo e \`False\` caso contrário.

---

## 💻 Implementação Completa da Solução

\`\`\`python
def calcular_estatisticas(*numeros):
    """Calcula indicadores estatísticos fundamentais."""
    if not numeros:
        return {"quantidade": 0, "soma": 0, "media": 0.0, "minimo": None, "maximo": None}
    
    total = sum(numeros)
    qtd = len(numeros)
    return {
        "quantidade": qtd,
        "soma": total,
        "media": total / qtd,
        "minimo": min(numeros),
        "maximo": max(numeros)
    }

def converter_temperatura(valor, de="C", para="F"):
    """Converte temperaturas entre Celsius (C), Fahrenheit (F) e Kelvin (K)."""
    de = de.upper()
    para = para.upper()
    
    # 1. Normalizar tudo para Celsius:
    if de == "C":
        celsius = valor
    elif de == "F":
        celsius = (valor - 32) * 5 / 9
    elif de == "K":
        celsius = valor - 273.15
    else:
        raise ValueError(f"Escala de origem inválida: {de}")
    
    # 2. Converter de Celsius para o destino:
    if para == "C":
        return round(celsius, 2)
    elif para == "F":
        return round((celsius * 9 / 5) + 32, 2)
    elif para == "K":
        return round(celsius + 273.15, 2)
    else:
        raise ValueError(f"Escala de destino inválida: {para}")

def potencia_recursiva(base, expoente):
    """Calcula base^expoente recursivamente."""
    if expoente == 0:
        return 1
    if expoente < 0:
        return 1 / potencia_recursiva(base, -expoente)
    return base * potencia_recursiva(base, expoente - 1)

def eh_primo(n):
    """Verifica se um número inteiro positivo é primo."""
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

# --- EXECUÇÃO E TESTES ---
stats = calcular_estatisticas(10, 20, 30, 40, 50)
print("Estatísticas:", stats)

temp_f = converter_temperatura(100, de="C", para="F")
print(f"100°C equivalem a {temp_f}°F")

pot = potencia_recursiva(2, 5)
print(f"2 elevado a 5 = {pot}")

print(f"O número 29 é primo? {eh_primo(29)}")
print(f"O número 30 é primo? {eh_primo(30)}")
\`\`\`
`,
};
