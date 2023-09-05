// get element by id

document.getElementById('content');



// get element by className

document.getElementsByClassName('hidden');


// get element by tagname

document.getElementsByTagName('h1');


// query selector:

document.querySelector('text-textpara');


// to get all 

document.querySelectorAll('hidden');






// inner html


let codingexample  = document.querySelector('.conding-example');

console.log(codingexample);

codingexample.innerHTML;


condingexample.innerHTML = ' ';


let company = document.querySelector('.companyAmz');

company.innerHTML;

let content = document.querySelector('.css-1xycv21');

content.textContent;

content.innerText;






// -------------------------------------------




let content2 = document.querySelector('.paraClass');
console.log(content2);


let newPara = document.createElement('p');
console.log(newPara);


content2.appendChild(newPara);





// creating text note:

let newText = document.createElement('h3');

newText.textContent = 'ABCD';

content.insertAdjacentElement('beforeBegin', newText);

content.insertAdjacentElement('afterBegin', newText);


content.insertAdjacentElement('beforeEnd', newText);

content.insertAdjacentElement('afterEnd', newText);






// ---------------------------------------------------------




let childElement = document.querySelector('tempText');

let parentElement = document.querySelector('.chakra-heading');

content.removeChild(childElement);


// --------



// css 