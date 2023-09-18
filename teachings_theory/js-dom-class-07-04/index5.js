// // paralally running two statements 
// // (before using await)



// async function utility(){
//     let delhiAtmosp = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hot temp - sunny day");
//         }, 10000);
//     });


//     let hydAtmosp = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("cold temp - coudy day");
//         }, 2000);
//     });

//     let dM = delhiAtmosp;
//     let hM = hydAtmosp;

//     return [dM, hM];
// }

// // console.log(utility());


// // browser Output:
// // utility()
// // Promise {<fulfilled>: Array(2)}
// // [[Prototype]]
// // : 
// // Promise
// // [[PromiseState]]
// // : 
// // "fulfilled"
// // [[PromiseResult]]
// // : 
// // Array(2)
// // 0
// // : 
// // Promise
// // [[Prototype]]
// // : 
// // Promise
// // [[PromiseState]]
// // : 
// // "fulfilled"
// // [[PromiseResult]]
// // : 
// // "Hot temp - sunny day"
// // 1
// // : 
// // Promise
// // [[Prototype]]
// // : 
// // Promise
// // [[PromiseState]]
// // : 
// // "fulfilled"
// // [[PromiseResult]]
// // : 
// // "cold temp - coudy day"


// // ------------------------------------------------------





// paralally running two statements 
// (after using await)



async function utility(){
    let delhiAtmosp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hot temp - sunny day");
        }, 10000);
    });


    let hydAtmosp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cold temp - coudy day");
        }, 2000);
    });

    let dM = await delhiAtmosp;
    let hM = await hydAtmosp;

    return [dM, hM];
}
