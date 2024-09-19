// // Without using third variable:
// var x = 20
// var y = 10

// x = x + y;
// y = x - y;
// x = x - y

// console.log(`After swap x is: ${x} and y is: ${y}`)


// Using third variable:
var x = 20
var y = 10
let z

z = x;
x = y;
y = z;

console.log(`After swap x is: ${x} and y is: ${y}`)