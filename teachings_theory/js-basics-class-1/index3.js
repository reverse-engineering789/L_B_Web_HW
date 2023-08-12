// constructor function 
// static 
function hello(){
    this.length = 1;
    this.breadth = 2;   

    this.draw = function(){
        console.log('drawing');
    }
}

let rectangle = new hello();
console.log(rectangle);



// DYNAMIC 

function hello2(fname, lname){
    this.firstname = fname;
    this.lastname = lname;

    this.draw = function(){
        console.log("Hello world");
    }
}

let hi = new hello2(44, 66);
console.log(hi);

// Output:
// hello2 { firstname: 44, lastname: 66, draw: [Function (anonymous)] }