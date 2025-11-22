const numbers = [1, 2, 3, 4];

// Using a traditional function with map
const doubledNumbersTraditional = numbers.map(function(number) {
  return number * 2;
});

// Using an arrow function with map (implicit return)
const doubledNumbersArrow = numbers.map(number => number * 2);

console.log(doubledNumbersTraditional); // Output: [2, 4, 6, 8]
console.log(doubledNumbersArrow);    // Output: [2, 4, 6, 8]



// function declaration 
function add (first ,second){
    const total = first + second ;
    return total;
}
// function expresssion  
const add2 = function (first ,second){
    const total = first+second ;
    return total;
}
// arrow function 
const add3 = (first, second) => first+second;

const result =  add3 (10, 20);
console.log(result);



