function palindrome(str){
  //criar as condições para ser palindromo e depois ver se é 'true' ou 'false'.

  const limpar = str.replace(/[^a-z0-9]/gi, "").toLowerCase(); //ele pega a palavra, junta ela e põe em caixa baixa

  const inverter = limpar.split("").reverse().join("");

  //pega a palavra já junta e caixa baixa, separa todas as letras, inverte a ordem delas e junta de novo. 

  return limpar === inverter;

  // caso sejam iguais a palavra junta e em caixa baixa retorna um valor "true", se não, "false".

}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));

