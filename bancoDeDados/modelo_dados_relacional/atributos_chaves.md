Atributos-chaves
Uma relação é definida como um conjunto de tuplas. Por padrão, todos os elementos de um conjunto devem ser distintos. Assim, todas as tuplas de uma relação também são distintas. Isto significa que nenhuma tupla pode ter a mesma combinação de valores para todos os seus atributos. Desta maneira, temos que ter um valor que chamamos de atributo-chave que é utilizado para identificar de modo unívoco uma tupla em uma relação.

Geralmente, um esquema de relação pode ter mais que uma chave. Nos casos em que isto ocorra, cada chave é chamada chave-candidata. Por exemplo, o esquema da relação Aluno poderia ter um atributo adicional Código, para indicar o código interno de alunos na escola. Assim, o esquema teria duas chaves candidatas: Número e Código.

Chave-Primária
Após identificarmos as chaves candidatas devemos definir uma delas como a chave-primária da relação. A indicação no modelo de qual chave-candidata é a chave-primária é realizada se sublinhado ou negritado os atributos que formam a chave-candidata escolhida, como podemos ver abaixo:

Figura 1 - Representação da tabela "aluno"

Descrição da imagem: representação da tabela “aluno” antes e depois da normalização. Na primeira representação, a tabela “aluno” possui os campos nr, nome, turma e departamento; onde o campo nr é destacado. Após a normalização, à tabela “aluno” é adicionado o campo codigo, que passará a ser a chave primária.

O atributo Nome da relação Aluno não deve ser indicado como chave, uma vez que nada garante a que não haja ocorrência de nomes duplicados (homônimos).

Em certas relações pode ser necessário mais de um atributo para identificar cada tupla da relação de forma unívoca. Por exemplo, vejamos a relação Pessoa apresentada abaixo:
Figura 2 - Representação da relação pessoa

Descrição da imagem: representação da tabela “pessoa” com os campos nome, rg, orgaoemissor e datanasc. Os campos rg e orgaoemissor são chave primária da tabela.

Um determinado atributo pode não garantir a unicidade de uma tupla, desta maneira a identificação de cada pessoa deve ser feita pelo valor do atributo RG e do atributo OrgaoEmissor. A utilização de mais de um atributo para a composição da chave primária chamamos de chave composta. Alternativamente para não utilizarmos uma chave composta na relação Pessoa, poderíamos incluir um campo de identificação única como um código, por exemplo.


Chave estrangeira
O conceito de chave estrangeira é de grande importância na construção de banco de dados relacional. Vamos começar com exemplo:

Figura 3 - Representação de um conceito de chave estrangeira

Descrição da imagem: representação das tabelas “setor”, “funcionario” e “dependente”. A tabela “setor” possui os campos codsetor, nome_setor e localização; e como chave primária o campo codsetor. A tabela “funcionario” possui os campos nome, cpf, setor e datanasc; e como chave primária o campo cpf. A tabela “dependente” possui os campos “nome_dependente, cpf_dependente, cpf_funcioanrio e datanasc; e como chave primária o campo cpf_depentende.

No esquema acima temos três relações. A relação FUNCIONÁRIO possui os dados de um funcionário de uma empresa, como o Nome, CPF, Setor onde trabalha e Data de Nascimento. A relação SETOR possui o Nome e Localização de um setor que é identificada por um código. A relação DEPENDENTE possui o CPF deste como chave primária, o CPF do funcionário o qual ele é dependente, o Nome e a Data de Nascimento do dependente.

Podemos verificar que alguns atributos estão presentes em mais de uma tabela. Através das relações apresentadas abaixo podemos verificar que o atributo Setor da tabela FUNCIONARIO representa o código do setor onde o funcionário está lotado, sendo o mesmo atributo Cod_Setor da tabela SETOR. O mesmo caso ocorre entre os atributos CPF e CPF_Funcionario das tabelas FUNCIONARIO e DEPENDENTE respectivamente.

Figura 4 - Diagrama ER das tabelas Funcionário, Setor e Dependente

Descrição da imagem: representação das tabelas “setor”, “funcionario” e “dependente” igual à figura anterior, acrescentada as relações entre as tabelas setor e funcionario, e entre funcionario e dependente. O campo setor da tabela funcionario passa a ser chave estrangeira do campo codsetor da tabela setor. E o campo cpf_dependente passa a ser chave estrangeira do campo cpf da tabela funcionario.



Relação entre tabelas

Como podemos verificar, apenas a chave primária de uma tabela deve ser repetida em outra tabela. É o que acontece no esquema relacional apresentado. A chave primária de FUNCIONARIO está representada na tabela DEPENDENTE e a chave primária da tabela SETOR está representada na tabela FUNCIONARIO, como chave estrangeira. Desta maneira, podemos saber, por exemplo, qual é o SETOR de um funcionário (através do atributo Setor) ou quais dependentes possui um FUNCIONARIO através do atributo CPF_Funcionario.

Desta forma, a chave estrangeira possibilita a implementação do conceito de relacionamento entre entidades. Com isto, podemos no Modelo Relacional, realizar a modelagem representada no Modelo Entidade Relacionamento que mostra um conjunto de entidades relacionado a outro conjunto de entidades, com determinada razão de cardinalidade.

Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.