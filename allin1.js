// 1. Variables (let, const, var)
  
let name = "Nasir";   // block-scoped, can be reassigned
const pi = 3.1416;    // block-scoped, cannot be reassigned
var age = 25;         // function-scoped (old way)

console.log(name, pi, age);

// 2. Data Types & Type Conversion

let num = 42; 
let str = "42";

console.log(typeof num);   // number
console.log(typeof str);   // string
console.log(Number(str));  // 42 (string → number)

// 3. Functions


// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Nasir"));

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 7));

// 4. Objects & Arrays


let user = { name: "Nasir", age: 25 };
console.log(user.name); // Dot notation
console.log(user["age"]); // Bracket notation

let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);

// 5. Destructuring



const person = { name: "Nasir", job: "Developer" };
const { name, job } = person;
console.log(name, job);

const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b);

// 6. Spread & Rest Operator

// Spread (...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1,2,3,4,5]

// Rest (...)
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 7. Callbacks & Higher-Order Functions


function processUserInput(callback) {
  let name = "Nasir";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hello " + name);
});

// Example: map, filter, reduce
let nums = [1, 2, 3, 4, 5];
let squares = nums.map(n => n * n);
console.log(squares);

// 8. Promises & Async/Await


// Promise
let fetchData = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Data loaded!");
  else reject("Error loading data");
});

fetchData
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function getData() {
  try {
    let data = await fetchData;
    console.log("Async:", data);
  } catch (err) {
    console.error(err);
  }
}
getData();

// 9. Closures


function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

// 10. Classes & Inheritance


class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Developer extends Person {
  constructor(name, skill) {
    super(name);
    this.skill = skill;
  }
  showSkill() {
    console.log(`${this.name} codes in ${this.skill}`);
  }
}

let dev = new Developer("Nasir", "JavaScript");
dev.greet();
dev.showSkill();

// 11. Event Loop & setTimeout


console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");

// Output: Start → End → Inside setTimeout


⚡ These are the core JavaScript concepts  must know for interviews, projects, and real-world applications.
