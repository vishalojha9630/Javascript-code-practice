// String reverse // Method 01
const str = 'Vishal Ojha'
res = ''
for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
}
console.log('res :>> ', res);

// Method 02
// const str = 'Vishal Ojha'
// res = str.split('').reverse().join('')
// console.log('res :>> ', res);
