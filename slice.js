const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]


console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]


console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]


console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]


console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]





const friends = [24,15,45,87,98,36,12,25,87,55,36];
const result = friends.slice(2,5);
console.log(result);


const friendss = [24,15,45,87,98,36,12,25,87,55,36];
const results = friends.splice(2,5);
console.log(results);


const friends = [24,15,45,87,98,36,12,25,87,55,36];
const result = friends.slice(2,5);
console.log(result);


const friendss = [24,15,45,87,98,36,12,25,87,55,36];
const results = friends.splice(2,5);
console.log(results);


