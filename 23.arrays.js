// Practice with arrays
// Sum all elements in an array

const numbersArray = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}

console.log(sum);

//PUSH - add a new element to the end of an array

const countries = ['USA', 'Canada', 'Mexico'];

const newCountries02 = countries.push('Germani', 'Australia');
console.log(countries);
console.log(newCountries02);

// POP - remove the last element from an array
const removedCountry03 = countries.pop();
console.log(removedCountry03);
console.log(countries);

// SHIFT - remove the first element from an array
const removedCountry04 = countries.shift();
console.log(removedCountry04);
console.log(countries);

// UNSHIFT - add a new element to the beginning of an array
const newCountries05 = countries.unshift('Germany', 'Australia');
console.log(countries);
console.log(newCountries05);