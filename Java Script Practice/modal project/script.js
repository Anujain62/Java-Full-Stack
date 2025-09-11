let btn = document.getElementById('btn');
let back_container = document.getElementById('back-container');
let close_btn = document.getElementById('close');
let fronts = document.getElementById('container');

btn.addEventListener('click',function(){
 fronts.style.display = "none";
 // back_container.style.visibility = "visible";
 back_container.style.display = "block";
});

// close_btn.addEventListener("click",()=>{
//  console.log("heheherh");
 
// })

close_btn.addEventListener('click', function(){ 
 // back_container.style.display = "none"; 
 // fronts.style.visibility = "visible"; 
 console.log("heheheh");
 
 fronts.style.display = "block";
 showPreviousDiv(); 
}); 

let currDiv = back_container; 
function showPreviousDiv(){ 
 document.getElementById(currDiv).style.display = "none"; 
 if(currDiv === "back-container"){ 
  currDiv = "container"; 
 }
 document.getElementById(currDiv).style.display = "block";
 currDiv = back_container;
}
























