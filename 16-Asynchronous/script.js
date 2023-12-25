'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Country not found');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };

// getCountryData('sshfgbdfhfgh');

//coding challenge

// const whereAmI = function (lat, lon) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };

// whereAmI(18.77, 84.4);

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.
      addEventListener('error', function () {
        reject(new Error('Image not found'));
      });
  });
};


const loadNpause =async function(){
  try{
    
  }
  catch(err){}
}