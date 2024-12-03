/*

 switch (expresion) {
  case valor1:
    codigo a ejecutar
    break
  case valor2:
    codigo a ejecutar
    break
  case valor3:
    codigo a ejecutar
    break
  default:
    codigo a ejecutar por default
    break
 }

*/

let expr = 'uva'

switch (expr) {
  case 'manzana':
    console.log('Las naranjas cuestan $20kg');
    break;
  
  case 'naranjas':
    console.log('Las manzanas cuestan $15kg');
    break

  case 'papayas':
    console.log('Las papayas cuestan $30kg');
    break

  default:
    console.log(`No se encontro el producto: ${expr}`);
}