const readline = require('readline');

/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta más el café que el té",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Usuario: ', function(usernameInput) {
    rl.question('Contraseña: ', function(passwordInput){
      
      const itsValidated = validateUser(usernameInput, passwordInput);

      if (itsValidated) {
        console.log("Usuario y contraseña correctos.");
        showTimeline(usernameInput);
      } else {
        console.log("Usuario o contraseña incorrectos.");
      }
      rl.close();
    })
})

function validateUser(username, password) {
  const user = usersDatabase.find(user => user.username === username && user.password === password);
  return user ? true : false;
}

function showTimeline(username) {
  const userTimeline = usersTimeline.find(user => user.username.toLowerCase() === username.toLowerCase());
  if (userTimeline) {
    console.log(`Bienvenido ${userTimeline.username}!`);
    console.log(`Tu timeline: ${userTimeline.timeline}`);
  } else {
    console.log("No se encontró el timeline del usuario.");
  }
}