// function one(call_two){
//  console.log("step 1 complete.Please call step 2.");
//  call_two();
// }
// function two(){
//  console.log("Step 2");
// }
// one(two);





// let order = (call_production) => {
//  console.log("order placed, please call production.")
//  call_production();
// };
// let production = () => {
//  console.log("order received, starting production");
// };
// order(production);





// callback hell
// order to serve process
// let stocks = {
//  Fruits: ["strawberry", "grapes", "banana", "apple"],
//  liquid: ["water", "ice"],
//  holder: ["cone", "cup", "stick"],
//  toppings: ["chocolate", "peanuts"]
// };

// let order = (Fruit_name, call_production) => {
//  setTimeout(() => {
//   console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//   call_production();
//  }, 2000);
// };

// let production = () => {
//  setTimeout(() => {
//   console.log("profuction has stared");

//   setTimeout(() => {
//    console.log("the fruit has been chopped");

//    setTimeout(() => {
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//     setTimeout(() => {
//      console.log("the machine was started");

//      setTimeout(() => {
//       console.log(`ice cream was placed on ${stocks.holder[0]}`);

//       setTimeout(() => {
//        console.log(`${stocks.toppings[0]} was added as topping`);

//        setTimeout(() => {
//         console.log("serve ice cream");
//        }, 2000);
//       }, 3000);
//      }, 2000);
//     }, 1000);
//    }, 1000);
//   }, 2000);
//  }, 1000);
// };

// order(0, production);





// promises formate
// we need to understand four things -> 
// 1) relationship b/w thime and work 
// 2) promise chaining 
// 3) error handling 
// 4) the finally handler

let stocks = {
 Fruits: ["strawberry", "grapes", "banana", "apple"],
 liquid: ["water", "ice"],
 holder: ["cone", "cup", "stick"],
 toppings: ["chocolate", "peanuts"]
};
let is_shop_open = true;
// let is_shop_open = false;

let order = (time,work) => {
 return new Promise((resolve,reject)=> {
  if(is_shop_open){
   setTimeout( ()=> {
    resolve(work());
   },time);
  }
  else{
   reject(console.log("our shop is closed"));
  }
 });
};

order(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(()=> {
 return order(1000,()=> console.log("Production has started"));
})

.then(()=> {
 return order(2000, ()=> console.log("the fruit was chopped"));
})

.then(()=> {
 return order(1000, ()=> {
  console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
 });
})

.then(() => {
 return order(1000, ()=> console.log("start the machine"));
})

.then(()=> {
 return order(2000, ()=>{
  console.log(`ice cream placed on ${stocks.holder[0]}`);
 });
})

.then(()=> {
 return order(3000, ()=>{
  console.log(`${stocks.toppings[0]} was selected`);
 });
})

.then(()=>{
 return order(1000, ()=> console.log("ice cream was served"));
})

.catch(()=>{
 console.log("customer left")
})

.finally(()=>{
 console.log("day ended, shop is closed");
})

