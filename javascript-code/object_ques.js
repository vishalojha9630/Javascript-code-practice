// Object values sum
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
// };
// const sum = Object.values(obj).reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// Change b value
let obj = {
    a: 10,
    b: 20,
    c: 30
}

// using dot notation or square bracket
// obj.b = 25
// obj['b'] = 25

// Using Loop
for (let key in obj) {
    if (key === 'b') {
        obj[key] = 50;
    }
}
console.log('obj :>> ', obj);