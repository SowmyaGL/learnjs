const name = "programming"
//log the repeated carecters

const text = "programming";
const count = {};
const result = {};

c

let unique = sorted.filter((value, index) => 
    sorted.indexOf(value) === index
);

console.log(unique)

let uniqueNames = [...new Set(sorted)];

console.log(uniqueNames);

for (let char of text) {
   
  count[char] = (count[char] || 0) + 1; 
  console.log(char,count[char])
}

for (let item in count) {
    console.log(count[item])
  if (count[item] > 1) {
    result[item] = count[item];
  }
}

let sortedByKey = Object.keys(result)
    .sort()
    .reduce((acc, key) => {
        acc[key] = result[key];
        return acc;
    }, {});

console.log(sortedByKey);


console.log(result);