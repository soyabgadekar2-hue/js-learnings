//Normal function with no parameters

function greet(){
    console.log("Hello World"); 
}

greet();

//Normal function with parameters

function sum(a,b){
    let add = a+b;
    console.log(add);
}

sum(10,20);

//Function with return type

function multiply(a,b){
    let multi = a*b;
    return multi;
}

let a = multiply(4,6);
console.log(a);

//Function expression

let newFunction = function(a,b){
    let sum = a+b;
    return sum;
}

console.log(newFunction(10,20));

//Arrow function

let add = (a,b) => {
    let c = a+b;
    return c;
}

console.log(add(40,60));