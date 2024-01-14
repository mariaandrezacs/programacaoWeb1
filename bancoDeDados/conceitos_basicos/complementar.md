Banco de Dados - Aula 1 - Parte 1

Primeiramente acompanhem a importância de um banco de dados.
Os banco de dados são muito utilizados atualmente e estão presentes nos mais diversos setores.
Isso é verdade Carlos? É verdade professor Evandro. É verdade verdadeira.
Quem nunca ouviu falar… “Nós estamos verificando aqui no sistema.”
Quando você liga, por exemplo, em um serviço de atendimento ao cliente, aí ele diz “Aguarde um momento que nós vamos verificar no sistema.”.
Então, naquele sistema têm alguns dados armazenados relativa a sua dúvida.
Ou a pessoa diz, “Estamos verificando seus dados…”.
Esses dados, os seus dados de cliente estão armazenados em algum lugar.
Onde? Estão armazenados em um banco de dados.
Nós podemos dizer que os sistemas de informação manipulam informações.
Os sistemas de informação precisam manipular as informações que estão armazenadas em algum lugar.
Afinal de contas, eles só vão conseguir manipular as informações se os sistemas tiverem acesso à essas informações.
Neste contexto, surge também, a importância dos bancos de dados.
Que servem para quê? Para prover aos sistemas, informações, dados, para que eles possam manipular.
Então os bancos de dados são extremamente importantes por essas diversas razões.
Bom, seguindo aí, quando nós falamos de sistemas de informações, eles manipulam informações.
Nós temos aqui nossa base, começa onde? Nos dados.
Olha base que nós criamos.
O que nós temos em maior proporção aí é a base de dados.
Dado é um elemento que por si só não representa nada para você.
Não possui um valor significativo.
Então, informação é quando eu trabalho, junto esses dados e faço ele gerar algum sentido.
A partir do momento que passa a fazer sentido para mim, eu já tenho informação.
Subindo aí em nossa pirâmide.
Quando tenho muitas informações, essas vão gerar o próximo nível que o nível de conhecimento.
Então, a partir de um número satisfatório de informações que você obtêm, a partir dos seus dados trabalhados, organizados, você já têm um número de informações.
Então, a partir dessas informações você já tem um conhecimento.
Nesse aspecto, podemos dizer que tudo que estudarmos nessa disciplina de banco de dados é voltada para isso aqui (apresentados aponta para o slide). Para formar uma base para que os sistemas de informação gerem a possibilidade das pessoas obterem maior conhecimento.
Certo professor Evandro? Então agora podemos pensar nos objetivos da aula de hoje.



Primeiro objetivo: entender o que é um banco de dados e as características de um sistema gerenciador de banco de dados.
Ferramenta fundamental que todos vocês desenvolvedores devem ter conhecimento sobre seu funcionamento, sobre o que são os gerenciadores.
Próximo objetivo avaliar tecnicamente as propriedades dos bancos de dados.
Falamos de avaliar tecnicamente as propriedades dos bancos de dados.
Por que avaliar? Ora, vamos estudar aqui, tecnologias de bancos de dados.
Agora, qual dessas tecnologias será adequada para uma determinada situação em particular.

Conceito de banco de dados.
O que é um banco de dados? Um banco de dados é uma coleção de dados armazenados eletronicamente.
É importante que se saiba diferir o que é dado do que é informação.
Que forma eletronicamente? Acompanhe o slide. Arquivos!
Já ouviram falar sobre isso? Exemplos de arquivos: arquivos de texto que são manipulados por um programa do tipo bloco de notas, arquivos binários como imagens ou músicas e arquivos de registros.
E é justamente esse tipo de arquivo, arquivos de registro, que tratamos nessa disciplina de banco de dados.
Banco de dados são essencialmente arquivos de registros relacionados à uma determinada entidade, a determinados elementos.
Nesse contexto, podemos ver no próximo slide, os dados em banco de dados são gerenciados como uma única entidade.
Temos aqui os dados (apresentador aponta para o slide) e esses dados estão agrupados como se fossem uma única entidade.
Como se fosse uma “bacia” de dados onde você não pode trabalhar com cada um de forma independente.
Por quê? Por que eles estão interligados de acordo com a estrutura.
Eles são vistos pelos sistemas, aplicações, pelos usuários, como uma entidade só.
Como um único elemento.
Como uma coisa só que contém vários registros de informações.
Então eles são gerenciados como se fossem uma única entidade.
São acessados como se fossem uma única entidade.
Uma vez acessando essa única entidade que é o banco de dados, temos que cada um desses registros podem ser acessados individualmente de acordo com a estrutura de acesso única definida para o banco de dados.
Nesse sentido, temos o usuário e os dados.
Qual é a forma de interação que existe? Quais as operações que o usuário pode realizar nestes dados? O usuário pode realizar operações de inserção, edição, exclusão e consulta.
Geralmente um banco de dados tem como principal objetivo, utilizar como consulta do que outras alterações.
Você pode, é claro, realizar operações intermediárias mas fundamentalmente ele é utilizado para consulta de dados.
Vamos conhecer um
Ele não fará alterações diretamente no arquivo do b pouco mais sobre os níveis de interação entre o usuário e o banco de dados.
Temos o usuário, ele fará uma solicitação de dados.anco de dados necessitando solicitar à aplicação, ao seu sistema de informação.
E esse sistema de informação, por sua vez, fará uma chamada ao SGBD (sistema gerenciador de banco de dados).
A aplicação repassa esses valores que foram digitados pelo usuário para o SGBD por meio de rotinas de modo que ele entenda de modo que este possa ser retornado ao usuário.
O usuário não pode e não deve acessar diretamente os dados.
Por exemplo, os usuários e as aplicações podem armazenar e recuperar informações.
Por exemplo, eles podem solicitar alterações e exclusões.
Nós, usuários, não podemos mexer diretamente nos dados.
Só iremos acessar esses dados se tivermos uma aplicação, um programa, uma página WEB.
Essa página WEB, aí sim, já é um programa de computador que tem como conversar com o elemento que vai permitir o acesso aos dados.
Então essa aplicação responde às solicitações do usuário e passa essa solicitação para frente.
Passa para quem? Passa para o SGBD.
Então, as aplicações e os usuários não acessam os dados diretamente pois existe o SGBD intermediando as interações e tem como objetivo manipular, manter e gerenciar o banco de dados.
Então, o SGBD faz a interface entre o usuários e aplicações e os dados que estão armazenados fisicamente.
Assim, precisa existir alguém que irá garantir que o banco de dados esteja no seu funcionamento normal.
Esse “cara” é o sistema gerenciador do banco de dados.
Desta forma, temos na última camada, os dados, ou seja, os dados armazenados fisicamente de maneira eletrônica em um disco rígido por exemplo.
Os dados são armazenados em arquivos.
São arquivos de dados com falamos agora pouco.
Arquivos de registros, arquivos que contém informações sobre os dados e sobre como esses dados devem ser manipulados.
Essas informações de como os dados devem ser manipulados serão usadas pelo sistema gerenciador para definir como ele irá deixar como o usuário e a aplicação mexerem com os dados que estão armazenados.