// Activity 1…
// Write a simple function that logs ‘Hello Codenation" to the console.
// Then write a higher-order function which will run the simple function five times, even though you only call it once.
// Hint: Pass the simple function as a parameter, which will involve a For loop.

const log = () => {
    console.log("Hello Codenation");
}

const repeat = (log, rpt) => {
    for(i = 0; i < rpt; i++){
        log();
    }
}
repeat(log,5);


// Activity 2…
// The array method .map is an example of a higher-order function.
// Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3. 

// HOF
// const num = [5, 9, 13, 43, 96];
// const multiply = [];
// for(let i = 0; i < num.length; i++) {
//   let times = 3 * num[i];
//   multiply.push(times);
// }
// console.log(multiply);


// Map
// const entryNum = [1, 2, 3, 4, 5];
// const multiply = entryNum.map(num => 3 * num);

// console.log(multiply);


// Activity 3… 
// Test this function to ensure it works by passing a number to the doMaths function.
// Then passing a number and one of the four maths functions to the returned function.

const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const doMaths = (num1) => {
    return (num2, fn) => {
    return fn(num1, num2);
    };
};

// 15 divided by 5 = Print 3
console.log(doMaths(15) (5, divide));
// 5 add 10 = Print 15
console.log(doMaths(5)(10, add));
// 9 multiply by 7 = Print 63
console.log(doMaths(9)(7, multiply));