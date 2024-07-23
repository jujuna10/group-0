// const d = new Date()
// console.log(d.getFullYear())
// console.log(d.getMonth())
// console.log(d.getDay())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getMilliseconds())


// console.log(d.setFullYear(2000))
// console.log(d.setMonth(10))
// console.log(d.setHours(20))
// console.log(d.setMinutes(12))
// console.log(d.setMilliseconds(2000))



// let i = 0

// setInterval(function(){
//     i++
//     console.log("hello",i)
// },1000)



// setInterval(function(){
//     const d = new Date()
//     console.log(d.toString())
// },1000)



// let second = 0
// let minute = 0
// let hour = 0

// setInterval(function(){
//     second++
//     if(second == 11){
//         second = 0
//         minute++
//         if(minute == 11){
//             minute = 0

//             hour++
//         }
//     }
//     console.log(hour,minute,second)
// },1000)



let second = 10
let minute = 2

const timer = setInterval(function(){
    second--
    if(second == 0){
        second = 10
        minute--
        if(minute == 0){
            clearInterval(timer)
        }
    }
    console.log(minute,second)
},1000)