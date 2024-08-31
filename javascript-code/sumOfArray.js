// 1. Using reduce method:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);


// 2. Using for loop:
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }


// 3. Using for..of loop:
// let sum = 0;
// for (const num of numbers) {
//   sum += num;
// }


// 4. Using forEach method:
let sum = 0;
numbers.forEach(num => {
    sum += num;
});

console.log(sum);