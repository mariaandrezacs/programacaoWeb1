Formas normais
A Teoria da Normalização é expressa tradicionalmente através de um conjunto de Formas Normais, que otimizam a estrutura e o conteúdo das relações entre as entidades.

O conceito de normalização foi introduzido por E. F. Codd, em 1970, utilizando a primeira forma normal – 1FN. Esta técnica, pode-se dizer, é um processo matemático formal que fundamenta-se na teoria dos conjuntos.

Nesse processo podem ocorrer as seguintes Anomalias de Atualização:

Inclusão: ao se incluir um novo cliente, por exemplo, ele tem que estar relacionado com uma venda;
Alteração: caso o fabricante de um produto altere o preço de determinada classe de produto, será preciso percorrer toda a Entidade para se realizarem múltiplas alterações;
Exclusão: ao se excluir um cliente, por exemplo, os dados referentes às suas compras poderão ser perdidos.
Através do processo de normalização podemos substituir, de forma gradual, um conjunto de Entidades e Relacionamentos para um modelo mais “adequado”, em relação às Anomalias de Atualização (Inclusão, Alteração e Exclusão), as quais podem causar certos problemas:

Grupos repetitivos (atributos multivalorados) de dados;
Dependências parciais em relação a uma chave concatenada;
Redundâncias de dados desnecessários;
Perdas acidentais de informação;
Dificuldade na representação de fatos da realidade observada;
Dependências transitivas entre atributos.
Estes problemas podem ser minimizados através da aplicação da normalização, tornando o modelo de dados bastante estável e sujeito a poucas manutenções.


Referência:

MACHADO, Felipe N. R. Projeto de Banco de Dados: Uma visão prática. São Paulo: Érica, 2004.

Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.