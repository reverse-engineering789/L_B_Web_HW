//  factory function and objects and static values for functions


// let rectangle = { 
//         length: 1,
//         breadth:2,

//         draw(){
//             console.log("my name");
//         }
//    }

//    console.log(rectangle.draw());


// ---------------------------------------------------------


function createRectangle(){
    
    return rectangle = {
        length:1,
        length:2,

        draw(){
            console.log("Hello world");
        }
    };
}

let rectangleObj1 = createRectangle();
console.log(rectangleObj1); 

// Output:
// { length: 2, draw: [Function: draw] }