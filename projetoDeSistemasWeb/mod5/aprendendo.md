
6.29 Aprendendo sobre a UML
Para Larman (2011), a UML é uma linguagem visual utilizada para modelar sistemas computacionais por meio do paradigma de orientação a objeto, linguagem padrão de modelagem de software adotada internacionalmente pela indústria de engenharia de software. 

Um diagrama em UML é um conjunto de itens e relacionamentos. Em UML, a criação de diagramas envolve a identificação de itens que formam o vocabulário do sistema e a especificação de como estes itens relacionam-se entre si. A linguagem apresenta itens estruturais, as partes mais estáticas do modelo e representam elementos conceituais ou físicos. UML não é uma metodologia. Não diz quem deve fazer o quê, quando e como fazer. 

UML não é uma linguagem de programação (LARMAN, 2011, pg. 37).

São itens estruturais:

Classes - É uma descrição de um conjunto de objetos que compartilham os mesmos atributos, operações, relacionamento e semântica. É uma abstração do mundo real para ser construído e manipulado no mundo computacional.

Figura 1 - Classes


Descrição da Imagem: retângulo dividido em três partes sendo que na primeiro está escrito Funcionário. Na segunda: codFuncionario; nome; dataNasc e funcao e na última parte está escrito vender(). E tudo isso é a classe Funcionário.

Como pode ser visto na imagem acima a classe Funcionário possui como atributos codFuncionario, nome, nataNasc e funcao. A mesma classe possui também o método vender.

A notação é a forma para representar no mundo computacional que no sistema deve haver organização dos dados do funcionário, para que seja possível pesquisa, exclusão, inserção dentre outras ações com tais dados no sistema. Observe a figura acima “classe funcionário”.

Objetos - Um objeto ou instância é uma ocorrência de uma classe, ou seja, um objeto possui estado de comportamento específico e uma identidade única dentro do contexto de uma classe.

Figura 2 - Objeto

Descrição da Imagem: Retângulo com duas divisões, sendo que na primeira está escrito f.Funcionario e na segunda: codFuncionario=""; nome ="" e datanasc="". E tudo isso é o objeto.

Conforme ilustrado na imagem acima f é um objeto da classe funcionário cujo codFuncionario, nome e dataNasc estão vazios.

Pense assim: um objeto na UML pode ser entendido como elemento que se pode criar, manipular e cujo comportamento pode ser percebido, ou seja, existe uma dada interação.

O objeto na linguagem satisfaz a intenção de representar uma coisa que terá certo significado para o projeto e desenvolvimento do sistema, ou seja, é algo/coisa que faz sentido para o projeto a partir da observação do projetista. 

Um caso de uso é utilizado para estruturar o comportamento de um sistema sem precisar especificar sua implementação, além de envolver a interação entre os atores, humanos ou sistemas automatizados Na linguagem, são utilizados itens que são capazes de demonstrar o comportamento no tempo e espaço no projeto de sistema. É uma possibilidade de o projetista observar como será o comportamento e/ou interação entre as classes e os objetos. 

Os Itens Comportamentais da UML são as partes dinâmicas de um modelo em UML e representam comportamentos no tempo e espaço, permitindo assim aos profissionais simulações a partir de observações modeladas com a linguagem UML. Perceba que são dois os itens comportamentais apresentados pela linguagem de modelagem unificada, que você aprenderá agora. Leia com atenção para perceber a importância desses itens na representação do comportamento dos elementos no projeto de sistema. 

Interações - Uma interação representa um conjunto de mensagens que são trocadas por um conjunto de objetos de um sistema, apresentando, desta forma, o comportamento destes objetos sob um contexto específico. Uma mensagem é representada graficamente por uma seta cheia, que geralmente inclui o nome de suas operações:

 Figura 3 - Interação

Descrição da imagem:  Seta com a ponta toda em preto apontando da esquerda para direita. Acima indicação de que a mesma se trata de Notação para o comportamento INTERAÇÃO.

Máquina de estados - representa a sequência de estados que um objeto assume durante o seu tempo de vida, em resposta a eventos. Desta forma, uma máquina de estados modela o comportamento de um objeto individual. Você deve entender que um estado é uma condição ou situação na vida de um objeto durante a qual ele satisfaz alguma condição, executa alguma atividade ou aguarda um evento, conforme a figura abaixo.

 Figura 4 - Estado de Aguardo 

Descrição da imagem: Retângulo escrito "Aguardando" e indicação ao mesmo dizendo: Notação demonstrar ESTADO do objeto.

Com a utilização da UML, o projetista pode representar os relacionamentos existentes entre os itens que ele pode relacionar a partir do levantamento de requisitos, ou seja, pode demonstrar os relacionamentos que têm a função e mostrar como os itens abstraídos de um sistema se combinam. 

A linguagem proporciona a notação dos três principais tipos de relacionamento em UML, vejamos:

Dependência - É a relação existente entre dois itens quando um dos itens depende do outro. Na relação de dependência, existe um item dependente e outro independente. Desta forma, uma alteração feita no item independente pode afetar a semântica do item dependente. Uma dependência é representada graficamente por uma seta aberta, com linha tracejada:

Figura 5 - Dependência 

Descrição da imagem:  Seta pontilhada apontando da esquerda para direita com a indicação de que é notação para representar DEPENDÊNCIA entre os itens.

Generalização - É um relacionamento hierárquico entre classes. A maior classe de maior nível hierárquico é conhecida como superclasse, enquanto a outra classe da relação é conhecida como subclasse. Graficamente, uma generalização é representada por uma linha contínua com uma seta em branco apontado sempre a superclasse.

Figura 6 - Generalização

Descrição da Imagem: seta com a ponta aberta (apenas dois traços) e indicação que é notação para representar GENERALIZAÇÃO entre os itens. 

A generalização é conhecida com um relacionamento “é um tipo de”, ou seja, permite a comparação de duas classes sob a perspectiva de que a subclasse envolvida no relacionamento é um tipo da superclasse relacionada. 

Associação - É um relacionamento estrutural que conecta classes, ou seja, por meio de uma associação entra classes, pode-se chegar em um objeto de uma classe a partir do objeto da outra classe relacionada.

Figura 7 - Associação

Descrição da Imagem: No lado direito há um retângulo escrito Funcionário o qual está ligado ao retângulo Departamento. Nessa ligação entre os dois (traço) há o número 1 próximo ao retângulo Funcionário e o número 1 com um asterisco ao lado do retângulo Departamento. E há a indicação de que essa ligação com os números se trata de notação para representar a ASSOCIAÇÃO entre os elementos. 

A partir da imagem acima é possível observar que um funcionário gerencia um ou mais departamentos.

Referência:

LARMAN, Craig. Utilizando UML e Padrões: Uma Introdução à Análise e ao Projeto Orientado a Objetos. 3. ed. Porto Alegre: Bookman, 2007.
Este material foi baseado em:
RIBEIRO, Maria Ivanilse Calderon; COSTA, Juliana Braz da; BRAVIM, Jhordano Malacarne. Projeto de Sistemas Web. Universidade Federal de Mato Grosso/Rede e-Tec Brasil, Cuiabá: 2015.