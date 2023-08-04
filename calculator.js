const prompt = require('prompt-sync')();

function add(x,y){
    return x+y
}
function multiply(x,y){
    return x*y
}
function minus(x,y){
    return x-y
}
function divide(x,y){
    return x/y
}

// console.log(divide(1,1))

const first_num = prompt(`Please input your first number: 
asd
`);
// const second_num = prompt('Please input your second number: ');
// const operator = prompt(`Select operator:
//     1: Addition
//     2. Multiplication
//     3. Subtraction
//     4. Division
// `);

console.log(first_num);