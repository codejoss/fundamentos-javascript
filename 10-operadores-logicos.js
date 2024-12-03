// OPERADORES LOGICOS 

/* 
  AND -> && Sirve para validar que dos o más condiciones son verdaderas

  OR -> || Sirve para validar que al menos 1 condición es verdadera
  
  NOT -> ! Sirve para negar un valor booleano

*/

const a = 10;
const b = 20;
const c = '10';

console.log(a == b && a === c);
console.log(a != b || a == c);

console.log(!(a === c));
