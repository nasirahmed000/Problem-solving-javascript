// Description: Write a function that takes a string and returns a new string with the first letter of each word capitalized.

sln : 


function capitalizeWords(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase()+
    word.slice(1)).join(' ');
}

console.log(capitalizeWords('my name is nasir ahmed'));

// output : My Name Is Nasir Ahmed
