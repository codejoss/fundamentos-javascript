/* 
IF
  if (condicion) {
  bloque a ejecutar si se cumple condicion
  } else {
    bloque a ejecutar en caso de que no se cumpla condicion 
  }
*/

let userName = 'Nico';

if (userName == 'Joss') {
  console.log('Hola JOSS');
} else if (userName == 'Nico') {
  console.log('Hola NICO');
} else {
  console.log('Nombre no encontrado');
}