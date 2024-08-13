 // Finding Common Elements in Two Arrays

function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2));


 // Output: [4, 5]
