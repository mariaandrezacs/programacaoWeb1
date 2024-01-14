Modelo hierárquico
O modelo hierárquico foi o primeiro modelo de dados. Nesse modelo de dados, os dados são estruturados em hierarquias ou árvores. Os nós das hierarquias contêm ocorrências de registros, onde cada registro é uma coleção de campos (atributos), cada um contendo apenas uma informação. O registro da hierarquia que precede a outros é o registro-pai, os outros são chamados de registros-filhos.

Uma ligação é uma associação entre dois registros. O relacionamento entre um registro-pai e vários registros-filhos possui cardinalidade 1:N (um para muitos, ou seja, um pai pode ter vários filhos). E há um tipo de registro chamado raiz, que não assume o papel de filho em nenhuma relação pai-filho. Os dados organizados conforme este modelo podem ser acessados como uma sequência hierárquica com uma navegação do topo para as folhas e da esquerda para a direita. Um registro pode estar associado a vários registros diferentes, desde que seja replicado. A replicação possui desvantagens: pode causar inconsistência de dados quando houver atualização e o desperdício de espaço é inevitável. Características:

cada pai pode ter vários filhos;
cada filho pode ter apenas um pai;
duas entidades podem possuir apenas um relacionamento;
qualquer recuperação de dados deve, obrigatoriamente, percorrer a estrutura da árvore. (pai à filho à neto...).
Como exemplos de banco de dados que utilizam o modelo hierárquico podemos citar: IMS e System 2.

Vamos tomar como exemplo uma agência bancária que, como pai de um relacionamento, pode ter vários clientes. O cliente, por sua vez, pode ter várias contas. Porém, se um cliente pertencer a mais de uma agência, seus dados terão que ser replicados, o que pode causar inconsistência e desperdício de espaço.

Figura 1 - Exemplo de modelo hierárquico 

Descrição da imagem: Há palavras dentro de retângulos. Na parte inferior, a primeira palavra é Conta, quer liga-se à Cliente, logo acima, que liga-se à Agência, no topo, representando um modelo hierárquico.


Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.