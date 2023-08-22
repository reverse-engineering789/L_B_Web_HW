// keys - for in

        // for of

let rectangle = {
    length:2,
    breadth: 4
};


for (let key in rectangle){
    console.log(key,rectangle[key]);
}

// Output:
// length 2
// breadth 4]


// -------------------------------------------------------------



// for of loop(only used for iterable values like arrays)
            
// for(let key of rectangle){
//     console.log(key);
// }
// // Output:
// // TypeError: rectangle is not iterable



console.log("--------------------------")



for (let key of Object.keys(rectangle)){
    console.log(key);
}

// Output:
// length
// breadth

console.log("--------------------------")




for (let key of Object.entries(rectangle)){
    console.log(key);
}

// Output:
// [ 'length', 2 ]
// [ 'breadth', 4 ]