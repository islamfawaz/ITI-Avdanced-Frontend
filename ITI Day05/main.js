// 1.1. Create a function that accepts only 2 parameters and throw exception if number of parameters eith

// function Accept2Parameter(a,b) {
//     if (arguments.length!=2) {
//         throw new Error('function requires two parameters.');
//     }
//     return a*b;
// }

// console.log(Accept2Parameter(2,6));
// console.log(Accept2Parameter(2,6,3));


// 1.2. Write your own function that can add n values ensure that all passing parameters are numerical values only.
// function Add(...arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i]!=='number'|| isNaN(arr[i])) {
//             throw new Error('All arguments must be numerical.');
//         }

//     }
//     let sum=0
//     for (let i = 0; i < arr.length; i++) {

//         sum+=arr[i];
//     }
//     return sum;
    // return args.reduce((sum, num) => sum + num, 0);
//}


//console.log(Add(1,2,3)); 

//console.log(Add(1,2,'3')); 


//1.3. Write a function that takes any number of parameters and returns them reversed using array’s reverse function.
  

function reverse(arr) {
  var reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr.push(arr[i]);
  }
  console.log(reversedArr);
  return reversedArr.reverse();
}

console.log(reverse([1, 2, 3, 4, 5]));

//  1- Fill an array of 5 elements from the user, sort it in descending and ascending
//  orders then display the output as shown in Fig

// function sortValues() {
//   const input = document.getElementById('inputValues').value;
//   const values = input.split(',').map(Number);

//   if (values.some(isNaN)) {
//     alert('Please enter only numerical values separated by commas.');
//     return;
//   }

//   const sorted = sortArray(values);

//   document.getElementById('enteredValues').textContent = values.join(', ');
//   document.getElementById('sortedDescending').textContent = sorted.descending.join(', ');
//   document.getElementById('sortedAscending').textContent = sorted.ascending.join(', ');
// }

// function sortArray(arr) {
//   // Create a copy of the array for ascending order
//   const ascendingArr = arr.slice().sort(function(a, b) {
//     return a - b;
//   });

//   // Create a copy of the array for descending order
//   const descendingArr = arr.slice().sort(function(a, b) {
//     return b - a;
//   });

//   return {
//     ascending: ascendingArr,
//     descending: descendingArr
//   };
// }
