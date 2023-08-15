// getter(to access the property) and 
// setter(to change the property)



// let person = {
//     fname: 'Hello',
//     lname: 'world'
// }

// console.log(person);


// // Output:
// // { fname: 'Hello', lname: 'world' }
// // -------------------------------------------

// let person = {
//     fname: 'Hello',
//     lname: 'world'
// }

// console.log(person);

// function fullName(){
//     console.log(`${person.fname} ${person.lname}`);
// }

// fullName();


// // Output:
// // { fname: 'Hello', lname: 'world' }
// // Hello world


// // --------------------------------------------




// let person = {
//     fname: 'Hello',
//     lname: 'world'
// }

// console.log(person);

// function fullName(){
//     console.log(`${person.fname} ${person.lname}`);
// }

// fullName();


// // Output:
// // Hello world


// // -----------------------------------------------




let person = {
    fname: 'Hello',
    lname: 'world',
    get fullName(){
        return `${person.fname} ${person.lname}`;
    },
    set fullName(value){
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
};

person.fullName = 'Shivam Shankaram';
console.log(person.fullName);