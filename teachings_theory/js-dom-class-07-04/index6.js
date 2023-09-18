// // Fetch Api


// let content = fetch('https://jsonplaceholder.typicode.com/posts/1');

// // browser output:
// // content;
// // Promise {<fulfilled>: Response}
// // [[Prototype]]
// // : 
// // Promise
// // [[PromiseState]]
// // : 
// // "fulfilled"
// // [[PromiseResult]]
// // : 
// // Response
// // body
// // : 
// // (...)
// // bodyUsed
// // : 
// // false
// // headers
// // : 
// // Headers {}
// // ok
// // : 
// // true
// // redirected
// // : 
// // false
// // status
// // : 
// // 200
// // statusText
// // : 
// // ""
// // type
// // : 
// // "cors"



// //---------------------------------------







async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output = await content.json();
    console.log(output);
}

utility();


// browser output:
// userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecat




// ---------------------------------------------






  
