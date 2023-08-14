createFunction();
function createFunction(){
    console.log("Hello world test");
}
createFunction();

// Output:
// Hello world test
// Hello world test


// ----------------------------------------


// named function assignment

let stand = function walk(){
    console.log('walking');
}

stand();

// Output:
// walking

// ----------------------------------------


let stand2 = function walk(){
    console.log('walk');
}

stand2();

let jump = stand2;

jump();

// Output:
// walk
// walk


// ----------------------------------------



// annonymus function assignment


let stand3 = function(){
    console.log('walk walk');
}

stand3();

let jump1 = stand3;

jump1();

// Output:
// walk walk
// walk walk


// ----------------------------------------



