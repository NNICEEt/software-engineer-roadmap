// 1. Create an arrow function isEven(num) that returns true if number is even.

const isEven = (num) => num % 2 === 0;

console.log(isEven(2)); // true
console.log(isEven(3)); // false

/*
2. Create a function greetUser(name) that:
    - Returns "Welcome, [name]" if name exists
    - Returns "Guest" if name is falsy
*/

function greetUser(name) {
    return name ? `Welcome, ${name}` : "Guest";
}

console.log(greetUser("John")); // Welcome, John
console.log(greetUser()); // Guest