const colors = ["green" , "red", "purple", "yellow", "blue", "indigo", "orange", "voilet", "maroon", "magenta"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
 const randomNum = Math.floor(Math.random()*colors.length);
 document.body.style.backgroundColor = colors[randomNum];
 color.textContent = colors[randomNum];
 document.getElementById("nav-bar").style.backgroundColor = "white";
});












