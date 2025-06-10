class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    makeSound() {
        console.log(`The animal make a sound`);        
    }
}

class Dog extends Animal {
    constructor (name, type, race) {
        super(name, type);
        this.race = race;
    }
    makeSound() {
        console.log(`Guaaaauuuu guaauuuu`);
    }
    run() {
        console.log(`${this.name} run happiness`);
        
    }
}

const animal1 = new Animal ('Bob', 'murcielago');
const dog1 = new Dog ('Bast', 'Dog', 'Belga Malinois');

// Add new method o propiety to instance
Dog.prototype.secondMethod = function() {
    console.log(`It's a new method`)
}

console.log(animal1);
animal1.makeSound();

console.log(dog1);
dog1.makeSound();
dog1.run();
dog1.secondMethod();
