const names = ['Baul','kaul','caul','daul','maul', 'Baul ', 'caul']

function removeDuplicate(names){
    const unique = [];
    for(let i = 0 ; i< names.length ;i++){
        const name= names[i];
        if( unique.includes (name)===false){
            unique.push(name);
        }
        
   
}
return unique;
}
const uniqueNames= removeDuplicate(names);
console.log(uniqueNames);





let arr = [1, 2, 3, 2, 4, 3];

let uniqueArr = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

console.log(uniqueArr); 
// Output: [1, 2, 3, 4]
