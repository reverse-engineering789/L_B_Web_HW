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



const content = document.querySelector('#wrapper');


content.addEventListener('click', function(event){
    console.log(event);
})

