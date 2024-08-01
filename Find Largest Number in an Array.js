// Problem: Given an array of numbers, find the largest number in the array.



const numbers = [3, 7, 2, 9, 5];

function findLargestNumber(numbers) {
  let largest = numbers[0]; // Assume the first element is the largest initially

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}


// output: 9
