// Object destructuring  

const fish = {
    name : 'king Hilsha',
    price : 1500,
    phone : '01721474587',
    color : 'silver',
    address : 'Chandpur'

}

const {phone } = {phone : '01747484787', price : 1000, color : 'silver '}

console.log(fish.price);
 
// object destructuring 
const {age ,profession  } = {name : 'almas' , age : 54 , profession : 'makeup artist'}

console.log(age );

// Array destructuring 

const [ first , another ] = [10, 20 , 30 , 40 , 50 ];
console.log(first , another );


const nayoks = [ 'manna', 'sakib' , 'Aamir khan'];
const [king , lost , boss] = nayoks ;
console.log(boss);


