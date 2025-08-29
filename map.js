const fiveTimes = [1,2,3,4,5,6,7,8,9].map(x=> x*10);
console.log(fiveTimes);

//sum of array

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

const myArray = [1, 2, 3, 4, 5];
const total = sumArray(myArray);
console.log(total); // Output: 15




