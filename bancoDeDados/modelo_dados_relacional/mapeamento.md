Mapeamento
O Modelo Relacional (MRel) implementa as tabelas relacionadas, com muitos recursos para segurança dos dados, controle de acesso, consultas e manutenção dos dados. Porém, este modelo não é o modelo mais adequado para se fazer projetos de banco de dados. Então conhecemos o Modelo Entidade Relacionamento MER, que por meio de seus recursos visuais, se apresenta mais claro, simples e intuitivo.

Desta maneira, em projetos de banco de dados, normalmente a modelagem dos dados é realizada através de um modelo de dados de alto-nível. O modelo de dados de alto-nível geralmente adotado é o Modelo Entidade- -Relacionamento (MER) e o esquema das visões e de toda a base de dados é especificado em diagramas entidade-relacionamento (DER).

O Modelo Entidade Relacionamento possui um maior número de abstrações. Existem ainda definições para: Conjunto de Entidades Fracas, Atributos Compostos, Atributos Multivalorados, por exemplo. Vimos os principais conceitos do modelo, que permitem a construção da maior parte dos bancos de dados para as aplicações comerciais mais comuns.

Agora, veremos como traduzir um DER para um esquema MRel. Para isto utilizaremos um conjunto de passos para que possamos implementar nosso banco de dados em um SGBD Relacional.

Passo 1: Mapeamento dos tipos de entidades: Consiste na criação de uma relação que inclua todos os atributos de uma entidade. Assim, as entidades do MER são transformadas em tabelas no MRel. O atributo chave da entidade passa a ser a chave primária da relação (tabela).
Mapeamento dos Conjuntos de Relacionamentos binários de razão de cardinalidade 1:1: Para este caso temos 3 possíveis opções de mapeamento, porém, as opções mais utilizadas e que devem ser seguidas são a primeira e a terceira.:
criar chave estrangeira em uma das relações;
gerar uma única relação para as entidades e o relacionamento; e
gerar uma relação exclusiva para o relacionamento, porém, esta opção caracteriza como veremos mais adiante o mapeamento N:M.
Passo 3: Mapeamento dos Conjuntos de Relacionamentos binários de razão de cardinalidade 1:N: Em primeiro , devemos gerar uma tabela para cada um dos conjuntos de entidades conforme descrito em nosso primeiro passo. Para o mapeamento 1:N a relação que mapeia o Conjunto de entidades do lado N recebe a chave primária do outro Conjunto de Entidades (lado 1) como chave estrangeira e os atributos do relacionamento.
Passo 4: Mapeamento dos Conjuntos de Relacionamentos binários de razão de cardinalidade N:M: Devemos criar uma nova tabela para representar o relacionamento. Nesta nova tabela devemos incluir como chave- -estrangeira as chaves-primárias das tabelas que representam os tipos de entidade participantes; sua combinação irá formar a chave-primária desta nova tabela.

Passo 5: Mapeamento de Relacionamentos N-ários: Para os relacionamentos de grau maior que dois devemos criar uma nova relação (tabela) para representar o relacionamento. Temos que incluir nesta tabela como chave- -estrangeiras as chaves-primárias das relações que representam os tipos de entidades participantes. Temos que incluir também qualquer atributo simples do tipo de relacionamento n-ário. A chave-primária desta relação é normalmente uma combinação de todas as chaves-estrangeiras fazendo referência às relações que representam os tipos de entidades do relacionamento.


Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.
