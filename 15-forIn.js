/* 
FOR IN

Se usa para iterar sobre objetos enumerables como los «Objetos», y nno funciona sobre iterables

Objeto = Estructura de datos que consta de 2 cosas: Propiedades --> Valor

Sintaxis:

for ( nombreVariable in objetoenumerable) {
  codigo_a_ejecutar
};
*/

const shoppingList = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

// Ejemplo de uso 1
for (item in shoppingList) {
  console.log(item);
};

// Ejemplo de uso 1
for (const fruit in shoppingList) {
  console.log(`${fruit}: ${shoppingList[fruit]}`);
}

/* 
La variable que creamos para que recorra el array lo que nos traerá será el indice de la propiedad que esta recorriendo.

En el primer ejemplo «item» nos entrego el nombre de la propiedad, en el segundo ejemplo fruit al colocar el objto y usar fruit dentro de los corchetes, este esta apuntando al indice de la priedad y nos trajo su valor en lugar del nombre de su propiedad
*/