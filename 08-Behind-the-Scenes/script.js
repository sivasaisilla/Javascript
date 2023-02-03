'use strict';



var firstName ='sivasai';

const sivasai = {
  firstName: 'Sivasai',
  greet: ()=>{
    console.log(this);
    console.log(this.firstName);
  }
}

sivasai.greet();
