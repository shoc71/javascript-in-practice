/*
    1. Create an array called "items" with the following values:
        - {name: "banana", quantity: 1, price: 1.95}
        - {name: "apple", quantity: 1, price: 1.45}
        - {name: "banana", quantity: 10, price: 0.05}
        - {name: "candy", quantity: 1, price: 3.50}

    2. Create a second array called "results" that starts off empty

    3. Create a Set called "duplicates"

    4. Add all the Objects in "items" to "results" in order, while
       skipping over any duplicate-named objects you encounter
       within "items" (In this example, only add the first banana item)

    5. Print out "results" - it should be:
    [
        {name: "banana", quantity: 1, price: 1.95},
        {name: "apple", quantity: 1, price: 1.45},
        {name: "candy", quantity: 1, price: 3.50}
    ]

    HINT: Use to the Set to keep track of duplicates
*/
const results = []
const duplicate = new Set();
const items = [
    {name: "banana", quantity: 1, price: 1.95},
    {name: "apple", quantity: 1, price: 1.45},
    {name: "banana", quantity: 10, price: 0.05},
    {name: "candy", quantity: 1, price: 3.50}
]

for (let i = 0; i < items.length; i++) {
    if (duplicate.has(items[i].name)) {
        console.log(`found duplicate name ${items[i].name}`)
        continue
    }

    duplicate.add(items[i].name)
    results.push(items[i])
}

console.log(duplicate)
console.log(results)