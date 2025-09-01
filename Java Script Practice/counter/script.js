const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");
const num = document.getElementById("num");
let count = 0;
increment.addEventListener("click",function(){
 count++;
 num.textContent = count;
});
decrement.addEventListener("click",function(){
 count--;
 num.textContent = count;
})
reset.addEventListener("click",function(){
 count = 0;
 num.textContent = count;
})



