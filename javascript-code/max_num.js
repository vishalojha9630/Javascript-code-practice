// Using for loop:
let arr = [3, 7, 2, 8, 5, 100];
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);


// Using in built method:
// let max = Math.min(...arr); // Get min value of the an array.
// let max = Math.max(...arr); // Max value in the array.
// console.log(max);
