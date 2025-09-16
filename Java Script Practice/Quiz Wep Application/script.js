let signup = document.querySelector("a")
let login = document.querySelector("#login")
let login_container = document.querySelector(".login_container")
let signup_container = document.querySelector(".signup")

login.addEventListener("click",function(){
 login_container.style.visibility = "hidden"
 let div = document.createElement("div")
 div.className = "signup"
 div.textContent = "center"
 div.style.width = "60%"
 div.style.height = "80%"
 div.style.position = "absolute"
 div.style.top = "10%"
 div.style.left = "20%"
 div.style.background= "red"
 div.style.padding = "20px"
 document.body.appendChild(div)
})

signup.addEventListener("click",()=>{

 login_container.style.visibility = "hidden"
 let div = document.createElement("div")
 div.className = "signup"
 // div.textContent = "center"
 div.style.width = "60%"
 div.style.height = "80%"
 div.style.position = "absolute"
 div.style.top = "10%"
 div.style.left = "20%"
 div.style.background= "red"
 div.style.padding = "20px"

 let h1 = document.createElement("h1")
 h1.textContent = "Quiz"
 h1.style.fontSize = "100px"
 h1.style.marginTop = "-30px"
 h1.style.marginLeft = "100px"
 div.appendChild(h1)

 let name = document.createElement("input")
 name.type = "text"
 name.placeholder = "Enter your name"
 name.style.width = "220px"
 name.style.height = "30px"
 name.style.border = "2px solid black"
 name.style.borderRadius = "5px"
 div.appendChild(name)

 document.body.appendChild(div)

});
















