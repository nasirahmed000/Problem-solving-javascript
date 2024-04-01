// Suppose you have an array of user objects where each object contains the user's name and age. Your task is to write a JavaScript function that filters out users who are under 18 years old and prints the names of these users in the console.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 30 },
  { name: "Eve", age: 22 }
];

// Sln: Objective:
// Write a function that takes an array of user objects and prints the names of users who are 18 years old or older.

---->>

function filterAdultUsers(users) {
  // Filter users who are 18 or older
  const adults = users.filter(user => user.age >= 18);

  // Print the names of these users
  adults.forEach(user => console.log(user.name));
}

// Call the function with the sample data
filterAdultUsers(users);



// Array.prototype.filter(): This method creates a new array with all elements that pass the test implemented by the provided function. In this case, it tests whether a user's age is greater than or equal to 18.

// Array.prototype.forEach(): This method executes a provided function once for each array element. Here, it's used to print the name of each user in the filtered array.








