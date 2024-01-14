Modelagem de dados
Utilizaremos para nossa modelagem o modelo Entidade Relacionamento, pois este é um modelo de dados conceitual de alto nível, cujos conceitos foram projetados para estar mais próximo possível da visão que o usuário tem dos dados, não se preocupando em representar como estes dados estarão realmente armazenados de maneira física. O modelo ER é utilizado principalmente durante o processo de projeto conceitual de banco de dados.

Quando pensamos no Modelo Entidade Relacionamento temos três conceitos básicos:

Conjunto de Entidades: uma entidade pode ser vista como uma pessoa, “coisa” ou “objeto” no mundo real que é distinguível de todos os outros objetos, como por exemplo, um cliente de um banco. Já um conjunto é um grupo de entidades do mesmo tipo que compartilham os mesmos atributos, como por exemplo, um conjunto de clientes bancários, animais ou pessoas.
Conjunto de Atributos: uma entidade é representada por um conjunto de atributos. Possíveis atributos do conjunto de entidades cliente, podem ser: nome-cliente, cpf, rua e cidade-cliente. Possíveis atributos do conjunto de entidade conta são: número-conta e saldo. Para cada atributo, existe um conjunto de valores permitidos chamado domínio daquele atributo. O domínio do atributo nome-cliente pode ser o conjunto de todas as cadeias de texto (strings) de certo tamanho.
Por exemplo, podemos limitar o tamanho do nome de uma pessoa a 50 caracteres, então este é seu domínio. Como também, o domínio do atributo número-conta pode ser o conjunto de todos os inteiros positivos. O atributo idade de uma entidade pessoa poderia ter como domínio os números inteiros entre 0 e 150. 
Formalmente, um atributo é uma função que mapeia um conjunto de entidades em um domínio.
Conjunto de Relacionamentos: um relacionamento é uma associação entre diversas entidades. Por exemplo, podemos definir um relacionamento que associa o cliente José Silva à conta 401. Isto especifica que José Silva é um cliente com conta bancária número 401. Um conjunto de relacionamentos é uma coleção de relacionamentos do mesmo tipo.


Nosso projeto conceitual de Banco de Dados será feito através da modelagem de dados usando o Modelo Entidade-Relacionamento (MER). Este modelo fornece as regras e conceitos para a criação de um Diagrama Entidade Relacionamento (DER), que deverá representar o banco de dados em questão, como por exemplo, um banco com vários clientes e contas, uma loja de produtos de beleza, de um consultório odontológico, uma indústria de peças, uma locadora de vídeo, uma escola, enfim, o negócio a que este banco de dados deve servir. Desta maneira, usaremos dois modelos teóricos para a construção de um banco de dados:

o modelo entidade relacionamento para criação do projeto conceitual do banco de dados;
o modelo relacional para a implementação em um ambiente computacional pré-existente. Este ambiente computacional pré-existente será o nosso Sistema Gerenciador de Banco de Dados Relacional - MySQL.
Com intuito de realizar a transferência entre modelos serão aplicadas as regras de mapeamento do Modelo Entidade Relacionamento ME-R para o Modelo Relacional MRel. Ou seja, para “converter” o diagrama conceitual de nosso banco de dados em um conjunto de tabelas relacionadas que possa ser implementado em um SGBD Relacional, usaremos um conjunto de passos. Este processo é chamado mapeamento do MER para o MRel.

Para realizarmos o mapeamento dos dados entre os modelos, primeiramente utilizaremos os requisitos coletados para construção e realizaremos a modelagem utilizando o Modelo Entidade Relacionamento, em seguida “converteremos” os diagramas gerados em tabelas sobre o modelo relacional para implementarmos em um SGBD, onde teremos os seguintes passos:

Requisitos para a base de dados;
Modelo Entidade Relacionamento;
Modelo Relacional; até chegar ao
SGBD Relacional.
Agora veremos como construir um diagrama Entidade Relacionamento DER para o projeto de um banco de dados. Este será o primeiro passo para a construção de nosso banco de dados. O Modelo Entidade Relacionamento MER é composto por Entidades e Relacionamentos sem nos esquecermos dos atributos.



Representações
A estrutura lógica geral de um banco de dados pode ser expressa graficamente por um diagrama ER, que consiste nos seguintes componentes: 

Retângulos que representam conjuntos de entidades;
Elipses que representam atributos;
Losângos que representam relacionamentos entre conjuntos de entidades;
Linhas que ligam atributos a conjuntos de entidades e conjuntos de entidades a relacionamentos.
Alguns autores chamam as linhas de arestas, em analogia às teorias de grafos e redes.



Entidades e atributos
Como descrito acima, a representação para um conjunto de entidades é um retângulo e, para cada atributo, uma elipse, como por exemplo, um conjunto de entidades Aluno pode possuir os atributos nome, prontuário e data de nascimento:

Figura 1 - Entidade com seus atributos



Este conjunto de entidades ALUNO possui os conjuntos de atributos Nome, Prontuario e Data_Nasc. Uma entidade desse conjunto poderia ser {‘Iago’, 10123, ’2000-12-16’).



Chave de um conjunto de entidades
É importante poder especificar como entidades e relacionamentos são identificados. Conceitualmente, entidades e relacionamentos individuais são distintos, mas em uma perspectiva de banco de dados a diferença entre eles precisa ser expressa em termos de seus atributos. Uma restrição importante sobre entidades é a aplicação de uma chave única. Um conjunto de entidades sempre possui um atributo cujo valor é diferente e válido para cada entidade. Tal atributo é chamado atributo-chave, e seu valor é usado para identificar cada entidade de modo unívoco, único, como por exemplo, o atributo CPF de uma pessoa é sempre único, ou o prontuário de um aluno é sempre único. A chave de um atributo será sempre sublinhada. Assim sendo, todo conjunto de entidades deve ter um conjunto de chaves cujo valor identifique com unicidade a entidade, pois a chave é o principal meio de acesso a uma entidade.

É possível ocorrer situações onde é preciso mais de um atributo para identificar cada entidade do conjunto. Por exemplo, o RG (registro geral) dos brasileiros não identifica um único cidadão. É possível, que um mesmo número de RG possa ocorrer em duas unidades diferentes da federação, ou seja, um mesmo número de RG poderia ser emitido em São Paulo e Minas Gerais. Assim, para ser identificador, o RG precisa ser composto com o valor do Órgão Emissor, no caso de São Paulo, SSP_SP. Estes dois atributos (RG e Órgão Emissor) se, juntos, identificam cada brasileiro. Nestes casos, quando é necessário mais de um atributo, a chave do conjunto de entidades será composta.



Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.