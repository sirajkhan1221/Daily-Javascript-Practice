// Find the first non-consecutive number

// function firstNonConsecutive(arr) {
//   // loop through the  end of the array
//   for (let i = 0; i < arr.length - 1; i++) {
//     // check if the next element is not prev one +1
//     var current = arr[i];
//     var next = arr[i + 1];
//     if (current + 1 !== next) {
//      return arr[i + 1];
//     }
// }
// return null;
// }

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// No oddities here
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// solution 1
// function noOdds(values) {
//   let oddArr = [];
//   // loop thru the array
//   for (let i = 0; i < values.length; i++) {
//     // check if the element is not odd number
//     // if the remainder of the division by 2 is 0
//     if (values[i] % 2 == 0) {
//       // push the element in the odd array
//       oddArr.push(values[i]);
//     }
//   }
//   return oddArr;
// }

// solution 2

// filter methods is used to filter out elements form an array.
// function noOdds(values) {
// return values.filter((value)=> value%2 == 0);
// }


// console.log(noOdds([0, 1, 2, 3]));

// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0

// function positiveSum(arr) {
// let sumArray = []
// let sum = 0;
//     //   loop through the array
// for (let i = 0; i < arr.length; i++) {
//     // check the positive numbers
//     // take all positive numbers and add them
//     if(arr[i]>=0){
//         sum = sum +arr[i];
//     }    
// }
// return sum;
// }

// console.log(positiveSum([1,-4,7,12]));

// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// function abbrevName(name){
// // let splitName = name.toUpperCase().split(' ');
//   // let firstIntial = splitName[0];
//   // let secondIntial = splitName[1];
//   // return firstIntial[0] + '.' +secondIntial[0];
// }

// // 2nd solution
// function abbrevName(name){
//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')
//   }


// console.log(abbrevName("Sam Harris"));

// Short Long Short

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"


// function solution(a, b){
//   // your code here
//   // find the largest length from the two given strings 
//  return a.length >b.length ? b+a+b  :  a+b+a;
// }


// console.log(solution('45', '1'));

// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// function sumMix(x){
// loop
// find typeof value
// if string then convert to int
// add all the values 
// let sum = 0;
// for (let i = 0; i < x.length; i++) {
//   const element = x[i];
//    sum = Number(sum) + Number(element);
// }
// return sum;

// return x.reduce((accum,value)=> Number(accum)+ Number(value),0)
// }

// console.log(sumMix([9, 3, '7', '3']))