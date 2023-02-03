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

//Partial Function

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// //as no this keyword is mentioned here we used null
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

///CODING CHALLENGE 01;
