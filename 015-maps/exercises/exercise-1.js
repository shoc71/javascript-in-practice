/*
    1. Create a Map called "myPet" with the following entries=>
        - name => "Sudo",
        - type => "Dog",
        - breed => "Poodle",
        - age => 7,
        - friends => ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new entry => colour => "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/
const myPet = new Map();

myPet.set('name', "Sudo")
myPet.set('type', 'Dog')
myPet.set('breed', 'Poddle')
myPet.set('age', 7)
myPet.set('friends', ["Bit", "Byte", "Data"])

console.log(myPet)

myPet.set('colour', 'Black')

console.log(myPet)

myPet.set('breed', 'Beagle')

console.log(myPet)

myPet.delete('friends')

console.log(myPet)

myPet.set('friends', ["Chip"])

console.log(myPet)