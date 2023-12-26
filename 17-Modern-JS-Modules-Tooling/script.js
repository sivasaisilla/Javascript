import './shoppingCart.js';
console.log('Importing Module');

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [{ product: 'bread', quantity: 5 }],
  user: {
    name: 'sivasai',
  },
};

const stateClone = cloneDeep(state)
console.log(stateClone)  