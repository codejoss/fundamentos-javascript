// Copy an array
const originalArray = [1,2 , 3, 4, 5];
const copyArray = [...originalArray];

console.log(`Original: ${originalArray}`);
console.log(`Copy: ${copyArray}`);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combineArray = [...array1, ...array2];
console.log(`Array1: ${array1}`);
console.log(`Array2: ${array2}`);
console.log(`Combinado: ${combineArray}`);

const newArrayCOmbine = [...array2, 'amarillo'];
console.log(newArrayCOmbine);

// Pass elements to a function

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));