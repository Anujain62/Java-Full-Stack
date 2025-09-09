const img = [
 'first.png',
 'second.png',
 'third.png',
 'four.png'
]
let temp = document.querySelector("img");
let idx = 0;

console.log(temp);
setInterval(function(){
 temp.setAttribute('src',img[idx]);
 idx = (idx+1)%img.length;
},2000);


