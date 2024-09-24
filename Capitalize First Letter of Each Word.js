// Description: Write a function that takes a string and returns a new string with the first letter of each word capitalized.

sln : 


function capitalizeWords(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase()+
    word.slice(1)).join(' ');
}

console.log(capitalizeWords('my name is nasir ahmed'));

// output : My Name Is Nasir Ahmed
// Explanation:
// str.split(' '): Splits the input string into an array of words.
// map(): Iterates over each word in the array.
// word.charAt(0).toUpperCase(): Capitalizes the first letter of the word.
// word.slice(1): Adds the rest of the word starting from the second character.
// join(' '): Joins the array of words back into a single string.
// This method will work for any string with words separated by spaces.
