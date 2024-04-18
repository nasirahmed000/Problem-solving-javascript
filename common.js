

function reverseString(str) {
    // Convert the string to an array of characters
    let chars = str.split('');
    
    // Reverse the array of characters
    let reversedChars = chars.reverse();
    
    // Join the characters back into a string
    let reversedStr = reversedChars.join('');
    
    return reversedStr;
}

// Test the function
console.log(reverseString("hello")); // Output: "olleh"
