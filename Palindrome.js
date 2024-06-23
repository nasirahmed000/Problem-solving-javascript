// Problem:
// Write a function to check if a given string is a palindrome.

// Solution:


function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// . FizzBuzz
// Problem:
// Write a function that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();
