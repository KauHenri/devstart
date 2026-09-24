// Módulo 4: Estruturas de Dados - Conteúdo Didático Completo

export const MODULO_4_CONTENT: Record<string, string> = {
  'l4-1': `
# Listas em Python: Organizando Múltiplos Dados 📦

Até agora, cada variável que criamos guardava apenas um único valor por vez (\`nome = "Ana"\` ou \`idade = 20\`).

Mas e se você estivesse programando uma loja online com 500 produtos? Criar 500 variáveis separadas (\`produto1\`, \`produto2\`, ..., \`produto500\`) seria insano!

Para isso existem as **Listas**!

---

## 📋 Criando sua Primeira Lista

Em Python, criamos listas usando colchetes **\`[ ]\`** e separando os itens por vírgulas:

\`\`\`python
# Lista de textos
frutas = ["Maçã", "Banana", "Morango", "Uva"]

# Lista de números
precos = [10.50, 4.20, 15.00, 8.90]

# Listas podem misturar tipos diferentes de dados:
perfil = ["Carlos Silva", 28, 1.80, True]
\`\`\`

---

## 🏷️ Acessando Itens por Índice

Assim como nas strings, a contagem dos itens começa sempre do **zero (0)**:

\`\`\`python
cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador"]

print(cidades[0])  # São Paulo (primeiro item)
print(cidades[1])  # Rio de Janeiro (segundo item)
print(cidades[-1]) # Salvador (último item da lista!)
\`\`\`

---

## ✏️ Listas são Mutáveis (Podem ser Alteradas)

Diferente de strings, você pode trocar o valor de qualquer elemento de uma lista diretamente:

\`\`\`python
times = ["Flamengo", "Palmeiras", "Santos"]
print("Antes:", times)

# Substituindo o segundo item (índice 1):
times[1] = "Corinthians"
print("Depois:", times) # ['Flamengo', 'Corinthians', 'Santos']
\`\`\`
`,

  'l4-2': `
# Métodos de Lista: Manipulando Elementos 🛠️

As listas vêm acompanhadas de ferramentas nativas poderosas que permitem adicionar, remover, ordenar e pesquisar elementos.

---

## ➕ Adicionando Elementos

### 1. \`append()\` — Adiciona no final da lista:
\`\`\`python
tarefas = ["Estudar Python", "Fazer café"]
tarefas.append("Praticar exercícios")
print(tarefas) # ['Estudar Python', 'Fazer café', 'Praticar exercícios']
\`\`\`

### 2. \`insert()\` — Adiciona em uma posição específica:
\`\`\`python
# Adiciona "Lavar a louça" exatamente na posição 1:
tarefas.insert(1, "Lavar a louça")
\`\`\`

---

## ➖ Removendo Elementos

### 1. \`pop()\` — Remove e retorna o último item (ou pelo índice):
\`\`\`python
numeros = [10, 20, 30]
ultimo = numeros.pop() # Remove o 30
print(numeros) # [10, 20]
\`\`\`

### 2. \`remove()\` — Remove pelo nome do valor:
\`\`\`python
compras = ["leite", "pão", "açúcar"]
compras.remove("pão") # Remove a primeira ocorrência da palavra "pão"
\`\`\`

---

## 📊 Estatísticas e Ordenação Rápida

\`\`\`python
notas = [7.5, 9.0, 4.0, 8.5, 6.0]

print("Quantidade de provas:", len(notas)) # 5
print("Menor nota:", min(notas))            # 4.0
print("Maior nota:", max(notas))            # 9.0
print("Soma total:", sum(notas))            # 35.0
print("Média:", sum(notas) / len(notas))   # 7.0

# Ordenando do menor para o maior:
notas.sort()
print("Ordem crescente:", notas)

# Ordenando do maior para o menor:
notas.sort(reverse=True)
print("Ordem decrescente:", notas)
\`\`\`
`,

  'l4-3': `
# Tuplas: Listas Imutáveis e Seguras 🔒

Uma **Tupla** é praticamente idêntica a uma lista, com uma única diferença crucial: **ela é 100% imutável**. Uma vez criada, nenhum elemento pode ser adicionado, removido ou alterado.

---

## 🛡️ Sintaxe: Parênteses em vez de Colchetes

\`\`\`python
# Tupla de coordenadas geográficas
coordenadas = (-23.5505, -46.6333)

# Tupla com os dias da semana
dias_semana = ("Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo")
\`\`\`

Se você tentar alterar um valor:
\`\`\`python
coordenadas[0] = 0 # 💥 TypeError: 'tuple' object does not support item assignment!
\`\`\`

---

## 🤔 Por que usar Tuplas se Listas são mais flexíveis?

1. **Segurança contra bugs acidentais:** Se você tem dados que **nunca** deveriam mudar (meses do ano, siglas de estados, coordenadas GPS), usar uma tupla garante que nenhuma outra parte do código vai alterar esses dados por engano.
2. **Velocidade de processamento:** Tuplas ocupam menos memória e são lidas mais rapidamente pelo computador do que listas.
`,

  'l4-4': `
# Dicionários: Estruturas de Chave e Valor 📖

Se você abrir um dicionário tradicional de papel, você procura por uma **palavra (chave)** para ler a **definição dela (valor)**.

Em Python, um **Dicionário (\`dict\`)** funciona da mesma forma: em vez de acessar dados por índices numéricos (\`0, 1, 2\`), você acessa por **nomes/chaves significativas**.

---

## 🗂️ Criando um Dicionário

Usamos chaves **\`{ }\`** com a estrutura **\`"chave": valor\`**:

\`\`\`python
aluno = {
    "nome": "Kauã Silva",
    "idade": 21,
    "curso": "Engenharia de Software",
    "media": 9.4,
    "matriculado": True
}
\`\`\`

---

## 🔍 Como Acessar e Modificar Valores

\`\`\`python
# Acessando:
print(aluno["nome"])  # Kauã Silva
print(aluno["curso"]) # Engenharia de Software

# Modificando:
aluno["media"] = 9.8

# Adicionando uma nova chave:
aluno["semestre"] = 4
\`\`\`

---

## 🛡️ O Método Seguro: \`.get()\`

Se você tentar acessar uma chave que não existe com colchetes (\`aluno["telefone"]\`), seu programa vai quebrar com um erro de \`KeyError\`.

Para evitar isso, use o método **\`.get()\`**:
\`\`\`python
# Se não encontrar, entrega "Não informado" em vez de quebrar o programa!
telefone = aluno.get("telefone", "Não informado")
print(telefone) # Não informado
\`\`\`

---

## 🔁 Iterando sobre um Dicionário com \`for\`

\`\`\`python
carro = {"marca": "Toyota", "modelo": "Corolla", "ano": 2024}

for chave, valor in carro.items():
    print(f"{chave.upper()}: {valor}")
\`\`\`
`,

  'l4-5': `
# Sets (Conjuntos): Elimine Duplicatas Instantaneamente 🧺

Na matemática escolar, você com certeza estudou conjuntos numéricos (A ∪ B, A ∩ B). O Python possui uma estrutura de dados nativa inspirada exatamente nisso: os **Sets** (\`set\`).

---

## ✨ As 2 Regras de Ouro de um Set:

1. **Elementos Únicos:** Não aceita itens repetidos! Se você tentar adicionar 5 vezes o número 10, ele só guarda uma vez.
2. **Não Ordenado:** Os elementos não têm índice (\`set[0]\` não existe).

---

## 🪄 O Truque da Limpeza de Duplicatas

Imagine que você recebeu uma lista gigante de emails de clientes onde muitos se cadastraram repetidas vezes:

\`\`\`python
emails_brutos = [
    "joao@email.com",
    "maria@email.com",
    "joao@email.com",
    "pedro@email.com",
    "maria@email.com"
]

# Transforme em set para limpar as duplicatas em 1 segundo:
emails_unicos = list(set(emails_brutos))
print(emails_unicos)
# Saída: ['joao@email.com', 'maria@email.com', 'pedro@email.com']
\`\`\`

---

## 🧮 Operações Matemáticas de Conjunto

\`\`\`python
alunos_python = {"Lucas", "Ana", "Marcos", "Beatriz"}
alunos_javascript = {"Beatriz", "Carlos", "Lucas", "Fernanda"}

# 1. Interseção (quem faz os DOIS cursos ao mesmo tempo):
ambos = alunos_python & alunos_javascript
print("Fazem ambos:", ambos) # {'Beatriz', 'Lucas'}

# 2. União (todos os alunos únicos da escola):
todos = alunos_python | alunos_javascript
print("Total de alunos:", todos)

# 3. Diferença (quem faz Python mas NÃO faz JavaScript):
so_python = alunos_python - alunos_javascript
print("Só Python:", so_python) # {'Ana', 'Marcos'}
\`\`\`
`,

  'l4-6': `
# Compreensão de Listas (List Comprehension): Código Elegante 🚀

A **Compreensão de Listas** (*List Comprehension*) é um dos recursos mais elegantes, admirados e usados no Python moderno. Ela permite criar novas listas a partir de listas existentes usando uma única linha de código legível.

---

## 🔄 O Jeito Antigo vs. O Jeito Pythônico

Imagine que você quer criar uma lista com o quadrado de cada número de 1 a 5:

### O Jeito Tradicional (4 linhas):
\`\`\`python
quadrados = []
for x in range(1, 6):
    quadrados.append(x ** 2)

print(quadrados) # [1, 4, 9, 16, 25]
\`\`\`

### Com List Comprehension (1 única linha!):
\`\`\`python
quadrados = [x ** 2 for x in range(1, 6)]
print(quadrados) # [1, 4, 9, 16, 25]
\`\`\`

A fórmula de leitura é:
> \`[ O_QUE_EU_QUERO  for  ITEM  in  SEQUENCIA ]\`

---

## 🔍 Filtrando com Condição \`if\`

Você também pode colocar filtros no final da expressão!
Exemplo: pegar apenas os números pares de uma lista:

\`\`\`python
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Cria uma lista apenas com números onde n % 2 == 0:
pares = [n for n in numeros if n % 2 == 0]
print(pares) # [2, 4, 6, 8, 10]
\`\`\`

---

## 🌟 Exemplo Real: Formatando Nomes de Usuários

\`\`\`python
nomes_brutos = ["   ana ", "CARLOS   ", "   pEdRo"]

# Limpa os espaços e padroniza a primeira letra maiúscula:
nomes_limpos = [nome.strip().capitalize() for nome in nomes_brutos]
print(nomes_limpos)
# Saída: ['Ana', 'Carlos', 'Pedro']
\`\`\`

Você acabou de economizar dezenas de linhas de código usando o melhor da elegância do Python!
`,
};
