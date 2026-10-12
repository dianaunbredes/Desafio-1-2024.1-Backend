function rot13(str) {
 
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let resultado = ""; //"copo vazio" qe sera usado ao longo do codigo, por isso o 'let'. Não é constante

 //crio loop que vai somando de 1 em 1. Repete o bloco várias vezes.
for (let i = 0; i< str.length; i++){ 
  const letra = str[i]; 
  //percorre os indices da palavra digitada "0, 1, 2, ..." até ele for menor que o tamanho.

  const posicao = alfabeto.indexOf(letra);
  // em que posição de alfabeto está a letra 'S' por exemplo? S tem indice 18, então está na posição 18. Salva. 
  if (posicao === -1){ //protege de espaços e pontuações.
  resultado = resultado + letra;

  }
  else{
    const novaPosicao = (posicao + 13)%26;
    resultado = resultado + alfabeto[novaPosicao];
  }



} 

 return resultado;
}



console.log(rot13("SERR PBQR PNZC"));
