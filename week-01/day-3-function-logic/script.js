// Function Declaration vs Expression
sayHi(); // Works
function sayHi() {
    console.log("Hi from declaration");
}

// sayHello(); ❌ Uncomment to test ReferenceError
const sayHello = function () {
    console.log("Hi from expression");
};

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// Truthy/Falsy
const name = "";
if (name) {
    console.log("Has a name");
} else {
    console.log("No name"); // runs
}

// Short-circuiting
console.log(null || "Nice");     // "Nice"
console.log("Nice" && "Frontend"); // "Frontend"
