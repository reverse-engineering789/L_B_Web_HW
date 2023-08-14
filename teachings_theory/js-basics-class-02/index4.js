// // Dynamic Nature of objects

// function hello2(fname, lname){
//     this.firstname = fname;
//     this.lastname = lname;

//     this.draw = function(){
//         console.log("Hello world");
//     }
// }

// let hi = new hello2(44, 66);
// // adding new property color:
// hi.color = "yellow";
// console.log(hi);

// // Output:
// // hello2 {
// //     firstname: 44,
// //     lastname: 66,
// //     draw: [Function (anonymous)],
// //     color: 'yellow'
// //   }


// //---------------------------------------------


// Dynamic Nature of objects

function hello2(fname, lname){
    this.firstname = fname;
    this.lastname = lname;

    this.draw = function(){
        console.log("Hello world");
    }
}

let hi = new hello2(44, 66);
// adding new property color:
hi.color = "yellow";
console.log(hi);


// delete the property color:
delete hi.color;
console.log(hi);

// hello2 {
//     firstname: 44,
//     lastname: 66,
//     draw: [Function (anonymous)],
//     color: 'yellow'
//   }
//    hello2 { firstname: 44, lastname: 66, draw: [Function (anonymous)] }