Exercício 3: Faça um programa que crie um vetor de 10 números inteiros. Em seguida, peça para o usuário informar os 10 valores. 

programa
{
   funcao inicio()
   {
      inteiro vetor[10]
      para (inteiro pos = 0; pos < 10; pos++){
         escreva("Informe o número da posição "+(pos+1)+": ")
         leia(vetor[pos])
      }

   }
}