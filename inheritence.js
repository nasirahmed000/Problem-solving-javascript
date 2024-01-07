// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Animal.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
  
  // Child constructor function inheriting from Animal
  function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
  }
  
  // Set up prototype chain
  Dog.prototype = Object.create(Animal.prototype);
  
  // Adding a method specific to Dog
  Dog.prototype.bark = function() {
    console.log('Woof! Woof!');
  };
  
  // Create instances
  const myAnimal = new Animal('Generic Animal');
  const myDog = new Dog('Buddy', 'Labrador');
  
  myAnimal.sayHello(); // Output: Hello, I'm Generic Animal
  myDog.sayHello();    // Output: Hello, I'm Buddy
  myDog.bark();        // Output: Woof! Woof!
  

  