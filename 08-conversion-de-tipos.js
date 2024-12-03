// CONVERSION EXPLICITA

// Conversion a numeros enteros
const string = "42";
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);

// Conversion a numeros flotantes
const stringDecimal = "3.14";
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

// Convertir a binario
const binary = "1011011";
const decimal = parseInt(binary, 2)
console.log(decimal);
console.log(typeof decimal);

// CONVERSION IMPLICITA

const sum = '5' + 3 //Convirte el numero en string y concatena
console.log(sum);

const sumWithBoolean = '3' + true; //Al existir un string convierte el true a string y concatena
console.log(sumWithBoolean);

const sumBooleanNumber = 3 + true; //true es convertido a numero 1
console.log(sumBooleanNumber);

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;

console.log('-----');
console.log(stringValue + stringValue); // Concatena
console.log(stringValue + numberValue); // Concatena
console.log(stringValue + booleanValue); // Concatena

console.log('-----');
console.log(numberValue + stringValue); // Concatena
console.log(numberValue + numberValue); // Suma
console.log(numberValue + booleanValue); // Suma

console.log('-----');
console.log(booleanValue + stringDecimal); // Concatena
console.log(booleanValue + numberValue); // Suma
console.log(booleanValue + booleanValue); // Suma