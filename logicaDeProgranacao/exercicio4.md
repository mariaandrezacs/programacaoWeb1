Exercício 4: Faça um programa que crie um vetor de 10 números inteiros. Em seguida, peça para o usuário informar os 10 valores. Após isso, exiba os 10 valores (um por linha)


programa
{
   funcao inicio() 
   {
      inteiro vetor[10]
      para (inteiro pos = 0; pos < 10; pos++){
         escreva("Informe o número da posição "+(pos+1)+": ")
         leia(vetor[pos])
      }

      para (inteiro pos = 0; pos < 10; pos++){
         escreva(vetor[pos]+"\n")
      }
   }
}