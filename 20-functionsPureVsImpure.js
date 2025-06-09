// Funciones PURA
// Dando una misma entrada obtenemos la misma salida

// Side effects:  Cambia el estado de algo fuera de la función
// 1. Modifica variables global
// 2. Modificar los parametros de la función
// 3. Llamados a API's o solicitudes http
// 4. Imprimir mensajes por pantalla o en consola
// 5. Modificar el DOM
// 6. Acceder a la hora o al día actual

function suma(a, b) {
  return a + b;
}

// Funciones IMPURAS

function sumaConSideEffects(a, b) {
  console.log(a + b); // Imprime el resultado en consola
  return a + b;
}

let total = 0;
function sumaConVariableGlobal(a) {
  total += a;  // Modifica una variable global
  return total;
}


