// დავალება:
// Countdown Timer:
// Ask the user to input a number representing seconds.
// Using a while loop, countdown from the entered number to 1.
// Display each number as it counts down.
// Once the countdown reaches 1, console.log "Time's up!".

// let user = Number(prompt("enter number"))
// let i = 1
// while(user >= i ){
//     console.log(user)
//     user--
// }
// console.log("Time's up!")


// Prime Number Printer:
// Create an array.
// Start with the number 1.
// Using a while loop, iterate through numbers from 1 to 50.
// Check if the current number is Prime.
// If it is, add number to array.
// Continue to the next number and repeat until 50.
// Console.log array.

// function primeNumber(number){
//     if(number <= 1){
//         return false
//     }else{
//         return true
//     }

//     for(let i = 2; i <= Math.sqrt(number); i++){
//         if(number % i === 0){
//             return false
//         }else{
//             return true
//         }
//     }
// }

// const arr = []
// let i = 1
// while(i < 51){
//    if(primeNumber(i)){
//     arr.push(i)
//    }
   
//     i++
// }
// console.log(arr)


// Object Information Display:
// Create a program that displays basic information about a predefined object.
// Define an object representing a person with properties like name, age, and occupation.
// Display the information stored in the object to the user.


// function Person(name,age,occupation){
//     this.name = name,
//     this.age = age,
//     this.occupation = occupation
// }

// const person1 = new Person("john","walker","teacher")

// console.log(person1)




// Calculate Factorial:
// Write a program that prompts the user to enter a non-negative integer.
// Use a for loop to calculate and display the factorial of that number.

// let user = Number(prompt("enter number"))
// let factorial = 1
// for(let i = 1; i <= user; i++){
//     factorial *= i
// }
// console.log(factorial)

// Array Summation:
// Write a program that prompts the user to enter a series of numbers, separated by spaces.
// Split the input string into an array of numbers.
// Use an array method to calculate and display the sum of all the numbers in the array.


// let arr = []
// let user = Number(prompt("enter number"))
// for(let i = 1; i <= user; i++){
//     arr.push(i)
// }

// console.log(arr.reduce((acc,current) => acc + current, 0))



// Fruit Basket: Create a program that stores different fruits in an array of objects, where each object represents a fruit with properties 
//like name and color. Use a for loop to display the names of all the fruits in the basket.


// let fruitBasket = [
//     { name: "Apple", color: "Red" },
//     { name: "Banana", color: "Yellow" },
//     { name: "Grape", color: "Purple" },
//     { name: "Orange", color: "Orange" },
//     { name: "Kiwi", color: "Green" }
//   ];

// for(let i = 0; i < fruitBasket.length; i++){
//     console.log(fruitBasket[i].name)
// }


// Car Inventory: Build a simple car inventory system where each car is represented as an object with properties like brand, model, and year. 
//Store multiple car objects in an array and use a for loop to display their details.

// let cars = [
//     {name: "bmw", color: "black"},
//     {name: "mercedes", color:"black"},
//     {name: "toyota", color:"white"},
//     {name: "ferrari", color:"red"},
//     {name: "bugatti", color:"black"},
//     {name: "subaru", color:"yellow"}

// ]

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i].name,cars[i].color)
// }



// Shopping List: Develop a shopping list application where each item is represented as an object with properties like name and quantity.
//Store the items in an array of objects and use a for loop to display them.

// let product = [
//     {productName: "apple", quantity: 92},
//     {productName: "banana", quantity: 429},
//     {productName: "juice", quantity: 1098},
//     {productName: "oil", quantity: 298},
//     {productName: "floor", quantity: 105},
//     {productName: "potato", quantity: 874}

// ]

// for(let i = 0; i < product.length; i++){
//     console.log(product[i].productName,product[i].quantity)
// }



// Student Attendance Tracker: Create a student attendance tracker where each student is represented as an object with properties like name 
//and attendance status. Store multiple student objects in an array and use a for loop to display their names and attendance status.

// let student = [
//     {name: "john", status: 100},
//     {name: "maikl", status: 90},
//     {name: "tony", status: 100},
//     {name: "peter", status: 80},
//     {name: "benedict", status: 100},
//     {name: "rogers", status: 100}

// ]

// for(let i = 0; i < student.length; i++){
//     console.log(student[i].name,student[i].status)
// }


// Daily Planner: Build a simple daily planner application where each task is represented as an object with properties like description and priority.
// Store the tasks in an array of objects and use a for loop to display them.


// let appplication = [
//     {description: "sisjis", priority: "sijsji"},
//     {description: "sjisjis", priority: "sokso"},
//     {description: "sjisji", priority: "soksok"},
//     {description: "sjisji", priority: "soksok"},
//     {description: "sjisji", priority: "sokosk"},
//     {description: "sijsji", priority: "sokso"}

// ]

// for(let i = 0; i < appplication.length; i++){
//     console.log(appplication[i].description,appplication[i].priority)
// }


// Bookshelf Organizer: Create a bookshelf organizer where each book is represented as an object with properties like title and author. 
//Store multiple book objects in an array and use a for loop to display their titles and authors.

// let bookArr = [
//     {book: "me bebia iliko da ilarioni", author: "donar dumbadze"},
//     {book: "da agaravin darcha", author: "agata kristi"},
//     {book: "mrude saxli", author: "agata kristi"},
//     {book: "sami mushketeri", author: "aleqsandre diuma"}
// ]

// for(let i = 0; i < bookArr.length; i++){
//     console.log(bookArr[i].book,bookArr[i].author)
// }


// Garden Plant Tracker: Build a simple garden plant tracker where each plant is represented as an object with properties like name and watering schedule. 
// Store multiple plant objects in an array and use a for loop to display their names and watering schedules.

// let plant = [
//     {plantName: "rose", grafic: "once a week"},
//     {plantName: "strawberry", grafic: "twice a week"},
//     {plantName: "apple", grafic: "once a week"},
//     {plantName: "pear", grafic: "twice a week"}
// ]

// for(let i = 0; i < plant.length; i++){
//     console.log(plant[i].plantName,plant[i].grafic)
// }


// Recipe Steps: Develop a program that stores different recipe steps in an array of objects, where each object represents a step with properties 
//like description and duration. Use a for loop to display the descriptions and durations of all the recipe steps.


// let recipe = [
//     {recipe: "description", duration: "1 hour"},
//     {recipe: "description", duration: "4 hour"},
//     {recipe: "description", duration: "30 minute"},
//     {recipe: "description", duration: "20 minute"}
// ]

// for(let i = 0; i < recipe.length; i++){
//     console.log(recipe[i].recipe,recipe[i].duration)
// }


// Movie Ratings: Create a program that stores different movies in an array of objects, where each object represents a movie with properties like title and rating. 
//Use a for loop to display the titles and ratings of all the movies.


// let films = [
//     {filmsName: "iron man", rating: 9},
//     {filmsName: "doctor strange", rating: 10},
//     {filmsName: "capitan america", rating: 8},
//     {filmsName: "avengers", rating: 10}
// ]

// for(let i = 0; i < films.length; i++){
//     console.log(films[i].filmsName,films[i].rating)
// }


// Music Album Collection: Build a simple music album collection where each album is represented as an object with properties like title and artist. 
//Store multiple album objects in an array and use a for loop to display their titles and artists.

// let music = [
//     {musicName: "musicname", aritst: "artist"},
//     {musicName: "musicname", aritst: "artist"},
//     {musicName: "musicname", aritst: "artist"},
//     {musicName: "musicname", aritst: "artist"}
// ]

// for(let i = 0; i < music.length; i++){
//     console.log(music[i].musicName,music[i].aritst)
// }

