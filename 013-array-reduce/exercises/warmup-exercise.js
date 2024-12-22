/*
    1. Create an array called "points" with the numbers 55-60 (inclusive)

    2. Create a variable called "sum" using reduce that sums up the points in "points"
    
    3. Print out both "points" and "sum"
*/

const points = []

for (let i = 55; i <=60; i++) {
    points.push(i)
}

const sum = points.reduce((result, point) => {
    return result + point
})

console.log(points)
console.log(sum)