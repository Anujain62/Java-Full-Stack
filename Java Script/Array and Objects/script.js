
//type of variables 
// let myVar1 = 34;
// let myVar2 = "String";
// let myVar3 = true;
// let myVar4 = null;
// let myVar5 = undefined;



// manual object
// let employee = {
//  name : "harry",
//  salary: 10,
//  channel1: "CodeWithHarry",
//  "channel 2": "ProgrammingWithHarry"
// }
// console.log(employee);



// type of object creation
// var testObj = {
//  "an entree": "hamburger",
//  "my side" : "veggies",
//  "the drink" : "water"
// };
// var entreeValue = testObj["an entree"];
// var drinkValue = testObj['the drink'];
// console.log(entreeValue);
// console.log(drinkValue);



// check specific value in object
// var myObj = {
//  gift : "pony",
//  pet : "kitten",
//  bed : "sleigh"
// };
// function checkObj(checkProp){
//  if(myObj[checkProp]){
//   return myObj[checkProp];
//  }
//  else{
//   return "Not found";
//  }
// }
// console.log(checkObj("gift"));
// console.log(checkObj("hello"));



// Accessing complex array with multiple objects
// var myMusic = [
//  {
//   "artist" : "Billy Joel",
//   "title" : "Piano man",
//   "release_year" : 1973,
//   "formats": [
//    "CD",
//    "8T",
//    "LP"
//   ],
//   "gold" : true
//  },
//  {
//   artist : "Beau Carnes",
//   title : "Cereal Man",
//   release_year : 2003,
//   formats : [
//    "YouTube video",
//    "Google"
//   ]
//  }
// ];
// var firstMusic = myMusic[0].artist;
// console.log(firstMusic);
// var secondMusic = myMusic[1].formats[1];
// console.log(secondMusic);



//Accessing nested objects
// var myStorage = {
//  "car" :{
//   "inside": {
//    "glove box" : "maps",
//    "passenger seat": "crumbs"
//   },
//   outside : {
//    trunk : "jack"
//   }
//  }
// };
// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);
// var gloveBoxContents = myStorage.car.outside["trunk"];
// console.log(gloveBoxContents);



// Array
// 1st type for array defining
// let names = [1, 2, 4, "harry", undefined];

// 2nd type for array defining
// let names = new Array(19, 2, 4, "harry", undefined);
// console.log(names);

// 3rd type for array defining
// let names = new Array(23);
// console.log(names);

// console.log(names.length);

// names.push("this is pushed");
// console.log(names);


// mutate an array declared with const
// const s = [5,7,2];
// function editInPlace(){

//  // it gives error
//  // s = [2,5,7];

//  s[0] = 2;
//  s[1] = 5;
//  s[2] = 7;
// }
// editInPlace();
// console.log(s);


// prevent object mutation
// function freezeObj(){
//  const Math_CONSTANTS = {
//   PI: 3.14
//  };
//  // for no changing in object
//  Object.freeze(Math_CONSTANTS);
//  try{
//   Math_CONSTANTS.PI = 99;
//  }catch(ex){
//   console.log(ex);
//  }
//  return Math_CONSTANTS.PI;
// }
// const PI = freezeObj();
// console.log(PI);







