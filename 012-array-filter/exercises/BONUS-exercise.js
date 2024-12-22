/*
    1. Create the following array called "nums":
        [10, 20, 30, 40, 50]

    2. Create an new array called "timesTwo" that:
        - maps over "nums" and returns each number
          multiplied by two

    3. Create an new array called "over50" that:
        - filters "timesTwo" to keep only values over 50

    4. Print out all 3 arrays

    "over50" should contain: [60, 80, 100]
*/

var nums = []

for (let i = 1; i <= 50; i++) {
    if (i % 10 === 0) {
        nums.push(i)
    }
}

var timesTwo = nums.map((number) => {
    return (number * 2)
})

var over50 = timesTwo.filter((number) => {
    if (number > 50) {
        return number
    }
}) 

console.log(nums)
console.log(timesTwo)
console.log(over50)