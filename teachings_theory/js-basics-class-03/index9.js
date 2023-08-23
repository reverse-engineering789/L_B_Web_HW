// // Empty array 
// let numbers = [1,2,3,4,5];


// numbers = [];

// console.log(numbers);
// // Output:
// // []


// // ----------------------------------------------




// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];

// console.log(numbers);
// console.log(numbers2);

// // Output:
// // []
// // [ 1, 2, 3, 4, 5 ]



// // ------------------------------------------------


// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// // numbers = [];
// numbers.length = 0;

// console.log(numbers);
// console.log(numbers2);


// // Output:
// // []
// // []




// // ------------------------------------------------



let numbers = [1,2,3,4,5];
let numbers2 = numbers;

// numbers = [];
// numbers.length = 0;
numbers.splice(0, numbers.length);

console.log(numbers);
console.log(numbers2);


// Output:
// []
// []




// // ------------------------------------------------




