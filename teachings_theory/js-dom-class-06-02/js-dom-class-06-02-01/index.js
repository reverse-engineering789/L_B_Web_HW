// document.addEventListener('click', function(){
//     console.log('I have clicked on the documnet');
// });


// or


// function eventFunction(){
//     console.log('I have clicked on the document');
// }

// document.addEventListener('click', eventFunction);












// // DELETE AN EVENT LISTENER


// function eventFunction(){
//     console.log('I have clicked on the document');
// }


// document.addEventListener('click', eventFunction);

// // document.removeEventListener('click', eventFunction);

// document.removeEventListener('click', eventFunction);





//-------------------------------------------------------------------------





// // in this case event lister will not work 





// document.addEventListener('click', 
//      function(){
//     console.log('I have clicked on the document');
// });


// document.removeEventListener('click', 
// function(){
//     console.log('I have clicked on the document');
// });






// -----------------------------------------------------------------------



// const content = document.querySelector('#wrapper');


// content.addEventListener('click', function(event){
//     console.log(event);
// });





// ----------------------------------------------


// let thirdLink = links(2);

// thirdLink;

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('got the result');
// });





// ---------------------------------------------------






let linkTest = document.querySelectorAll('a');

let targetLink = linkTest[2];

targetLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log("got the required result");

})




//--------------------------------------------------------------



// HOW TO AVOID TOO MANY EVENTS



// unoptimized code 





// let myDiv = document.createElement('div');


// for(let i = 1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     newElement.addEventListener('click', function(vent){
//         console.log('I have clicked on para');
//     });  
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);







// -----------------------------------------







// //  Optimized code 1

// let myDiv = document.createElement('div');


// function paraStatus(vent){
//     console.log('I have clicked on para');
// };



// for(let i = 1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     newElement.addEventListener('click', paraStatus);  
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);






// // ---------------------------------------------------







// // optimized code 2





// let myDiv = document.createElement('div');


// function paraStatus(vent){
//     console.log('I have clicked on para');
// };

// myDiv.addEventListener('click', paraStatus);  


// for(let i = 1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);





// --------------------------------------------------





// // optimized code 3






let myDiv = document.createElement('div');


function paraStatus(event){
    console.log('para' + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);


for(let i = 1; i <= 100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);




// --------------------------------------------------



// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event){
//     console.log('span pr click kia hai' + event.target.textContent);
// });



// --------------------------------------------------





let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('clicked on span' + event.target.textContent);
    }
});




// --------------------------------------------------





