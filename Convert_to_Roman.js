function convertToRoman(num) {

const valores = [900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const simbolos = ["CM", "D", "CD", "C", "XC", "L", "XL", "X", , "IX", "V", "IV", "I"];

let resultado = ""; //começa vazio
let n = num;

while (n>=1000){
  resultado = resultado + "M";
  n = n - 1000;
}

while (n>=900){
  resultado = resultado + "CM";
  n = n - 900
}

while (n>=500){
  resultado = resultado + "D";
  n = n - 500
}

while (n>=400){
  resultado = resultado + "CD";
  n = n - 400;
}

while (n>=100){
  resultado = resultado + "C";
  n = n - 100;
}

while (n>=90){
  resultado = resultado + "XC";
    n = n - 90;
}

while (n>=50){
  resultado = resultado  + "L";
  n = n - 50;
}
while (n>=40){
  resultado = resultado + "XL";
  n = n - 40;
}

while (n>=10){
  resultado = resultado + "X";
  n = n - 10;
}

while (n>=9){
  resultado = resultado + "IX";
  n = n - 9;
}

while (n>=5){
  resultado = resultado + "V";
  n = n - 5;
}

while (n>=4){
  resultado = resultado + "IV";
  n = n - 4;
}


while (n>=1){
  resultado = resultado + "I";
  n = n - 1;  



}

return resultado;
}

convertToRoman(36);
