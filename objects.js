



                            
creds = {
username : "Admin",
password : "admin123"

}
console.log(creds.username)

creds = {
username : "Admin",
password : "admin123"

}
console.log(creds.password)

//another way

creds = {
username : "Admin",
password : "admin123"

}
console.log(creds["password"])          
// creds = objects
// password = property name

student = {
    firstname : "arun",
    lastname : "kumar",
    place : "bengalore",
    age : 26


}
console.log(typeof(student.age))

console.log(student.age)
console.log(student.place)

menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu3 : "Time"
}

console.log(menuitems.menu2)

for(let item in menuitems){
    console.log("loop start here")
    console.log(menuitems[item])
    console.log("loop ends here")
}

