// ✅ Explore JavaScript Type System

// Variable declarations
let username = "Nice";
const level = 1;
let active = true;
let points = null;
let energy; // undefined

// Type Coercion
console.log("5" + 3);      // "53"
console.log("5" - 3);      // 2
console.log(true + false); // 1

// Equality
console.log(5 == "5");     // true
console.log(5 === "5");    // false

// Truthy/Falsy
if ("") console.log("run"); // won't run
if ("hi") console.log("✅ this runs");

// Reference Type
const player = { name: "Nice", score: 100 };
const clone = player;
clone.score = 999;

console.log(player); // { score: 999 }

// Template Literals
console.log(`🚀 Welcome ${username}! You’re level ${level}`);
