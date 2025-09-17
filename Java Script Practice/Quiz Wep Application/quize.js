let back_btn = document.querySelector("a")
let play_btn = document.getElementById("play")
let about_btn = document.querySelector(".about")
let front_page = document.querySelector(".front")
let back_page = document.querySelector(".play-container")

play_btn.addEventListener("click",()=>{
 front_page.style.visibility = "hidden"
 back_page.style.visibility = "visible"
})

back_btn.addEventListener("click",()=>{
 front_page.style.visibility = "visible"
 back_page.style.visibility = "hidden"
})


// let div = document.createElement("div")
// div.id = "aboutQuiz"

// let h1 = document.createElement("h1")
// h1.innerText = "🧠 About the Quiz"
// h1.style.fontSize = "40px"
// h1.style.color = "white"

// let p = document.createElement("p")
// p.textContent = "Welcome to the <Strong>JavaScript Fundamentals Quiz</strong>! This quiz will test your understanding of basic JavaScript concepts including variables, loops, functions, and more."

// let ul = document.createElement("ul")

// let li = document.createElement("li")
// li.textContent = "📋 Total Questions: 10"
// ul.appendChild(li)
// li = document.createElement("li")
// li.textContent = "⏱ Estimated Time: 5 minutes"
// ul.appendChild(li)
// li = document.createElement("li")
// li.textContent = "✅ One attempt only"
// ul.appendChild(li)
// li = document.createElement("li")
// li.textContent = "🏆 Get 80% or more to pass"
// ul.appendChild(li)

// let btn = document.createElement("button")
// btn.textContent = "Start Quiz"

// div.appendChild(h1)
// div.appendChild(p)
// div.appendChild(ul)
// div.appendChild(btn)

// about_btn.addEventListener("click",()=>{
//  back_page.style.visibility = "hidden"
//  div.style.visibility = "visible"
//  about_btn.innerHTML = div
//  console.log(div)
// })



