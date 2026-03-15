1. Reverse a String

Concept: String manipulation

function reverseString(str){
  return str.split('').reverse().join('');
}
2. Check Palindrome
function isPalindrome(str){
  return str === str.split('').reverse().join('');
}

Example
madam → true

3. Factorial (Loop)
function factorial(n){
  let result = 1;

  for(let i=1;i<=n;i++){
    result *= i;
  }

  return result;
}
4. Factorial (Recursion)
function factorial(n){
  if(n === 1) return 1;
  return n * factorial(n-1);
}
5. Find Largest Number in Array
function largest(arr){
  return Math.max(...arr);
}
6. Find Smallest Number
function smallest(arr){
  return Math.min(...arr);
}
7. Remove Duplicates
function removeDuplicate(arr){
  return [...new Set(arr)];
}
8. Count Character Frequency
function charCount(str){
  let obj = {};

  for(let char of str){
    obj[char] = (obj[char] || 0) + 1;
  }

  return obj;
}
9. Find Missing Number

Example

[1,2,3,5] → 4
function missingNumber(arr){
  let n = arr.length + 1;
  let total = n*(n+1)/2;
  let sum = arr.reduce((a,b)=>a+b,0);

  return total - sum;
}
10. Sum of Array
function sum(arr){
  return arr.reduce((a,b)=>a+b,0);
}
11. Find Even Numbers
function evenNumbers(arr){
  return arr.filter(num => num % 2 === 0);
}
12. Find Odd Numbers
function oddNumbers(arr){
  return arr.filter(num => num % 2 !== 0);
}
13. FizzBuzz (Classic Interview Problem)
for(let i=1;i<=20;i++){

  if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
  }
  else if(i%3===0){
    console.log("Fizz");
  }
  else if(i%5===0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }

}
14. Reverse Array
function reverseArray(arr){
  return arr.reverse();
}
15. Flatten Nested Array
function flatten(arr){
  return arr.flat(Infinity);
}

Example

[1,[2,[3,4]]] → [1,2,3,4]
16. Capitalize First Letter
function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
17. Check Anagram

Example

listen
silent
function isAnagram(a,b){
  return a.split('').sort().join('') ===
         b.split('').sort().join('');
}
18. Find Second Largest Number
function secondLargest(arr){

  let unique = [...new Set(arr)].sort((a,b)=>b-a);

  return unique[1];
}
19. Chunk Array

Example

[1,2,3,4,5,6] size=2

[[1,2],[3,4],[5,6]]
function chunk(arr,size){

  let result = [];

  for(let i=0;i<arr.length;i+=size){
    result.push(arr.slice(i,i+size));
  }

  return result;
}
20. Debounce Function (Very important for React)
function debounce(func,delay){

  let timer;

  return function(){
    clearTimeout(timer);

    timer = setTimeout(()=>{
      func();
    },delay);
  }

}
21. Throttle Function
function throttle(func,delay){

  let lastCall = 0;

  return function(){

    let now = Date.now();

    if(now - lastCall >= delay){
      func();
      lastCall = now;
    }

  }
}
22. Deep Copy Object
let copy = JSON.parse(JSON.stringify(obj));

Better modern way:

structuredClone(obj)
23. Implement Map Function
Array.prototype.myMap = function(cb){

  let result = [];

  for(let i=0;i<this.length;i++){
    result.push(cb(this[i],i,this));
  }

  return result;
}
24. Promise Example
let promise = new Promise((resolve,reject)=>{

  let success = true;

  if(success){
    resolve("Success");
  }
  else{
    reject("Failed");
  }

});
25. Async Await Example
async function getData(){

  let res = await fetch("https://api.example.com/data");
  let data = await res.json();

  console.log(data);

}
⭐ SUPER IMPORTANT JS INTERVIEW TOPICS

If you want to pass interviews, you must understand these deeply:

Closures

Hoisting

Event Loop

Callbacks

Promises

Async / Await

this keyword

Prototype

Debounce & Throttle

Array Methods (map, filter, reduce)
