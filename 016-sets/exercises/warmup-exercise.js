/*
    1. Create a variable called "numbers" that points to a new Set

    2. Add the following numbers to "numbers" (each a separate line):
       1, 2, 3, 4, 5, 2, 3, 4

    3. Print out "numbers" and note what is inside it

    4. Repeat the same steps above but with an array
       How does this differ?
*/

numbers = [1, 2, 3, 4, 5, 2, 3, 4]

console.log(numbers)

const mySet = new Set();

mySet.add(numbers)

console.log(mySet)

const anotherSet = new Set();

anotherSet.add(1)
anotherSet.add(2)
anotherSet.add(3)
anotherSet.add(4)
anotherSet.add(5)
anotherSet.add(2)
anotherSet.add(3)
anotherSet.add(4)

console.log(anotherSet)