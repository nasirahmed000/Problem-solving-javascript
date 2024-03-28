
// Variables Hoisting
console.log(myVar); // undefined, due to hoisting
var myVar = 5;


##
// Functions Hoisting
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 5;

// function expressions
hello(); // "Hello, world!"

function hello() {
    console.log("Hello, world!");
}


hello(); // TypeError: hello is not a function

var hello = function() {
    console.log("Hello, world!");
};









