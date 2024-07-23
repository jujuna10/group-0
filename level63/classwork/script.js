function Person(name,lastName,age){
    this.name = name,
    this.lastName = lastName,
    this.age = age,
    this.info = function(){
        console.log(this.name + this.lastName + this.age)
    }
}

const person1 = new Person("john","walker",10)
console.log(person1.info())