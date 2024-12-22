/*
    Create a for loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

for (let i = 10; i <= 40; i++) {
    if (i % 2 === 0) { // change to 0 for even; change to 1 for odd
        console.log(i)
    }
}