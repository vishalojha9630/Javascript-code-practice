// Object values sum
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
// };
// const sum = Object.values(obj).reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// Using filter method:
let arr = [1,2,2,6,5,8,6,5,4,8,3,7,3];
// let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(uniqueArr);

// Using for loop:
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (uniqueArr.indexOf(arr[i]) === -1) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr); 