# ✅ Function Declaration vs Function Expression

// Function Declaration
function greet() {
  return "Hello";
}

// Function Expression
const greet = function () {
  return "Hello";
};

🧠 Key Difference:
- Declarations are hoisted ✅
- Expressions are not ❌

# 🧠 Arrow Functions (ES6)
const add = (a, b) => a + b;

- Short and clean syntax
- `this` behaves differently (more in later lessons)

# 🔍 Truthy & Falsy

Falsy values:
- false, 0, "", null, undefined, NaN

Everything else is **truthy**

# ⚡ Short-Circuiting

`||` returns the first truthy value  
`&&` returns the first falsy value

Example:
```js
console.log(null || "Nice");   // → "Nice"
console.log("Nice" && 0);      // → 0
