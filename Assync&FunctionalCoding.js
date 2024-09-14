// Asynchronous Coding in JavaScript
// Asynchronous coding allows you to perform tasks without blocking the main thread. This is especially useful for operations that take time, such as network requests or file I/O. JavaScript uses several mechanisms to handle asynchronous operations:

// 1. Callbacks
// A function is passed as an argument to another function and is executed after the asynchronous operation completes.

function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log(data); // Output: Some data
});


// 2. Promises
// A Promise represents an operation that hasn't completed yet but is expected to in the future.


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received");
    }, 2000);
});

promise.then((message) => {
    console.log(message); // Output: Data received


// Asynchronous coding is a fundamental concept in JavaScript that allows tasks to be executed without blocking the main thread of execution. This enables JavaScript programs to handle time-consuming operations like network requests, file I/O, and complex calculations without freezing the user interface.

// Key Concepts:

// Callbacks: Functions that are passed as arguments to other functions and are executed after the asynchronous operation completes.
// Promises: Objects that represent the eventual completion (or failure) of an asynchronous operation and provide methods for handling the result or error.
// async/await: A syntax sugar for working with Promises, making asynchronous code look more synchronous.
// Why Asynchronous Coding Matters:

// Non-Blocking UI: Prevents the user interface from becoming unresponsive while waiting for time-consuming operations to finish.
// Improved Performance: Allows multiple tasks to be executed concurrently, making the program more efficient.
// Better User Experience: Ensures a smooth and responsive user experience.













    
});
