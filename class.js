// ES6 Class syntax
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  // Inheriting from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent constructor
      this.breed = breed;
    }
  
    bark() {
      console.log('Woof! Woof!');
    }
  }
  
  // Create instances
  const myAnimal = new Animal('Generic Animal');
  const myDog = new Dog('Buddy', 'Labrador');
  
  myAnimal.sayHello(); // Output: Hello, I'm Generic Animal
  myDog.sayHello();    // Output: Hello, I'm Buddy
  myDog.bark();        // Output: Woof! Woof!
  