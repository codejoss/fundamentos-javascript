function People (name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

const people1 = new People('Joss', 'Quevedo', 37);
console.log(people1);

const people2 = new People('Andrea', 'Cazarin', 30)
console.log(people2);

// Agregar una nueva propiedad

People.prototype.phone = 5554443322;

people1.nationality = 'Mexican';
console.log(people1);

People.prototype.sayHi = function () {
    console.log(`Hi, my name is: ${this.name}`);
    
}
people1.sayHi();
people2.sayHi();