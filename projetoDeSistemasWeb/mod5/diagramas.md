6.31 Diagramas da UML
Na UML, os diagramas são recursos gráficos utilizados para se visualizar um sistema sob diferentes perspectivas, ou seja, é uma forma de observar o comportamento e a composição das partes que compõem o projeto do sistema a ser desenvolvido. Você deve entender que os diagramas são geralmente compostos por itens e relacionamento. 

Por padrão, a UML oferece nove tipos diferentes de diagramas que podem ser classificados como os diagramas estruturais e/ou diagramas comportamentais. Observe a figura a seguir.

Descrição da imagem abaixo.

Figura 1- Tipos de Diagramas Estruturais
Fonte: Infoescola (2010).

Descrição da imagem: Ao centro cilindro com o texto "Modelos" e ao redor dez retângulos cada qual com o nome de um tipo de diagrama UML, sendo: Diagrama de objetos; diagrama de classe; diagrama de caso de uso; diagrama de máquina de estados; diagrama de atividades; diagrama de interação; diagrama de estrutura; diagrama e pacotes; diagrama de implantação e diagrama de componentes. 

Entenda que cada diagrama é utilizado para especificar e conhecer os diferentes tipos de comportamento que as classes podem possuir e também seus relacionamentos e ações, conforme regra do negócio. 

Diagramas Estruturais - Em UML, os aspectos estáticos de um sistema, ou seja, a representação de seu esqueleto e estrutura, relativamente estáveis, são visualizados através dos diagramas estruturais. 

Diagrama de classes - São os diagramas mais utilizados em sistemas de modelagem orientados a objetos. O diagrama de classe é composto basicamente por um conjunto de classes relacionais entre si. Este diagrama modela os aspectos estáticos de um sistema pelo fato de sua estrutura ser sempre válida em qualquer ponto do ciclo de vida do sistema.

Descrição da imagem abaixo.

Figura 2 - Diagrama de Classes
Fonte: Adaptado de Larman (2011).

Descrição da imagem: O diagrama é representado por diversos retângulos referentes a cada classe. Começando pelo retângulo onde está escrito "Cliente" o qual se liga por um traço a classe "Contrato de Aluguel" nesse ligação tem-se o número 1 próximo ao cliente e o indicativo 0..* próximo à "Contrato de aluguel" e o termo "possui" entre ambos. Contrato de aluguel se liga a "Companhia de aluguel de veículos" e a "Veículo Alugado" . Na ligação com "Companhia de aluguel de Veículos" há um traço com o indicativo 0..* próximo à "Contrato de Aluguel" e 1 próximo à "Companhia de aluguel de veículos". Na ligação com "Veículo alugado" apresente o indicativo 0..1 próximo a si. Há também três outras classes, sendo "Caminhão", "Carro Sport" e "Carro de passeio" que se ligam através de setas apontadas para "Veículo alugado"  e a indicação que são tipos de veículos.

Observe a figura acima e perceba que o diagrama de classes demonstra a estrutura estática das classes de um sistema no qual estas representam as “coisas” que são gerenciadas pela aplicação modelada. 

Através da definição apresentada na imagem acima um Cliente e uma Companhia de Aluguel de Veículos possuem zero ou mais Contratos em comum, sendo que um Contrato pode pertencer a apenas um Cliente e a uma Companhia ao mesmo tempo. Esse Contrato refere-se a um Veículo Alugado, que pode ser um Caminhão, um Carro Sport ou Carro de Passeio.

Diagrama de Objetos - É um diagrama de classes instanciado, ou seja, o diagrama de objetos modela instâncias dos itens de um diagrama de classes e seus respectivos relacionamentos. Desta forma, os itens do diagrama de objetos assumem valores, correspondentes a seus atributos, que no seu conjunto representam a situação estática do sistema em um determinado ponto de tempo.

Descrição da imagem abaixo.

Figura 3 - Diagrama de Objetos 
Fonte: Adaptado de Larman (2011).

Descrição da imagem: três retângulos e em cada há uma divisão pela metade. No primeiro retângulo, na parte de cima "Pablo: Cliente" e abaixo: "Nome: Pablo F. Barros", "idade: 20" e "CPF: 94168912-15". Este retângulo está ligado a outros dois.  Nos retângulos de baixo estão os seguintes dados "2678: Contrato de aluguel" e embaixo "Num_contrato:2678" e "veículo: "BMW 914" e no outro  "2679: contrato de aluguel" e "Num_Contrato: 2679" e "veículo: Audi v8" .

Analise a ilustração acima e perceba que o diagrama de objetos é uma variação do diagrama de classes e utiliza quase a mesma notação. A diferença é que o diagrama de objetos mostra os objetos que foram instanciados das classes. O diagrama de objetos é como se fosse o perfil do sistema em um certo momento de sua execução.

Como pode ser visto na imagem acima o cliente Pablo possui dois contratos de aluguel de veículo, sendo um para uma BMW e outro para um Audi.

Diagrama de Componentes - Mostra o sistema por um lado funcional, expondo as relações entre seus componentes e a organização de seus módulos durante sua execução. 

Observe na imagem abaixo que a visão das relações entre os componentes é melhor percebida a partir desse tipo de representação e modelagem.

Descrição da imagem abaixo.

Figura 4 - Relações entre Componentes 
Fonte: Adaptado de Larman (2011)

Descrição da imagem: quatro quadrados onde na aresta lateral esquerda tem uma figura oval acima e dois retângulos um embaixo do outro, fechando assim a aresta do quadrado, sendo essa a simbologia para componentes, e ao centro em cima o nome do componente e abaixo o nome com sua extensão.  No caso há o componente "Aplicação (acima) App.exel (abaixo)", na parte inferior, ligado a outros três componentes através de setas que saem de si e se conectam aos outros. Os outros componentes são: "Gerenciador de comunicação (acima) Comm.dll (abaixo)", "Gráficos (acima) Graficos.dll (abaixo)" e "Gerenciador de Banco de Dados (acima) Db.dll (abaixo)"

Diagramas comportamentais - São responsáveis pela modelagem dos aspectos dinâmicos de um sistema, ou seja, pela representação das partes do sistema que sofrem alterações, como, por exemplo, o fluxo de mensagens ao longo do tempo e a transição de estados que o mesmo pode assumir. 

Diagrama de casos de uso - Assumem papel importante na modelagem comportamental de um sistema, um subsistema ou uma classe, por apresentar uma visão externa de como esses elementos podem ser utilizados no contexto. 

Um diagrama de caso de uso mostra o relacionamento entre os atores e os casos de uso dentro de um sistema. É um padrão de comportamento que o sistema exibe. Contém um conjunto de casos de uso e modela interações entre os atores e o sistema e do próprio sistema. Observe o exemplo da figura abaixo e perceba a visão global, ou seja, a visão de alto nível do sistema.

Descrição da imagem abaixo.

Figura 5 - Visão Global do Sistema 
Fonte: Adaptado de Larman (2011).

Descrição da imagem:  Boneco de palito o qual é o símbolo para ator nesse diagrama com o texto "Administração do Banco" abaixo, cercado por várias círculos ovalados cada qual descrevendo uma ação, sendo: Cadastrar cliente, remover ou atualizar cliente, cadastra dependente, cadastrar operação (histórico), remover ou atualizar operação (histórico), remover ou atualizar agência, cadastrar agência, fechar poupança, abrir poupança, fechar conta corrente, e por fim abrir conta corrente.  

Descreve um conjunto de cenários. Captura os requisitos de usuários. Delimita o escopo do sistema. Generalização entre os casos de uso: o filho herda o comportamento do pai, podendo adicionar e redefinir passos em pontos arbitrários do comportamento do pai.

Como pode ser visto na imagem, a Administração do banco pode fazer ações como Cadastrar Agência, Fechar Poupança e Abrir conta corrente.

Diagrama de sequência - É um diagrama de interação responsável pela modelagem dos aspectos dinâmicos de um sistema e que dá ênfase à ordenação temporal das mensagens trocadas entre objetos deste sistema.

Para proporcionar melhor visualização do fluxo de controle ao longo do tempo, o diagrama de sequências é organizado colocando-se os objetos correspondentes na parte superior do diagrama, ao longo do eixo horizontal, e suas respectivas mensagens são colocadas ao longo do eixo vertical, em uma ordem cronológica, de cima para baixo. 

As mensagens são representadas por setas horizontais, nas quais a ponta da seta identifica o objeto alvo. Desta forma, um diagrama de sequências ao ser criado deve ser associado a um diagrama de casos de uso ou a um diagrama de classes ou objetos.

Descrição da imagem abaixo.

Figura 6 - Diagrama de Sequência 
Fonte: Adaptado de Larman (2011)

Descrição da imagem: no diagrama de sequencia constam os objetos em retângulos na parte superior e abaixo retângulos finos e as trocas de mensagens entre eles. Dessa forma tem-se os seguintes objetos: computador, servidor de impressão, impressora e fila dispostos um ao lado do outro. Entre computador e servidor de impressão tem "imprimir "arquivo". Entre servidor de impressão e impressora tem [impressora livre] imprimir (arquivo) e entre impressora e fila [impressora ocupada] imprimir (arquivo).

Você pode entender a ilustração do diagrama acima, de modo que esse mostra a interação dinâmica entre os objetos ao longo do tempo e apresenta os objetos que participam da interação. O diagrama demonstra a sequência de mensagens trocadas entre os objetos. No exemplo são enviadas mensagens de um Computador para um Servidor de Impressão; do Servidor de Impressão para a Impressora; da Impressora para a Fila. Por fim, da Fila é enviado um retorno seguindo o mesmo fluxo até o Computador.

Diagrama de atividades - É responsável pela modelagem do fluxo de controle entre as atividades de um sistema, ou seja, ele modela o fluxo sequencial das atividades geradas por uma operação do sistema ou por um agente externo. 

O diagrama de atividades é composto por estados de atividades, estados de ações e transições. O diagrama de atividades é uma variação do diagrama de gráfico de estados, sendo que o diagrama de atividade não necessita especificar qual evento causou a mudança de um estado para outro no sistema.

Outra característica peculiar do diagrama de atividades é o fato de este ser modelado com um fluxograma, detalhando uma determinada operação de um sistema e também podendo considerar agentes externos que interagem com o mesmo.



Descrição da imagem abaixo.

Figura 7 - Diagrama de Atividades 
Fonte: Adaptado de Larman (2011)

Descrição da imagem:  Um círculo preto indica o início. Esse círculo se conecta através de uma seta que sai de si e vai para um losango. Acima da seta tem o texto "ImprimirArquivo()". O losango representa uma tomada de decisão e nesse caso um lado é [Disco Cheio] e o outro [Espaço em disco]. Quando o disco está cheio o losango se conecta a um retângulo com o texto "Mostrar caixa de mensagem - Disco Cheio" e esse retângulo se conecta a uma círculo preto com uma borda branca, símbolo esse que indica final.  Caso haja espaço em disco o losango se conecta ao retângulo Mostrar caixa de mensagem - imprimindo. Esta se conecta a Criar arquivo PostScript que por sua vez se conecta a Remover caixa de mensagem e por fim se conecta ao círculo preta com borda branca indicando o final do conjunto de ações. 

Observe que o diagrama de atividades captura ações e seus resultados. Esse tipo de diagrama, conforme demonstra a ilustração acima, foca o trabalho executado na implementação de uma operação (método) e suas atividades numa instância de um objeto. No caso da imagem acima é apresentado o sequenciamento de atividades para a realização de uma impressão.

Diagrama de estados - Envolve a modelagem comportamental de objetos reativos, modela o fluxo de controle de um estado para outro mediante máquinas de estados. O que vem a ser?

Descrição da imagem abaixo.

Figura 8 - Diagrama de Estado 
Fonte: Adaptado de Larman (2011). 

Descrição da imagem: círculo preto indicando o início, ele se conecta ao retângulo escrito "no térreo"  o qual se conecta com "subindo" entre eles está escrito "subir (andar). Subindo se conecta com "parado" através de duas setas sendo  uma " chegar no andar" e outra "subir (andar)" . Parado se conecta com "Descendo" e entre eles está escrito "descer (andar)" . E Descendo tb se conecta com Parado e entre eles está escrito "chegar no andar".  

Você pode perceber que, na figura acima, o diagrama apresenta os estados possíveis em que objetos de certa classe se podem encontrar e quais os eventos do sistemas que provocam tais mudanças. No caso, a imagem apresenta os estados do funcionamento de um elevador.

Diagrama de Colaboração - de maneira semelhante ao diagrama de sequência, apresenta a colaboração dinâmica entre os objetos. Você pode escolher entre utilizar o diagrama de colaboração ou o diagrama de sequência. No caso da figura abaixo é exemplificado o processo de impressão a partir de um Computador.

Descrição da imagem abaixo.

Figura 9 - Diagrama de Colaboração 
Fonte: Adaptado de Larman (2011).

Descrição da imagem: quatro retângulos começando com ": Computador" o qual se conecta com ": Servidor de Impressão" através de uma seta. Ao lado dessa tem-se: "1: imprimir (arq)". "; Servidor de Impressão" se conecta a dois retângulos sendo :" Fila e ": Impressora". Entre a ligação de ": Servidor de impressão" e ": Fila" tem o texto "[Impressora ocupada] 1.2: Armazenar (arq)" e entre ": Servidor de Impressão" e ": Impressora" tem o texto "[Impressora livre] 1.1: Imprimir (arq)".



Referência:

LARMAN, Craig. Utilizando UML e Padrões: Uma Introdução à Análise e ao Projeto Orientado a Objetos. 3. ed. Porto Alegre: Bookman, 2007.

Este material foi baseado em:
RIBEIRO, Maria Ivanilse Calderon; COSTA, Juliana Braz da; BRAVIM, Jhordano Malacarne. Projeto de Sistemas Web. Universidade Federal de Mato Grosso/Rede e-Tec Brasil, Cuiabá: 2015.