// 'use strict';

// const Person = function(firstName,birthYear)
// {
//   this.birthYear = birthYear;
//   this.firstName = firstName;
// }

// const jonas = new Person("Jonas",1991)
// console.log(jonas)
// console.log(jonas.__proto__)
// // console.log(Person.__proto__)
// // // console.log(jonas instanceof Person)

// // //prototypes
// console.log(Person.prototype.constructor)

// Person.prototype.calcAge = function(){
//   console.log(2037-this.birthYear)
// }

// jonas.calcAge()

// console.log(jonas.__proto__)
// console.log(jonas.__proto__ === Person.prototype)

// console.log(Person.prototype.isPrototypeOf(jonas))

// Person.prototype.species ="Homo Sapiens"
// console.log(jonas.species)

// console.log(jonas.hasOwnProperty("firstName"))
// console.log(jonas.hasOwnProperty("species"))

// console.dir(x=>x+1)

// const h1 = document.querySelector('h1')
// console.dir(h1);

//CODING CHALLENGE

// const Car = function(make,speed){
//   this.make = make
//   this.speed = speed

// }

// Car.prototype.accelerate = function(){
//   console.log(this.speed += 10)
// }

// Car.prototype.brake = function(){
//   console.log(this.speed -= 5)
// }

// const bmw = new Car("BMW", 120)

// bmw.accelerate()
// bmw.accelerate()
// bmw.accelerate()
// bmw.accelerate()

// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()

// const movements = [20,30,50]

// const gin = movements.slice(-1);
// console.log(gin)

// const PersonProto ={
//   calcAge(){
//     console.log(2037-this.birthYear)
//   },

//   init(firstName,birthYear){
//     this.firstName=firstName;
//     this.birthYear=birthYear;
//   },
// }

// const steven = Object.create(PersonProto)
// console.log(steven)

//

//
// const Car = function(make,speed){
//   this.make = make
//   this.speed = speed

// }

// Car.prototype.accelerate = function(){
//   console.log(this.speed += 10)
// }

// Car.prototype.brake = function(){
//   console.log(this.speed -= 5)
// }

// const EV = function(make,speed,charge){
//   Car.call(this,make,speed)
//   this.charge =charge;
// }

// EV.prototype =Object.create(Car.prototype)

// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge=chargeTo
// }

// const tesla = new EV("tesla",120,23)
// tesla.chargeBattery(90)
// console.log(tesla)


