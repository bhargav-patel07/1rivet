//         const cars=['audi','bmw','lamborgini','maclern','buggati','lexus'];
//         console.log(cars.includes(2));
//         console.log(cars.indexOf('lexus'));
//         console.log(cars.pop());
//         console.log(cars.push('maruti'));
//         const firstElement = cars.shift();
// console.log(cars);
// console.log(cars.slice(2));
// console.log(cars.slice(2, 4));
// cars.sort();
// console.log(cars);

// // map arry
//      

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);

// // entries
// const array2 = ['a', 'b', 'c'];

// const iterator1 = array2.entries();

// console.log(iterator1.next().value);

// console.log(iterator1.next().value);

// // every
// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array3 = [1, 30, 39, 29, 10, 13];

// console.log(array3.every(isBelowThreshold));
// // some
// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // REDUCE
// const array4 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array4.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// date piker
// $

//   const today = new Date();
// const someday = new Date();
// someday.setFullYear(2001, 1, 14);

// if (someday > today) {
//   text = "Today is before January 14, 2100.";
// } else {
//   text = "Today is after January 14, 2100.";
// }

// const date = new Date();

// console.log(
//   date.toLocaleString('en-US', {
//     timeZone: 'America/New_York',
//     dateStyle: 'full',
//     timeStyle: 'full',
//   }),
// ); 
// concat method joins tow or more arrays
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];

// const children = arr1.concat(arr2, arr3); 
// document.getElementById("demo").innerHTML = children;

// FILTERS
// let words = ['bhargav','mittal','nikunj','ayush','kiran','hiral'];
 
// let result = words.filter(word => word.length>6);

// console.log(result);
// find
// let array = [1,2,3,4,5,6,7];
// let found = array.find(element => element < 3);

// console.log(found);

// // find index
//  let array1 = [10,20,30,40,50,60];
//  let largenumber = array1.findIndex(a => a >30);
//  console.log(largenumber);
//  for each
// const array3  = ['a','b','c'];
// array3.forEach(bhargav => console.log(bhargav));
// // index of
// let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));

// console.log(beasts.indexOf('bison', 2));

// console.log(beasts.indexOf('giraffe'));
// join
// let elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // map
// let map1 = [1, 4, 9, 16];
// let map2 = map1.map(x => x * 2);
// console.log(map2);
// // reduce
// let apple = [1,2,3,4,5];
// let initialValue = 0;
// let sumWithInitial = apple.reduce((previousValue, currentValue) => previousValue+currentValue,initialValue);
// console.log(sumWithInitial);
// // shift
// let array3 = [1,2,3];
// let firstElement = array3.shift();
// console.log(array3);
// console.log(firstElement);

// create Objects-------
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
 
console.log(fruits);