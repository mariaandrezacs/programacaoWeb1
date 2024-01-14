Introdução 
Todos nós, em nosso dia a dia, temos a necessidade de armazenar e recuperar dados. Cadernos de endereços, listas de telefones, dados financeiros, receitas, enfim, estamos sempre lançando mão de memórias auxiliares. O ideal seria que estas memórias pudessem ser seguras, confiáveis e estivessem disponíveis quando precisássemos dela. Um dado guardado, mas que não sabemos como recuperar é praticamente tão inútil quanto se não existisse. Assim, temos uma grande necessidade de armazenar informações que não se encontram isoladas, como por exemplo, as fichas de matricula de um aluno que contém informações diversas sobre ele, conforme a figura abaixo:
Figura 1 - Exemplo de Ficha de Matrícula

Descrição da imagem: A imagem contém o logo do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul, com o referido nome escrito por extenso, e uma lista de dados da matrícula de um aluno, contendo nome, endereço, RG, prontuário, curso e ano de ingresso.

Além de uma forma adequada para definir o armazenamento destas informações, os usuários desejam realizar operações sobre esta coleção de dados, tais como: adicionar novos dados, consultar um determinado subconjunto de dados, atualizar ou modificar a estrutura dos dados e eliminar informações desnecessárias ou que já perderam a validade por um motivo ou outro, de desatualização ou desuso.

Uma solução para este problema foi apresentada com o advento da tecnologia em Bancos de Dados (BD, Database em Inglês). Para que você comece a dominar o tema em estudo apresentamos várias definições, assim um banco de dados é uma coleção de dados relacionados. Os dados são fatos que podem ser gravados e possuem um significado implícito. Assim, considere o exemplo anterior da ficha com dados de um aluno ou uma lista telefônica. Esses dados podem ser armazenados em uma ficha, uma agenda ou em um computador por meio de aplicativos como a Microsoft Excel ou Access. Essas informações têm um significado implícito, formando um banco de dados. Algumas definições mais precisas de Banco de Dados podem ser conhecidas abaixo: 

Um Banco de Dados é uma coleção logicamente coerente de dados com um determinado significado inerente. Isto significa que um conjunto aleatório de dados não pode ser considerada um Banco de Dados;
Um Banco de Dados é projetado, construído e composto por um conjunto de dados para um propósito específico (como no nosso exemplo acima para armazenar um conjunto de informações de alunos). Existe um grupo de usuários ou algumas aplicações pré-concebidas onde estes dados serão utilizados;
Um Banco de Dados representa aspectos de uma parte restrita do mundo real, denominado de minimundo. Alterações que ocorra no minimundo são refletidas em todo o Banco de Dados.
Um banco de dados computadorizado é mantido por um grupo de aplicativos chamado de Sistema de Gerenciamento de Bancos de Dados (SGBD), que é uma coleção de programas que permite ao usuário definir, construir e manipular um Banco de Dados para as mais diversas aplicações. O objetivo principal de um sistema de banco de dados é possibilitar um ambiente que seja adequado e eficiente para uso na recuperação e armazenamento de informações.

Figura 2 - Sistema Gerenciador de Banco de Dados (SGBD)



Banco de Dados e seu software são juntos denominados de Sistema de Bancos de Dados (SBD).
Imagine um armário de aço, com várias gavetas, em cada gaveta contém alguma informação (como a ficha do aluno) que estão agrupadas de acordo com seu tipo. O armário no caso é forma de gerenciamento dos dados ali contidos, lá podemos: inserir, excluir, selecionar ou alterar algum documento que ali contenha. Neste primeiro momento podemos pensar que um banco de dados computacional consiste em “levar” os dados deste armário de aço para o computador, porém seguiremos algumas regras para que o armazenamento seja mais eficiente.



Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.
