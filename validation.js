function calculateArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Both width and height must be numbers.');
    }
  
    return width * height;
  }
  

  let area = calculateArea(10, '5');
  
  console.log(area); // This line will not be executed because an error is thrown


function calculateArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Both width and height must be numbers.');
    }
  
    return width * height;
  }
  

  let area = calculateArea(10, '5');
  
  console.log(area); // This line will not be executed because an error is thrown
  
