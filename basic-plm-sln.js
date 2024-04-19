//1. Sum of Two Numbers:
// Write a function that takes two numbers as parameters and returns their sum.

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10)); // Output: 15

// 2. Find the Maximum Number:
// Write a function that takes an array of numbers and returns the maximum number.

function findMax(numbers) {
    return Math.max(...numbers);
}

console.log(findMax([10, 5, 20, 15])); // Output: 20

// 3.Reverse a String:
// Write a function that takes a string as input and returns the reversed string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"


// 4. Check if a Number is Even or Odd:
// Write a function that takes a number as input and returns "Even" if the number is even and "Odd" if it's odd.


function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(5)); // Output: "Odd"


//5. Factorial of a Number:
// Write a function that calculates the factorial of a given number.


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // Output: 120

//6. Check for Prime Number:
// Write a function that checks if a number is prime.


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); // Output: true

6. Array


// //regards 
// Nasir Ahmed
