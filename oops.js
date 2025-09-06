// class student {
//     m1(){
//       console.log("sample m1")        
//     }
//     m2(){
//        console.log("sample m2")
//     }
// }

// const stu1 = new student()

// stu1.m1()

// stu1.m2()

// class employee{
//     empname
//     empage
//     emporg

//     gettheemmployeedetail(value1,value2 value3){
//         this.empname = value1
//         this.empage = value2
//         this.emporg = value3
//     }
//     displaydetails(){
//         console.log(this.empname,this.empage,this.emporg)
//     }
// }
// const emp1 = new employee()
// emp1.gettheemployeedetails("sowmya,25,dbs")

// emp1.displaydetails()


//Inheritance method

class A{
    m1(){
        console.log("this is m1 method")
    }
    m2(){
        console.log("this is m2 method")
    }
    m3(){
        console.log("this is m3 method")
    }
}
class B extends A{
     m4(){
        console.log("this is m4 method")
    }
    m5(){
        console.log("this is m5 method")
    }
    m6(){
        console.log("this is m6 method")
    }

    
}

const obj = new B()
obj.m1()
obj.m5()

// multileve inheritance
class A{
    m1(){
        console.log("this is m1 method")
    }
    m2(){
        console.log("this is m2 method")
    }
    m3(){
        console.log("this is m3 method")
    }
}
class B extends A{
     m4(){
        console.log("this is m4 method")
    }
    m5(){
        console.log("this is m5 method")
    }
    m6(){
        console.log("this is m6 method")
    }

    
}
class C extends B{
     m7(){
        console.log("this is m7 method")
    }
    m8(){
        console.log("this is m8 method")
    }
    m9(){
        console.log("this is m9 method")
    }

}
const obj = new B()
obj.m1()
obj.m5()
obj.m8()





