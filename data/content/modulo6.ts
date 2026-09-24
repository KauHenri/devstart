// Módulo 6: POO - Orientação a Objetos - Conteúdo Didático Aprofundado

export const MODULO_6_CONTENT: Record<string, string> = {
  'l6-1': `
# Paradigma de Orientação a Objetos (POO): Classes e Objetos 🏗️

Até o momento, nossos programas foram escritos seguindo o paradigma **Procedural**: tínhamos dados isolados em variáveis e listas de um lado, e funções do outro que recebiam esses dados, operavam sobre eles e devolviam resultados.

Conforme os sistemas de software crescem para milhares de linhas de código, o modelo puramente procedural torna-se caótico. É fácil uma função alterar uma variável que não deveria, gerando erros silenciosos.

A **Programação Orientada a Objetos (POO)** foi criada para espelhar como os seres humanos percebem e organizam o mundo real: através de **Entidades (Objetos)** que agrupam em um único pacote tanto seus **dados** quanto os **comportamentos** que manipulam esses dados.

---

## 🏭 A Planta Baixa vs A Construção Real (Classe vs Objeto)

A distinção fundamental que todo desenvolvedor profissional deve dominar:

| Conceito | Definição | Exemplo do Mundo Real |
| :--- | :--- | :--- |
| **Classe (\`class\`)** | É o **molde**, a especificação abstrata ou a planta arquitetônica. Define quais atributos e métodos existirão. | A planta técnica de um automóvel desenhada pelos engenheiros da montadora. |
| **Objeto / Instância** | É o item concreto criado na memória do computador a partir daquele molde. | O carro real estacionado na sua garagem, com placa, quilometragem e cor específicas. |

\`\`\`
   ┌─────────────────────────────────────────┐
   │             Classe: ContaBancaria        │
   │  Atributos: titular, saldo, agencia     │
   │  Métodos:   depositar(), sacar()        │
   └────────────────────┬────────────────────┘
                        │ Instanciação
        ┌───────────────┴───────────────┐
        ▼                               ▼
 ┌──────────────┐                ┌──────────────┐
 │ Objeto #1    │                │ Objeto #2    │
 │ titular: Ana │                │ titular: Bob │
 │ saldo: R$ 500│                │ saldo: R$ 120│
 └──────────────┘                └──────────────┘
\`\`\`

---

## 🛠️ Criando sua Primeira Classe em Python

Em Python, definimos uma classe usando a palavra-chave \`class\`. Por convenção universal da **PEP 8**, nomes de classes utilizam o padrão **PascalCase** (iniciais maiúsculas sem sublinhado).

\`\`\`python
# Definição da Classe
class ServidorWeb:
    """Representa um servidor web na infraestrutura de nuvem."""
    pass  # Instrução para bloco vazio temporário

# Criando duas instâncias (objetos) independentes:
servidor_prod = ServidorWeb()
servidor_homolog = ServidorWeb()

print(servidor_prod)   # <__main__.ServidorWeb object at 0x...>
print(servidor_homolog)# <__main__.ServidorWeb object at 0x...> (Endereço de memória diferente!)
\`\`\`
`,

  'l6-2': `
# Métodos, Atributos e Métodos Mágicos (\`__init__\`, \`self\`) 📐

Um objeto ganha utilidade prática quando possui **Atributos de Instância** (suas variáveis internas) e **Métodos** (as funções que definem suas ações).

---

## 🏗️ O Construtor \`__init__\` e o Parâmetro \`self\`

Quando invocamos \`ContaBancaria("Carlos", 1000)\`, o Python executa duas etapas:
1. Aloca um espaço na memória para o novo objeto.
2. Invoca automaticamente o método especial **\`__init__\`** (*initializer*), passando o novo objeto recém-nascido no primeiro argumento: **\`self\`**.

\`\`\`python
class ContaBancaria:
    def __init__(self, titular, saldo_inicial=0.0):
        # self.atributo = valor_passado
        self.titular = titular
        self.saldo = saldo_inicial
        self.ativo = True

    # Método de instância (comportamento do objeto)
    def depositar(self, valor):
        if valor <= 0:
            print("❌ O valor do depósito deve ser maior que zero.")
            return False
        self.saldo += valor
        print(f"✅ Depósito de R$ {valor:.2f} realizado com sucesso.")
        return True

    def sacar(self, valor):
        if valor > self.saldo:
            print(f"❌ Saldo insuficiente! Saldo atual: R$ {self.saldo:.2f}")
            return False
        self.saldo -= valor
        print(f"💸 Saque de R$ {valor:.2f} realizado.")
        return True

# Testando a classe:
conta_carlos = ContaBancaria("Carlos Silva", 500.0)
conta_carlos.depositar(250.0)
conta_carlos.sacar(100.0)
print(f"Saldo final de {conta_carlos.titular}: R$ {conta_carlos.saldo:.2f}")
\`\`\`

---

## 🪄 Métodos Mágicos (*Dunder Methods*)

Métodos com duplo underscore antes e depois (\`__dunder__\`) permitem integrar sua classe com operadores e funções nativas do Python:

| Método Mágico | Quando é acionado pelo Python? | Finalidade |
| :--- | :--- | :--- |
| **\`__str__(self)\`** | \`print(objeto)\` ou \`str(objeto)\` | Representação legível para o usuário final. |
| **\`__repr__(self)\`** | No console interativo ou para logs de debug. | Representação técnica inequívoca do objeto. |
| **\`__len__(self)\`** | \`len(objeto)\` | Retorna o tamanho conceitual do objeto. |
| **\`__eq__(self, outro)\`**| \`objeto1 == objeto2\` | Define quando dois objetos são considerados iguais. |

\`\`\`python
class Livro:
    def __init__(self, titulo, autor, paginas):
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def __str__(self):
        return f"'{self.titulo}' por {self.autor} ({self.paginas} págs)"

    def __len__(self):
        return self.paginas

    def __eq__(self, outro):
        if not isinstance(outro, Livro):
            return False
        return self.titulo == outro.titulo and self.autor == outro.autor

meu_livro = Livro("Entendendo Algoritmos", "Aditya Bhargava", 256)
print(meu_livro)             # 'Entendendo Algoritmos' por Aditya Bhargava (256 págs)
print("Páginas:", len(meu_livro)) # 256
\`\`\`
`,

  'l6-3': `
# Encapsulamento Profissional: Privados e \`@property\` 🛡️

Imagine um sistema hospitalar onde o objeto \`Paciente\` possui o atributo \`dosagem_medicamento\`. Se qualquer desenvolvedor puder fazer \`paciente.dosagem_medicamento = -500\`, vidas correm risco.

O **Encapsulamento** é o pilar da POO que esconde os detalhes internos da implementação e protege o estado de um objeto contra modificações indevidas, expondo apenas interfaces seguras.

---

## 🔒 Atributos Protegidos (\`_\`) e Privados (\`__\`) em Python

Diferente de Java ou C++, o Python não possui palavras-chave como \`private\`. O ecossistema Python adota convenções de nomenclatura expressas na PEP 8:

1. **\`_atributo\` (Um underscore):** Indica um atributo protegido. Significa: *"Isto é de uso interno desta classe, respeite e não acesse diretamente por fora"*.
2. **\`__atributo\` (Dois underscores):** Ativa o recurso de **Name Mangling** (ofuscação de nome). O interpretador renomeia o atributo internamente para \`_NomeDaClasse__atributo\` para evitar conflitos em herança.

\`\`\`python
class CofreSeguro:
    def __init__(self, saldo_inicial, segredo):
        self._responsavel = "Gerente" # Protegido por convenção
        self.__segredo = segredo       # Name Mangling ativado

cofre = CofreSeguro(10000, "1234-ABCD")
# print(cofre.__segredo) # 💥 AttributeError: 'CofreSeguro' object has no attribute '__segredo'
\`\`\`

---

## ✨ A Forma Pythônica: \`@property\` e \`@setter\`

Em Python moderno, nunca criamos métodos arcaicos como \`get_saldo()\` e \`set_saldo()\`. Utilizamos os decoradores **\`@property\`** e **\`@nome.setter\`**, que mantêm a sintaxe limpa de leitura e escrita com ponto, mas executam validações de segurança nos bastidores:

\`\`\`python
class Funcionario:
    def __init__(self, nome, salario):
        self.nome = nome
        self._salario = salario # Atributo interno protegido

    # GETTER (permite acessar como funcionario.salario)
    @property
    def salario(self):
        return self._salario

    # SETTER (executa quando alguém faz funcionario.salario = novo_valor)
    @salario.setter
    def salario(self, novo_valor):
        if novo_valor <= 0:
            raise ValueError("O salário não pode ser zero ou negativo!")
        self._salario = novo_valor

# Uso elegante:
dev = Funcionario("Helena", 8500.0)
print(f"Salário atual: R$ {dev.salario:.2f}")

dev.salario = 9200.0 # Aciona o setter com validação
print(f"Novo salário: R$ {dev.salario:.2f}")

# dev.salario = -100 # 💥 Levanta ValueError impedindo o dado corrompido!
\`\`\`
`,

  'l6-4': `
# Herança: Reutilização e Especialização de Classes 🧬

Quando desenvolvemos um software empresarial, frequentemente descobrimos entidades que compartilham a maioria dos seus atributos e comportamentos, diferindo apenas em detalhes específicos.

A **Herança** permite criar uma classe base (**Superclasse** ou Classe Mãe) com os elementos genéricos, e estendê-la em classes derivadas (**Subclasses** ou Classes Filhas) que herdam automaticamente tudo e acrescentam suas especializações.

---

## 👨‍👦 Sintaxe e a Função \`super()\`

Para herdar, colocamos o nome da classe mãe entre parênteses na definição da classe filha. Para inicializar a classe mãe a partir da filha, usamos **\`super().__init__()\`**:

\`\`\`python
# 1. CLASSE BASE (SUPERCLASSE)
class Funcionario:
    def __init__(self, nome, cpf, salario_base):
        self.nome = nome
        self.cpf = cpf
        self.salario_base = salario_base

    def calcular_remuneracao_mensal(self):
        """Cálculo padrão para funcionários comuns."""
        return self.salario_base

    def exibir_cracha(self):
        print(f"[{self.nome}] - CPF: {self.cpf}")

# 2. SUBCLASSE QUE HERDA DE FUNCIONARIO
class Gerente(Funcionario):
    def __init__(self, nome, cpf, salario_base, bonus_anual):
        # Invoca o construtor da classe Funcionario
        super().__init__(nome, cpf, salario_base)
        self.bonus_anual = bonus_anual

    # Sobrescrita de método com super()
    def calcular_remuneracao_mensal(self):
        bonus_mensal = self.bonus_anual / 12
        return super().calcular_remuneracao_mensal() + bonus_mensal

# 3. SUBCLASSE DESENVOLVEDOR
class Desenvolvedor(Funcionario):
    def __init__(self, nome, cpf, salario_base, stack_tecnologica):
        super().__init__(nome, cpf, salario_base)
        self.stack = stack_tecnologica

# Testando a herança:
g = Gerente("Mariana", "111.222.333-44", 12000.0, bonus_anual=36000.0)
dev = Desenvolvedor("Lucas", "555.666.777-88", 8000.0, stack_tecnologica="Python & FastApi")

g.exibir_cracha()  # Herdado de Funcionario!
dev.exibir_cracha()# Herdado de Funcionario!

print(f"Remuneração Mariana: R$ {g.calcular_remuneracao_mensal():.2f}")
print(f"Remuneração Lucas: R$ {dev.calcular_remuneracao_mensal():.2f}")
\`\`\`
`,

  'l6-5': `
# Polimorfismo e Tipagem Pato (*Duck Typing*) 🎭

O termo **Polimorfismo** significa "muitas formas". Na programação orientada a objetos, ele descreve a capacidade de objetos de classes diferentes responderem à mesma mensagem (mesmo nome de método), cada um produzindo seu comportamento especializado.

---

## 🦆 O Princípio do *Duck Typing* em Python

O Python adota o famoso provérbio:
> *"Se anda como um pato e faz barulho de pato, então para nós é um pato!"*

Em linguagens como Java, é obrigatório implementar formalmente uma \`interface\`. Em Python, basta que o método exista com a mesma assinatura:

\`\`\`python
class MeioPagamentoPix:
    def processar_pagamento(self, valor):
        print(f"⚡ Gerando QR Code Pix para pagamento instantâneo de R$ {valor:.2f}")

class MeioPagamentoCartaoCredito:
    def processar_pagamento(self, valor):
        print(f"💳 Solicitando autorização da operadora de cartão para R$ {valor:.2f}")

class MeioPagamentoBoleto:
    def processar_pagamento(self, valor):
        print(f"📄 Emitindo boleto bancário com código de barras no valor de R$ {valor:.2f}")

# Função polimórfica: ela não quer saber qual é a classe do objeto,
# apenas exige que ele saiba executar .processar_pagamento(valor)!
def finalizar_compra(meio_pagamento, total_pedido):
    print("Iniciando checkout do cliente...")
    meio_pagamento.processar_pagamento(total_pedido)
    print("Checkout finalizado com sucesso!\n")

# Testando com três objetos distintos:
pix = MeioPagamentoPix()
cartao = MeioPagamentoCartaoCredito()
boleto = MeioPagamentoBoleto()

finalizar_compra(pix, 150.00)
finalizar_compra(cartao, 320.00)
finalizar_compra(boleto, 89.90)
\`\`\`
`,

  'l6-6': `
# Desafio Prático: Sistema Bancário Completo em POO 🏆

Para consolidar todos os 4 pilares da Orientação a Objetos (Abstração, Encapsulamento, Herança e Polimorfismo), você irá arquitetar um mini-sistema bancário profissional.

---

## 📋 Arquitetura do Sistema

1. **\`Conta\` (Classe Base Abstrata/Genérica):**
   - Atributos: \`numero_conta\`, \`titular\`, \`_saldo\`.
   - Propriedade: \`saldo\` protegida com getter.
   - Métodos: \`depositar(valor)\`, \`sacar(valor)\`, \`extrato()\`.
2. **\`ContaCorrente\` (Subclasse):**
   - Possui atributo extra: \`limite_cheque_especial\`.
   - Sobrescreve o método \`sacar()\` para permitir saques até o limite do cheque especial.
3. **\`ContaPoupanca\` (Subclasse):**
   - Possui atributo extra: \`taxa_rendimento\`.
   - Método exclusivo: \`aplicar_rendimento()\`.

---

## 💻 Implementação do Projeto

\`\`\`python
class Conta:
    def __init__(self, numero, titular, saldo_inicial=0.0):
        self.numero = numero
        self.titular = titular
        self._saldo = saldo_inicial
        self._historico = [f"Abertura de conta com saldo inicial de R$ {saldo_inicial:.2f}"]

    @property
    def saldo(self):
        return self._saldo

    def depositar(self, valor):
        if valor <= 0:
            print("❌ Depósito inválido: o valor deve ser positivo.")
            return False
        self._saldo += valor
        self._historico.append(f"Depósito de +R$ {valor:.2f}")
        return True

    def sacar(self, valor):
        if valor <= 0:
            print("❌ Saque inválido: o valor deve ser positivo.")
            return False
        if valor > self._saldo:
            print(f"❌ Saldo insuficiente na conta de {self.titular}!")
            return False
        self._saldo -= valor
        self._historico.append(f"Saque de -R$ {valor:.2f}")
        return True

    def exibir_extrato(self):
        print(f"\n===== EXTRATO DA CONTA #{self.numero} ({self.titular}) =====")
        for operacao in self._historico:
            print(f"  • {operacao}")
        print(f"Saldo Consolidado: R$ {self.saldo:.2f}")
        print("=" * 45)


class ContaCorrente(Conta):
    def __init__(self, numero, titular, saldo_inicial=0.0, cheque_especial=500.0):
        super().__init__(numero, titular, saldo_inicial)
        self.cheque_especial = cheque_especial

    # Polimorfismo: sobrescrita com lógica de cheque especial
    def sacar(self, valor):
        if valor <= 0:
            return False
        limite_total_disponivel = self._saldo + self.cheque_especial
        if valor > limite_total_disponivel:
            print(f"❌ Limite total insuficiente (Saldo + Cheque Especial = R$ {limite_total_disponivel:.2f})!")
            return False
        self._saldo -= valor
        self._historico.append(f"Saque com Cheque Especial de -R$ {valor:.2f}")
        return True


class ContaPoupanca(Conta):
    def __init__(self, numero, titular, saldo_inicial=0.0, taxa_rendimento=0.005):
        super().__init__(numero, titular, saldo_inicial)
        self.taxa_rendimento = taxa_rendimento

    def aplicar_rendimento(self):
        rendimento = self._saldo * self.taxa_rendimento
        self._saldo += rendimento
        self._historico.append(f"Rendimento de Poupança: +R$ {rendimento:.2f}")


# --- TESTE DO SISTEMA BANCÁRIO ---
cc = ContaCorrente(101, "Danilo Ferreira", saldo_inicial=100.0, cheque_especial=400.0)
cp = ContaPoupanca(102, "Beatriz Souza", saldo_inicial=2000.0)

# Operações na Conta Corrente usando limite:
cc.sacar(350.0) # Usa R$ 100 de saldo e R$ 250 de cheque especial
cc.depositar(500.0)
cc.exibir_extrato()

# Operações na Poupança:
cp.aplicar_rendimento()
cp.sacar(200.0)
cp.exibir_extrato()
\`\`\`
`,
};
