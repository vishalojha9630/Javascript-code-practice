const str = "Vishal Ojha"

function countVowels(str){
  return str.split("").reduce((count, char) => {
    if ("aeiou".includes(char.toLowerCase())) {
      count++;
    }
    return count;
  }, 0);
}

console.log('countVowels :>> ', countVowels(str));