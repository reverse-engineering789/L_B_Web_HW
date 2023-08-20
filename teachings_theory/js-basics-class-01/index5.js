// pre/post, increment/decrement operators

let a = 5;
let b = 10;


let ans1 = (++a) * (--b);
console.log(ans1);

let ans2 = (a++) * (--b);
console.log(ans2);

let ans3 = (a++) * (b--);
console.log(ans3);

let ans4 = (++a) * (b--);
console.log(ans4);

// Output:
// 54
// 48
// 56
// 63