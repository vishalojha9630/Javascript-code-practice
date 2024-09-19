let arr1 = [1, 12, 15, 6, 30]
let arr2 = [24, 8, 17, 6, 90]
let arr3 = [37, 80, 9, 45, 6]

let res1 = arr1.reduce((acc, curr) => acc + curr, 0)
let res2 = arr2.reduce((acc, curr) => acc + curr, 0)
let res3 = arr3.reduce((acc, curr) => acc + curr, 0)

let finalResponse = [res1, res2, res3]
console.log("Maximum value in the array: ", Math.max(...finalResponse));


// // Using loop:
// let max = finalResponse[0]
// for (let i = 1; i < finalResponse.length; i++) {
//     if (finalResponse[i] > max) {
//         max = finalResponse[i];
//     }
// }
// console.log(max);
