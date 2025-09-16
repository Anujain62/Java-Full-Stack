
let btn = document.getElementById("btn");
let back_container = document.getElementById("back-container")
let close_btn = document.getElementById("close")
let fronts = document.getElementById("container")

btn.addEventListener("click",()=>{
 fronts.style.display = "none"
 back_container.style.display = "block"
});

close_btn.addEventListener("click",()=>{
 back_container.style.display = "none"
 fronts.style.display = "block"
})




















