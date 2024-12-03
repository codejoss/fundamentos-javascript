// 1. Tipo entero y decimal
let numEntero = 42;
let numDecimal = 3.1416;

console.log(typeof numEntero, typeof numDecimal);

// 2. Notación cientifica
const numCientifico = 5e3;
console.log(numCientifico);


// 3. Infinitos y los que no son un número NaN
const numInfinito = Infinity;
const noNumero = NaN;

// OPERACIONES ARITMETICAS

// 1. Suma, resta, multiplicación y división

const suma = 1 + 1;
const resta =  12 - 4;
const multiplicacion = 4 * 7;
const division = 25 / 6;

// 2. Módulo y exponenciación

const modulo = 15 % 5;
const exponenciacion =  5 ** 3;

// PRESICISION

const presicion = 0.1 + 0.2;
console.log(`presición = ${presicion}`);
console.log(`presición = ${presicion.toFixed(1)}`); // toFixed permite indicar cuantos decimales queremos mostras de un número 
console.log(0.3 === presicion.toFixed(1)); // false
console.log(0.3 == presicion.toFixed(1)); // true

// Operaciones avanzadas con Math
const raizCuadrada = Math.sqrt(25);
const valorAbsoluto = Math.abs(-236);
const numRandom = Math.random();

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(numRandom);
