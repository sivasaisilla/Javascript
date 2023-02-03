'use strict';

const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],

  //book: function(){}
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightnum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightnum}`, name });
  },
};

// lufthansa.book(239, 'Sivasai');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Manoj'

// call method
// book.call(eurowings, 23, 'shyam');

//apply method
// book.apply(eurowings, [23, 'shyam']);
// console.log(eurowings);

//bind method
// const bookEW = book.bind(eurowings);
// bookEW(23, 'Steven Willams');
// console.log(eurowings);

//With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

/////////////////////
//Partial Function
////////////////////
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// //as no this keyword is mentioned here we used null
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

//
//

/////////////////////////
///CODING CHALLENGE 01;
///////////////////////////
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number )`
//       )
//     );

//     //register answer
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

//
//
//

//IIFE
// (function () {
//   console.log('This will never run again');
// });

//
//
//

///////////////////
//CLOSURES
//////////////////
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
