/*
    1. Create an array called "practice" with the numbers 25-30 (inclusive)

    2. Create another array using map that squares each number in "practice"
    
    3. Print out both "practice" and the new mapped array
*/

var practice = []

for (let i =25; i<=30; i++) {practice.push(i)}

var practiceTwo = practice.map((number) => {return number**2})

console.log(practice)
console.log(practiceTwo)