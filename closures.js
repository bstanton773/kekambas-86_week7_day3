/*
    JavaScript Closures
*/


let subject = 'JavaScript' // Block Scoped Variable - Window Block

function homework(student){
    console.log(`${student}, did you finish your ${subject} homework?`)
}

homework('Brian');

// console.log(student); // ReferenceError: student is not defined


// Scopes can be nested

let hometown = 'Chicago'; // Block Scoped

{
    var state = 'Illinois'; // Globally Scoped
    let hometown = 'Champaign'; // Block Scoped
    {
        console.log(`I am from ${hometown}, ${state}`);
        var myName = 'Brian'
    }
}
console.log(`I am from ${hometown}, ${state}`);

function hello(){
    console.log(myName);
}
hello()



// Function Scopes can also be nested

// function outer(){
//     let outerMessage = 'This is the outer message'
//     function inner(){
//         let innerMessage = ' and this is the inner message'
//         console.log(outerMessage + innerMessage)
//     }
//     inner()
// }

// outer()

// Return a function from a function
function outer(){
    let outerMessage = 'This is the outer message'
    function inner(){
        let innerMessage = ' and this is the inner message'
        console.log(outerMessage + innerMessage)
    }
    return inner
}

let outerReturn = outer();

console.log(outerReturn);

outerReturn();
outerReturn();

// inner() function is a closure
// A closure is a function that preserves the outer scope in its inner scope


// A more practical example

function multiplier(x){
    function times(y){
        return x * y
    }
    return times
}

// Create multiplier functions

const double = multiplier(2)

console.log(double);

console.log(double(5))
console.log(double(3))
console.log(double(10))
console.log(double(4))
console.log(double(8))


const triple = multiplier(3)

console.log(triple);

console.log(triple(5))
console.log(triple(3))
console.log(triple(10))
console.log(triple(4))
console.log(triple(8))


// Setting up a "hidden" scope


function setCounter(){
    console.log('Set!')
    let count = 0 // Block level scope
    function inner(){
        return count++
    }
    return inner
}


const step = setCounter();


console.log(step);

// console.log(step());
// console.log(step());
// console.log(step());
// console.log(step());


// More practical example


// var cache = {}

// function fib(num){
//     if (num < 2){
//         return 1
//     }else if (num in cache) {
//         return cache[num]
//     } else {
//         let fib_num = fib(num-1) + fib(num-2)
//         cache[num] = fib_num
//         return fib_num
//     }
// }

// console.log(fib(10))

// console.log(cache)


function makeFibWithCache(){
    var cache = {}

    function innerFunc(num){
        if (num < 2){
            return 1
        }else if (num in cache) {
            return cache[num]
        } else {
            let fib_num = fib(num-1) + fib(num-2)
            cache[num] = fib_num
            return fib_num
        }
    }
    return innerFunc
}


const fib = makeFibWithCache();

console.log(fib(10))
console.log(fib(40))
console.log(fib(100))



// IIFE - Immediately Invoked Function Expression



let myFullName = (function formatName(first, last){
    return first + ' ' + last
})('Brian', 'Stanton')

console.log(myFullName);


// Set up closures with IIFE

let stepByFive = (function setCounter(step=1){
    let count = 0 // Block level scope
    function inner(){
        return count+=step
    }
    return inner
})(5)

console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());


// In Class Exercise
// Create an IIFE that has a hidden array of names (starts as an empty array) but will add users to the list every time the function is called

const addName = (function(names){
    function inner(name){
        names.push(name)
        console.log(names)
    }
    return inner
})(['Bobbert', 'Robert', 'Flobbert'])


console.log(addName);
addName('Brian')
addName('Tatyana')
addName('Ripal')
addName('Sam')
