let phones = [
    { name: 'iPhone X', price: 999 },
    { name: 'Samsung Galaxy S21', price: 799 },
    { name: 'Google Pixel 4a', price: 349 },
    { name: 'OnePlus 9 Pro', price: 1069 }
  ];
  
  let cheapestPhone = phones.reduce((prev, current) => {
    return prev.price < current.price ? prev : current;
  });
  
  console.log(cheapestPhone); 
  // Output: { name: 'Google Pixel 4a', price: 349 }
  