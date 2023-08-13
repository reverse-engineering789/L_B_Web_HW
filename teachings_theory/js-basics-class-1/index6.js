// primitives and datatypes

// primitives are copied by their value 
// refereces are copied by their address/references





let a = {value:5};

let b = a;

 a.value++;

 console.log(a);
 console.log(b);
 console.log(a.value);
 console.log(b.value);

// Output:
// { value: 6 }
// { value: 6 }
// 6
// 6