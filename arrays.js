arr = []

//length - elements count
arr = [2,5,4,6,7,9,2]

console.log(arr.length)

arr1 = ["sow","arun","bhevin"]
arr2 =["sow",2,3,4,5,true,undefined,null]

//arr1[index]
//index always start from 0
console.log(arr1[1])

console.log(typeof(arr1))

console.log(typeof(arr2[1]))

//concat //will join 2 arrays

arr3 = arr1.concat(arr2)

console.log(arr3)

//how to add the element at the end = push method 

arr4 = ["wakeup", "read", "work", "sleep"]
 arr4.push("drink water")

 console.log(arr4)

 //unshift will add elements zt the begining of the array

 arr4.unshift("dream")
 console.log(arr4)

 //pop method 

 arr4.pop()

 arr4.pop()
 console.log(arr4)

 //shift

 arr4.shift()
 console.log(arr4)

 str = "javascript"

 //convert string to array = split method

 arr6 = str.split("")
 console.log(arr6)

 str = "my son name is bhevin omkar"

 arr7 = str.split(" ")
 console.log(arr7)

  str = "my son name is bhevin omkar"

 arr7 = str.split("")
 console.log(arr7)

  str = "my son name is bhevin omkar"

 arr7 = str.split("i")
 console.log(arr7)

 //convert array to string = join method

 
 str2 = arr7.join("")
 console.log(str2)

 str2 = arr7.join(" ")
 console.log(str2)

 // we will avoid declaring array as objrct
//replace one element to another element

arr9 =["bhevin","omkar","sowmya"]
arr9[2] = "arun"
console.log(arr9)

arr11 =["wakeup","read", "work","sleep"]
arr11 .includes("meditation")  //false
arr11.includes("sleep")   //true

if(arr11 .includes("meditation")){
    console.log("element is present")
}

arr12 = [2,9,6,7,4,3]
arr13 = arr12.sort()
console.log(arr13)

//map
//slice
//splic
//filter
//reduce
