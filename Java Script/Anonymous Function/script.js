// use arrow functions to write concise anonymous functions

// this is anonymous function
// var magic = function(){
//  return new Date();
// };

// Arrow function
// 1)
// var magic = () => {
//  return new Date();
// };

// 2) this is used when function is return only one value
// var magic = () => new Date();
// const magic = () => new Date();



// arroow functions with parameters
// anonymous function
// var myConcat = function(arr1, arr2){
//  return arr1.concat(arr2);
// };

// arrow function
// var myConcat = (arr1,arr2) => arr1.concat(arr2);
// console.log(myConcat([1,2],[3,4,5])); 



// higher order arrow functions

// 1) square of positive integers
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34,-2]
// const squareList = (arr) => {
//  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
//  return squaredIntegers;
// };
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// 2) increment by given value
// const increment = (function(){
//  return function increment(number, value=1){
//   return number+value;
//  };
// })();
// console.log(increment(5,2));
// console.log(increment(5));



// the rest operator with function parameters

// normal function
// const sum = (function() {
//  return function sum(x, y, z){
//   const args = [x,y,z];
//   return args.reduce((a,b)=>a+b, 0);
//  };
// })();
// console.log(sum(1,2,3));

// rest function
// const sum = (function() {
//  return function sum(...args){
//   return args.reduce((a,b)=>a+b, 0);
//  };
// })();
// console.log(sum(1,2,3,10));



// the spread operator to evaluate arrays In-place
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function(){
//  arr2 = [...arr1];
//  arr1[0] = 'potato'
// })();
// console.log(arr1);
// console.log(arr2);



// use destructuring assignment to assign variables from objects
// var voxel = {x: 3.6, y: 7.4, z: 6.54};
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;
// const {x: a, y: b, z: c} = voxel;
// const AVG_TEMPERATURES = {
//  today: 77.5,
//  tomorrow: 79
// };
// function getTempOfTmrw(avgTemperatures){
//  const {tomorrow: tempOfTomorrow } = avgTemperatures;
//  return tempOfTomorrow;
// }
// console.log(getTempOfTmrw(AVG_TEMPERATURES));



// destructuring assignment with nested objects
// const LOCAL_FORECAST = {
//  today: {min: 72, max: 83},
//  tomorrow: {min:73.3, max:84.6}
// };
// function getMaxOfTmrw(forecast){
//  const {tomorrow: { max: maxOfTomorrow}} = forecast;
//  return maxOfTomorrow;
// }
// console.log(getMaxOfTmrw(LOCAL_FORECAST));



// use destructuring assignment to assign variables from arrays
// const [z,x, ,y] = [1,2,3,4,5,6];
// console.log(z,x,y);
// let a = 8, b = 6;

// // they are swaped
// (() => {
//  [a,b] = [b,a];
// })();
// console.log(a,b);



// use destructuring assignment with the rest operator
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list){
//  const [ , , ...arr] = list;

//  return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);



// use destructuring assignment to pass an object as a function's parameters

// const stats = {
//  max: 56.78,
//  standard_deviation: 4.34,
//  median: 34.54,
//  mode: 23.87,
//  min: -0.75,
//  average: 35.85
// };
//1) direct object pass
// const half = (function() {
//  return function half(stats){
//   return (stats.max+stats.min)/2.0;
//  };
// })();
// 2) object passing as required parameter
// const half = (function() {
//  return function half({max,min}){
//   return (max+min)/2.0;
//  };
// })();
// console.log(stats);
// console.log(half(stats));



// create strings using template literals

// const person = {
//  name: "Zodiac Hasbor",
//  age: 56
// };
// // template literal with multi-line and string interpolation
// const greeting = `hello,my name is ${person.name}! I am ${person.age} years old.`;
// console.log(greeting);



// const result = {
//  success: ["max-length", "no-amd", "prefer-arrow-functions"],
//  failure: ["no-var", "var-on-top", "linebreak"],
//  skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr){
//  const resultDisplayArray = [];
//  for(let i=0;i<arr.length;i++){
//   resultDisplayArray.push(`<li class="text-warning>${arr[i]}</li>`)
//  }
//  return resultDisplayArray;
// }
// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);




// write concise object literal declarations using simple fields
// 1st type
// const createPerson = (name, age, gender) => {
//  return {
//   name: name,
//   age: age,
//   gender: gender
//  };
// };
// 2nd type
// const createPerson = (name, age, gender) => ({name, age, gender});
// console.log(createPerson("Zodiac Hasbro", 56, "male"));




// write concise declarative functions
// const bicycle = {
//  gear: 2,
//  setGear: function(newGear){
//   this.gear = newGear;
//  }
//  // 2nd type
//  // setGear(newGear){
//  //  this.gear = newGear;
//  // }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);




// use class syntax to define a constructor function
// class SpaceShuttle{
//  constructor(targetPlanet){
//  this.targetPlanet = targetPlanet;
//  }
// }
// var zeus = new SpaceShuttle('Jupiter');
// console.log(zeus.targetPlanet);




//use getters and setters to control access to an object
// class Book{
//  constructor(author){
//   this._author = author;
//  }
//  get writer(){
//   return this._author;
//  }
//  set writer(updatedAuthor){
//   this._author = updatedAuthor;
//  }
// }

// // Eg. -> getter and setters are normally used like variable
// function makeClass(){
//  class Thermostat{
//   constructor(temp){
//    this._temp = 5/9 *(temp-32);
//   }
//   get temperature(){
//    return this._temp;
//   }
//   set temperature(updatedTemp){
//    this._temp = updatedTemp;
//   }
//  }
//  return Thermostat;
// }
// const Thermostat = makeClass();
// const thermos = new Thermostat(76);
// let temp = thermos.temperature;
// thermos.temperature = 26;
// temp = thermos.temperature;
// console.log(temp);





// understand the differences b/w import and require
const cap = capitalizeString("hello!");
console.log(cap);














