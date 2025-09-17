
let login_container = document.getElementById("login-container")
let signup_container = document.getElementById("signup-container")
let login_btn = document.getElementById("login")
let signup_btn = document.querySelector("a")
let forg_pass = document.getElementById("for-pass")
let for_pass_container = document.getElementById("for-pass-container");
let pass_change = document.getElementById("continue")
let create_acc = document.getElementById("create")

signup_btn.addEventListener("click",()=>{
 login_container.style.visibility = "hidden"
 signup_container.style.visibility = "visible"
 for_pass_container.style.visibility = "hidden"
})

forg_pass.addEventListener("click",()=>{
 login_container.style.visibility = "hidden"
 signup_container.style.visibility = "hidden"
 for_pass_container.style.visibility = "visible"
})

pass_change.addEventListener("click",()=>{
 alert("Password Change Successfully")
 login_container.style.visibility = "visible"
 signup_container.style.visibility = "hidden"
 for_pass_container.style.visibility = "hidden"
})

login_btn.addEventListener("click",()=>{
 window.location.href = 'quize.html'
})

create_acc.addEventListener("click",()=>{
 alert("Account Created, Successfully!")
 window.location.href = 'quize.html'
})

