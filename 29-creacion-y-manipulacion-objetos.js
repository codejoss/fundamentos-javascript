/* Objetos son estructuras de datos:

key : value

key = propiedad
value = valor

objeto {
    propiedad: valor,
    propiedad2: valor,

    metodos()
};

*/

const persona = {
    name: 'Joss',
    age: 37,
    adress: {
        streetName: 'Sauce',
        numberAdress: '2',
        city: 'Coatzacoalcos'
    },
    saludar() {
        console.log(`Hi my name is: ${persona.name}`);
    }
}

console.log(persona);
persona.saludar();

persona.phone = 5553332211;
console.log(persona.phone);

persona.despedir = () => console.log(`Hasta luego`);

persona.despedir();

console.log(persona);

//Borrar propiedades y metodos

delete persona.phone;
delete persona.despedir;
console.log(persona);
