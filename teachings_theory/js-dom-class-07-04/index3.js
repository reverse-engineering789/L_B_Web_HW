



// let myPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside 1st promise');
//     }, 5000);
//     resolve(1234567890)
// });

// myPromise1.then((value) => {console.log(value)});

// console.log('first');


// // Output:
// // first
// // 1234567890
// // I am inside 1st promise


// // ------------------------------------------------





// let myPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside 1st promise');
//     }, 5000);
//     // resolve(1234567890)
//     reject(new Error('There is an errror'))
// });

// // myPromise2.then((value) => {console.log(value)});
// myPromise2.catch((error) => {console.log("Recived an Error")});

// // console.log('first');


// // Output:
// // Recived an Error
// // I am inside 1st promise




// // -------------------------------------------------






  

// let myPromise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside 1st promise');
//     }, 5000);
//     // resolve(1234567890)
//     reject(new Error('There is an errror'))
// });

// // myPromise2.then((value) => {console.log(value)});
// myPromise3.then((value) => {console.log(value)}, (error) => {console.log("Recived an Error")});

// // console.log('first');


// // Output:
// // Recived an Error
// // I am inside 1st promise




// // -------------------------------------------------



let promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('setTimeOut started');
    }, 2000);
    resolve(true);
})


let output = promise1.then(() => {
    let promise2 = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('setTimeOut 2 started');
        }, 3000);
        resolve("Promise 2 resolved");
    })
    return promise2
})

output.then((value) => console.log(value));


// Output:
// Promise 2 resolved
// setTimeOut started
// setTimeOut 2 started