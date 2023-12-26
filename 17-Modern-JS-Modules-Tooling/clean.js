'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jonas =20;
console.log(spendingLimits);

//making pure function
const getLimit = (limits, user) => limits?.[user] ?? 0;

//making pure functions
const addExpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  //using default parameters
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user]:0
  // const limit = getLimit(user)

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, cleanUser }]
    : state;

  // budget.push({ value: -value, description, cleanUser );
};
const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpenses(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

//making pure functions
const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
  // for (const entry of newBudget3) {
  //   // const limit = spendingLimits[entry.user] ? spendingLimits[entry.user]:0
  //   // const limit = spendingLimits?.[entry.user]??0
  //   //refactoring code as a function

  //   if (entry.value < -getLimit(entry.user)) {
  //     entry.flag = 'limit';
  //   }
};
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);


// impure fuunction (as it is logging the value) but still we dont mutate the data
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => {
      entry.value <= -bigLimit;
    }).map(entry => entry.description.slice(-2)).join(' / ');

    console.log(bigExpenses)
    // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  //   // if (entry.value <= -bigLimit) {
  //   //   output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(newBudget3, 1000);
