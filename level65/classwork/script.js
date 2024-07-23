// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }





// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 1){
//         arr2.push(i)
//     }else{
//         continue
//     }
// }
// console.log(arr2)



// let arr = []
// let sum = 0
// for(let i = 0; i < 100; i += 5){
//     arr.push(i)
// }
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(arr)
// console.log(sum)f


// const arr = []
// for(let i = 1; i <= 10; i++){
//     let user = Number(prompt("enter number"))
//     arr.push(user)
// }

// let sum = 0
// let multiplay = 1
// for(let i = 0; i < arr.length; i++){
//     const num = arr[i]
//     sum += num
//     multiplay *= num
//     console.log(Math.pow(num,2))
//     console.log(Math.sqrt(num))
// }
// console.log(sum)
// console.log(multiplay)




const arr = []

let ticket = Number(prompt("enter ticket"))
for(let i = 0; i < ticket; i++){
    let name = prompt("enter name")
    let lastName = prompt("enter lastname")
    let age = Number(prompt("enter age"))

    const ticketCode = generationCode()

    const userTicket = new TicketNumber(name,lastName,age,ticketCode)
    arr.push(userTicket)


}

function generationCode(){
    const numbers = [1,2,3,4,5,6,7,8,9,10]

    let code = ""
    for(let i = 0; i < 5; i++){
        let randomNumber = Math.floor(Math.random() * numbers.length);
        code += numbers[randomNumber]

    }
}

function TicketNumber(name,lastName,age,code){
    this.name = name,
    this.lastName = lastName,
    this.age = age,
    this.code = code
}



console.log(arr)  