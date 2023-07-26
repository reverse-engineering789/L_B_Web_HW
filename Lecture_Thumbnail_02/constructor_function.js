function construct(len, high){

        this.length = len,
        this.height = high,

         this.draw = function(){
            console.log("Hello world");
         }

}

let test = new construct(4, 6);
console.log(test);