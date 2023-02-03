// function percentageOfWorld1(population){
//   return (population/7900)*100;
// }

// console.log(percentageOfWorld1(1300));
// console.log(percentageOfWorld1(25));
// console.log(percentageOfWorld1(1441));

// const percentageOfWorld2 = function(population){
//   return (population/7900)*100;
// }

// console.log(percentageOfWorld2(2500));

// const percentageOfWorld3 = population => (population/7900)*100;

// console.log(percentageOfWorld3(15));

// const describePopulation = (country,population)=>{
//   const percentage = percentageOfWorld1(population);
//   return `${country} has ${population} million people, which is about ${percentage} of the world`;
// }

// console.log(describePopulation('India',1300));
// console.log(describePopulation('Pakistan',300));
// console.log(describePopulation('China',1440));

// const population = ['1300', '400', '1440', '65'];

// const percentageOfWorld = (number)=>{
//   return number/7900;
// }

// const percentages = [percentageOfWorld(population[0])]

// const neighbours = ['china', 'pakistan', 'bangladesh'];

// neighbours.push("utopia");
// neighbours.pop();
// if(!neighbours.includes("germany")){
//   console.log("Probably not a central european country :D")
// }

// neighbours[neighbours.indexOf("pakistan")] = "Republic of Pakistan";

// console.log(neighbours);

// const siva = {
//   firstName: "Sivasai",
//   lastName: "Silla",
//   age : 20,
//   friends: ['tarun','kranthi','dileep']
// }

// console.log(`${siva.firstName} has ${siva.friends.length} friends, and his best friend is called ${siva.friends[0]}`);
// const myCountry = {
//   country: 'Finland',
//   capital: 'Helsinki',
//   language: 'finnish',
//   population: 6,
//   neighbours: ['Norway', 'Sweden', 'Russia']
//   };

// console.log(
//   `${myCountry.country} has ${myCountry.population} million
//   ${myCountry.language}-speaking people,
//   ${myCountry.neighbours.length} neighbouring countries and
//   a capital called ${myCountry.capital}.`
//   );
//   myCountry.population += 2;
//   console.log(myCountry.population);
//   myCountry['population'] -= 2;
//   console.log(myCountry.population);

// const myCountry = {
//   country: 'Finland',
//   capital: 'Helsinki',
//   language: 'finnish',
//   population: 6,
//   neighbours: ['Norway', 'Sweden', 'Russia'],

//   describe: function(){
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
//   },

//   checkIsland: function(){
//     this.isIsland = this.neighbours.length ===0 ? true: false;
//     return this.isIsland;
//   }
// };

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());

// const percentageOfWorld = (number)=>{
//   return number/7900;
// }

// const population = ['1300', '400', '1440', '65'];
// const percentages2 =[];

// for(let i=0;i<population.length;i++){
//   percentages2[i] = percentageOfWorld(population[i]);
// }

// console.log(percentages2);

// const listOfNeighbours = [
//   ["Canada", "mexico", "spain"],
//   ["Norway", "sweden", "Russia"],
// ];

// for (i = 0; i < listOfNeighbours.length; i++) {
//   for (j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(listOfNeighbours[i][j]);
//   }
// }

// const percentageOfWorld = (number) => {
//   return number / 7900;
// };

// const population = ["1300", "400", "1440", "65"];
// const percentages3 = [];

// let i = 0;
// while (i < population.length) {
//   percentages3[i] = percentageOfWorld(population[i]);
//   i++;
// }

// console.log(percentages3);
