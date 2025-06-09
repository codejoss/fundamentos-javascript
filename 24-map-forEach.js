// MAP - create a new array by applying a function to each element of an array

const numbers = [2, 4, 6, 8, 10];

const squaredNumbers = numbers.map((number) => {
  return number * number;
});

console.log(numbers);
console.log(squaredNumbers);

// FOREACH - execute a function for each element of an array

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const iteratedColors = colors.forEach((color) => {
  console.log(color);
});
console.log(colors);
console.log(iteratedColors);

// Fahrenheit to Celsius
// C = 5/9 * (F- 32)

const temperaturesFahrenheit = [0, 50, 100];

const temperaturesCelsius = temperaturesFahrenheit.map( element => {
  return 5/9 * (element - 32);
});

console.log(`Temperaturas en Fahrenheit: ${temperaturesFahrenheit}`);
console.log(`Temperaturas en Celsius: ${temperaturesCelsius}`);

//Suma de todos los números de un array
let res = 0;
numbers.forEach(num => res += num);
console.log(`Array of numbers: ${numbers}`);
console.log(`Sum of numbers: ${res}`);