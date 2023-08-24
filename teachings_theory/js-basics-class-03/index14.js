
// SORTING 


const array2 = [1,3,2,5,4];
array2.sort();
console.log(array2);

// Output:
// [ 1, 2, 3, 4, 5 ]





const array3 = [2, 6, 4, 8, 12, 18, 10];
array2.sort((a, b) => a - b); // Provide a comparison function
console.log(array3);
// In this comparison function, a - b provides a 
// numeric comparison between a and b, sorting them in ascending order. 
// The result will be [2, 4, 6, 8, 10, 12, 18], 
// which is the sorted form of the array.

// Output:
// [
//     2,  6,  4, 8,
//    12, 18, 10
//  ]




// ----------------------------------------------------------



const array4 = [1,3,2,5,4];
array4.sort();
console.log(array4);

array4.reverse();
console.log(array4);

// Output:
// [ 1, 2, 3, 4, 5 ]
// [ 5, 4, 3, 2, 1 ]


//---------------------------------------------------


