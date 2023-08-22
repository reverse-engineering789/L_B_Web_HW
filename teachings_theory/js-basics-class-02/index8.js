// // object cloning  

// // object cloning  #1
// let src = {
//     a: 10,
//     b: 20,
//     c: 30 
// };

// let dest = {};

// for (let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);


// // Output:
// // { a: 10, b: 20, c: 30 }
// // { a: 10, b: 20, c: 30 }



// // ---------------------------------

// // object cloning  #2



// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// let dest = Object.assign({}, src);

// console.log(dest);

// src.a++;

// console.log(dest);

// // Output:
// // { a: 10, b: 20, c: 30 }
// // { a: 10, b: 20, c: 30 }



// // ---------------------------------


// // adding another sorce 


// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// let src2 = {value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

// // Output:
// // { a: 10, b: 20, c: 30, value: 25 }
// // { a: 10, b: 20, c: 30, value: 25 }


// // -----------------------------------------



// // object cloning  #3


let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = {...src};

console.log(dest);

src.a++;

console.log(dest);

// Output:
// { a: 10, b: 20, c: 30 }
// { a: 10, b: 20, c: 30 }