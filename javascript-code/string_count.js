const str = 'Vishalsinghojha'
const obj = {}

for (const x of str) {
  if (obj[x]) {
    obj[x] += 1
  } else {
    obj[x] = 1
  }
}

console.log(obj);