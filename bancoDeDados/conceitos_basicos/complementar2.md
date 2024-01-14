Introdução aos Bancos de Dados

Bom, dentro destes níveis de abstração do banco de dados que nós estamos estudando, iremos ver como são classificados.
Eles são agrupados por camadas.
Temos a primeira camada, camada externa que é compreendida pelo usuário e aplicação.
Nesta camada ficam os programas, aplicativos e usuários que conectam ao banco de dados.
Eles usam para se conectar e fazer consultas.
Eles não se conectam diretamente no arquivo de banco de dados, nos registros de dados.
Eles apenas fornecem uma interface para o usuário, programa e possam fazer consultas, inserção de novos dados, todas as operações que já vínhamos falando.
A outra camada é a camada lógica sendo exclusiva do SGBD.
Essa é mais uma camada de abstração não existindo fisicamente no disco.
Esta é criada dentro de arquivos lógicos do banco de dados e que chamamos de “esquema”.
E a última camada é a camada física.
Trata-se do arquivo físico do disco contendo todos os arquivos de dados e armazenam os dados no banco de dados.
Este arquivo você pode, mudar de diretório e movimentá-lo exceto acessar diretamente os dados.
Trabalharemos basicamente dentro da nossa disciplina, o modelo relacional de banco de dados sendo o modelo mais comum atualmente.
O modelo relacional, basicamente, trata a relação entre as entidades como se fossem um conjunto.
Ele vai estabelecer que tipo de ligação existente entre as entidades e em como elas são relacionadas.
Então, conjunto de dados e formas de relacionar esses conjuntos.
Por isso o nome é “banco de dados relacionais” que são relações, conjuntos de dados e formas de integração e relacionamento entre esses conjuntos de dados.
Os bancos de dados relacionais apresentam um nível de flexibilidade muito maior do que os outros dois que acabamos de falar no que se refere ao tratamento da informação.
Bom, já que estamos falando de evolução dos bancos de dados chegando até os bancos de dados relacionais, os sistemas de computação~que envolvem banco de dados evoluíram de maneira a permitir que os dados tenham mais disponibilidade, facilidade de acesso, questões de segurança, rapidez no acesso surgindo diversas arquiteturas de bancos de dados.
De sistemas de banco de dados que envolvem banco de dados.
A primeira arquitetura que temos aqui é a arquitetura de plataforma centralizada, ou seja, existe um único banco de dados, por exemplo, manipulado por um “Main Frame”.
O que seria um Main Frame? Mai frame é um tipo de computador mais antigo que caiu em desuso.
Trata-se de um computador de altíssima capacidade de processamento, armazenamento, memória, computador de grande capacidade.
Outros terminais que farão o acesso dos usuários ao banco de dados, irão se comunicar com esse computador de grande capacidade.
Já que o Main Frame tem grande capacidade os outros terminais não precisam ter capacidade nenhuma por isso, se observarmos na figura, eles são chamados de “terminais burros”, ou seja, não tem processamento, não tem memória, não fazem nada.
Apenas transportam os comandos dos usuários para aquele computador que tem grande capacidade para que ele mesmo responda todas as requisições e mande para os usuários.
Outra forma de arquitetura que conhecemos, acompanhe no slide, é a arquitetura de “sistema de computador pessoal”, ou seja, no PC.
Onde a aplicação possui seu próprio banco de dados em um único computador pessoal.
Ele não vai buscar esses arquivos de dados na rede, em um servidor, em um Main Frame, a aplicação em conjunto ao seu arquivo de dados.
Esse é um tipo de arquitetura.
Muito comum, hoje em dia, nos sistemas em alguns programas que você baixa da internet ou irá utilizar para alguma coisa, no qual ele já traz carregado o seu próprio arquivo de dados.
Arquitetura cliente-servidor, banco de dados, cliente e servidor.
Não são terminais burros no qual eles fazem acesso ao banco de dados realizando operações de entrada e saída de dados.
Neste servido estará armazenado todas as informações necessárias para ele.
Então, aqui há processamento, geralmente nesta estação que o cliente vai ficar, terá a aplicação do usuário sendo que essa aplicação irá possuir uma string de conexão, comandos de conexão que remeterá ao servidor central de banco de dados.
Geralmente é dessa forma que trabalha um banco de dados cliente-servidor.
Temos outra estrutura que é a arquitetura de banco de dados distribuídos.
Como assim distribuídos? Teremos nesta arquitetura, vários bancos de dados que podem estar em computadores diferentes, em estações diferentes, servidores diferentes e teremos uma séria de clientes, ou seja, estações de trabalho.
Essas estações de trabalho podem acessar os dados de quaisquer um dos servidores.
Um SGBD é um conjunto de dados associado à um conjunto de programas para acesso à esses dados.
Então quer dizer professor Evandro, que tudo que o sistema de gerenciador de banco de dados faz não é só um programa que faz tudo, é um conjunto de programas.
Um desses programas, provavelmente, para permitir o acesso das aplicações aos dados.
Outro programa, possivelmente, para manipular e armazenar fisicamente os dados.
Então, ele é um “cara” aparentemente complexo.
Bom, a primeira característica que um SGBD deve ter é a “Autocontenção”.
A autocontenção é característica de poder armazenar que o usuário inseriu e ainda armazenar os metadados que são os arquivos de descrição sobre os dados armazenados.
Além disso, uma característica é que o sistema gerenciador de banco de dados sempre tem que implementar a independência dos dados.
Como assim independência dos dados? Todo esse esquema dos dados e metadados que o professor Evandro comentou, isso tem que ser independente das aplicações que acessam o banco de dados, ou seja, o banco de dados existe e é mantido pelo SGBD independente do tipo de aplicação que vai acessar esses dados.
Dessa maneira, pensamos em uma outra característica a “abstração”.
O que significa abstrair? Abstrair significa desconsiderar detalhes, ou seja, o usuário estando no nível mais alto de abstração, não precisa saber detalhes de como os dados estão armazenados, como são manipulados pelo SGBD, ele não precisa saber de nada disso.
Ele precisa abstrair essas questões e detalhes de implementação.
Será abstraído pelo usuário.
Quem faz isso? É o SGBD.
Ele solicita inclusão o SGBD inclui.
Ele solicita uma alteração o SGBD altera.
Como o SGBD faz isso? Para o usuário não interessa.
Por quê? Porque existe a característica da abstração.
Depois da abstração são as “visões”. Mas o que é a visão? A visão é uma limitação, podemos dizer assim, de um grupo de dados o DBA vai delimitar para o programa acessar.
Essa visão, nessa limitação, que ele é estabelecido o usuário geralmente não pode fazer alteração de dados.
São apenas conjuntos.
As visões são muito utilizadas para quando você vai disponibilizar dados para um terceiro parceiro seu que vai acessar os dados do sistema de banco de dados onde eles não possam fazer alteração.
O controle de transações é implementado para garantir a integridade do banco de dados.
Outra característica é o controle de concorrência.
O controle de concorrência diz respeito, por exemplo em um banco de dados cliente-servidor, dois clientes podem tentar acessar o mesmo item de dados ao mesmo instante.
Então temos aqui alguns exemplos de SGBD’s, de sistemas gerenciadores de banco de dados disponíveis no mercado.
Vamos ver aqui.
Temos por exemplo o Oracle, MySQL, PostgreSQL, SQLServer da Microsoft e o Microsoft Access.
Muitos de vocês já devem ter ouvido falar do Access que é um aplicativo que permite o acesso e manutenção de banco de dados extremamente simples o trabalho com Access sendo muito fácil de usar.
Agora, ele não possui todas aquelas características que comentamos.
Por exemplo, eu não sei se dá para fazer o controle de concorrência utilizando o Access.
Síntese: Conceitos de banco de dados, sistema gerenciador de banco de dados e propriedades dos bancos de dados.
Falamos um pouquinho sobre o que é banco de dados, definições, alguns conceitos; do SGBD também, qual sua importância e seu papel e sobre as propriedades dos bancos de dados.