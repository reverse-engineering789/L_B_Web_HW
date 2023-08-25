// function sum(a, b){
//     console.log(arguments);
//     return a+b;
// }

// let ans = sum(1,2,3,4,5,6);

// // Output:
// // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }


// // --------------------------------------------------






function sum(a, b){
    let total = 0;
    for(let value of arguments){
        total = total + value;
        }
    return total;
    }


let ans = sum(1,2,3,4,5,6);
console.log(ans);

// Output:
// 21


// //--------------------------------------------------------



