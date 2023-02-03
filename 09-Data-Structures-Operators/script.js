'use strict';



// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [1, 5 ,8];

// const[x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main,secondary] =restaurant.categories;
// console.log(restaurant.categories);
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse]= restaurant.order(2,0);
// console.log(starter, mainCourse);

// const nested = [2,4,[5,6]];

// const[i, ,[j,k]] = nested;
// console.log(i,j,k);

// const mainMenuOut = [...restaurant.mainMenu];
// console.log(...mainMenuOut);
// // console.log(restaurant.mainMenu);

// const add = function(mushorrom, ...numbers){
//   console.log(numbers);
//   console.log(mushorrom)
// }

// add(2,5,8,7);

// console.log(0||undefined);

// console.log(game.score)
// // const [players1, players2] = game.players;
// // // console.log(players1);

// // const [gk, ...fieldPlayers] = players1;
// // // console.log(gk, fieldPlayers);

// // const allplayers = [...players1, ...players2];
// // // console.log(allplayers);

// // const players1Final = [...players1, ...['Thiago', 'Coutinho', 'Perisic']];
// // // console.log(players1Final);

// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// // // console.log(team1, draw, team2);

// // const printGoals = function (...players) {
// //   console.log(`${players.length} goals were scored`)
// //   for (let i = 0; i < players.length; i++) {
// //     console.log(players[i]);
// //   }

// // };

// // printGoals(...game.scored);

// const arr = ['team1', 'team2'];
// const score= '4:0';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: 4.0,
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// let i =1;
// for (const player of game.scored){
//   console.log(`Goal${i}: ${player}`);
//   i++
// }
// const odd = Object.values(game.odds);
// let sum=0;
// for(const item of odd){
//   sum+=item;
// }
// console.log(`Average is ${sum/3}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const question = new Map([
//   ['question', 'What is the best language?'],
//   [1, 'c'],
//   [2, "java"],
//   [3, "Javascript"]
// ])

// console.log(question)
// console.log(...question)
// console.log([...question])

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// const arr=[...new Set(gameEvents.values())];
// console.log(arr);

// const newName = ['mr.', "Sivasai", "Silla"].join("  ");
// console.log(newName);

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i,n] of rows.entries()) {
//     const [first, second] = n.toLowerCase().trim().split('_');
//     const output = [first,second[0].toUpperCase(),second.slice(1)].join(""); 
//     console.log(`${output.padEnd(20," ")}${'❤️'.repeat(i+1)}`);
//   }
// });


//Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
