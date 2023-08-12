// Dynamic  values for functions
// passing input paramiters

function createRectangle(leng, bre){
    return rectangle = {
        length: leng,
        height:bre,

        draw(){
            console.log('drawing rectangle');
        }
    };
}

let object1 = createRectangle(1, 2);
console.log(object1);