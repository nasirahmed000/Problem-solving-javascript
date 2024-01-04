const max = Math.max (10,20,30,40,50,60,70,800);
// console.log(max);

// const numbers = [10 ,20,30,40,50,60,70,200]
// const largest = Math.max(numbers);
// console.log(largest);

const numbers = [10 ,20,30,40,50,60,70,200]
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(21);
numbers2.push(221);
console.log(numbers);
console.log(numbers2);
