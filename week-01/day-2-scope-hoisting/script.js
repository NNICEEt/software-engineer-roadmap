// VAR, LET, CONST Differences

var x = 1;
let y = 2;
const z = 3;

x = 100;
y = 200;
// z = 300; ❌ Error! const can't be reassigned

console.log(x, y, z); // 100 200 3

// Block Scope Example
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // ✅ 10 - because var is function-scoped
// console.log(b); ❌ ReferenceError
// console.log(c); ❌ ReferenceError

// Hoisting Example

console.log(hoistedVar); // undefined
var hoistedVar = 5;

try {
    console.log(hoistedLet); // ❌ ReferenceError (TDZ)
    let hoistedLet = 10;
} catch (e) {
    console.log("Error:", e.message);
}
