const numbers = [1,2,3,4,5,6];

console.log(numbers);

// Output:
// [ 1, 2, 3, 4, 5, 6 ]

// ------------------------------------------


numbers.push(10);
console.log(numbers);

// Output:
// [
//     1, 2,  3, 4,
//     5, 6, 10
//   ]


// // -----------------------------------------------


numbers.unshift(8);
console.log(numbers);
// Output:
// [
// 8, 1, 2,  3,
// 4, 5, 6, 10
// ]


// -------------------------



numbers.shift(8);
console.log(numbers);
// Output:
// [
//     1, 2,  3, 4,
//     5, 6, 10
//   ]


// --------------------------------------------



console.log(numbers.indexOf(5));

// Output:
// 4



// // if we want to check number present in an array:

if(numbers.indexOf(4) !== -1){
    console.log("present");
}

// Output:
// present
// // --------------------------------------------


console.log(numbers.includes(7));
// Output
// false

console.log(numbers.indexOf(4, 2));
// Output
// 3


// // --------------------------------------------



// const courses = [
//     {no:1, naam:'Ratan'},
//     {no:2, naam:'Rahul'}
// ];

// console.log(courses);

// // Output:
// // [ { no: 1, naam: 'Ratan' }, { no: 2, naam: 'Rahul' } ]

// let course = courses.find(function(course){
//     return course.naam === 'Ratan';
// })


// console.log(course);

// // Output:
// // { no: 1, naam: 'Ratan' }



// // ---------------------------------------------------------




const courses = [
    {no:1, naam:'Ratan'},
    {no:2, naam:'Rahul'}
];

console.log(courses);


let course = courses.find(function(course){
    return course.naam === "Rahul";
})

console.log(course);

// Output:
// { no: 2, naam: 'Rahul' }




// ---------------------------------------------------------




