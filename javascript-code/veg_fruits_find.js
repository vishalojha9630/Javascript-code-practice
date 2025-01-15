const arr = ['apple', 'banana', 'papaya', 'carrots', 'tomato', 'potato']

let fruits = []
let vegetable = []

for (const element of arr) {
    if (element === 'apple' || element === 'banana' || element === 'papaya') {
        fruits.push(element)
    }
    else {
        vegetable.push(element)
    }
}
console.log(fruits);
console.log(vegetable);