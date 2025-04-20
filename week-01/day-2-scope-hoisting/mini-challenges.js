function testVar() {
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10
}
testVar();

function testLet() {
    console.log(b); // ReferenceError
    let b = 20;
}
// testLet();

// Input: 1234
// Output: 4321
function reverseNumber(num) {
    // your code here
    let digit, result = 0;

    while (num > 0) {
        digit = num % 10
        result = result * 10 + digit
        num = Math.floor(num / 10)
    }

    return result
}
console.log(reverseNumber(1234))