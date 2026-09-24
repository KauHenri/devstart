// Módulo 10: Projetos Finais de Consolidação Profissional

export const MODULO_10_CONTENT: Record<string, string> = {
  'l10-1': `
# Projeto Final 1: Sistema de Gerenciamento de Tarefas (CLI + JSON) 📋

Bem-vindo ao seu primeiro projeto de engenharia de software completo! Neste projeto, você irá aplicar **POO, manipulação de arquivos JSON, tratamento de exceções e menus de linha de comando** para construir um sistema de gerenciamento de tarefas profissional (*To-Do List Manager*).

---

## 🎯 Especificação de Requisitos

A aplicação deve oferecer:
1. **Adicionar Tarefa:** Título, descrição, prioridade (Baixa, Média, Alta) e data de criação.
2. **Listar Tarefas:** Exibição tabular das tarefas pendentes e concluídas.
3. **Concluir Tarefa:** Marcar tarefas como finalizadas.
4. **Remover Tarefa:** Deletar registros por ID.
5. **Persistência Automática:** Toda alteração deve ser salva imediatamente em um arquivo \`tarefas.json\` e recarregada na inicialização.

---

## 💻 Código-Fonte Completo da Aplicação

\`\`\`python
import json
import os
from datetime import datetime

class Tarefa:
    def __init__(self, id_tarefa, titulo, prioridade="Média", concluida=False, data_criacao=None):
        self.id = id_tarefa
        self.titulo = titulo
        self.prioridade = prioridade
        self.concluida = concluida
        self.data_criacao = data_criacao or datetime.now().strftime("%d/%m/%Y %H:%M")

    def to_dict(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "prioridade": self.prioridade,
            "concluida": self.concluida,
            "data_criacao": self.data_criacao
        }

    @classmethod
    def from_dict(cls, dados):
        return cls(
            dados["id"],
            dados["titulo"],
            dados["prioridade"],
            dados["concluida"],
            dados["data_criacao"]
        )


class GerenciadorTarefas:
    ARQUIVO = "tarefas.json"

    def __init__(self):
        self.tarefas = []
        self._carregar()

    def _salvar(self):
        with open(self.ARQUIVO, "w", encoding="utf-8") as f:
            json.dump([t.to_dict() for t in self.tarefas], f, indent=4, ensure_ascii=False)

    def _carregar(self):
        if not os.path.exists(self.ARQUIVO):
            self.tarefas = []
            return
        try:
            with open(self.ARQUIVO, "r", encoding="utf-8") as f:
                dados = json.load(f)
                self.tarefas = [Tarefa.from_dict(d) for d in dados]
        except (json.JSONDecodeError, IOError):
            print("⚠️ Aviso: Falha ao ler arquivo de tarefas. Iniciando lista vazia.")
            self.tarefas = []

    def proximo_id(self):
        return max([t.id for t in self.tarefas], default=0) + 1

    def adicionar(self, titulo, prioridade="Média"):
        nova = Tarefa(self.proximo_id(), titulo, prioridade)
        self.tarefas.append(nova)
        self._salvar()
        print(f"✅ Tarefa #{nova.id} ('{titulo}') adicionada com sucesso!")

    def listar(self):
        if not self.tarefas:
            print("\nNenhuma tarefa cadastrada no momento.")
            return

        print("\n" + "=" * 65)
        print(f"{'ID':<4} {'STATUS':<12} {'PRIORIDADE':<12} {'TÍTULO':<30}")
        print("-" * 65)
        for t in self.tarefas:
            status = "✓ Concluída" if t.concluida else "○ Pendente"
            print(f"{t.id:<4} {status:<12} {t.prioridade:<12} {t.titulo:<30}")
        print("=" * 65)

    def concluir(self, id_tarefa):
        for t in self.tarefas:
            if t.id == id_tarefa:
                t.concluida = True
                self._salvar()
                print(f"🎉 Tarefa #{id_tarefa} marcada como concluída!")
                return
        print(f"❌ Tarefa com ID #{id_tarefa} não encontrada.")

    def remover(self, id_tarefa):
        tamanho_antes = len(self.tarefas)
        self.tarefas = [t for t in self.tarefas if t.id != id_tarefa]
        if len(self.tarefas) < tamanho_antes:
            self._salvar()
            print(f"🗑️ Tarefa #{id_tarefa} removida.")
        else:
            print(f"❌ Tarefa #{id_tarefa} não encontrada.")

# --- SIMULAÇÃO DE USO DO SISTEMA ---
app = GerenciadorTarefas()
app.adicionar("Estudar decoradores em Python", prioridade="Alta")
app.adicionar("Fazer commit do projeto no GitHub", prioridade="Média")
app.listar()
app.concluir(1)
app.listar()
\`\`\`
`,

  'l10-2': `
# Projeto Final 2: Calculadora Científica e Financeira com Histórico 🧮

Neste segundo projeto final, você construirá uma ferramenta robusta para cálculos científicos e de engenharia financeira, aplicando **recursão, módulos nativos (\`math\`), modularização e gravação de histórico de operações**.

---

## 🎯 Funcionalidades da Calculadora

1. **Operações Básicas:** Adição, subtração, multiplicação, divisão com cinto de segurança contra \`ZeroDivisionError\`.
2. **Cálculos Científicos:** Raiz quadrada, potência, fatorial (implementado via algoritmo recursivo) e logaritmo natural.
3. **Cálculos Financeiros:** Juros compostos e amortização de parcelas.
4. **Registro de Auditoria:** Cada operação realizada é registrada em arquivo com timestamp exato.

---

## 💻 Código-Fonte Completo da Aplicação

\`\`\`python
import math
from datetime import datetime

class CalculadoraCientifica:
    HISTORICO_FILE = "calculadora_historico.log"

    def __init__(self):
        self.memoria = 0.0

    def _gravar_log(self, operacao: str, resultado: float):
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        registro = f"[{timestamp}] {operacao} = {resultado}\\n"
        with open(self.HISTORICO_FILE, "a", encoding="utf-8") as f:
            f.write(registro)

    def somar(self, a: float, b: float) -> float:
        res = a + b
        self._gravar_log(f"{a} + {b}", res)
        return res

    def dividir(self, a: float, b: float) -> float:
        if b == 0:
            raise ZeroDivisionError("Divisão por zero não é permitida.")
        res = a / b
        self._gravar_log(f"{a} / {b}", res)
        return res

    def raiz_quadrada(self, a: float) -> float:
        if a < 0:
            raise ValueError("Não existe raiz quadrada real de número negativo.")
        res = math.sqrt(a)
        self._gravar_log(f"sqrt({a})", res)
        return res

    def fatorial(self, n: int) -> int:
        if n < 0:
            raise ValueError("Fatorial só é definido para inteiros não-negativos.")
        # Algoritmo recursivo com caso base:
        if n <= 1:
            return 1
        res = n * self.fatorial(n - 1)
        return res

    def juros_compostos(self, capital: float, taxa_anual_pct: float, anos: int) -> float:
        """Montante final = Capital * (1 + i)^t"""
        taxa_decimal = taxa_anual_pct / 100
        montante = capital * math.pow(1 + taxa_decimal, anos)
        self._gravar_log(f"Juros Compostos (Cap: {capital}, Taxa: {taxa_anual_pct}%, Anos: {anos})", montante)
        return montante

# --- TESTANDO AS OPERAÇÕES ---
calc = CalculadoraCientifica()
print("Soma:", calc.somar(125.5, 34.5))
print("Divisão:", calc.dividir(100, 4))
print("Raiz de 144:", calc.raiz_quadrada(144))
print("Fatorial de 6:", calc.fatorial(6))
print("Rendimento R$ 10.000 a 12% ao ano por 5 anos:")
print(f"Montante final: R$ {calc.juros_compostos(10000, 12.0, 5):.2f}")
\`\`\`
`,

  'l10-3': `
# Projeto Final 3: Consumidor de API Web e Alerta de Cotações 🌐

Neste projeto de integração com o mundo externo, você criará um bot utilitário em Python que consome **APIs REST públicas**, trata variações cambiais de mercado e emite relatórios com regras de negócio financeiras.

---

## 🎯 Especificação de Requisitos

1. **Consumo de API:** Consultar a cotação de Dólar (USD), Euro (EUR) e Bitcoin (BTC) em tempo real contra o Real Brasileiro (BRL).
2. **Tratamento de Exceções:** Lidar com ausência de internet, timeouts e respostas malformadas sem travar.
3. **Regra de Alerta:** Avisar visualmente se uma moeda subiu acima de uma meta estipulada.
4. **Exportação de Relatório:** Salvar as cotações do dia em formato tabular e CSV.

---

## 💻 Código-Fonte Completo da Aplicação

\`\`\`python
import requests
import json
import csv
from datetime import datetime

class RastreadorMoedas:
    URL_BASE = "https://economia.awesomeapi.com.br/last"

    def __init__(self, pares=("USD-BRL", "EUR-BRL", "BTC-BRL")):
        self.pares = pares

    def buscar_cotacoes(self):
        endpoint = f"{self.URL_BASE}/{','.join(self.pares)}"
        try:
            resposta = requests.get(endpoint, timeout=8)
            resposta.raise_for_status()
            return resposta.json()
        except requests.exceptions.RequestException as erro:
            print(f"❌ Falha de comunicação com a API: {erro}")
            return None

    def gerar_relatorio_console(self):
        dados = self.buscar_cotacoes()
        if not dados:
            return

        print("\n" + "=" * 60)
        print(f"  RELATÓRIO DE CÂMBIO EM TEMPO REAL — {datetime.now().strftime('%d/%m/%Y %H:%M')}")
        print("=" * 60)
        print(f"{'PAR':<12} {'VALOR ATUAL':<15} {'MÁXIMO DIA':<15} {'MÍNIMO DIA':<15}")
        print("-" * 60)

        registros_csv = [["Par", "Cotacao", "Maximo", "Minimo", "DataHora"]]
        agora_iso = datetime.now().isoformat()

        for chave, info in dados.items():
            par = info.get("name", chave)
            bid = float(info.get("bid", 0.0))
            high = float(info.get("high", 0.0))
            low = float(info.get("low", 0.0))

            print(f"{chave:<12} R$ {bid:<12.2f} R$ {high:<12.2f} R$ {low:<12.2f}")
            registros_csv.append([chave, bid, high, low, agora_iso])

        print("=" * 60)

        # Salva em arquivo CSV de histórico
        with open("historico_cambio.csv", "a", newline="", encoding="utf-8") as f:
            escritor = csv.writer(f)
            escritor.writerows(registros_csv[1:]) # Grava registros sem repetir cabeçalho

        print("📁 Cotações anexadas em 'historico_cambio.csv'!")

# --- EXECUÇÃO DO BOT ---
rastreador = RastreadorMoedas()
rastreador.gerar_relatorio_console()
\`\`\`
`,

  'l10-4': `
# Projeto Final 4: Pipeline de Análise e Tratamento de Planilhas de Vendas 📊

Neste projeto de Ciência de Dados e Automação de Escritório, você construirá um **Pipeline ETL** (*Extract, Transform, Load*) utilizando **Pandas** para processar milhares de registros de vendas empresariais, higienizar dados corrompidos e extrair insights gerenciais.

---

## 🎯 Etapas do Pipeline

1. **Extract (Extração):** Simulação ou leitura de um arquivo CSV de vendas brutas com inconsistências (campos nulos, datas em texto).
2. **Transform (Transformação):**
   - Preenchimento de valores nulos (*Data Cleaning*).
   - Conversão de tipos de dados (strings para numéricos e datetimes).
   - Criação de métricas derivadas (Margem de Lucro = Venda - Custo).
3. **Load (Carga/Exportação):** Geração de relatório sumarizado por Região e Categoria de Produto em Excel/CSV.

---

## 💻 Código-Fonte Completo da Aplicação

\`\`\`python
import pandas as pd
import numpy as np

def executar_pipeline_vendas():
    print("🚀 [ETL] Iniciando processamento de dados de vendas...")

    # 1. SIMULANDO O CSV BRUTO (EXTRAÇÃO)
    dados_brutos = {
        "Data": ["2026-01-10", "2026-01-11", "2026-01-11", "2026-01-12", "2026-01-13"],
        "Cliente": ["Loja Alpha", "Beta Eireli", "Gama Corp", "Delta Tech", "Loja Alpha"],
        "Regiao": ["Sudeste", "Sul", "Sudeste", "Nordeste", "Sudeste"],
        "Categoria": ["Eletrônicos", "Móveis", "Eletrônicos", "Serviços", "Eletrônicos"],
        "Valor_Bruto": [15000.0, np.nan, 8500.0, 3200.0, 12000.0],
        "Custo_Operacional": [9000.0, 4200.0, 5100.0, 1500.0, 7200.0]
    }
    df = pd.DataFrame(dados_brutos)

    # 2. TRANSFORMAÇÃO E LIMPEZA
    # Tratar valores ausentes na coluna Valor_Bruto substituindo pela média:
    media_vendas = df["Valor_Bruto"].mean()
    df["Valor_Bruto"] = df["Valor_Bruto"].fillna(media_vendas)

    # Calcular colunas estratégicas:
    df["Lucro_Liquido"] = df["Valor_Bruto"] - df["Custo_Operacional"]
    df["Margem_Lucro_Pct"] = (df["Lucro_Liquido"] / df["Valor_Bruto"]) * 100

    print("\n✅ Base de Dados Higienizada:")
    print(df[["Cliente", "Regiao", "Valor_Bruto", "Lucro_Liquido", "Margem_Lucro_Pct"]])

    # 3. ANÁLISE GERENCIAL (GROUPBY)
    resumo_regional = df.groupby("Regiao").agg(
        Total_Vendas=("Valor_Bruto", "sum"),
        Total_Lucro=("Lucro_Liquido", "sum"),
        Margem_Media=("Margem_Lucro_Pct", "mean")
    ).reset_index()

    print("\n📈 Desempenho Consolidado por Região Geográfica:")
    print(resumo_regional)

    # 4. EXPORTAÇÃO
    resumo_regional.to_csv("relatorio_vendas_consolidado.csv", index=False, sep=";")
    print("\n💾 Arquivo 'relatorio_vendas_consolidado.csv' gerado com sucesso!")

executar_pipeline_vendas()
\`\`\`
`,

  'l10-5': `
# Projeto Final 5: Script de Automação de Arquivos do Sistema Operacional 🤖

O teste definitivo de um programador Python de mercado: **criar ferramentas que poupam horas de trabalho humano repetitivo**.

Neste projeto de encerramento do curso, você construirá um robô de organização e faxina de arquivos em disco usando o módulo moderno **\`pathlib\`**, separando documentos, planilhas, imagens e instaladores automaticamente.

---

## 🎯 Especificação de Requisitos

1. **Varredura Inteligente:** Percorrer uma pasta de entrada (ex: pasta de Downloads bagunçada).
2. **Mapeamento de Extensões:**
   - Imagens (\`.png\`, \`.jpg\`, \`.jpeg\`, \`.gif\`) $\rightarrow$ Pasta \`Imagens/\`
   - Documentos (\`.pdf\`, \`.docx\`, \`.txt\`, \`.xlsx\`) $\rightarrow$ Pasta \`Documentos/\`
   - Programas (\`.exe\`, \`.msi\`, \`.zip\`, \`.rar\`) $\rightarrow$ Pasta \`Instaladores/\`
3. **Prevenção de Sobrescrita:** Renomear arquivos com carimbo de data caso o arquivo já exista no destino.
4. **Relatório de Execução:** Exibir no console quantos arquivos de cada tipo foram organizados.

---

## 💻 Código-Fonte Completo da Aplicação

\`\`\`python
import os
import shutil
from pathlib import Path
from datetime import datetime

class OrganizadorArquivos:
    CATEGORIAS = {
        "Documentos": [".pdf", ".docx", ".txt", ".xlsx", ".csv", ".pptx"],
        "Imagens": [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"],
        "Instaladores_e_Compactados": [".exe", ".msi", ".zip", ".rar", ".7z", ".tar.gz"],
        "Videos_e_Audio": [".mp4", ".mkv", ".mp3", ".wav"],
        "Codigos_e_Scripts": [".py", ".js", ".html", ".css", ".json", ".sql"]
    }

    def __init__(self, pasta_alvo: str):
        self.diretorio = Path(pasta_alvo).resolve()
        if not self.diretorio.exists():
            raise FileNotFoundError(f"A pasta informada não existe: {self.diretorio}")

    def organizar(self):
        print(f"🧹 Iniciando faxina no diretório: {self.diretorio}")
        relatorio = {categoria: 0 for categoria in self.CATEGORIAS}
        relatorio["Outros"] = 0

        # Itera sobre todos os arquivos da pasta (ignorando subpastas já criadas)
        for item in self.diretorio.iterdir():
            if item.is_dir() or item.name.startswith("."):
                continue  # Pula pastas e arquivos ocultos do sistema

            extensao = item.suffix.lower()
            pasta_destino_nome = "Outros"

            # Identifica a categoria correspondente:
            for categoria, extensoes in self.CATEGORIAS.items():
                if extensao in extensoes:
                    pasta_destino_nome = categoria
                    break

            # Cria a pasta de destino caso ainda não exista:
            pasta_destino = self.diretorio / pasta_destino_nome
            pasta_destino.mkdir(exist_ok=True)

            # Move o arquivo com segurança:
            destino_arquivo = pasta_destino / item.name
            
            # Se já existir arquivo com mesmo nome, adiciona timestamp para não perder dados:
            if destino_arquivo.exists():
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                novo_nome = f"{item.stem}_{timestamp}{item.suffix}"
                destino_arquivo = pasta_destino / novo_nome

            shutil.move(str(item), str(destino_arquivo))
            relatorio[pasta_destino_nome] += 1
            print(f"  • Movido: '{item.name}' ➔ '{pasta_destino_nome}/'")

        # Exibe o balanço final
        print("\n" + "=" * 45)
        print("  RELATÓRIO CONSOLIDADO DE ORGANIZAÇÃO")
        print("=" * 45)
        for cat, qtd in relatorio.items():
            if qtd > 0:
                print(f"  📁 {cat:<25}: {qtd} arquivos")
        print("=" * 45)
        print("✨ Organização concluída com sucesso!")

# --- SIMULAÇÃO DE TESTE EM DIRETÓRIO LOCAL ---
# Crie uma pasta temporária e teste o robô:
pasta_teste = Path("./pasta_downloads_teste")
pasta_teste.mkdir(exist_ok=True)

# Criando alguns arquivos simulados para testar o robô:
(pasta_teste / "contrato.pdf").touch()
(pasta_teste / "foto_ferias.jpg").touch()
(pasta_teste / "setup_python.exe").touch()
(pasta_teste / "relatorio_mensal.xlsx").touch()

# Executando a automação:
bot = OrganizadorArquivos(str(pasta_teste))
bot.organizar()
\`\`\`
`,
};
