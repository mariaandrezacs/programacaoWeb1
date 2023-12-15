/* 
var sair = confirm("Confirma ir para a página do google?");

if(sair == 1) {
    window.location = "http://www.google.com.br";
}



/*  0 - não 
    1 - sim */

/* -------------------------------------------------------------------------------------------------------------- */

/* WHILW */

var repete = 1; 

while(repete <= 3) {
    alert("Mensagem: " + repete); 
    repete = repete + 1;
}


/* PARA ATÉ */ 

var inicio = 2;
var fim = 100;
var todosPares = "Numeros pares: ";
while(inicio <= fim) {
    todosPares = todosPares + inicio + ",";
    inicio = inicio + 2;
}
alert(todosPares);



