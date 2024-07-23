//2) გააკეთეთ კონსტრუქტორი რომელიც შეგიქმნით სკოლის მოსწავლის id_ს რომელიც შედგება (სახელი გვარი ქულა)

// function Student(name,lastName,grade){
//     this.name = name,
//     this.lastName = lastName,
//     this.grade = grade
// }

// const student1 = new Student("john","walker",10)
// console.log(student1)



//3) გააკეთეთ 5 მაგალითი კონსტრუქტორის და ნამუშევარი ატვირთეთ github ზე



function Person(name,lastName,age){
    this.name = name,
    this.lastName = lastName,
    this.age = age
}

const person1 = new Person("john","walker",10)



function Grades(math,engilsh,chemistry){
    this.math = math,
    this.engilsh = engilsh,
    this.chemistry = chemistry
}

const grades1 = new Grades(10,10,10)



function Account(name,email,password){
    this.name = name,
    this.email = email,
    this.password = password
}

const account1 = new Account("john","josjsjod@gmail.com",1234)



function Airport(id,status,){
    this.id = id,
    this.status = status
}

const airport = new Airport(10,10,10)


function Car(year,color,model){
    this.year = year,
    this.color = color,
    this.model = model
}

const car = new Car(2024,"black","bmw")


console.log(person1)
console.log(grades1)
console.log(account1)
console.log(airport)
console.log(car)