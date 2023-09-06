// events

monitorEvents(document);


//  apply event listener on document

document.addEventListener('click', function(){
    console.log('I clicked on document');
});

 
let content = document.querySelector('h1');

console.log(content);


// -------------------------------------



content.addEventListener('click', function(){
    content.style.background = 'red';
});
