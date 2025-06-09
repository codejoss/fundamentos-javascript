// find - Devuelve el primer elemento que coincida con una condición

const multipleOf5 = [5, 10, 15, 20];
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log(`Numeros multiplos de 5: ${multipleOf5}`);
console.log(`Primer numero mayor a 10: ${firstNumberGreaterThan10}`);

// FindIndez

const randomeNumbers = [6, 232, 12, 16,53, 4,22, 434];
const indexNumber = randomeNumbers.findIndex(number => number > 50);

console.log(`Randome numbers: ${randomeNumbers}`);
console.log(`Indice de numero mayor a 50 ${indexNumber}`)