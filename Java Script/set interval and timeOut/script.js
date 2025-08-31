console.log("this is tutorial");


// set TimeOut -> allows us to run the function once after the interval of time
// clear timeout -> allows us to run the function repeatedly after the interval of time

// function greet(){
//  console.log("Hello,Good Morning");
// }
// // normal function calling
// greet();
// // time set for function exicution
// setTimeout(greet, 5000);

// function with parameters
function greet(name){
 console.log("Hello,Good Morning"+name);
}
// setTimeout(greet, 5000, " herry");

// setTimeout(greet(),12000); -> wrong as it is calling the function inside setTimeout 

// it returns time out id
// timeout = setTimeout(greet, 5000, " herry");
// console.log(timeout);
// it clears the function call after completing the given time
// clearTimeout(timeout);



// intervalId = setInterval(greet,1000,"harry");
// clearInterval(intervalId);




function displayTime(){
 time = new Date();
 console.log(time);
 document.getElementById('time').innerHTML = time;
}
setInterval(displayTime,1000);








