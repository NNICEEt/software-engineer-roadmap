// Scope & Hoisting
console.log(x);  // undefined (hoisted)
var x = 10;

function scopeExample() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a); // ✅
  // console.log(b); // ❌ ReferenceError
  // console.log(c); // ❌ ReferenceError
}
scopeExample();

// Execution Stack
function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
  third();
}

function third() {
  console.log("Third");
}
first(); // Call Stack: first → second → third

// Memory + Reference
let obj1 = { name: "Nice" };
let obj2 = obj1;
obj2.name = "Changed";

console.log(obj1.name); // Changed → because both point to same memory

// Primitive
let a = 5;
let b = a;
b = 100;
console.log(a); // 5
