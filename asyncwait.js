async function myFunction() {
    return "Hello";
}

x = myFunction()
console.log(x)

//=============================

async function step1(value){
    return value + 10;
} 
//promise 20
async function step2(value){
    return value + 10;
}
//promise 30

async function step3(value){
    return value + 10;
}
//promise 40
async function run(){
    let result1 = await step1(10);
    let result2 = await step2(result1);
    let result3 = await step3(result2);
    console.log("results" + result3);
}
run();






