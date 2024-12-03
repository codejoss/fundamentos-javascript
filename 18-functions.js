/* 
FUNCIONES

Las funciones son bloques o fragmentos de códigos que nos van a permitir escribir funcionalidades que podemos reutilizar una y otra vez

Para crear una función se requiere usar los siguientes elementos:

1. La palabra reservada «function»
2. El nombre que queremos darle a esa función, en este caso se utiliza cameCase
3. El o los parametros que recibirá la función, estos son opciones, no todas las funciones llevan apramrtros
4. Y por ultimo viene el bloque de código de nuestra función que determinará que es lo que hará ésta, dentro de dicho bloque puede o no existor un return que nos retornará algo al finalizar la función o simplemente podemos ejecutar código dentro.
5. Al final tenemos el llamado de la funcion, se realiza usando el nombre de la función seguido de parentesis, esto indica que estamos haciendo un llamado a nuestra función para que esta ejecute el código que escribimos dentro de ella, dentro de los parentesis podemos escribir los argumentos, los cuales equivalen a nuestras entradas del programa que fueron determinadas en los parametros.

SINTAXIS:

  function nameFunction (opcional_parameters) {
    runcode with or not return;
  };

*/

 function calculateDsicountedPrice ( price, discountPercentage ) {
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;
  return priceWithDiscount;
 };

 const originalPrice = 334;
 const discountBlackFriday = 15;
 
 const finalPrice = calculateDsicountedPrice(originalPrice, discountBlackFriday);


 console.log(`Original price: $${originalPrice}`);
 console.log(`Discount: ${discountBlackFriday}%`);

 console.log(`Fina price: $${finalPrice}`);
 