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





function calculateDiscountPrice(quantity, price) {
    let discountPrice = 0;
    
    if (quantity >= 10) {
      discountPrice = price * 0.8; // 20% discount for 10 or more items
    } else if (quantity >= 5) {
      discountPrice = price * 0.9; // 10% discount for 5 or more items
    } else {
      discountPrice = price; // no discount
    }
  
    return discountPrice;
  }
  
  let price = 10; // price per item
  let quantity = 12; // number of items purchased
  let discountPrice = calculateDiscountPrice(quantity, price);
  
  console.log(discountPrice); // Output: 8 (20% discount applied)
  
