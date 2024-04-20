 // arrow functions, destructuring, and the spread operator.


// Initial array of users
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
];

// New data to be merged based on user ID
const updates = [
    { id: 1, newEmail: "newalice@example.com", isSubscribed: true },
    { id: 2, newEmail: "newbob@example.com", isSubscribed: false }
];

// Function to merge user data
const mergeUserData = (users, updates) => {
    return users.map(user => {
        // Find updates for this user
        const update = updates.find(update => update.id === user.id);
        
        // Destructure the new fields from the update object
        const { newEmail, isSubscribed } = update;
        
        // Return a new object with merged data using spread operator
        return {
            ...user,
            email: newEmail,  // This overrides the original email
            isSubscribed
        };
    });
};

// Using the function to merge data
const updatedUsers = mergeUserData(users, updates);
console.log(updatedUsers);


// Breakdown of the JavaScript Concepts:

// Arrow Functions: Used for concise function expressions in .map() and .find(), making the code cleaner and easier to read.
// Destructuring: This allows for directly extracting newEmail and isSubscribed from the update object, which simplifies access to these properties.
// Spread Operator: Used in the return statement within .map() to create a new user object that incorporates properties from both the original user object and the updates. This is a clear way to handle immutable data updates.











