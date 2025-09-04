function add(num1,num2){

    console.log(num1+num2)

}
add(3,2)
  
//undefined+undefined = NaN

//i want group of functions
//{


//}

class caluclator{

    a = 10
    b = 4
    add(num1,num2){

    console.log(num1+num2)

}
substract(num1,num2){

    console.log(num1-num2)

}

multiply(num1,num2){

    console.log(num1*num2)
}
devision(num1,num2){

    console.log(num1/num2)
}

}

const cal1 = new caluclator()  //object creation of the class /instance of the class

cal1.multiply(4,6)

cal1.add(3,5)

cal1.devision(10,5)

cal1.substract(6,3)
console.log(cal1.a)  //10

//class can have variablkes and methods

//we need to create object,through that object we can access variables and methods

cal1.arun()


class sowmya{                      //class is the key word
    x = 10
    displaymessage(){
        console.log("this is a simple method")
    }
    add(num1,num2){
        return num1+num2
    }
}

const obj1 = new sowmya()

result = obj1.add(2,7)

console.log(result)


//i have method inside a class 
//i dont want call that method 
//it should be autometically invoked how can you make it 

//constactor 
//constructor is a method ,but u dont need to call that method
//it will be automatically called

class sowmya{                      //class is the key word
    x = 10
    constructor(){
        console.log("this is a simple method")
    }
    add(num1,num2){
        return num1+num2
    }
}

const obj1 = new sowmya()

