// 1. Create a profile object with: name, age, isFrontend
// 2. Log a sentence like: "Nice is 27 years old and is a frontend developer: true"
// 3. Create 2 variables a and b. Swap them without using a third variable

const profile = {
    name: "Nice",
    age: 24,
    isFrontend: true
};

console.log(`${profile.name} is ${profile.age} years old and is a frontend developer: ${profile.isFrontend}`);

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(`a: ${a}, b: ${b}`)

// What will be the output?
console.log(typeof null);         // object
console.log(null === undefined); // false
console.log([] == 0);            // true
console.log([] === 0);           // false


function reverse(str) {
    // your code
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverse("nice")); // "ecin"

function countVowels(str) {
    // your code
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("nice")); // 2
