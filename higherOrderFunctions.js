let numbers = [1, 2, 3, 4, 5];

// map
let squares = numbers.map((num) => num * num);
console.log(squares);

// filter
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
