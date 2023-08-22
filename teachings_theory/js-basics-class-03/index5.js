// date


console.log(Date());
// Output:
// Tue Aug 22 2023 17:28:04 GMT+0530 (India Standard Time)


let date2 = new Date('June 20 1998 07:15');
console.log(date2);
// Output:
// 1998-06-20T01:45:00.000Z



// ---------------------------------------------

const date3 = new Date(1998, 6, 20, 7);
console.log(date3);

// Output:
// 1998-07-20T01:30:00.000Z


// // ---------------------------------------------


date3.setFullYear(1947);
console.log(date3);

console.log(date3.getFullYear());

// Output:
// 1947-07-20T01:30:00.000Z
// 1947


// ---------------------------------------------



