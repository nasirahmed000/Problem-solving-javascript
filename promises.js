// Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a more structured way to handle asynchronous code compared to callbacks, allowing chaining and better error handling.
// **************


// Example of a promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
};

fetchData().then(data => {
    console.log(data); // Output: Data fetched
});
