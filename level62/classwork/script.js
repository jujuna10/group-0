// //1

// const person = {
//     name: "john",
//     age: 10,
//     greet: function(){
//         return person.name + "hello"
//     },
//     grades:{
//         math: 10,
//         english: 9,
//         chemistry: 7,
//         pysic: 8
//     }
// }
// console.log(person)

// //2

// namee = "john"
// console.log(namee)

// //3

// const man = {
//     name: "john",
//     age: 14
// }

// let x = man
// console.log(x)

userId = prompt("enter id")
userStatus = prompt("enter statud")

function Airport(id,status){
    this.id = id,
    this.status = status
}

const first = new Airport(userId,userStatus)
console.log(first)