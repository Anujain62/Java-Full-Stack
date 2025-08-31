console.log("this is date and time tutorial");


// let now = new Date();
// console.log(now);


// this is standard date and time
// let now = new Date(0);
// console.log(now);


// let date = new Date("2029-09-30");
// console.log(date);


// let date = new Date(year,month,date,hours,minutes,seconds,milliseconds);
let date = new Date(3020,4,6,9,3,2,37);
console.log(date);

// let yr = date.getFullYear();
// console.log("The year is ",yr);

// let mnt = date.getMonth();
// console.log("The month is ",mnt);

// let dt = date.getDate();
// console.log("The date is ",dt);

// let hours = date.getHours();
// console.log("The hours is ",hours);


// it gets auto currection
// date.setDate(32);
// console.log(date);


setInterval(updateTime,1000);
function updateTime(){
 time.innerHTML = new Date();
}













