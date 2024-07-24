
//1

// let num1=10;
// let num2=15;

// console.log(`Before swap: num1 = ${num1}, num2 = ${num2}`);
// [num1 ,num2]=[num2,num1];
// console.log(`After swap: num1 = ${num1}, num2 = ${num2}`);







//2

//using Implemented function

// function GetMin(...ARGS) {
//     let minArr = 99999999999999;
//     for (let i = 0; i < ARGS.length; i++) {
//         if (minArr > ARGS[i]) {
//             minArr = ARGS[i];
//         }
//     }
//     return minArr
    
// }

// console.log(GetMin(32, 7, 9, 4, 5));

// function GetMax(...ARGS) {
//     let maxArr = 0;
//     for (let i = 0; i < ARGS.length; i++) {
//         if (maxArr < ARGS[i]) {
//             maxArr = ARGS[i];
//         }
//     }
//     return maxArr
    
// }

// console.log(GetMax(32, 7, 9, 4, 5));




//using Built in function

function GetMin(...ARGS) {
   let min=Math.min(...ARGS);
   return min
}
console.log(GetMin(32, 7, 9, 4, 5));


function GetMax(...params) {
    let max=Math.max(...params);
    return max;
}
console.log(GetMax(32,145,53,67,88));



// //3


// const apiUrl = 'https://api.jsonbin.io/v3/b/669b9d75ad19ca34f88a4d1b';

// const headers = {
//   'X-MASTER-KEY': '$2a$10$K.10CRqSAm99ZwWGiMxDHORRFKhfdP0A/Wwo3WcJFTLAWUGBXD7w.',
//   'X-ACCESS-KEY': '$2a$10$8BmvO/bzBLf6ofLZaBg.o.VGtiH7P2gIebPlvbVcSBJ95JLoSdZgi',
// };

// let fruits = [];
// let isRounded = false;

// fetch(apiUrl, { headers })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();  
//   })
//   .then(data => {
//     fruits = data.record && data.record.fruits;
//     if (!fruits) {
//       console.log('No fruits array found in the response');
//     }
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error); 
//   });

// const displayFruits = (filteredFruits) => {
//   const resultsContainer = document.getElementById('results');
//   resultsContainer.innerHTML = '';  
//   filteredFruits.forEach(fruit => {
//     if (fruit.image) { 
//       const fruitItem = document.createElement('div');
//       fruitItem.classList.add('fruit-item');

//       const img = document.createElement('img');
//       img.src = fruit.image;
//       img.alt = fruit.name;

//       const name = document.createElement('p');
//       name.textContent = fruit.name;

//       fruitItem.appendChild(img);
//       fruitItem.appendChild(name);

//       resultsContainer.appendChild(fruitItem);
//     }
//   });

//   if (isRounded) {
//     document.querySelectorAll('.fruit-item img').forEach(img => {
//       img.style.borderRadius = '50%';
//     });
//   }
// };

// document.getElementById('stringTest').addEventListener('click', () => {
//   if (fruits) {
//     let allAreStrings = fruits.every(fruit => typeof fruit.name === 'string');
//     let message = allAreStrings ? "All fruits have string names" : "Not all fruits have string names";
//     let resultsContainer = document.getElementById('results');
//     resultsContainer.innerHTML = `<p>${message}</p>`;
//   }
// });

// document.getElementById('filterStartWithA').addEventListener('click', () => {
//   if (fruits) {
//     const filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().startsWith('a'));
//     displayFruits(filteredFruits);
//   }
// });

// document.getElementById('filterStartWithBOrS').addEventListener('click', () => {
//   if (fruits) {
//     const filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().startsWith('b') || fruit.name.toLowerCase().startsWith('s'));
//     displayFruits(filteredFruits);
//   }
// });

// document.getElementById('displayAll').addEventListener('click', () => {
//   if (fruits) {
//     displayFruits(fruits);
//     isRounded = false;
//     document.querySelectorAll('.fruit-item img').forEach(img => {
//       img.style.borderRadius = '0';
//     });
//   }
// });

// document.getElementById('roundedButton').addEventListener('click', () => {
//   isRounded = !isRounded;
//   document.querySelectorAll('.fruit-item img').forEach(img => {
//     img.style.borderRadius = isRounded ? '50%' : '0';
//   });
// });
