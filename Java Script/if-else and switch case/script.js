// scoop of var is global, it can we re-declare in same scoop
// var string1 = "this is a string1";
// var string1 = "this is a string2";
// console.log(string1);


// scoop of let is block level, it can not we re-declare in the same scoop
// let a = "u";
// {
//  let a = "u6";
//  console.log(a);
// }
// console.log(a);


// this is constant, and here we can't change the content of const variable
// const a = "this can not be changed";
// console.log(a);
// a = "I wnat to change this";
// console.log(a);




// if-else conditions

// let age = 34;
// if(age>18){
//  console.log("you can drink water");
// }
// else if(agr==2){
//  console.log("age is 2");
// }
// else{
//  console.log("you can drink cold drink");
// }



// Switch case

const cups = 45;
switch (cups) {
 case 4:
  console.log("The value of cups is 4");
  break;
 case 41:
  console.log("The value of cups is 41");
  break;
 case 42:
  console.log("The value of cups is 42");
  break;
 case 43:
  console.log("The value of cups is 43");
  break;    
 default:
  console.log("the value of cups is none of 4, 41, 42, 43");
  break;
}











