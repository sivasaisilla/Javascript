"use strict";

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const country1 = describeCountry("Finland", "6", "Helenski");
// console.log(country1);

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAverage = (score1,score2,score3)=> (score1+score2+score3)/3;

// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);

// const checkWinner = (avgDolphins, avgKoalas)=>{
//   if(avgDolphins>=2*avgKoalas){
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   }

//   else if(avgKoalas>=2*avgDolphins){
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   }

//   else{
//     return `no team wins`;
//   }
// }

// console.log(checkWinner(avgDolphins,avgKoalas));

// const years = new Array(1991,1992,1993);
// console.log(years);

// function calcAge1(birthYear){
//   return 2037-birthYear;
// }

// const friends = ['micheal', 'tarun', 'kranthi'];

// console.log(friends.length);

// const calcTip = (bill) => {
//   return bill>=50 && bill<=300 ? 0.15 : 0.20;
// }

// const bills = [125, 555, 44];
// const tips = [bills[0]*calcTip(bills[0]), bills[1]*calcTip(bills[1]), bills[2]*calcTip(bills[2])];

// console.log(tips);

// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

// console.log(total);

// const siva = {
//   firstName: "Sivasai",
//   lastName: "Silla",
//   birthYear: 2002,
//   hasDriverLicense: true,

//   calcAge:  function(){
//     this.age = 2037-this.birthYear;
//     return this.age;
//   }
// }
// siva.calcAge();
// console.log(`${siva.firstName} is a ${siva.age}-year old teacher, and he has ${siva.hasDriverLicense === true?'a':'no'} driver's license`)

// const mark = {
//   fullName: "Mark",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function(){
//     this.BMI= this.mass/(this.height*this.height);
//     return this.BMI;
//   }
// }

// const john = {
//   fullName: "John",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function(){
//     this.BMI= this.mass/(this.height*this.height);
//     return this.BMI;
//   }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(``)\

// for(let i=0; i<=50; i++){
//   console.log(`voter number ${i} is currently working`)
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips[i] = calcTip(bills[i]);
//   totals[i] = bills[i] + tips[i];
// }

// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));

// console.log();

// console.log("Siva");
