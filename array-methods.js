// Sample array
const numbers = [1, 2, 3, 4, 5];

// reduce: Sum of all elements
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// filter: Filter even numbers
const evens = numbers.filter(number => number % 2 === 0);
console.log(evens); // Output: [2, 4]

// find: Find the first even number
const firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven); // Output: 2

// map: Square each number
const squares = numbers.map(number => number * number);
console.log(squares); // Output: [1, 4, 9, 16, 25]
