// Módulo 7: Arquivos e Tratamento de Erros - Conteúdo Didático Aprofundado

export const MODULO_7_CONTENT: Record<string, string> = {
  'l7-1': `
# Tratamento de Exceções Robusto (\`try\`, \`except\`, \`else\`, \`finally\`) 🛡️

No mundo real, sistemas falham por motivos fora do controle do programador:
* O usuário digita letras onde o sistema esperava um número.
* Um cabo de rede é desconectado durante uma requisição.
* Um disco rígido fica sem espaço para gravação.
* Um arquivo essencial é deletado por engano.

Se você não tratar esses imprevistos, o interpretador Python lança uma **Exceção**, interrompe a execução abruptamente (*crash*) e despeja um *Traceback* assustador na cara do cliente. O bloco \`try/except\` é o cinto de segurança do seu programa.

---

## 🧯 A Anatomia Completa do Bloco de Proteção

Muitos programadores conhecem apenas \`try\` e \`except\`, mas o Python disponibiliza **4 blocos articulados**:

\`\`\`
try:
    # Código arriscado que pode disparar uma falha
except TipoDoErro as erro:
    # Executado APENAS se ocorreu aquele erro específico
else:
    # Executado APENAS se o bloco try rodou 100% SEM nenhum erro
finally:
    # Executado SEMPRE, independentemente de ter havido erro ou não!
\`\`\`

---

## 💻 Exemplo Prático com os 4 Blocos

\`\`\`python
def dividir_valores(numerador, denominador):
    try:
        resultado = numerador / denominador
    except ZeroDivisionError as erro:
        print("❌ Falha matemática: Não é possível dividir um número por zero!")
        return None
    except TypeError as erro:
        print(f"❌ Falha de tipo: Ambos os valores devem ser numéricos. Detalhes: {erro}")
        return None
    else:
        print("✨ Operação aritmética calculada com sucesso!")
        return resultado
    finally:
        print("🔄 [LOG] Processo de divisão finalizado (recursos liberados).")

print("Teste 1 (Válido):", dividir_valores(10, 2))
print("-" * 40)
print("Teste 2 (Divisão por zero):", dividir_valores(10, 0))
\`\`\`

---

## ⚠️ A Pior Prática do Mundo: O \`except:\` Genérico Vazio

**NUNCA use um bloco \`except\` sem especificar o tipo da exceção** ou apenas silenciando com \`pass\`:

\`\`\`python
# ❌ PÉSSIMA PRÁTICA (Crime contra a depuração de bugs):
try:
    processar_dados_bancarios()
except:
    pass # Você escondeu se faltou memória, se a sintaxe errou ou se o banco caiu!

# ✅ FORMA CORRETA E PROFISSIONAL:
try:
    processar_dados_bancarios()
except (ConnectionError, TimeoutError) as erro_rede:
    print(f"Tentando reconectar devido a falha de rede: {erro_rede}")
except Exception as erro_inesperado:
    # Trate ou registre em log com a classe exata
    print(f"Falha inesperada detectada [{type(erro_inesperado).__name__}]: {erro_inesperado}")
\`\`\`
`,

  'l7-2': `
# Criando Exceções Personalizadas com \`raise\` 🚨

Em aplicações corporativas, muitas vezes a regra violada não é um erro técnico do Python, mas sim uma **Regra de Negócio** da sua empresa.

Por exemplo: para o Python, não há problema matemático em transferir um valor de \`-R$ 500,00\`. Porém, para as regras do seu sistema bancário, isso é inaceitável.

---

## 📤 Arremessando Erros com \`raise\`

A palavra-chave \`raise\` força o levantamento de uma exceção:

\`\`\`python
def cadastrar_idade_usuario(idade):
    if not isinstance(idade, int):
        raise TypeError("A idade deve ser um número inteiro.")
    if idade < 0:
        raise ValueError(f"Idade inválida ({idade}): não existem pessoas com idade negativa.")
    if idade < 18:
        raise PermissionError("Cadastro permitido apenas para maiores de 18 anos.")
    
    print(f"Usuário de {idade} anos cadastrado com sucesso!")
\`\`\`

---

## 🧬 Criando sua Própria Classe de Exceção

Para construir exceções personalizadas de alto padrão, criamos uma nova classe que herda da classe base **\`Exception\`**:

\`\`\`python
class SaldoInsuficienteError(Exception):
    """Exceção levantada quando um saque excede o saldo disponível."""
    def __init__(self, saldo_atual, valor_saque):
        self.saldo_atual = saldo_atual
        self.valor_saque = valor_saque
        mensagem = (
            f"Tentativa de saque de R$ {valor_saque:.2f} negada. "
            f"Saldo disponível na conta: R$ {saldo_atual:.2f}"
        )
        super().__init__(mensagem)

class ContaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo

    def sacar(self, valor):
        if valor > self.saldo:
            raise SaldoInsuficienteError(self.saldo, valor)
        self.saldo -= valor
        return self.saldo

# Capturando a exceção personalizada no frontend/API:
conta = ContaBancaria("Juliana", 150.0)

try:
    conta.sacar(300.0)
except SaldoInsuficienteError as erro:
    print("Aviso do Sistema:", erro)
    print(f"Faltam R$ {erro.valor_saque - erro.saldo_atual:.2f} para completar a operação.")
\`\`\`
`,

  'l7-3': `
# Leitura Profissional de Arquivos e o Context Manager \`with\` 📄

Variáveis na memória RAM evaporam assim que o programa fecha ou o computador desliga. A persistência em arquivos físicos no disco é a primeira etapa para armazenar informações duradouras.

---

## 🔑 O Gerenciador de Contexto (\`with\`)

No passado, os programadores precisavam fazer:
\`\`\`python
# Forma antiga arriscada:
arquivo = open("dados.txt", "r")
conteudo = arquivo.read()
arquivo.close() # Se desse erro antes dessa linha, o arquivo ficava travado no Windows!
\`\`\`

A forma moderna, segura e padrão em Python é usar a instrução **\`with\`** (*Context Manager*). Ela garante que o arquivo será **fechado com 100% de certeza**, mesmo que ocorra uma falha crítica no meio da leitura!

\`\`\`python
# Criação de um arquivo de exemplo para teste
with open("relatorio_vendas.txt", "w", encoding="utf-8") as f:
    f.write("Janeiro: 15000\\nFevereiro: 18200\\nMarco: 21400\\n")

# LEITURA LINHA A LINHA EFICIENTE EM MEMÓRIA
with open("relatorio_vendas.txt", "r", encoding="utf-8") as arquivo:
    for numero_linha, linha in enumerate(arquivo, start=1):
        # .strip() remove a quebra de linha invisível (\n)
        print(f"Linha #{numero_linha}: {linha.strip()}")
\`\`\`

---

## 📊 Métodos Principais de Leitura

| Método | Como funciona? | Quando usar? |
| :--- | :--- | :--- |
| **\`arquivo.read()\`** | Lê o arquivo inteiro de uma vez em uma única string. | Apenas para arquivos pequenos que cabem folgadamente na memória. |
| **\`arquivo.readline()\`** | Lê uma única linha por chamada. | Leitura controlada e iterativa. |
| **\`for linha in arquivo:\`** | Itera sob demanda (*Lazy Evaluation*). | **Melhor prática universal**: permite ler arquivos de 50GB sem travar seu PC! |
| **\`arquivo.readlines()\`** | Retorna uma lista de strings com todas as linhas. | Quando você precisa indexar linhas por posição específica. |

> 💡 **Atenção ao Encoding:** Sempre especifique \`encoding="utf-8"\`. No Windows, o padrão costuma ser \`cp1252\`, o que causa o temido erro de acentuação \`UnicodeDecodeError\` ao ler palavras com acento ou cedilha!
`,

  'l7-4': `
# Escrita em Arquivos e Manipulação de CSV 📝

Para gravar dados em disco, a função \`open()\` recebe um parâmetro de **modo de abertura**:

| Modo | Nome | Comportamento |
| :--- | :--- | :--- |
| **\`"w"\`** | *Write* (Escrita) | **Cria um arquivo novo**. Se o arquivo já existir, **APAGA TODO O CONTEÚDO ANTERIOR** sem aviso prévio! |
| **\`"a"\`** | *Append* (Anexar) | Cria se não existir, ou **acrescenta novos dados ao final** sem apagar o conteúdo existente. Ideal para logs! |
| **\`"r+"\`**| *Read/Write* | Leitura e escrita simultâneas no mesmo arquivo. |

---

## 💾 Escrevendo Arquivos com \`write()\` e \`writelines()\`

\`\`\`python
# Anexando eventos em um arquivo de log:
eventos = [
    "[10:00:01] Usuário 'admin' fez login com sucesso.\\n",
    "[10:05:22] Backup automático finalizado.\\n",
    "[10:12:45] Usuário 'admin' encerrou a sessão.\\n"
]

with open("sistema.log", "a", encoding="utf-8") as log_file:
    log_file.writelines(eventos)

print("Logs gravados com sucesso!")
\`\`\`

---

## 📊 Manipulação Profissional de Arquivos CSV

O formato **CSV** (*Comma-Separated Values*) é o padrão da indústria para intercâmbio de tabelas e planilhas (Excel). O Python possui o módulo nativo **\`csv\`**:

\`\`\`python
import csv

dados_clientes = [
    ["ID", "Nome", "Cidade", "Saldo"],
    [1, "Mariana Ramos", "São Paulo", 4500.50],
    [2, "Felipe Costa", "Curitiba", 3200.00],
    [3, "Larissa Antunes", "Belo Horizonte", 7890.20]
]

# Gravando em CSV:
with open("clientes.csv", "w", newline="", encoding="utf-8") as f_csv:
    escritor = csv.writer(f_csv, delimiter=";")
    escritor.writerows(dados_clientes)

# Lendo o CSV de volta:
with open("clientes.csv", "r", encoding="utf-8") as f_csv:
    leitor = csv.reader(f_csv, delimiter=";")
    for linha in leitor:
        print("Registro:", linha)
\`\`\`
`,

  'l7-5': `
# Serialização e Persistência de Dados com JSON 🌐

O formato **JSON** (*JavaScript Object Notation*) é a linguagem universal de troca de dados na internet. Toda API moderna (Stripe, Mercado Pago, OpenAI, Google) envia e recebe dados estruturados em JSON.

Em Python, a correspondência entre tipos é praticamente idêntica:
* Objeto JSON $\longleftrightarrow$ Dicionário Python (\`dict\`)
* Array JSON $\longleftrightarrow$ Lista Python (\`list\`)
* Booleanos JSON (\`true\`, \`false\`) $\longleftrightarrow$ Booleanos Python (\`True\`, \`False\`)
* \`null\` JSON $\longleftrightarrow$ \`None\` em Python

---

## 🛠️ As 4 Funções Fundamentais do Módulo \`json\`

Lembre-se da regra mnemônica da letra final:
* **\`s\`** no final (\`dumps\`, \`loads\`) opera sobre **Strings** na memória.
* **Sem \`s\`** (\`dump\`, \`load\`) opera diretamente sobre **Arquivos físicos** em disco.

\`\`\`python
import json

# 1. Objeto Python complexo:
configuracao_usuario = {
    "usuario_id": 4821,
    "nome": "Guilherme Santos",
    "preferencias": {
        "tema_escuro": True,
        "idioma": "pt-BR",
        "notificacoes_email": False
    },
    "habilidades": ["Python", "Docker", "PostgreSQL"],
    "limite_credito": None
}

# 2. GRAVANDO DIRETO EM ARQUIVO (json.dump):
with open("config.json", "w", encoding="utf-8") as f_json:
    json.dump(configuracao_usuario, f_json, indent=4, ensure_ascii=False)

print("Arquivo config.json salvo!")

# 3. LENDO DIRETO DO ARQUIVO (json.load):
with open("config.json", "r", encoding="utf-8") as f_json:
    dados_carregados = json.load(f_json)

print(f"Usuário carregado: {dados_carregados['nome']}")
print(f"Habilidade #1: {dados_carregados['habilidades'][0]}")
print(f"Tema escuro ativado? {dados_carregados['preferencias']['tema_escuro']}")
\`\`\`
`,
};
