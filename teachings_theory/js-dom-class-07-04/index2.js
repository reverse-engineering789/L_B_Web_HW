// // Promises


// let myPromise = new Promise(function(resolve, reject){
//     console.log('I am inside promise');
//     resolve(1998);
// });

// console.log('first');


// // Output:
// // I am inside promise
// // first


// // ------------------------------------------------



// let myPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     }, 5000);
//     resolve(2233);
// });

// console.log('first');

// // Output:
// // first
// // I am inside promise


// console.log(myPromise2);
// // Output:
// // Promise { 2233 }

// // ------------------------------------------------



// // ERROR

// let myPromise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     }, 5000);
//       reject(new Error('There is an error'));
// });

// console.log('first');

// // Output:
// // first
// // I am inside promise


// console.log(myPromise3);
// // Output:
// // first
// // Promise {
// //   <rejected> Error: There is an error ....





// // ----------------------------------------------


let myPromise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('I am inside 1nd promise');
    }, 5000);
});


let myPromise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('I am inside 2st promise');
    }, 3000);
});

console.log('first');


// Output:
// first
// I am inside 2st promise
// I am inside 1nd promise


// ---------------------------------------------




