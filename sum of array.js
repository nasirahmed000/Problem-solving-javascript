// create an array
let myNums = [1, 2, 3, 4, 5];

// create a variable for the sum and initialize it
let sum = 0;

// iterate over each item in the array
for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum) // 15

Calculate the sum of numbers within an array

function calculateSum(numbers) {
    // Check if the input is an array
    if (!Array.isArray(numbers)) {
        console.error('Input is not an array.');
        return null;
    }

    // Use the reduce function to calculate the sum
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
const sumOfNumbers = calculateSum(numbersArray);

if (sumOfNumbers !== null) {
    console.log(`The sum of numbers in the array is: ${sumOfNumbers}`);
}
