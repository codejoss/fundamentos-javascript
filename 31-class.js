class People {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    sayHi() {
        console.log(`Hi my name is: ${this.name} y tengo ${this.age} años de edad`);
    }
}

const people1 = new People('Joss', 37);
people1.sayHi();