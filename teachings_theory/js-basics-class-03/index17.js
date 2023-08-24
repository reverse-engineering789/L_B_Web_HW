// mapping with objects:


let numbers = [1,2,-6,-9];
let filtered = numbers.filter(value => value >= 0);

let items = filtered.map(function(num) {
    return { value: num };
});


console.log(items);

// Output:
// [ { value: 1 }, { value: 2 } ]



// -------------------------------------------------

let numbers2 = [1,2,-6,-9];
let filtered2 = numbers2.filter(value => value >= 0);

// let items2 = filtered2.map(num =>  { value: num });
let items2 = filtered2.map(num => ({ value: num }));
console.log(items2);

// Output:
// [ { value: 1 }, { value: 2 } ]

// --------------------------------------------------------




// writing the same thing in the chain form:


let number5 = [2,4,6,8];

let items5 = numbers
            .filter(value => value >= 0)
            .map(num => ({value: num}));
console.log(items5);

// Output:
// [ { value: 1 }, { value: 2 } ]
