/* 
FOR OF

Se usa para iterar sobre objetos iterables como arrays o strings

Sintaxis:

  for ( nombreVariable of objetoIterable) {
      codigo_a_ejecutar
  }
*/

const canasta = ['pera', 'manzana', 'uva', 'naranja'];

// Iterando con for ------------
/* for (let i = 0; i < canasta.length; i++) {
  console.log(canasta[i]);
} */

// Iterando con FOR OF ---------
for (const fruit of canasta) {
  console.log(fruit);
}