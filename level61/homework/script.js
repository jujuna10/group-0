// //Create an object named person with properties name, age, and city.

// const person = {
//     name: "john",
//     age: 14,
//     city: "london",
//     greet: function(){
//         console.log("hello " + person.name)
//     }
// }


// //Access the name property of the person object you created in the previous exercise.

// console.log(person.name)


// //Change the age property of the person object to a new value.

// person.age = 10
// console.log(person.age)



// //Add a new property named country to the person object and set its value.

// person["country"] = "england"
// console.log(person)


// //Add a method named greet to the person object that logs a greeting message including the person's name.

// console.log(person.greet())



// //Create two objects with the same properties and values. Use the === operator to compare them. Log the result.
// const person1 = {
//     name: "john",
//     age: 14,
//     city: "london"
   
// }

// const person2 = {
//     name: "john",
//     age: 14,
//     city: "london"

// }

// console.log(person1 === person2)



// //Create an object named school with properties name and students, where students is an array of objects representing student names and ages. 
// //Access a student's name and age from the school object.

// const school = {
//     name: "school",
//     students: ['maikl','steven','tom','tony']
// }
// console.log(school.name)
// console.log(school.students)



// //Create an object called calculator with methods add, subtract, multiply, and divide that perform basic arithmetic operations on two numbers.


// const calculator = {
//     num1: 10,
//     num2: 20,
//     add: function(){
//         return (calculator.num1 + calculator.num2)
//     },
//     subtract: function(){
//         return (calculator.num1 - calculator.num2)
//     },
//     multiply: function(){
//         return (calculator.num1 * calculator.num2)
//     },
//     divide: function(){
//         return (calculator.num1 / calculator.num2)
//     },
// }

// console.log(calculator.add())
// console.log(calculator.subtract())
// console.log(calculator.multiply())
// console.log(calculator.divide())



//Create an HTML form with fields for username and password. Use JavaScript to validate that the username is at least 5 characters long and the 
//password is at least 8 characters long when the form is submitted. if validate add them into object.


const account = {

}

let form = document.getElementById("form")


form.addEventListener("click",function(e){
    e.preventDefault()
    userName = form.elements.name.value
    userPassword = form.elements.password.value

    if(userName.length >= 5 && userPassword.length >= 8){
        account.name = userName
        account.password = userPassword
    }else{
        console.log("try again")
    }
   

    

    console.log(account)
})

// let name = form.elements.name.value
// let password = form.elements.password.value
// let btn = document.getElementById("btn")
 
// btn.addEventListener("click",function(){
//     name = name.value
//     console.log(name)
// })


