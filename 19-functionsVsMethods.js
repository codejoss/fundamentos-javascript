/* 
Los objetos tambien pueden contener funciones dentro de estos, sin embargo estas funciones reciben el nombre de «Metodos»
*/

// Capacidad que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos ==> callback

function a () {};
function b (a) {};

b(a);

// 2. Retornar funciones

function a () {
  function b () {};
  return b;
};

// 3. Asignar funciones a variables ==> Expresión de función

const a = function() {};
a();