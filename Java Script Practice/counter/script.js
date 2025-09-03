const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");
const num = document.getElementById("num");
let count = 0;
increment.addEventListener("click",function(){
 count++;
 num.textContent = count;
 num.style.color = "blue";
});
decrement.addEventListener("click",function(){
 count--;
 num.textContent = count;
 if(count<0){
  num.style.color = "green";
 }
})
reset.addEventListener("click",function(){
 count = 0;
 num.textContent = count;
 num.style.color = "black";
})



