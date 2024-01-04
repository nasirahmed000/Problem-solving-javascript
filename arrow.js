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


