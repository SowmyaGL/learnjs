// console.log("s")
// console.log("b")
// console.log("a")

//    =========================

//callback functions
//synchronous and asynchronous functions example
console.log("s")

setTimeout(function displaymessage(){
    console.log("a")
},5000);

console.log("a")

//===========================

function displayresult(value){
    console.log(value)
}

function devideresultby2(value){
    console.log(value/2)
}

function add(num1,num2,callback){
    sum = num1+num2

    callback(sum)
}

add(4,5,displayresult)
add(4,5, devideresultby2)