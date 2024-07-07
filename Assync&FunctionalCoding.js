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
});
