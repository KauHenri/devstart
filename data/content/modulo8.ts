// Módulo 8: O Ecossistema e Bibliotecas Essenciais do Python

export const MODULO_8_CONTENT: Record<string, string> = {
  'l8-1': `
# O Ecossistema Python, Módulos e o Gerenciador \`pip\` 📦

Um dos maiores diferenciais competitivos do Python no mercado global é a sua filosofia de **"Baterias Inclusas"** (*Batteries Included*), somada ao **PyPI** (*Python Package Index*), um repositório central com mais de 500.000 pacotes de código aberto criados pela comunidade mundial.

---

## 🧩 O que é um Módulo e um Pacote?

* **Módulo:** É simplesmente qualquer arquivo \`.py\` que contém funções, classes e variáveis que você deseja reaproveitar em outros scripts.
* **Pacote:** É um diretório contendo múltiplos módulos organizados sob uma mesma hierarquia (antigamente exigia um arquivo especial \`__init__.py\`).

\`\`\`python
# Formas de Importação:

# 1. Importa o módulo inteiro (requer módulo.funcao):
import math
print("Raiz de 81:", math.isqrt(81))

# 2. Importa elementos específicos diretamente para o escopo:
from math import sqrt, pi
print("Valor de Pi:", pi)

# 3. Importa com apelido (alias) para abreviar:
import datetime as dt
agora = dt.datetime.now()
print("Hora atual:", agora.strftime("%H:%M:%S"))
\`\`\`

> 🚨 **Cuidado com o \`from modulo import *\`**: Isso polui seu escopo com centenas de nomes invisíveis, podendo sobrescrever suas próprias variáveis sem aviso. Nunca use em projetos profissionais!

---

## 🛠️ O Gerenciador de Pacotes \`pip\`

O \`pip\` é a ferramenta de linha de comando que baixa, instala e gerencia bibliotecas de terceiros no seu computador:

\`\`\`bash
# Instalar uma biblioteca
pip install requests

# Instalar uma versão específica para evitar quebras
pip install pandas==2.1.4

# Listar todas as bibliotecas instaladas no ambiente
pip list

# Congelar as dependências em um arquivo de requisitos para a equipe
pip freeze > requirements.txt

# Em outra máquina, instalar tudo com 1 comando
pip install -r requirements.txt
\`\`\`

---

## 🌐 Ambientes Virtuais (\`venv\`): O Segredo dos Profissionais

Se o Projeto A precisa de \`Django 3.2\` e o Projeto B precisa de \`Django 5.0\`, instalá-los globalmente no seu computador vai corromper um dos projetos. 

O **ambiente virtual** cria uma caixa de areia (*sandbox*) isolada para cada projeto:

\`\`\`bash
# 1. Criar o ambiente virtual na pasta do projeto:
python -m venv .venv

# 2. Ativar no Windows (PowerShell):
.venv\\Scripts\\Activate.ps1

# 3. Desativar quando terminar o trabalho:
deactivate
\`\`\`
`,

  'l8-2': `
# Computação Numérica de Alta Performance com NumPy ⚡

O **NumPy** (*Numerical Python*) é a fundação de quase todo o ecossistema de Inteligência Artificial, Ciência de Dados e Machine Learning do planeta (TensorFlow, PyTorch, SciPy e Pandas rodam em cima dele).

---

## 🚀 Por que Listas do Python são Lentas para Matemática?

Uma lista padrão do Python guarda ponteiros genéricos para objetos na memória. Para somar dois números em uma lista, o Python precisa inspecionar o tipo de cada elemento em tempo de execução.

O NumPy introduz o **\`ndarray\`** (Array N-Dimensional), que armazena dados em blocos de memória contíguos em linguagem C de baixo nível, com tipagem estática e operações **vetorizadas**:

\`\`\`python
# Simulação conceitual de performance:
# Uma operação matemática em 1 milhão de itens:
# Lista pura Python: ~150 milissegundos
# Array do NumPy:     ~1.8 milissegundo (quase 100x mais rápido!)
\`\`\`

---

## 💻 Criando e Operando com Arrays

\`\`\`python
import numpy as np

# 1. Criando arrays a partir de listas:
alturas_cm = np.array([170, 185, 162, 190, 175])

# 2. Operações vetorizadas (SEM NENHUM LAÇO FOR!):
alturas_metros = alturas_cm / 100
print("Alturas em metros:", alturas_metros)

# 3. Estatísticas instantâneas em C:
print(f"Média: {alturas_metros.mean():.2f}m")
print(f"Desvio Padrão: {alturas_metros.std():.2f}")
print(f"Altura Máxima: {alturas_metros.max():.2f}m")

# 4. Filtros booleanos elegantes (Masking):
altos = alturas_metros[alturas_metros >= 1.80]
print("Pessoas com 1.80m ou mais:", altos)
\`\`\`

---

## 🔲 Matrizes Bidimensionais (Linhas e Colunas)

\`\`\`python
# Matriz 2x3 (2 linhas, 3 colunas):
matriz = np.array([
    [10, 20, 30],
    [40, 50, 60]
])

print("Formato da matriz (linhas, colunas):", matriz.shape) # (2, 3)
print("Soma por coluna:", matriz.sum(axis=0)) # [50, 70, 90]
print("Soma por linha:", matriz.sum(axis=1))  # [60, 150]
\`\`\`
`,

  'l8-3': `
# Análise e Tratamento de Dados com Pandas 🐼

Se o NumPy é a calculadora científica, o **Pandas** é o "Excel com esteroides" para programadores. Ele foi criado para manipular tabelas de dados estruturados com milhões de linhas em segundos.

---

## 📊 As Duas Estruturas Centrais

1. **\`Series\`**: Um vetor unidimensional rotulado (como uma única coluna de uma planilha).
2. **\`DataFrame\`**: Uma tabela bidimensional completa com linhas e colunas rotuladas.

\`\`\`python
import pandas as pd

# Criando um DataFrame a partir de um dicionário:
dados_vendas = {
    "Vendedor": ["Ana", "Bruno", "Carla", "Daniel", "Eduarda"],
    "Regiao": ["Sudeste", "Sul", "Sudeste", "Nordeste", "Sul"],
    "Faturamento": [45000, 32000, 58000, 29000, 64000],
    "Meta_Batida": [True, False, True, False, True]
}

df = pd.DataFrame(dados_vendas)
print("Visão Geral do DataFrame:")
print(df)
\`\`\`

---

## 🔍 Consultas, Filtros e Agregações Corporativas

\`\`\`python
# 1. Selecionando colunas específicas:
print("\nApenas Faturamento:\n", df["Faturamento"])

# 2. Filtrando linhas com regras (ex: Vendedores que faturaram acima de 40.000):
alta_performance = df[df["Faturamento"] >= 40000]
print("\nVendedores Destaque:\n", alta_performance[["Vendedor", "Faturamento"]])

# 3. O Poder do GroupBy (Tabela Dinâmica):
# Agrupar por Região e calcular média de faturamento:
relatorio_regional = df.groupby("Regiao")["Faturamento"].agg(["count", "mean", "sum"])
print("\nDesempenho por Região:")
print(relatorio_regional)
\`\`\`

---

## 💾 Lendo e Exportando Dados do Mundo Real

Na rotina profissional, você lerá dados externos com comandos de uma linha:
\`\`\`python
# df = pd.read_csv("relatorio_mensal.csv")
# df = pd.read_excel("planilha_contabilidade.xlsx")
# df.to_json("dados_processados.json", orient="records", indent=2)
\`\`\`
`,

  'l8-4': `
# Visualização de Dados Profissional com Matplotlib 📈

Uma análise de dados sem visualização gráfica dificilmente convence diretores ou clientes. O **Matplotlib** é a biblioteca padrão da indústria para transformar números brutos em gráficos expressivos e publicáveis.

---

## 📊 Os Tipos de Gráficos Mais Utilizados

| Tipo de Gráfico | Função no Matplotlib | Melhor Cenário de Uso |
| :--- | :--- | :--- |
| **Linha** | \`plt.plot()\` | Evolução temporal de métricas (cotação de ações, vendas mensais). |
| **Barras** | \`plt.bar()\` / \`plt.barh()\` | Comparação de categorias discretas (vendas por filial, audiência por canal). |
| **Dispersão** | \`plt.scatter()\` | Relação e correlação entre duas variáveis contínuas (idade vs salário). |
| **Histograma** | \`plt.hist()\` | Distribuição de frequências (distribuição de notas dos alunos). |

---

## 🎨 Código Completo de um Gráfico Corporativo

\`\`\`python
import matplotlib.pyplot as plt

# Dados do trimestre:
meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
receita_2025 = [25000, 31000, 28000, 42000, 39000, 51000]
receita_2026 = [28000, 36000, 34000, 49000, 46000, 62000]

# Configurando o tamanho da figura (Largura x Altura em polegadas)
plt.figure(figsize=(10, 5))

# Plotando as linhas com estilos e legendas:
plt.plot(meses, receita_2025, marker="o", color="#64748b", linestyle="--", label="Receita 2025")
plt.plot(meses, receita_2026, marker="s", color="#22c55e", linewidth=2.5, label="Receita 2026 (Atual)")

# Títulos e formatações dos eixos:
plt.title("Evolução Semestral de Faturamento (R$)", fontsize=14, fontweight="bold", pad=15)
plt.xlabel("Mês de Referência", fontsize=11)
plt.ylabel("Faturamento Consolidado", fontsize=11)

# Grade de apoio visual e legenda:
plt.grid(True, linestyle=":", alpha=0.6)
plt.legend(loc="upper left")

# Salvar como imagem PNG de alta resolução para apresentação:
# plt.savefig("relatorio_financeiro.png", dpi=300, bbox_inches="tight")
# plt.show()
\`\`\`
`,

  'l8-5': `
# Consumo de APIs REST com a Biblioteca \`requests\` 🌐

Em 90% das vagas de programação, espera-se que você saiba conectar sistemas através de **APIs HTTP**. A biblioteca **\`requests\`** é a ferramenta padrão e mais elegante para efetuar requisições web no ecossistema Python.

---

## 📡 O Ciclo de Comunicação HTTP

\`\`\`
  Sua Aplicação Python               Servidor da API (Ex: GitHub, Stripe)
       │                                            │
       │────── GET /api/v1/usuarios ───────────────>│ (Processa requisição)
       │                                            │
       │<───── 200 OK + JSON de Resposta ───────────│
\`\`\`

---

## 🚦 Principais Códigos de Status HTTP (*Status Codes*)

* **\`200 OK\`**: Sucesso absoluto. Os dados solicitados foram retornados.
* **\`201 Created\`**: Sucesso na criação de um novo registro (comum em requisições POST).
* **\`400 Bad Request\`**: Sua aplicação enviou parâmetros inválidos ou malformados.
* **\`401 Unauthorized\`**: Token de autenticação ou API Key ausente ou incorreta.
* **\`404 Not Found\`**: O recurso ou endpoint solicitado não existe.
* **\`500 Internal Server Error\`**: O servidor de destino teve uma falha interna não tratada.

---

## 💻 Exemplo Prático: Consumindo uma API Pública

\`\`\`python
import requests

def consultar_cotacao_moeda(moeda_origem="USD", moeda_destino="BRL"):
    """Consulta a cotação em tempo real de uma moeda via API pública."""
    url = f"https://economia.awesomeapi.com.br/last/{moeda_origem}-{moeda_destino}"
    
    try:
        # 1. Faz a requisição GET com timeout de segurança (5 segundos)
        resposta = requests.get(url, timeout=5)
        
        # 2. Levanta uma exceção automática se o status for 4xx ou 5xx:
        resposta.raise_for_status()
        
        # 3. Converte a resposta JSON em Dicionário Python nativo:
        dados = resposta.json()
        chave = f"{moeda_origem}{moeda_destino}"
        cotacao_atual = float(dados[chave]["bid"])
        nome_moeda = dados[chave]["name"]
        
        return {
            "par": nome_moeda,
            "cotacao": cotacao_atual,
            "maximo_dia": float(dados[chave]["high"]),
            "minimo_dia": float(dados[chave]["low"])
        }
        
    except requests.exceptions.Timeout:
        print("❌ Erro: O servidor da API demorou demais para responder.")
    except requests.exceptions.ConnectionError:
        print("❌ Erro: Sem conexão com a internet.")
    except requests.exceptions.HTTPError as erro_http:
        print(f"❌ Erro HTTP retornado pela API: {erro_http}")
    except KeyError:
        print("❌ Erro: Estrutura inesperada na resposta da API.")
    return None

# Testando a integração:
info = consultar_cotacao_moeda("USD", "BRL")
if info:
    print(f"=== COTAÇÃO DO {info['par']} ===")
    print(f"Valor Comercial Atual: R$ {info['cotacao']:.2f}")
    print(f"Variação do Dia: R$ {info['minimo_dia']:.2f} a R$ {info['maximo_dia']:.2f}")
\`\`\`
`,
};
