// browser events 
// click 
// contextmenu
// mouseover/mouseout
// mousedown/mouseup
// Submit
// focus  
// DOMContentLoaded
// transitionend


// event listeners
// 1)
// function toggleHide(){
// let btn = document.getElementById('btn');
// let para = document.getElementById('para');
// if( para.style.display != 'none')
//  para.style.display = 'none';
// else
//  para.style.display = 'block';
// }

// let para = document.getElementById('para');
// para.addEventListener('mouseover', function run(){
//  alert('mouse inside');
// });

// para.addEventListener('mouseout', function run(){
//  alert('mouse outside');
// });





// 2)
//syntax of event listener ->  element.addEventListener("click",function);
// const buttonTwo = document.querySelector(".btn-2")
// function alertBtn(){
//  alert("I love also Js");
// };
// buttonTwo.addEventListener("click",alertBtn);

// // mouseover - it does not change the property after removing the cursor,while page does not reload it does not change
// const newBackgroundColor = document.querySelector(".box-3");
// function changeColor(){
//  newBackgroundColor.style.backgroundColor = "blue";
// };
// newBackgroundColor.addEventListener("mouseover",changeColor);









// 3)
// event probagation
//  3 phases -> 1) event capturing  2) target  3) event bubbling

// this shows the forward function calling
// window.addEventListener("click",function(){
//  console.log("window");
// },true);

// document.addEventListener("click",function(){
//  console.log("document");
// },true);

// document.querySelector(".div2").addEventListener("click",function(e){

// // it stops the event from "bubbling up" or "capturing down" to parent or child elements that might also have event listeners attached.
// //  e.stopPropagation();

//  console.log("div 2");

//  // if we add once true , so this element is shows only one time
// },{once: true});

// // },true);

// document.querySelector(".div1").addEventListener("click",function(){
//  console.log("div 1");
// },true);

// document.querySelector("button").addEventListener("click",function(e){
//  // it gives the whole tag with text
//  // console.log(e.target);

//  // it sets the content of specific tag
//  console.log(e.target.innerText = 'clicked');
// },true);



// this shows the backward function calling
// window.addEventListener("click",function(){
//  console.log("window");
// },false);
// document.addEventListener("click",function(){
//  console.log("document");
// },false);
// document.querySelector(".div2").addEventListener("click",function(e){
//  e.stopPropagation();
//  console.log("div 2");
// },false);
// document.querySelector(".div1").addEventListener("click",function(){
//  console.log("div 1");
// },false);
// document.querySelector("button").addEventListener("click",function(e){
//  console.log(e.target.innerText = 'clicked');
// },false);







// it allows users to append a SINGLE event listener to a parent element that adda it to all of its present AND future descendants that match a selector.

// document.querySelector("#football").addEventListener("click",function(e){
//  console.log("football is clicked");
//  const target = e.target;
//  if(target.matches('li')){
//   target.style.color = "red";
//  }
// })
// document.querySelector("#basketball").addEventListener("click",function(e){
//  console.log("football is clicked");
//  const target = e.target;
//  if(target.matches('li')){
//   target.style.color = "red";
//  }
// })

// document.querySelector("#sports").addEventListener("click",function(e){
//  console.log(e.target.getAttribute('id') + ' is clicked');
    // e.target it gives the tag name
//  const target = e.target;
//  if(target.matches('li')){
//   target.style.color = "red";
//  }
// });
// // for adding new list element
// const sports = document.querySelector("#sports");
// const newSport = document.createElement('li');
// newSport.innerHTML = 'rugby';
// newSport.setAttribute('id',"rugby");
// sports.appendChild(newSport);







// 5)
// way -> 1
// function fun1(){
//  console.log("hello");
// }

// let btn = document.querySelector("button");
// let body = document.querySelector("body");
// way -> 2
// btn.onclick = function(){
 //  console.log("hello");
 //  body.style.backgroundColor = "red";
 // }

// way -> 3
// btn.addEventListener("click",function(){
//  body.style.backgroundColor = "red";
// })





// 6) onchange event
let inp = document.querySelector("input");
let h2 = document.querySelector("h2");
inp.addEventListener("input",(e)=>{
 console.log(e.target.value);
 h2.innerText = e.target.value;
})



