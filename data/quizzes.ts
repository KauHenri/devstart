import { QuizData } from '@/components/gamification/Quiz';

export const QUIZZES: QuizData[] = [
  // ==========================================
  // ===== MÓDULO 1: LÓGICA DE PROGRAMAÇÃO =====
  // ==========================================
  {
    id: 'q-l1-8',
    lessonId: 'l1-8',
    xpReward: 120,
    questions: [
      {
        id: 'q1-1',
        question: 'O que caracteriza essencialmente um algoritmo na ciência da computação?',
        options: [
          'Qualquer código escrito exclusivamente na linguagem Python ou C.',
          'Uma sequência finita, ordenada e não-ambígua de instruções para solucionar um problema.',
          'Um hardware físico responsável por interpretar sinais binários elétricos.',
          'Um programa que roda indefinidamente sem nenhuma condição de parada.'
        ],
        correctIndex: 1,
        explanation: 'Algoritmos são sequências lógicas estruturadas e finitas de passos para alcançar um objetivo, independentemente de linguagem ou hardware.',
      },
      {
        id: 'q1-2',
        question: 'Qual é a função da etapa de "Processamento" no modelo clássico Entrada-Processamento-Saída?',
        options: [
          'Exibir os dados formatados na tela do monitor.',
          'Receber o clique do mouse e os caracteres digitados no teclado.',
          'Executar os cálculos lógicos e transformações sobre os dados brutos recebidos.',
          'Salvar o código-fonte em um repositório no GitHub.'
        ],
        correctIndex: 2,
        explanation: 'O processamento é a etapa intermediária onde as operações, cálculos e regras lógicas são aplicadas aos dados fornecidos na entrada.',
      },
      {
        id: 'q1-3',
        question: 'Analise o pseudocódigo: "SE temperatura > 30 ENTÃO exibir(\'Calor\') SENÃO exibir(\'Agradável\')". Se a temperatura for exatamente 30, o que será exibido?',
        options: [
          'Calor',
          'Agradável',
          'Erro de sintaxe',
          'Ambas as mensagens serão exibidas'
        ],
        correctIndex: 1,
        explanation: 'A comparação usa estritamente maior que (>). Como 30 não é maior que 30 (é igual), a condição é falsa e o fluxo desvia para o bloco SENÃO, imprimindo "Agradável".',
      },
      {
        id: 'q1-4',
        question: 'O que diferencia uma variável de uma constante na lógica de programação?',
        options: [
          'Variáveis só guardam números inteiros, enquanto constantes guardam textos.',
          'Variáveis podem ter seu valor alterado ao longo da execução, enquanto constantes permanecem fixas.',
          'Variáveis são armazenadas no disco rígido, enquanto constantes ficam no processador.',
          'Não há diferença técnica, são apenas sinônimos.'
        ],
        correctIndex: 1,
        explanation: 'Variáveis são espaços nomeados na memória que podem variar de valor durante a execução do programa, ao contrário das constantes.',
      },
      {
        id: 'q1-5',
        question: 'Por que o uso de fluxogramas é amplamente recomendado antes de começar a codificar?',
        options: [
          'Porque o computador só consegue compilar programas se houver um fluxograma anexado.',
          'Porque ajuda a visualizar graficamente o fluxo de decisões e laços lógicos antes de se preocupar com sintaxe.',
          'Porque fluxogramas aumentam a velocidade da memória RAM da máquina.',
          'Porque transforma automaticamente desenhos em código de baixo nível.'
        ],
        correctIndex: 1,
        explanation: 'Fluxogramas mapeiam os desvios condicionais e laços de repetição de forma visual, facilitando a detecção prévia de falhas de lógica.',
      }
    ]
  },

  // ==========================================
  // ===== MÓDULO 2: PYTHON BÁSICO ============
  // ==========================================
  {
    id: 'q-l2-8',
    lessonId: 'l2-8',
    xpReward: 100,
    questions: [
      {
        id: 'q2-1',
        question: 'Qual a função nativa correta em Python para exibir mensagens e variáveis no console?',
        options: ['echo("Olá")', 'print("Olá")', 'console.log("Olá")', 'mostrar("Olá")'],
        correctIndex: 1,
        explanation: 'Em Python, utilizamos a função embutida print() para enviar informações para a saída padrão (stdout).',
      },
      {
        id: 'q2-2',
        question: 'Qual dos nomes de variáveis abaixo segue estritamente a convenção oficial da PEP 8?',
        options: ['TotalVendas', 'totalVendas', 'total_vendas', 'Total_Vendas'],
        correctIndex: 2,
        explanation: 'A PEP 8 determina o padrão snake_case (todas as letras minúsculas separadas por sublinhado) para funções e variáveis.',
      },
      {
        id: 'q2-3',
        question: 'O que o comando type("10.5") retornará no interpretador Python?',
        options: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "Gera uma exceção ValueError"],
        correctIndex: 2,
        explanation: 'Como o valor está envolvido por aspas ("10.5"), o Python o reconhece incondicionalmente como uma string (str).',
      },
      {
        id: 'q2-4',
        question: 'Qual é o resultado numérico exato da operação: 17 // 5 ?',
        options: ['3.4', '3', '2', '17'],
        correctIndex: 1,
        explanation: 'O operador // realiza a divisão inteira, descartando a parte fracionária. 17 dividido por 5 resulta em 3 (com resto 2).',
      },
      {
        id: 'q2-5',
        question: 'O que acontece ao tentar concatenar texto e número com: "Idade: " + 25 ?',
        options: [
          'Exibe "Idade: 25"',
          'Converte 25 para string automaticamente',
          'Lança um TypeError por tipos incompatíveis',
          'Exibe "Idade: 0"'
        ],
        correctIndex: 2,
        explanation: 'Python é uma linguagem fortemente tipada e não faz coerção implícita de número para texto no operador +. O correto seria usar f"Idade: {25}" ou str(25).',
      },
      {
        id: 'q2-6',
        question: 'Qual o retorno do método "  DevStart  ".strip() ?',
        options: ['"devstart"', '"DevStart"', '"DEVSTART"', '"Dev Start"'],
        correctIndex: 1,
        explanation: 'O método .strip() remove exclusivamente os espaços em branco das extremidades (início e fim), preservando a capitalização original.',
      }
    ]
  },

  // ==========================================
  // ===== MÓDULO 3: ESTRUTURAS DE CONTROLE ===
  // ==========================================
  {
    id: 'q-l3-6',
    lessonId: 'l3-6',
    xpReward: 150,
    questions: [
      {
        id: 'q3-1',
        question: 'Qual a diferença crucial entre as instruções break e continue em um laço de repetição?',
        options: [
          'break recomeça o loop do início, enquanto continue finaliza o programa.',
          'break interrompe e encerra o loop imediatamente; continue encerra apenas a volta atual e salta para a próxima.',
          'continue encerra o loop com erro; break ignora o erro e prossegue.',
          'Ambas possuem o mesmo efeito e são intercambiáveis.'
        ],
        correctIndex: 1,
        explanation: 'break sai imediatamente do bloco de repetição; continue apenas pula o restante do código daquela iteração e vai para a próxima volta.',
      },
      {
        id: 'q3-2',
        question: 'O que o comando range(2, 10, 2) produzirá quando iterado?',
        options: [
          '[2, 3, 4, 5, 6, 7, 8, 9, 10]',
          '[2, 4, 6, 8, 10]',
          '[2, 4, 6, 8]',
          '[4, 6, 8, 10]'
        ],
        correctIndex: 2,
        explanation: 'range(início, fim, passo) começa em 2, avança de 2 em 2 e para ANTES do limite final 10. Os valores são 2, 4, 6 e 8.',
      },
      {
        id: 'q3-3',
        question: 'Qual o valor final da variável booleana na expressão: True and False or True ?',
        options: ['False', 'True', 'None', 'Gera SyntaxError'],
        correctIndex: 1,
        explanation: 'O operador and possui precedência superior ao or. Logo: (True and False) resulta em False; em seguida, (False or True) resulta em True.',
      },
      {
        id: 'q3-4',
        question: 'Em que circunstância o bloco else associado a um laço for ou while em Python é executado?',
        options: [
          'Nunca, a cláusula else só pode ser usada com if.',
          'Sempre que o loop for interrompido por um break.',
          'Apenas quando o laço termina naturalmente sem ter sido interrompido por um break.',
          'Apenas se a lista ou sequência inicial estiver vazia.'
        ],
        correctIndex: 2,
        explanation: 'Uma peculiaridade poderosa do Python: o bloco else de um loop só executa se o laço chegar ao fim natural sem ser abortado por um break.',
      },
      {
        id: 'q3-5',
        question: 'O que acontece em um laço "while contador < 5:" se o programador esquecer de incrementar a variável contador dentro do bloco?',
        options: [
          'O Python detecta o problema e encerra após 100 voltas.',
          'O programa entra em loop infinito e trava a execução.',
          'A variável é incrementada automaticamente pelo interpretador.',
          'Ocorre um IndentationError.'
        ],
        correctIndex: 1,
        explanation: 'Se a variável de controle nunca for modificada, a condição continuará sendo True para sempre, provocando um loop infinito que consome 100% de CPU.',
      }
    ]
  },

  // ==========================================
  // ===== MÓDULO 4: ESTRUTURAS DE DADOS ======
  // ==========================================
  {
    id: 'q-l4-6',
    lessonId: 'l4-6',
    xpReward: 100,
    questions: [
      {
        id: 'q4-1',
        question: 'Qual a principal diferença estrutural entre uma Lista e uma Tupla em Python?',
        options: [
          'Listas são imutáveis; tuplas são mutáveis.',
          'Listas são mutáveis (podem ser alteradas in-place); tuplas são imutáveis (seu conteúdo não pode ser modificado após criadas).',
          'Listas só aceitam números; tuplas só aceitam textos.',
          'Tuplas são declaradas com colchetes []; listas com parênteses ().'
        ],
        correctIndex: 1,
        explanation: 'A imutabilidade é a essência da tupla: uma vez instanciada, não é possível adicionar, remover ou reatribuir seus elementos.',
      },
      {
        id: 'q4-2',
        question: 'Qual das seguintes estruturas de dados NÃO permite elementos duplicados e não garante ordem de inserção?',
        options: ['List (Lista)', 'Dict (Dicionário)', 'Set (Conjunto)', 'Tuple (Tupla)'],
        correctIndex: 2,
        explanation: 'Sets (conjuntos) armazenam coleções únicas por meio de tabelas hash, eliminando automaticamente qualquer duplicata.',
      },
      {
        id: 'q4-3',
        question: 'Qual método de dicionário é a melhor prática para consultar uma chave sem o risco de disparar uma exceção KeyError caso ela não exista?',
        options: ['dicionario[chave]', 'dicionario.pop(chave)', 'dicionario.get(chave, padrao)', 'dicionario.find(chave)'],
        correctIndex: 2,
        explanation: 'O método .get() retorna o valor da chave ou um valor padrão (None por padrão) sem quebrar o programa com KeyError.',
      },
      {
        id: 'q4-4',
        question: 'Analise o código: a = [1, 2, 3]; b = a; b.append(4). Qual será o valor da lista a?',
        options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4]', 'Gera erro de atribuição'],
        correctIndex: 1,
        explanation: 'Em Python, b = a não copia a lista; apenas copia a referência de memória. Logo, a e b apontam para o mesmo objeto na memória.',
      },
      {
        id: 'q4-5',
        question: 'Qual o resultado da compreensão de lista: [x * 2 for x in range(4) if x % 2 != 0] ?',
        options: ['[0, 2, 4, 6]', '[2, 6]', '[1, 3]', '[4, 8]'],
        correctIndex: 1,
        explanation: 'range(4) gera 0, 1, 2, 3. A condição filtra os ímpares (1 e 3). Multiplicados por 2, resultam em [2, 6].',
      }
    ]
  },

  // ==========================================
  // ===== MÓDULO 5: FUNÇÕES ==================
  // ==========================================
  {
    id: 'q-l5-6',
    lessonId: 'l5-6',
    xpReward: 150,
    questions: [
      {
        id: 'q5-1',
        question: 'O que o parâmetro especial *args faz quando colocado na assinatura de uma função?',
        options: [
          'Exige que todos os argumentos sejam passados como strings.',
          'Empacota uma quantidade variável de argumentos posicionais em uma Tupla.',
          'Multiplica todos os argumentos recebidos.',
          'Obriga o uso de argumentos nomeados no formato chave=valor.'
        ],
        correctIndex: 1,
        explanation: '*args recebe todos os argumentos posicionais extras e os reúne em uma tupla imutável acessível dentro da função.',
      },
      {
        id: 'q5-2',
        question: 'Por que o uso de uma lista vazia como parâmetro padrão (def f(item, lista=[])) é considerado uma falha crítica em Python?',
        options: [
          'Porque a sintaxe gera SyntaxError imediato.',
          'Porque a lista padrão é instanciada apenas uma vez na definição da função e seu estado persiste entre chamadas subsequentes.',
          'Porque o Python não permite listas dentro de funções.',
          'Porque a função só poderá ser executada uma única vez.'
        ],
        correctIndex: 1,
        explanation: 'Argumentos padrão mutáveis são compartilhados entre todas as chamadas da função, acumulando itens inesperados.',
      },
      {
        id: 'q5-3',
        question: 'Qual a regra obrigatória para que uma função recursiva não provoque um estouro de pilha (RecursionError)?',
        options: [
          'Ela precisa usar um laço while internamente.',
          'Ela deve conter pelo menos um Caso Base bem definido que interrompa as chamadas subsequentes.',
          'Ela deve ser declarada como uma função lambda.',
          'Ela deve receber obrigatoriamente um objeto do tipo dicionário.'
        ],
        correctIndex: 1,
        explanation: 'Sem um caso base que retorne um valor estático sem nova recursão, a função se invoca indefinidamente até atingir o limite de pilha.',
      },
      {
        id: 'q5-4',
        question: 'O que a regra LEGB define em relação a variáveis em Python?',
        options: [
          'A ordem de prioridade dos operadores lógicos.',
          'A ordem de busca por escopo de nomes: Local, Enclosing, Global e Built-in.',
          'A lista de bibliotecas oficiais instaladas pelo pip.',
          'O padrão de indentação de 4 espaços da PEP 8.'
        ],
        correctIndex: 1,
        explanation: 'LEGB dita a hierarquia de resolução de variáveis: primeiro busca no escopo Local, depois Enclosing, depois Global e por fim Built-in.',
      },
      {
        id: 'q5-5',
        question: 'Qual é a saída do código: (lambda x, y: x + y)(10, 20) ?',
        options: ['30', '1020', '<function <lambda>>', 'Gera TypeError'],
        correctIndex: 0,
        explanation: 'A expressão lambda anônima soma x e y. Ao ser invocada imediatamente com (10, 20), retorna 30.',
      }
    ]
  },

  // ==========================================
  // ===== MÓDULO 6: ORIENTAÇÃO A OBJETOS =====
  // ==========================================
  {
    id: 'q-l6-6',
    lessonId: 'l6-6',
    xpReward: 200,
    questions: [
      {
        id: 'q6-1',
        question: 'O que o parâmetro self representa nos métodos de uma classe em Python?',
        options: [
          'Uma palavra reservada do sistema que aponta para o interpretador CPython.',
          'A referência explícita à própria instância do objeto que está executando o método.',
          'Uma variável global compartilhada por todas as instâncias daquela classe.',
          'Um ponteiro para a classe mãe da qual ela herdou.'
        ],
        correctIndex: 1,
        explanation: 'self é a referência à instância concreta do objeto que invocou aquele método, permitindo acessar e modificar seus próprios atributos.',
      },
      {
        id: 'q6-2',
        question: 'Qual a finalidade do método especial __init__ em uma classe?',
        options: [
          'Destruir o objeto da memória RAM quando não for mais usado.',
          'Inicializar os atributos de estado do novo objeto recém-instanciado.',
          'Permitir que a classe seja herdada por outras classes.',
          'Converter a classe em um arquivo executável binário.'
        ],
        correctIndex: 1,
        explanation: '__init__ é o construtor/inicializador invocado automaticamente pelo Python no momento em que um novo objeto é instanciado.',
      },
      {
        id: 'q6-3',
        question: 'O que a convenção de prefixar um atributo com dois underscores (__saldo) ativa em Python?',
        options: [
          'Criptografia de ponta a ponta do valor.',
          'O recurso de Name Mangling (ofuscação de nome para evitar colisões em subclasses).',
          'Bloqueio permanente de leitura e escrita pelo sistema operacional.',
          'Torna o atributo público para qualquer arquivo do projeto.'
        ],
        correctIndex: 1,
        explanation: 'Dois underscores ativam o Name Mangling, renomeando o identificador internamente para _Classe__atributo, desestimulando o acesso externo direto.',
      },
      {
        id: 'q6-4',
        question: 'Para invocar o construtor da superclasse a partir de uma subclasse derivada, qual função nativa utilizamos?',
        options: ['parent().__init__()', 'super().__init__()', 'base().__init__()', 'this().__init__()'],
        correctIndex: 1,
        explanation: 'A função super() retorna um objeto proxy que delega chamadas de métodos para a classe pai na hierarquia de herança.',
      },
      {
        id: 'q6-5',
        question: 'O que o conceito de Duck Typing ("Tipagem Pato") preconiza na programação orientada a objetos com Python?',
        options: [
          'Todas as classes devem herdar obrigatoriamente de uma interface formal.',
          'Se um objeto possui os métodos e comportamentos necessários, ele pode ser usado, independentemente da sua classe explícita.',
          'Objetos só podem ter nomes relacionados a animais.',
          'A tipagem em tempo de compilação é estritamente obrigatória.'
        ],
        correctIndex: 1,
        explanation: '"Se anda como pato e faz quack como pato, é pato". O Python foca no comportamento dos objetos e não em sua árvore de tipos formais.',
      }
    ]
  },

  // ==========================================
  // ===== MÓDULO 7: ARQUIVOS E ERROS =========
  // ==========================================
  {
    id: 'q-l7-5',
    lessonId: 'l7-5',
    xpReward: 100,
    questions: [
      {
        id: 'q7-1',
        question: 'Por que o uso da instrução "with open(...) as f:" é considerado a melhor prática absoluta para manipulação de arquivos?',
        options: [
          'Porque ela aumenta a velocidade de leitura em disco em 10 vezes.',
          'Porque atua como um gerenciador de contexto que fecha o arquivo com 100% de garantia, mesmo que ocorram exceções durante a execução.',
          'Porque permite ler arquivos sem precisar de permissão do sistema operacional.',
          'Porque converte automaticamente o arquivo em PDF.'
        ],
        correctIndex: 1,
        explanation: 'O gerenciador de contexto (with) implementa os métodos __enter__ e __exit__, garantindo o fechamento e desalocação do descritor de arquivo.',
      },
      {
        id: 'q7-2',
        question: 'Qual é o comportamento do modo de abertura "w" na função open("dados.txt", "w") se o arquivo já existir previamente?',
        options: [
          'Acrescenta os novos dados ao final sem alterar os anteriores.',
          'Sobrescreve e apaga completamente todo o conteúdo existente.',
          'Lança a exceção FileExistsError.',
          'Abre o arquivo apenas em modo de leitura.'
        ],
        correctIndex: 1,
        explanation: 'O modo "w" (write) trunca o arquivo para tamanho zero antes de escrever. Para anexar sem apagar, deve-se usar o modo "a" (append).',
      },
      {
        id: 'q7-3',
        question: 'Em um bloco try/except/else/finally, quando a seção "finally" é executada?',
        options: [
          'Apenas se ocorrer um erro grave não tratado.',
          'Apenas se o bloco try for finalizado sem nenhum erro.',
          'Incondicionalmente e sempre, tendo ocorrido exceção ou não.',
          'Apenas se o programador invocar explicitamente o método finally().'
        ],
        correctIndex: 2,
        explanation: 'O bloco finally é garantido de rodar em qualquer cenário, sendo ideal para fechamento de conexões, bancos de dados e liberação de memória.',
      },
      {
        id: 'q7-4',
        question: 'Qual a diferença entre json.dumps() e json.dump() no módulo padrão json?',
        options: [
          'dumps opera com arquivos físicos; dump opera com strings.',
          'dumps serializa um objeto Python para uma String JSON na memória; dump grava o objeto direto em um Arquivo aberto em disco.',
          'dumps serve para deletar arquivos JSON; dump para criar.',
          'São nomes idênticos e fazem exatamente o mesmo processo.'
        ],
        correctIndex: 1,
        explanation: 'A terminação "s" em dumps e loads indica operações sobre Strings; sem "s" (dump, load), operam diretamente com fluxos de arquivos.',
      },
      {
        id: 'q7-5',
        question: 'Para criar uma exceção personalizada corporativa chamada ValidacaoError, de qual classe base ela deve herdar?',
        options: ['BaseClass', 'Exception', 'ErrorManager', 'SystemFault'],
        correctIndex: 1,
        explanation: 'No Python, todas as exceções personalizadas devem herdar direta ou indiretamente da classe embutida Exception.',
      }
    ]
  },

  // ==========================================
  // ===== MÓDULO 8: BIBLIOTECAS PYTHON =======
  // ==========================================
  {
    id: 'q-l8-5',
    lessonId: 'l8-5',
    xpReward: 110,
    questions: [
      {
        id: 'q8-1',
        question: 'O que o comando "pip freeze > requirements.txt" realiza em um projeto profissional?',
        options: [
          'Congela a execução do interpretador Python para manutenção.',
          'Gera um arquivo de texto listando todas as bibliotecas instaladas no ambiente com suas respectivas versões exatas.',
          'Criptografa o código fonte para proteger propriedade intelectual.',
          'Desinstala todos os pacotes desnecessários da máquina.'
        ],
        correctIndex: 1,
        explanation: 'pip freeze extrai a lista exata de dependências com suas versões, permitindo que outros membros da equipe repliquem o mesmo ambiente.',
      },
      {
        id: 'q8-2',
        question: 'Por que arrays da biblioteca NumPy são ordens de grandeza mais rápidos que listas nativas do Python para operações matemáticas?',
        options: [
          'Porque rodam diretamente na nuvem da AWS.',
          'Porque armazenam dados homogêneos em blocos de memória contíguos com rotinas vetorizadas implementadas em linguagem C de baixo nível.',
          'Porque utilizam inteligência artificial preditiva.',
          'Porque não consomem memória RAM da máquina.'
        ],
        correctIndex: 1,
        explanation: 'O NumPy elimina a sobrecarga da tipagem dinâmica do Python, operando sobre dados contíguos em C através de vetorização SIMD.',
      },
      {
        id: 'q8-3',
        question: 'Qual é a estrutura de dados bidimensional padrão do Pandas para representação de tabelas e planilhas?',
        options: ['Series', 'Matrix3D', 'DataFrame', 'TableArray'],
        correctIndex: 2,
        explanation: 'O DataFrame é a estrutura bidimensional central do Pandas, contendo eixos rotulados para linhas e colunas.',
      },
      {
        id: 'q8-4',
        question: 'Ao consumir uma API web com requests.get(url), qual método levanta uma exceção imediata caso o servidor responda com erro HTTP 404 ou 500?',
        options: ['resposta.throw_error()', 'resposta.raise_for_status()', 'resposta.verify_code()', 'resposta.catch_http()'],
        correctIndex: 1,
        explanation: 'resposta.raise_for_status() inspeciona o código HTTP e arremessa requests.exceptions.HTTPError automaticamente se for 4xx ou 5xx.',
      },
      {
        id: 'q8-5',
        question: 'Qual status code HTTP indica que um recurso foi criado com sucesso no servidor (frequente em requisições POST)?',
        options: ['200 OK', '201 Created', '204 No Content', '301 Moved Permanently'],
        correctIndex: 1,
        explanation: '201 Created é o código oficial da especificação HTTP para confirmar a criação bem-sucedida de uma nova entidade no servidor.',
      }
    ]
  },

  // ==========================================
  // ===== MÓDULO 9: MERCADO E BOAS PRÁTICAS ==
  // ==========================================
  {
    id: 'q-l9-5',
    lessonId: 'l9-5',
    xpReward: 100,
    questions: [
      {
        id: 'q9-1',
        question: 'Qual é o papel do arquivo .gitignore em um repositório Git corporativo?',
        options: [
          'Impedir que arquivos sensíveis (chaves .env, diretórios .venv e caches) sejam rastreados e enviados acidentalmente para o repositório público.',
          'Ignorar os erros de sintaxe do Python durante a execução.',
          'Desativar o histórico de commits de um colaborador específico.',
          'Excluir permanentemente arquivos do disco rígido.'
        ],
        correctIndex: 0,
        explanation: 'O .gitignore lista padrões de arquivos que o Git deve deliberadamente ignorar, prevenindo vazamentos de segredos e poluição com dependências.',
      },
      {
        id: 'q9-2',
        question: 'De acordo com o princípio da Responsabilidade Única (SRP do SOLID) no Clean Code, uma função deve:',
        options: [
          'Conter pelo menos 150 linhas de código para demonstrar complexidade.',
          'Executar uma única tarefa bem delimitada e realizá-la com excelência.',
          'Utilizar variáveis globais para se comunicar com outras partes do sistema.',
          'Ser escrita sempre como uma função anônima lambda.'
        ],
        correctIndex: 1,
        explanation: 'O Single Responsibility Principle determina que cada função ou módulo deve ter um único motivo para mudar e fazer uma única coisa bem.',
      },
      {
        id: 'q9-3',
        question: 'Ao investigar um bug e ler um Traceback no terminal, qual linha revela exatamente a classe do erro e a mensagem de causa?',
        options: [
          'A primeira linha do topo.',
          'A última linha na base do Traceback.',
          'A linha central do arquivo principal.',
          'Tracebacks não exibem mensagens explicativas.'
        ],
        correctIndex: 1,
        explanation: 'O Traceback é ordenado cronologicamente pela pilha de chamadas; a linha final na base é a que descreve o erro exato que abortou o programa.',
      },
      {
        id: 'q9-4',
        question: 'Qual a vantagem prática de adotar Type Hints (anotações de tipo) no código Python moderno?',
        options: [
          'Transformar o Python em uma linguagem compilada mais rápida que C.',
          'Facilitar a leitura por outros desenvolvedores e permitir análise estática com ferramentas como MyPy para evitar bugs antes de rodar.',
          'Impedir que o interpretador Python rode se os tipos forem violados em tempo de execução.',
          'Eliminar a necessidade de escrever testes unitários.'
        ],
        correctIndex: 1,
        explanation: 'Type Hints aumentam brutalmente a legibilidade, documentação viva do código e permitem autocompletes inteligentes e validações estáticas.',
      },
      {
        id: 'q9-5',
        question: 'Em entrevistas técnicas de emprego, o que a metodologia STAR orienta para responder a perguntas comportamentais?',
        options: [
          'Sintaxe, Testes, Algoritmos, Resolução.',
          'Situação, Tarefa, Ação pessoal tomada e Resultado mensurável alcançado.',
          'Sênior, Técnico, Arquiteto, Recrutador.',
          'Segurança, Tolerância a falhas, Automação, Requisitos.'
        ],
        correctIndex: 1,
        explanation: 'STAR (Situation, Task, Action, Result) é a estrutura padrão global para demonstrar maturidade e impacto prático em entrevistas de emprego.',
      }
    ]
  }
];
