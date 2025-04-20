# 📚 What is Hoisting?
- Hoisting is a behavior in JavaScript where **variable and function declarations** are moved to the **top of their scope** before code execution.
- Only declarations are hoisted, not initializations.

# 🌐 What is Scope?
- Scope refers to the **context** in which variables are accessible.
    - **Global Scope** – accessible anywhere in the code.
    - **Function Scope** – variables are accessible only inside the function where they are defined.
    - **Block Scope** – variables are accessible only inside the block `{}` where they are declared (applies to `let` and `const`).

# 🕐 What is the Temporal Dead Zone (TDZ)?
- The **Temporal Dead Zone** is the time between a variable’s **declaration** and its **initialization** where accessing it will cause a **ReferenceError**.
- It applies to variables declared with `let` and `const`.

# 🔁 Comparison: `var` vs `let` vs `const`

| Feature                     | `var`              | `let`              | `const`            |
|----------------------------|--------------------|--------------------|--------------------|
| **Hoisted**                | ✅ Yes             | ✅ Yes             | ✅ Yes             |
| **Accessible before declaration** | ✅ (undefined)  | ❌ (ReferenceError) | ❌ (ReferenceError) |
| **Temporal Dead Zone**     | ❌ No              | ✅ Yes             | ✅ Yes             |
| **Can be reassigned?**     | ✅ Yes             | ✅ Yes             | ❌ No              |
| **Must be initialized?**   | ❌ No              | ❌ No              | ✅ Yes             |
| **Scope**                  | Function Scope     | Block Scope        | Block Scope        |
