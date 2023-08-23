// // Joingiung an array:

// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// // Output:
// // 10,20,30,40,50

// // ------------------------------------------------



const message = 'This is my first message';
const parts = message.split(' ');

console.log(parts);

// Output:
// [ 'This', 'is', 'my', 'first', 'message' ]



// ------------------------------------------------




let joined = parts.join('_');
console.log(joined);

// Output:
// This_is_my_first_message



// ------------------------------------------------------



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





