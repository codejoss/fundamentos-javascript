const secreteNumber = Math.floor(Math.random() * 10 + 1);
const playerNumber = parseInt(prompt('Adivina el número secreto (entre 1 a 10):'))

console.log(`Elegiste el número ${playerNumber}`);

if (playerNumber === secreteNumber) {
  console.log('Felicidades!!! adivinaste el número secreto');
} else if (playerNumber < secreteNumber && playerNumber > 0) {
  console.log('El número que elegiste es demasiado bajo, intentalo de nuevo');
} else if (playerNumber > secreteNumber && playerNumber < 11) {
  console.log('El número que elegiste es demasiado alto, intentalo de nuevo');
} else {
  console.log('El número no esta dentro del rango');
}