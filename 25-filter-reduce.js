//Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(`Numeros: ${numbers}`);
console.log(`Numeros pares: ${evenNumbers}`);

//Reduce - Case 1
const numReduced = numbers.reduce((accum, num) => accum + num, 0);
console.log(`Numeros: ${numbers}`);
console.log(`Usando reduce: ${numReduced}`);

//Reduce - Case 2
const words = ['apple', 'banana', 'orange', 'banana', 'watermelon', 'orange', 'orange'];
const wordFrecuency = words.reduce((accum, elem) => {
  if (accum[elem]) {
    accum[elem]++;
  } else {
    accum[elem] = 1;
  }
  return accum;
}, [])

console.log(wordFrecuency);