let a = 7;

if(a % 2 == 0){
    console.log("Even no");
}
else{
    console.log("Odd no");
}

for(let i = 0;i<5;i++){
    console.log(i);
    console.log(i);
}

console.log("task 1");


setTimeout(() => {
    console.log("Task 2")
}, 5000);
console.log("Task 3")

const prompt = require('prompt-sync')();
const name = prompt("What is your Name ?");
console.log("Hello, "+ name + "!");

//Function without Parameters 
function printZeroToFive(){
    for(let i = 0 ; i <= 5 ; i++){
        console.log(i);
    }
}

printZeroToFive();

// Function with Parameters
function addingTwoNumbers(a,b,c){
    a = 10;
    b = 11;
    c = a + b;
    console.log("Addition of 2 numbers " + c);
}
addingTwoNumbers();

setTimeout(() => {
    return printZeroToFive();
}, 5000);

// Function with Expressions 
const addition = function(a,b,c){
    a = 10;
    b = 12;
    c = a + b;
    console.log("Addition of 2 numbers " + c);
}
addition();
