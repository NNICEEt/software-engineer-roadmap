/*
🔐 Login Validator Function

Create a function validateLogin(username, password) that:

If either is missing (falsy), return "Username and password required"

If username === "admin" and password === "1234", return "Login successful"

Otherwise, return "Invalid credentials"
 */

function validateLogin(username, password) {
    if (!username || !password) {
        return "Username and password required";
    }

    if (username === "admin" && password === "1234") {
        return "Login successful";
    }

    return "Invalid credentials";
}

console.log(validateLogin("admin", "1234")); // Login successful
console.log(validateLogin("admin", "wrong")); // Invalid credentials
console.log(validateLogin()); // Username and password required