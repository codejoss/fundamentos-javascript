/*

This it's used on class

this reference to the same Object

*/

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const people1 = new People ('Joss', 37);

people1.myName = function() {
    console.log(`My name is: ${this.name}`);
}

console.log(people1);
people1.myName();
