// Iterating an Array:


let array = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i <= array.length-1; i++){
    console.log(array[i]);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10



// -----------------------------------------------




for (let value of array){
    console.log(value);
}


// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10




// // --------------------------------------------

console.log('froeach');


array.forEach(function(anything){
    console.log(anything);
})

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// //--------------------------------------------

console.log('ES 2015');
array.forEach(anything => console.log(anything));

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
