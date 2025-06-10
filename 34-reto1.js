const { time } = require('console');
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

function checkLogin(user, pass) {
  return usersDatabase.find( (data) => data.username === user && data.password === pass)
}

function getTimeLine (user) {
  const indexTimeLine = usersTimeline.findIndex((data) => data.username.toLowerCase() === user.toLowerCase());

  if (indexTimeLine !== -1) {
    return `Timeline: ${usersTimeline[indexTimeLine].timeline}`
  } else {
    return `Timeline: --- Sin posts ---`
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Usuario: ', (userName) =>{
  rl.question('Contraseña: ', (password) => {
    const itsLogin = checkLogin(userName, password);

    if (!itsLogin) {
      console.log('Nombre de usuario y/o contraseña incorrectos');
    } else {
      console.log(`Bienvenido(a) ${userName}`);
      console.log(getTimeLine(userName));      
    }
    rl.close();
  })
})