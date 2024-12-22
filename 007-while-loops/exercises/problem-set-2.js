/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

var evenCount = 10

while (evenCount <= 40) {
    if ((evenCount % 2) === 0) { // change to 0 for even, change to 1 for odd
        console.log(evenCount)
    }
    evenCount++
}