Exercício 5: Escreva um algoritmo que lê um vetor com seis posições e o escreve. Conte, a seguir, quantos valores do vetor são negativos e escreva esta informação.

programa
{
   funcao inicio()
   {
      inteiro vetor[6]
      para (inteiro pos = 0; pos < 6; pos++){
         escreva("Informe o número da posição "+(pos+1)+": ")
         leia(vetor[pos])
      }

      para (inteiro pos = 0; pos < 6; pos++){
         se(vetor[pos]<0){
            escreva("O valor "+vetor[pos]+" é negativo\n")
         }
      }
   }
}