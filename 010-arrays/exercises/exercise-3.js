/*
    Create a variable called "total" that starts at 0

    Create an array called "grades" with the following values:
        - 55
        - 63
        - 82
        - 98
        - 91
        - 43
        
    Figure out how to print out the AVERAGE grade
    (This is the sum of all grades divided by the number of grades)
*/

var total = 0

const grades = [
    55,
    63,
    82,
    98,
    91,
    43
]

for (let index = 0; index< grades.length; index++) {
    total += grades[index]
}

console.log((total / grades.length))