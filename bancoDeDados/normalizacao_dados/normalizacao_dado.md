Normalização de dados (nota fiscal)
Supondo a necessidade de uma empresa em modelar um banco de dados para emissão de uma nota fiscal simples, como apresentado no quadro abaixo. Verifique que há dados que são específicos da empresa, representados aqui como "Dados da Empresa" e que não há necessidade de manter-se no banco de dados, pois são impressos diretamente na nota fiscal encaminhada pela gráfica. O que nos interessa aqui é justamente os dados que necessitam ser preenchidos, como Data, Número da Nota Fiscal, Cliente, RG, CPF, Cidade, UF, Endereço, Número e Bairro, além dos dados dos produtos vendidos, inerentes ao Código do produto, Descrição, Unidade de Medida, Quantidade, Valor Unitário e Valor Total.

Figura 1 - Modelo de nota fiscal

Descrição da imagem: Modelo de nota fiscal contendo dados da empresa, como o número da nota fiscal e endereço, dados do cliente, como CPF, nome e RG, e dados dos produtos, como código, descrição, quantidade e valores.

Inicialmente, realiza-se a definição de todos os atributos que o documento possui, registrando que eles são tidos como atributos da entidade principal (documento), conforme segue.

Neste caso, a entidade principal foi definida como Nota e a ela foram relacionados todos os atributos oriundos a emissão de uma nota fiscal. Foi definida ainda a chave primária, única para cada nota fiscal a ser emitida:

Nota (número da nota, data, cliente, RG, CPF, cidade, UF (Unidade da Federação), endereço, nº, bairro, código_produto_1, código_produto_2, código_ produto_3, ..., descrição_produto 1, descrição_produto_2, descrição_produto_3,..., unidade_produto_1, unidade_produto_2, unidade_produto_3, quantidade_produto_1, quantidade_produto_2, quantidade_produto_3, ...,valor_unitário_produto_1, valor_unitário_produto_2, valor_unitário_produto_3 ,..., valor_total_produto_1, valor_total_produto_2, valor_total_produto_3,..., valor_total_da_nota);

O campo em negrito indica a chave primária.
Aplicação da 1ª Forma Normal – 1FN
Existem situações em que nos deparamos com algumas informações que se repetem (atributo multivalorado) dentro de uma única linha, ligada a uma chave primária.

A 1FN diz que cada ocorrência da chave primária deve corresponder a somente uma informação de cada atributo, ou seja, a entidade não deve conter atributos repetidos ou multivalorados, ou, ainda, os atributos não-chave deverão ser atômicos (únicos).

Ao observarmos que certo grupo de atributos não-chave não são atômicos, ao longo do processo de entrada de dados, verificamos que este atributo deverá ser decomposto em uma nova entidade.

Nas novas entidades criadas, a chave primária será a concatenação da chave primária da entidade original, o que mantém, desta forma, o relacionamento entre elas, como também o conjunto de atributos que se repetem.

Por exemplo: a 1FN diz que todos os atributos devem conter um valor atômico (único), ou seja, os dados inclusos dentro do campo não devem se repetir. 

Na prática: o campo cliente vai ser preenchido quantas vezes na nota acima? Apenas uma vez, certo? Então corresponde a um valor atômico. Já os campos que se referem aos itens da nota serão acrescidos uma ou muitas vezes. Desta forma, tem-se a necessidade de separação da entidade Nota, criando-se a nova entidade chamada Itens_Nota, ficando: 

Nota (número da nota, data, cliente, RG, CPF, endereço, nº, bairro, cidade, UF, valor_total).

Os campos que se repetem são destinados a uma nova tabela, no nosso exemplo chamado de itens da nota. A chave principal também é inclusa na nova tabela para manter o relacionamento entre elas.

Itens_Nota (número da nota, código, descrição, unidade_de_medida, valor_unitário, quantidade, valor_total).

Note: as tabelas que saem na 1FN são tabelas associativas.
Aplicação da 2ª Forma Normal – 2FN
A 2FN diz que todos os atributos que não forem chave têm que ser dependentes diretos da chave, ou seja, os atributos que estão contidos na nota têm que depender diretamente da chave Número da nota.

Inicialmente, observa-se a entidade que possui chave primária concatenada. Para aquelas que satisfazem esta condição, analisar se existe algum atributo ou conjunto de atributos com dependência direta à chave primária.

Exemplo: o atributo cliente é dependente direto da nota, pois é o cliente desta nota. Já atributo RG, CPF são dependentes do cliente, não tendo nenhuma relação direta com a nota, ou seja, independentemente da nota, o CPF do cliente será o mesmo se soubermos o nome do cliente. Sabe-se também que o CPF do cliente nunca muda. Desta forma, tem-se:

Nota (número da nota, data, código_cliente, endereço, nº, bairro, código_ cidade, valor_total);
Os atributos adicionados acima “código_cliente e código_cidade” são para manter o relacionamento entre as entidades.
Verifique que o campo endereço deve permanecer na entidade Nota, tendo em vista que, se, por acaso, pretender-se buscar uma nota emitida há cinco anos cujo cliente alterou seu endereço para outra rua, o endereço que deverá aparecer na nota emitida há cinco anos deve ser o correspondente ao endereço antigo do cliente, e não o novo endereço.
Cliente (código, nome, RG, CPF);
Os campos dependentes do cliente são transferidos para a tabela cliente.
Cidade (código, descrição, UF);
O atributo UF que depende apenas da cidade é atribuído para a tabela cidade.
Itens nota (número_da_nota, código_produto, quantidade, valor_unitário, valor_total);
O atributo “código_produto” é mantido na tabela associativa para manter o relacionamento entre Nota, Itens da Nota e Produtos.
Produto (código, descrição, unidade_de_medida, valor_unitário);
Os atributos dependentes de produto são relacionados tabela produto. Repare que o atributo valor unitário foi duplicado, isso pela necessidade do valor unitário de um produto sofrer mudanças, em notas diferentes o valor unitário pode estar diferente também.
Aplicação da 3ª Forma Normal – 3FN
A 3FN diz que o atributo precisa estar na segunda forma normal, e todos os atributos que não são chave, não podem depender de outros atributos que também não são chave. Deve-se verificar ainda se o valor de um atributo pode se repetir em muitas tuplas, sendo que neste caso, é necessário inclusão de nova entidade.

Uma Entidade está na 3FN se nenhum de seus atributos possui dependência em relação a outros atributos da Entidade. Ao verificar a existência de dependência entre as Entidades e seus atributos, devemos criar outra entidade que contenha os atributos dependentes.

Nota (número da nota, data, código_cliente, código_endereço, código_bairro, nº, código_cidade);
Note que o atributo valor total da nota foi retirado na 3FN. Todos os atributos que são gerados a partir do resultado de dois ou mais atributos são retirados, visando manter a consistência dos dados.
Endereço (código, descrição);
Aplicando a 3FN, o endereço é retirado da tabela nota, pois o endereço não é um atributo chave e refere-se ao endereço do cliente nesta nota. Então, o endereço é incluso na tabela de clientes e relaciona-se tanto com a entidade Cliente como a entidade Nota.
Bairro (código, descrição);
Aplicando a 3FN, o bairro é retirado da tabela nota, pois o bairro não é um atributo chave e refere-se ao bairro do cliente nesta nota. Então, o bairro é incluso também na tabela de clientes e relaciona-se tanto com a entidade Cliente como a entidade Nota.
Cliente (código, nome, RG, CPF, nº, código_endereço, código_cidade);
Os campos chave código_endereço e código_cidade vêm para a tabela de clientes com o fim de fazer o relacionamento entre as tabelas.
Cidade (código, descrição, UF);
Itens nota (número da nota, código produto, quantidade, valor_unitário);
O atributo valor total sai, pois ele é resultado de outros dois atributos: a quantidade vezes o valor unitário.
Produto (código, descrição, unidade_de_medida, valor_unitário).


Referência:

MACHADO, Felipe N. R. Projeto de Banco de Dados: Uma visão prática. São Paulo: Érica, 2004.

Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.