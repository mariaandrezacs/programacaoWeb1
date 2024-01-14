Relacionamentos
Nenhuma informação armazenada no Banco de Dados existe isoladamente. Todos os elementos pertencentes ao mundo real (restrito) modelado de alguma forma estão associados a outros elementos. Normalmente estas associações representam ações físicas ou alguma forma de dependência entre os elementos envolvidos. Um relacionamento é uma associação entre diversas entidades.

Considere um conjunto de relacionamentos TRABALHA entre os conjuntos de entidades: EMPREGADO e DEPARTAMENTO. Este relacionamento associa cada empregado com o departamento em que ele trabalha. Cada instância de relacionamento em TRABALHA associa uma entidade “empregado” a uma entidade “departamento”. Cada instância de relacionamento conecta uma entidade EMPREGADO a uma entidade DEPARTAMENTO.

O conjunto de relacionamentos é, portanto, representado por um losango. Enquanto que para os conjuntos de entidades os atributos são obrigatórios, para os conjuntos de relacionamentos, eles são optativos. O conjunto de entidade só faz sentido quando especificamos seus atributos.

Já um conjunto de relacionamentos (CR), nem sempre precisa possuir atributos. Sua existência justifica-se apenas pela função de relacionar uma ou mais entidades. Em geral, os atributos dos conjuntos de relacionamentos, quando existem, especificam dados sobre tempo (data, horário), quantidades, valores, enfim, atributos relativos a transações, ações, ocorrências, que caracterizam os relacionamentos.



Grau de relacionamento
O grau de um conjunto de relacionamentos indica o número de conjuntos de entidades participantes. Um tipo de relacionamento de grau dois é chamado binário, de grau três de ternário, de grau quatro quaternário, acima disso, n-ário. A quantidade de Entidades envolvidas em um Relacionamento pode ser determinada por sua semântica. Desta forma, podem-se categorizar os graus de relacionamento em: 

Unário: é o grau de Relacionamento que envolve um único Tipo de Entidade.

Figura 1 - Exemplo de relacionamento unário

Descrição da imagem: Há duas elipses. Na primeira, há dois círculos representando pessoas. No segundo, há um circulo representando "casado com". Os dois círculos das pessoas estão ligadas ao círculo do casamento.

Binário: é o grau de Relacionamento que envolve dois Tipos de Entidades.


Figura 2 - Exemplo de relacionamento binário

Descrição da imagem: Há três elipses. Na primeira há dois círculos representando funcionários. Na segunda há três círculos representando produção, e na terceira há três círculos representando um produto. Os dois círculos dos funcionários ligam-se aos 3 da produção, que ligam-se aos 3 do produto.


Ternário: é o grau de Relacionamento que envolve três Tipos de Entidades.

Figura 3 - Exemplo de Relacionamento ternário

Descrição da imagem: Há quatro elipses. A primeira contém dois círculos representando funcionários. A segunda contém três círculos e representa produção ou utilização. A terceira contém três círculos que representam produtos. A quarta contém dois círculos que representam ferramentas. Os dois círculos dos funcionários ligam-se aos três córculos da produção e da utilização, que ligam-se aos produtos ou às ferramentas.


Quaternário: é o grau de Relacionamento que envolve quatro Tipos de Entidades.


Figura 4 - Exemplo de relacionamento quaternário

Descrição da imagem: Há uma elipse central, que contém três círculos representando produção, utilização e operação. Ela está envolta por outras quatro elipses, cada uma com dois círculos, que representam funcionários, produtos, ferramentas e máquinas. Os círculos das quatro elipses externas ligam-se aos círculos da elipse central.


A quantidade de Entidades envolvidas em cada Relacionamento é determinada pela Cardinalidade do grau de Relacionamento, ou seja, podemos estabelecer a quantidade mínima e máxima de Entidades envolvidas com cada Entidade relacionada.

A Cardinalidade Mínima determina a quantidade mínima de Entidades relacionadas por um número representativo, ou seja, 0 (zero) 1, 2, ...., N (muitos);
A Cardinalidade Máxima determina a quantidade máxima de Entidades relacionadas por um número representativo, ou seja, 1, 2, ...., N (muitos).


Restrições de relacionamento
Os relacionamentos entre entidades possuem certas restrições que limitam as combinações possíveis das entidades que dele participam. Uma destas restrições é a razão de cardinalidade. A quantidade de Entidades envolvidas em cada Relacionamento é determinada pela Cardinalidade do Tipo de Relacionamento, ou seja, pode-se estabelecer a quantidade mínima e máxima de Entidades envolvidas com cada Entidade relacionada.

Até agora vimos, de modo geral, como construir um diagrama de entidade relacionamento (DER) para projetar um banco de dados. Aprendemos os quatro principais construtores deste modelo: os conjuntos de entidades (CE), os conjuntos de relacionamentos (CR), os atributos de entidades e relacionamento. Agora, veremos um dos mais importantes conceitos do MER: a restrição de razão de cardinalidade do relacionamento. O entendimento deste conceito será imprescindível para o processo de mapeamento do diagrama entidade relacionamento DER para o Modelo Relacional (MRel), ou seja, para transformar o projeto conceitual do banco de dados em um conjunto de tabelas.



Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.