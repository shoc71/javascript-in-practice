/*
    1. Create an empty Set called "names"

    2. Create another empty Set called "capsNames"

    2. Add the following names to the set "names":
        - Bilbo
        - Hermione
        - Spock
        - Leia

    3. Use a for-of loop to loop over "names" and
       adds the capitalized version of each name
       to the "capsNames" set

    4. Print out "capsNames"
*/

const names = new Set();
const capsNames = new Set();

const someNames = ['Bilbo', 'Hermione', 'Spock', 'Leia']

for (let n of someNames) {
    names.add(n)
    capsNames.add(n)
}
console.log(names, capsNames)