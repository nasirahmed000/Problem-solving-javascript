const nasir = [ 1.2 ,3.5 ,5,5,5,5,6,8,4,6,4,74,54,64,64,64];

console.log(Array.isArray(nasir));


typeof operand
console.log(typeof 42); // "number"
console.log(typeof "Hello, world!"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (Note: this is a known bug in JavaScript)
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof { name: "John", age: 30 }); // "object"
console.log(typeof function () {}); // "function"


// concat 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);

console.log(combined); // [1, 2, 3, 4, 5, 6]
