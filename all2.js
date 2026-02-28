const arr = ["grapes","banana","apple"];
//sort the characters and also array

const sortedArray = [...arr].sort();

console.log(sortedArray);

const sortedCharacters = arr.map(word =>
  word.split("").sort().join("")
);

console.log(sortedCharacters);
// ["aegprs", "aaabnn", "aelpp"]

const result = arr
  .map(word => word.split("").sort().join("")) // sort characters
  .sort();                                     // sort array

console.log(result);
// ["aaabnn", "aegprs", "aelpp"]