5.15 Integridade Referencial
Integridade referencial
A restrição de integridade referencial é responsável por manter a consistência entre tuplas (registros) de duas relações. Esta restrição de integridade referencial estabelece que uma tupla de uma relação que se refere à outra relação deve se referir a uma tupla existente naquela relação. Vamos exemplificar para ficar mais claro, vejamos duas tabelas, a primeira sobre funcionários e a segunda, setor:

Nas tabelas podemos observar que o atributo Setor de FUNCIONARIO indica o número do SETOR que cada funcionário trabalha. Assim, todos os valores do atributo Setor (chave estrangeira) nas tuplas da relação FUCIONARIO devem pertencer ao conjunto de valores do atributo Cod_Setor (chave primária) da relação SETOR. Desta maneira podemos definir que o conceito de Integridade Referencial decorre da implementação de chaves estrangeiras em um esquema relacional. Assim temos duas regras para dizer que um conjunto de atributos será chave estrangeira de uma relação:

Os atributos da chave estrangeira têm o mesmo domínio dos atributos da chave-primária a qual se relaciona. Podemos dizer então que os atributos chave estrangeira fazem referência à chave primária;
O valor da chave estrangeira será algum valor que ocorre na chave primária a que ela faz referência ou terá o valor null.
As restrições de integridade devem ser especificadas no esquema da base de dados relacional se o projetista quiser manter essas restrições válidas para toda a base de dados. Desta maneira, em um sistema relacional, a linguagem de definição de dados (DDL) deve fornecer métodos para especificar os vários tipos de restrições tal que o SGDB possa garanti-las automaticamente.


Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.