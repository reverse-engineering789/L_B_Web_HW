// Default parameters

// const interest = (p,r,y) => {
//        console.log(p*r*y);
// }

// interest(2,4,6);

// // Output:
// // 48

// // --------------------------------------



// function interest(p,r,y){
//     return (p * r * y);
// }

// console.log(interest(2,4,6));

// // Output:
// // 48

// // --------------------------------------




// // default parameters example:


// function interest(p,y,r=6){
//     return (p * r * y);
// }

// console.log(interest(2,4));


// // Output:
// // 48


// // ---------------------------------------


// bad practice, but a good hack


function interest(p,y=4,r=8){
    return (p * r * y);
}

console.log(interest(2,undefined,6));

// Output:
// 48