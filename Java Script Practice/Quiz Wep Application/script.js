
let login_container = document.getElementById("login-container")
let signup_container = document.getElementById("signup-container")
let login_btn = document.getElementById("login")
let signup_btn = document.querySelector("a")
let forg_pass = document.getElementById("for-pass")
let for_pass_container = document.getElementById("for-pass-container");
let pass_change = document.getElementById("continue")
let create_acc = document.getElementById("create")
let play_container = document.querySelector("#play-container")
let play_btn = document.querySelector("#play")
let level_container = document.querySelector("#level-container")
let back_btn = document.querySelector("#back")
let about_btn = document.querySelector(".about")
let about_container = document.querySelector("#about-container")

let about_open = false 
signup_btn.addEventListener("click",()=>{
 login_container.style.visibility = "hidden"
 signup_container.style.visibility = "visible"
});

forg_pass.addEventListener("click",()=>{
 login_container.style.visibility = "hidden"
 for_pass_container.style.visibility = "visible"
});

pass_change.addEventListener("click",()=>{
 alert("Password Change Successfully")
 login_container.style.visibility = "visible"
 for_pass_container.style.visibility = "hidden"
});

login_btn.addEventListener("click",()=>{
 play_container.style.visibility = "visible"
 about_open = true
 login_container.style.visibility = "hidden"
});

create_acc.addEventListener("click",()=>{
 alert("Account Created, Successfully!")
 play_container.style.visibility = "visible"
 about_open = true
 signup_container.style.visibility = "hidden"
});

play_btn.addEventListener("click",()=>{
 play_container.style.visibility = "hidden"
 about_open = false
 level_container.style.visibility = "visible"
});

back_btn.addEventListener("click",()=>{
 level_container.style.visibility = "hidden"
 play_container.style.visibility = "visible"
 about_open = true
});


// ??????
// about_btn.addEventListener("click",()=>{
//  if(about_open === true){
//   play_container.style.visibility = "hidden"
//   about_open = false
//   about_container.style.visibility = "visible"
//  }
//  else{
//   level_container.style.visibility = "hidden"
//   about_container.style.visibility = "visible"
//  }
// });

about_btn.addEventListener("click",()=>{
  play_container.style.visibility = "hidden"
  about_open = false
  about_container.style.visibility = "visible"
});

function back_play_page(){
 play_container.style.visibility = "visible"
 about_container.style.visibility = "hidden"
}

