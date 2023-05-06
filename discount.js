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
  