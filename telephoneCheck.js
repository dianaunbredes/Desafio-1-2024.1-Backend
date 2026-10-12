function telephoneCheck(str) {
  // descreve o formato inteiro de um número válido
  const regex = /^(1 ?)?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;

  // .test já devolve true ou false, então é só devolver
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));      // true
console.log(telephoneCheck("1 (555) 555-5555"));  // true
console.log(telephoneCheck("555-5555"));          // false
console.log(telephoneCheck("2 757 622-7382"));    // fals
