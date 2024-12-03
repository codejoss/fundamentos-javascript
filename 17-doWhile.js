/* 
DO WHILE

Este ciclo es muy similar a «while» con excepeción de que en este el bloque de código a correr si o si minimo se ejecutara aunque sea una vez, ya que la revisión de la condición la ejecuta al final y no al princicipio como el ciclo «while»

  do {
    runcode;
  } while (condition);

*/

let count = 10;

do {
  console.log(count);
  count++;
} while (count < 10);