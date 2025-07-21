console.log("=== Factory Function ===");
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
        }
    };
}

const person1 = createPerson("Alice", 25);
person1.greet();


console.log("\n=== Constructor Function + new ===");
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
};

const person2 = new Person("Bob", 30);
person2.greet();


console.log("\n=== Class Syntax ===");
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
    }
}

const person3 = new PersonClass("Charlie", 35);
person3.greet();


console.log("\n=== Inheritance - Constructor Function ===");
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
    Animal.call(this, name); // call parent constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log(`${this.name} barks!`);
};

const dog1 = new Dog("Rex", "Labrador");
dog1.speak();
dog1.bark();


console.log("\n=== Inheritance - Class + extends ===");
class AnimalClass {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class DogClass extends AnimalClass {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

const dog2 = new DogClass("Buddy", "Beagle");
dog2.speak();
dog2.bark();
