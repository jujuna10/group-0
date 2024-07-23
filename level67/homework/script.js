// Real-time Clock:
// Create a digital clock that displays the current time, updating every second using setInterval.

// setInterval(function(){
//     const d = new Date()
//     console.log(d.getHours(),": " + d.getMinutes(),": " + d.getSeconds())
// },1000)


// Calculate Area of a Circle:
// Write a function that calculates the area of a circle given its radius.

// function circle(radius){
//     console.log(Math.PI * (Math.pow(radius,2)))
// }
// console.log(circle(5))

// Convert String to Kebab Case:
// Write a function that takes a string as input and converts it to kebab case. Kebab case is a naming convention where words are
// separated by hyphens ("-"). For example, "helloWorld" would be converted to "hello-world".

// Countdown Timer:
// Write a function that takes a target date and displays a countdown timer that updates every second until reaching the target date,
// utilizing setInterval.

// Get Day of the Week:
// Write a function that takes a date as input and returns the day of the week in full (e.g., "Monday", "Tuesday", etc.).

// function dateDay(date){
//     weekDay = ["or","sa","ot","xu","pa","shab","kvir"]
//     console.log(weekDay[date.getDay()])
// }

// const d = new Date()
// console.log(dateDay(d))

// Get Current Date in Different Formats:
// Write a function that returns the current date in three different formats:
// dd/mm/yyyy
// mm/dd/yyyy
// yyyy-mm-dd

// const d = new Date("2024-04-10")
// console.log(d)

// const d1 = new Date("04/10/2024")
// console.log(d1)

// const d2 = new Date("Apr 10 2024")
// console.log(d2)



// Check if a Given Date Falls on a Leap Year:
// Write a function that takes a date as input and returns true if the year of the given date is a leap year, otherwise false.

// function leapYear(){
//     const d = new Date()
//     if(d.getFullYear % 4 === 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(leapYear())

// Calculate Difference in Days Between Two Dates:
// Write a function that takes two dates as input and returns the difference in days between them.




// Calculate Age in Years:
// Write a function that takes a birthdate as input and returns the age of a person in years, considering the current date.



// function birthday(year){
//     const d = new Date()
//     console.log(d.getFullYear() - year)

// }

// let date = "2024-07-13";

// let datee = new Date(date)
// console.log(birthday(datee.getFullYear(datee)))