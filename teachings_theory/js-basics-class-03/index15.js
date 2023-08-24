// filtering

let numbers = [2,4,8,-6];


let filtered = numbers.filter(function(value){
     return value >= 0;
})


console.log(filtered);

// Output:
// [ 2, 4, 8 ]




// ------------------------------------------------------


// arrow functions

let numbers2 = [2, 4, 8, -6];

let filtered2 = numbers.filter(value => value >= 0);

console.log(filtered2);


// Output:
// [ 2, 4, 8 ]



// ------------------------------------------------------




