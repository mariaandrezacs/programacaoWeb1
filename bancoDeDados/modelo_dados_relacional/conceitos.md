Conceitos
O Modelo Relacional será a base para implementarmos nosso banco de dados. Ele representa os dados da base de dados como uma coleção de relações. Podemos pensar que, cada relação pode ser entendida como uma tabela ou um simples arquivo de registros (Citação). Por exemplo, a base de dados de arquivos que são mostradas nas tabelas abaixo, é similar a representação do modelo relacional. No entanto, possui algumas importantes diferenças entre relações e arquivos como veremos a seguir.

Ao pensarmos em uma relação como uma tabela de valores, cada linha representa uma coleção de valores que estão relacionados. Esses valores podem ser interpretados como um fato que descreve uma entidade ou uma instância. Utilizamos o nome da tabela e os nomes das colunas para nos ajudar a interpretar o significado dos valores em cada linha da tabela, que são na verdade, dados a respeito dos dados, chamados metadados.

Observe que a primeira tabela é traz dados referentes a alunos porque cada linha representa fatos sobre uma entidade aluno em particular. Os nomes das colunas - Nome, Número, Turma, Departamento - especificam como interpretar os valores em cada linha baseando-se nas colunas que cada valor se encontra.

Na linguagem do modelo relacional, cada linha é chamada de tupla, a coluna ou cabeçalho é chamado de atributo e a tabela de relação. Desta maneira, o conjunto de nomes das tabelas e suas colunas são chamados de esquema da relação. Assim, o esquema da relação Aluno é:

ALUNO = {nome, número, turma, departamento}
Temos que conhecer também conceito de grau de uma relação, este é o número de atributos da relação. No exemplo acima, o grau de relação do esquema Aluno é quatro, pois possui quatro colunas.

Uma coluna de dados possui um tipo de dado que descreve os valores que podem aparecer nela, por exemplo, na coluna Número de um aluno esperamos um valor numérico como 17, 18 e não caracteres, este tipo de dado que especifica os possíveis valores de uma coluna é chamada de domínio.

No esquema de relação Aluno podemos especificar alguns domínios para atributos da relação Aluno, vejamos alguns exemplos:
Nome: Conjunto de cadeia de caracteres que representa nomes de pessoas;
Número: Conjunto de dados numéricos com limite de cinco dígitos;
Turma: Conjuntos de códigos das turmas da faculdade;
Departamento: Conjunto de códigos dos departamentos acadêmicos, como CC, EP, etc.
Assim, de acordo com nosso exemplo de domínio para a tabela Aluno, o que esperamos obter em uma linha (tupla), é o conjunto de valores dos atributos para um determinado estudante. Por exemplo, existe um aluno de nome Smith, seu número é 17, sua turma é 1 e seu departamento CC.

A tabela abaixo mostra um exemplo da relação Aluno. Cada linha (tupla) representa uma entidade aluno em particular, cada coluna (atributo) corresponde a um cabeçalho de coluna, os valores apresentados como nulos (null) representam atributos em que os valores não existem para alguma tupla individual de Aluno:

Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.