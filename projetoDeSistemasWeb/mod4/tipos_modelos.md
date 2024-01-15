6.25 Tipos de modelos para a modelagem de sistemas Web
MODELO DE CONTEÚDO

Contém elementos estruturais que fornecem visão importante dos requisitos de conteúdo para uma WebApp. Esses elementos estruturais englobam objetos de conteúdo (como texto, imagens gráficas, fotografias, imagens de vídeo, áudio) apresentados como partes da WebApp. Além disso, o modelo de conteúdo inclui todas as classes de análise - entidades visíveis ao usuário criadas ou manipuladas à medida que um usuário interage com a WebApp.

Uma classe de análise engloba atributos que a descrevem, operações que realizam o comportamento necessário para a classe e colaborações que permitem que a classe se comunique com outras classes. 

Como outros elementos do modelo de análise, o modelo de conteúdo é derivado de um exame cuidadoso dos casos de uso desenvolvidos para a WebApp. Casos de uso são analisados sintaticamente para extrair os objetos de conteúdo e as classes de análise.

MODELO DE INTERAÇÃO

A grande maioria das WebApps possibilita um "diálogo" entre usuário final e a funcionalidade da aplicação, o conteúdo e o comportamento de uma aplicação. Esse diálogo pode ser descrito por meio de um modelo de interações que pode ser composto de um ou mais dos seguintes elementos:  

(1) casos de uso, 

(2) diagramas de sequência, 

(3) diagramas de estados e/ou 

(4) um protótipo de interface com o usuário. 



MODELO FUNCIONAL

Atende a dois elementos de processamento da WebApp, cada um representando um diferente nível de abstração procedural: (1) funcionalidade observável pelo usuário que é entregue pela WebApp aos usuários finais, e (2) as operações contidas nas classes de análise que implementam comportamentos associados com a classe. 

A funcionalidade observável pelo usuário engloba quaisquer funções de processamento que são iniciadas diretamente pelo usuário. Por exemplo, um site financeiro da Web poderia implementar uma variedade de funções financeiras (por exemplo, um calculador de economia nos pagamentos de universidade ou um calculador de economias de aposentadoria). 

Essas funções podem ser realmente implementadas, usando-se operações dentro de classes de análise, mas, do ponto de vista do usuário final, a função (mais precisamente, os dados fornecidos pela função) é a saída visível.

Em um nível mais baixo de abstração procedural, o modelo de análise descreve o processamento a ser realizado pelas operações da classe de análise. Essas operações manipulam atributos de classe e são envolvidas à medida que as classes colaboram umas com as outras para conseguir algum comportamento necessário.

Figura 1 - Modelo Funcional
Fonte: Pressman (2011)

Descrição da imagem: Fluxograma começando por retângulo com o texto "Iniciar custoTotal". Há uma seta saindo desse retângulo em direção à um losango que indica duas possibilidades, sendo: lado direito "Restam componentes no LDeM" e no lado esquerdo "Não restam componentes no LDeM". Ao lado direito: após o losango há retângulos indicando as ações que devem ser tomadas, uma após a outras, sendo: Obter preço a qauntidade; linhadeCusto = preço X quantidade e adicionar linhaDeCusto a custo Total. Terminado esses passo o sistema retorna ao losango para tomar uma decisão. Enquanto restarem componentes no LDeM o sistema está em loop nas operações do lado direito. Quando não restam componentes em LDeM, há as seguintes operações: Invocar calcula custoDeRemessa; Retornar custodeRemessa; Invocar determinarDesconto e Retornar desconto. Após a execução de retornar desconto há novo losango sendo que na direito o Desconto > 0 e na esquerda desconto = 0. Caso o desconto seja > 0 executa-se custoTotal = custoTotal - desconto antes de executar imposto Total = custoTotal X taxadeImposto e preçoTotal = custoTotal + impostoTotal + custodeRemessa caso contrário se executam apenas essas duas últimas operações. 

MODELO DE CONFIGURAÇÃO

WebApps devem ser projetadas e implementadas de modo que acomodem uma variedade de ambientes tanto do lado do servidor quanto do lado do cliente. 

A WebApp pode residir em um servidor que fornece acesso via internet, intranet ou extranet. 

O hardware do servidor e o ambiente do sistema operacional devem ser especificados. Além disso, considerações de interoperabilidade do lado do servidor devem ser levadas em conta. Se a WebApp precisar ter acesso a um grande banco de dados ou interoperar com aplicações da empresa que existem no lado do servidor, interfaces apropriadas, protocolos de comunicação e informação colaborativa relacionada devem ser especificadas. 

O software do lado do cliente fornece a infraestrutura que possibilita acesso à WebApp a partir da localização do usuário. Em geral, o software de navegação é usado para entregar o conteúdo e a funcionalidade da WebApp que é baixada do servidor. 

Embora existam normas, cada navegador tem suas próprias peculiaridades. Por essa razão, a WebApp deve ser rigorosamente testada com cada configuração de navegador que é especificada como parte do modelo de configuração. Os conceitos e os exemplos trazidos acima foram estudados e testados pelo autor Pressman, durante seus vários anos em atuação e estudos na área de engenharia de software. Esperamos que você os tenha compreendidos.



Este material foi baseado em:
RIBEIRO, Maria Ivanilse Calderon; COSTA, Juliana Braz da; BRAVIM, Jhordano Malacarne. Projeto de Sistemas Web. Universidade Federal de Mato Grosso/Rede e-Tec Brasil, Cuiabá: 2015.