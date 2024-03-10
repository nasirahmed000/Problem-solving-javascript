const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]




const add = (first , second ) => first + second ;
const getFullName = (first , second) => first + "" + second;
const multiply = (a,b) => a*b;

const result = multiply (5 ,8);
console.log(result);

// multiple parameter
const multiple = (a,b , c,d, e, f) => a+b+c+d+e+f ;
// no parameter 
const onePie = () => 3.14;
// single parametter 
const number = (num) => num * 6 ;

// single parameter with no bracket 
const number2 = num => num * 8 ; 
