// Closures:
// A closure is formed when a function is defined within another function, allowing the inner function to access the outer function's variables and parameters, even after the outer function has finished execution. This concept enables powerful and flexible programming patterns in JavaScript.

function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs: I am from the outer function




// 20. Explain Closures in JavaScript.
// Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

var Person = function(pName){
  var name = pName;

  this.getName = function(){
    return name;
  }
}

var person = new Person("Neelesh");
console.log(person.getName());
// Let’s understand closures by example:

function randomFunc(){
  var obj1 = {name:"Vivian", age:45};

  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure(); 
// Let’s understand the code above,

// The function randomFunc() gets executed and returns a function when we assign it to a variable:

var initialiseClosure = randomFunc();
// The returned function is then executed when we invoke initialiseClosure:

initialiseClosure(); 
// The line of code above outputs “Vivian is awesome” and this is possible because of closure.

console.log(obj1.name + " is "+ "awesome");
// When the function randomFunc() runs, it seems that the returning function is using the variable obj1 inside it:

// Therefore randomFunc(), instead of destroying the value of obj1 after execution, saves the value in the memory for further reference. This is the reason why the returning function is able to use the variable declared in the outer scope even after the function is already executed.

// This ability of a function to store a variable for further reference even after it is executed is called Closure.





function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
