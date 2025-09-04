//static

class Employee{
   static x = "sowmya"
    y = "omkar"

    display(){

        console.log("this is a simple method")
    }

    m1(){

        console.log("this method is m1")
    }
//static method
    static m2(){

        console.log("this method is m2")
    }
    //non static method
    m3(){

        console.log("this method is m3")
    }
}

//const emp1 = new Employee()
// we dont need to create object for a class to access static variables and methods

//classname.variablename
//classname.method
 console.log(Employee.x)
  console.log(Employee.y)