Normalização de dados (Formulário Remanejamento)
Dado o formulário de solicitação de remanejamento, será aplicada a normalização de dados visando obter um modelo de dados conciso.



Definição dos atributos contidos no formulário
Requerimento (código, nome, sexo, data_nascimento, categoria_funcional, lotação_atual, data_admissão, cidade, escolaridade, grau, cursos_realizados, experiências_profissionais, atribuições_desenvolvidas, setor_que_trabalhou, data_entrada, data_saída, motivo_saída, atribuições_que_gostaria, horário, setores/divisões/diretorias_gostaria, motivos_descontente, observações, data_preenchimento, questão1, questão2, questão3, questão4, questão5, questão6, questão7, resultado, justificativa, data_resultado).



Aplicação da 1ª Forma Normal - 1FN
A 1FN diz que todos os atributos devem conter um valor atômico (único), ou seja, os dados inclusos dentro do campo não devem se repetir. Ex.: o campo que representa os cursos feitos pelo requerente será preenchido quantas vezes no formulário? Depende de quantos cursos ele fez: na possibilidade de ser preenchido duas vezes, o campo é retirado para uma tabela associativa. 

Remanejamento (código, nome, sexo, data_nascimento, categoria_funcional, lotação_atual, data_admissão, cidade, data_preenchimento, questão1, questão2, questão3, questão4, questão5, questão6, questão7, resultado, justificativa, data_resultado); 

Permaneceram na tabela remanejamento apenas os campos com valores únicos, os campos que podem ser preenchidos uma ou mais vezes são retirados para as tabelas associativas:

Remanejamento/escolaridade (código_remanejamento, escolaridade, grau);
Remanejamento/Cursos (código_remanejamento, cursos);
Remanejamento/experiências profissionais (código_remanejamento, experiências_profissionais);
Remanejamento/atribuições desenvolvidas (código_remanejamento, atribuições);
Remanejamento/setores que trabalhou (código_remanejamento, setor, data_entrada, data_saída, motivo_saída); 
Remanejamento/atribuições que gostaria (código_remanejamento, atribuições, horário);
Remanejamento/setores-divisões-diretorias que gostaria (código_remanejamento, setor);
Remanejamento/motivos descontentamento (código_remanejamento, motivos, observações).


Aplicação da 2ª Forma Normal - 2FN
A 2FN diz que todos os atributos que não forem chave têm que ser dependentes diretos da chave, ou seja, os atributos que estão contidos no requerimento têm que depender diretamente da chave código requerimento.

Inicialmente, observa-se a entidade que possui chave primária concatenada. Para aquelas que satisfazem esta condição, analisar se existe algum atributo ou conjunto de atributos com dependência direta à chave primária.

Remanejamento (código, código_funcionário, categoria_funcional, lotação_atual, data_admissão, cidade, data_preenchimento, questão1, questão2, questão3, questão4, questão5, questão6, questão7, resultado, justificativa, data_resultado);

Verifique que o campo categoria funcional, lotação atual e cidade devem permanecer na entidade Remanejamento, tendo em vista que, se, por acaso, se desejar buscar um formulário emitido há cinco anos, cujo funcionário alterou sua categoria funcional, lotação atual ou cidade, os dados que deverão aparecer no formulário preenchido há cinco anos devem ser o correspondente à categoria funcional, lotação atual ou cidade, preenchido antigamente, e não os dados novos.
Funcionário (código, nome, sexo, data_nascimento);
Remanejamento/escolaridade (código_remanejamento,_escolaridade, grau);
Remanejamento/Cursos (código_remanejamento,_cursos);
Remanejamento/experiências profissionais (código remanejamento, experiências);
Remanejamento/atribuições desenvolvidas (código remanejamento,_ atribuições);
Remanejamento/setores que trabalhou (código_remanejamento,_setor, data_entrada, data_saída, motivo_saída);
Remanejamento/atribuições que gostaria (código_remanejamento,_ atribuições, horário);
Remanejamento/setores-divisões-diretorias que gostaria (código_remanejamento, setor);
Remanejamento/motivos descontentamento (código_remanejamento,_motivos, observações);


Aplicação da 3ª Forma Normal – 3FN
A 3FN diz que o atributo precisa estar na segunda forma normal, e todos os atributos que não são chave, não podem depender de outros atributos que também não são chave.

Uma Entidade está na 3FN se nenhum de seus atributos possui dependência em relação a outros atributos da entidade. Ao verificar a existência de dependência entre as Entidades e seus atributos, devemos criar outra entidade que contenha os atributos dependentes.

Remanejamento (código, código_funcionário, código_categoria_funcional, código_lotação, data_admissão, código_cidade, data_preenchimento, questão1, questão2, questão3, questão4, questão5, questão6, questão7, resultado, justificativa, data_resultado);

Categoria Funcional (código, descrição);
Lotação (código, descrição); Cidade (código, descrição);
Funcionário (código, nome, sexo, data_nascimento);
Remanejamento/escolaridade (código_remanejamento, código_escolaridade, grau);
Escolaridade (código, descrição);
Remanejamento/Cursos (código_remanejamento, código_cursos);
Cursos (código, descrição);
Remanejamento/experiências profissionais (código_remanejamento, código_experiências);
Experiências Profissionais (código, descrição);
Remanejamento/atribuições desenvolvidas (código_remanejamento, código_atribuições);
Atribuições (código, descrição);
Remanejamento/setores que trabalhou (código_remanejamento, código_setor, data_entrada, data_saída, motivo_saída);
Setores (código, descrição);
Remanejamento/atribuições que gostaria (código_remanejamento, código_atribuições, horário);
Remanejamento/setores-divisões-diretorias que gostaria (código_remanejamento, código_setor);
Remanejamento/motivos descontentamento (código_remanejamento, código_motivos, observações);
Motivo descontentamento (código, descrição).


Referência:

MACHADO, Felipe N. R. Projeto de Banco de Dados: Uma visão prática. São Paulo: Érica, 2004.

Este material foi baseado em:
FRANCO, Matheus. Sistemas de Gerenciamento de Banco de Dados. São João da Boa Vista: Instituto Federal de Educação, Ciência e Tecnologia de São Paulo/Rede e-Tec, 2013.