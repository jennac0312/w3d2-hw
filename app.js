class Hamster{
    constructor(owner, name, price){
        this.owner = '',
        this.name = name,
        this.price = 15
    }
    wheelRun(){
        console.log(`squeak squeak`)
    }
    eatFood(){
        console.log(`nibble nibble`)
    }
    getPrice(){
        return this.price
    }
}


class Person{
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name,
        this.age = 0,
        this.height = 0,
        this.weight = 0,
        this.mood = 0,
        this.hamsters = [],
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hello, I am ${this.name}`)
    }
    eat(times){
        for(let i = 0; i < times; i++){
            this.weight++
            this.mood++
        }
    }
    exercise(times){
        for(let i = 0; i < times; i++){
            this.weight--
        }
    }
    ageUp(years){
        for(let i = 0; i < years; i++){
            this.age++ 
            this.height++
            this.weight++
            this.mood--
            this.bankAccount+=10
        }
    }
    buyHamster(hamster){
        // this.hamsters.push(new Hamster(this.name)) //not sure how to access Hamster ?parameters?
        this.hamsters.push(hamster)
        this.mood+=10
        this.bankAccount-= this.hamsters[this.hamsters.length-1].getPrice()
    }
}

// instantiate a new Person named timmy
let timmy = new Person('Timmy')
console.log(timmy)

// Age Timmy five years .... should his mood decrease by this amount too? and his bank by 5x ?unclear
timmy.ageUp(5)
console.log(timmy)

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.

// call individually? feels inefficient  
// timmy.eat()
// timmy.eat()
// timmy.eat()
// timmy.eat()
// timmy.eat()

// loop? feels not dynamic enough
// for(let i = 0; i < 6; i++){
//     timmy.eat()
// }

//or give eat() method a parameter like age
timmy.eat(5)
console.log(timmy)

// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise(5)
console.log(timmy)

// Age Timmy 9 years
timmy.ageUp(9)
console.log(timmy)

// Create a hamster named "Gus"
let gus = new Hamster('', 'Gus')
console.log(gus)

// Set Gus's owner to the string "Timmy"
gus.owner = 'Timmy'
console.log(gus)

// Have Timmy "buy" Gus  ..... bit confused. i switched up buyHamster() method to work with new info from above
timmy.buyHamster(gus)
console.log(timmy)

// Age Timmy 15 years
timmy.ageUp(15)
console.log(timmy)

// Have Timmy eat twice
timmy.eat(2)
console.log(timmy)

// Have Timmy exercise twice
timmy.exercise(2)
console.log(timmy)



// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners

class Dinner{
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer,
        this.entree = entree,
        this.dessert = dessert
    }
    chef(app, entree, dessert){
        return newDinner(app)
    }
}

class Chef{
    constructor(){

    }
    newDinner(app, entree, dessert){
        return new Dinner(app,entree,dessert)
    }
}
