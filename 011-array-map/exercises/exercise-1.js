/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]

    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 0

    3. Print out both arrays

    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/

const bools = [true, true, false, true, false, false]

function generateRandomInt (minimum, maximum) {
    min = Math.ceil(minimum)
    max = Math.floor(maximum)
    return Math.floor(Math.random()* (max - min + 1)) + min
}

const bools_nums = bools.map((number) => {
    if (number === true) {
        return generateRandomInt(0, 100_000)
    }
    if (number === false) {
        return 0
    }
})

console.log(bools)
console.log(bools_nums)