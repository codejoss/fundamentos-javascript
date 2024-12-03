// COMPARADORES

/*
== -> Sirve para comparar si algo es igual a otra cosa sin revisar el tipo de dato

== -> Sirve para comparar si algo es igual a otra cosa incluyendo el tipo de dato

!= -> Sirve para comparar si un valor es dirente a otro sin comparar tipos de datos

!== -> Sirve para comparar si un valor es dirente a otro comparando tipos de datos

> -> Compara si un valor es mayor que otro

< -> Compara si un valor es menor que otro

>= -> Compara si un valor es mayor que otro

<= -> Compara si un valor es menor que otro

*/

const a = 10;
const b = 20;
const c = '10';

console.log(a == b);
console.log(a === c);
console.log(a == c);

console.log(a != b);
console.log(a != c);
console.log(a !== c);

console.log(a > b);
console.log(b > c);
console.log(b < c);
