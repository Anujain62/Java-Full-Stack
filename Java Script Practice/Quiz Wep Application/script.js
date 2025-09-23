
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
let quiz_option = document.querySelector(".quiz-choice")
let quizs_container = document.querySelector("#quizs")



const cppEasyQust = {
  1: ["1. Who invented C++?", "a) Dennis Ritchie", "b) Ken Thompson", "c) Brian Kernighan", "d) Bjarne Stroustrup"],
  2: ["2. What is C++?", "a) C++ is an object oriented programming language", "b) C++ is a procedural programming language", "c) C++ supports both procedural and object oriented programming language", "d) C++ is a functional programming language"],
  3: ["3. Which of the following is the correct syntax of including a user defined header files in C++?", "a) #include [userdefined]", "b) #include “userdefined”", "c) #include <userdefined.h>", "c) #include <userdefined.h>"],
  4: ["4. Which of the following is used for comments in C++?", "a) /* comment */", "b) // comment */", "c) // comment", "d) both // comment or /* comment */"],
  5: ["5. Which of the following extension is used for user-defined header file in c++?", "a) hg", "b) cpp", "c) h", "d) hf"],
  6: ["6. Which of the following is a correct identifier in C++?", "a) VAR_1234", "b) $var_name", "c) 7VARNAME", "d) 7var_name"],
  7: ["7. Which of the following is not a type of Constructor in C++?", "a) Default constructor", "b) Parameterized constructor", "c) Copy constructor", "d) Friend constructor"],
  8: ["8. Which of the following approach is used by C++?", "a) Left-right", "b) Right-left", "c) Bottom-up", "d) Top-down"]
}
const cppEasyAns = ["d", "c", "b", "d", "c", "a", "d", "c"]

const cppMediumQust = {
  1: ["1. By default, all the files in C++ are opened in _________ mode.", "a) Binary", "b) VTC", "c) Text", "d) ISCII"],
  2: ["2.  Which of the following correctly declares an array in C++?", "a) array{10};", "b) array array[10];", "c) int array;", "d) int array[10];"],
  3: ["3. What is the size of wchar_t in C++?", "a) Based on the number of bits in the system", "b) 2 or 4", "c) 4", "d) 2"],
  4: ["4. What is the use of the indentation in c++?", "a) What is the use of the indentation in c++?", "b) distinguishes between comments and outer data", "c) distinguishes between comments and code", "d) r distinguishes between comments and outer data"],
  5: ["5.  Which keyword is used to define the macros in c++?", "a) #macro", "b) #define", "c) macro", "d) define"]
}
const cppMediumAns = ["c", "d", "a", "c", "b"]

const cppHardQust = {
  1: ["1. Which concept allows you to reuse the written code in C++?", "a) Inheritance", "b) Polymorphism", "c) Abstraction", "d) Encapsulation"],
  2: ["2.  How structures and classes in C++ differ?", "a) Structures by default hide every member whereas classes do not", "b) In Structures, members are public by default whereas, in Classes, they are private by default", "c) Structures cannot have private members whereas classes can have", "d) In Structures, members are private by default whereas, in Classes, they are public by default"],
  3: ["3.What is the benefit of c++ input and output over c input and output?", "a) Both Type safety & Exception", "b) Sequence container", "c) Exception", "d) Type safety"],
  4: ["4. With which does the trigonometric functions work with angles in c++?", "a) Degrees", "b) Radians", "c) Both Degrees & Radians", "d) Celsius"],
  5: ["5.  How many macros are used by mathematical functions in the header file <cerrno>?", "a) 1", "b) 2", "c) 3", "d) 4"]
}
const cppHardAns = ["a", "b", "d", "b", "c"]

const javaEasyQust = {
  1: ["1. What happens if an abstract class does not have any abstract methods?", "a) It will not compile.", "b) The class can still be abstract.", "c) Java will automatically provide an abstract method.", "d) It becomes a concrete class."],
  2: ["2. Which of the following statements about inheritance is false?", "a) Java supports single inheritance.", "b) Java allows multiple class inheritance using extends.", "c) Interfaces can be used to achieve multiple inheritance.", "d) Interfaces can be used to achieve multiple inheritance."],
  3: ["3. Which of the following statements about abstract classes is correct?", "a) Abstract classes cannot have constructors.", "b) Abstract classes cannot have static methods.", "c) An object of an abstract class cannot be instantiated.", "d) An object of an abstract class cannot be instantiated."],
  4: ["4. Which of the following is FALSE about abstract classes in Java", "a) If we derive an abstract class and do not implement all the abstract methods, then the derived class should also be marked as abstract using \'abstract\' keyword", "b) Abstract classes can have constructors", "c) A class can be made abstract without any abstract method", "d) A class can be made abstract without any abstract method"]
}
const javaEasyAns = ["b", "b", "c", "d"]

const javaMediumQust = {
  1: ["1. Which of the following is true about an abstract class in Java?", "a) An abstract class can be instantiated directly.", "b) v", "c) All methods in an abstract class must be abstract.", "d) An abstract class cannot have a constructor."],
  2: ["2. An abstract class cannot have a constructor.", "a) Declaring it abstract using the abstract keyword.", "b) Making at least one method final.", "c) Declaring all methods as static.", "d) Declaring at least one method as abstract."],
  3: ["3. Type IV JDBC driver is a driver", "a) which is written in C++", "b) which requires an intermediate layer", "c) which communicates through Java sockets", "d) which translates JDBC function calls into API not native to DBMS"],
  4: ["4. Which of the following is used to determine the length of an array in Java?", "a) arr.length();", "b) arr.size;", "c) arr.length;", "d) arr.count();"]
}
const javaMediumAns = ["b", "a", "c"]

const javaHardQust = {
  1: ["1. What happens if you access an invalid index of an array in Java?", "a) ArrayIndexOutOfBoundsException", "b) NullPointerException", "c) Segmentation Fault", "d) No Error"],
  2: ["2. What is the default value of an integer array in Java?", "a) null", "b) 0", "c) garbage value", "d) depends on JVM"],
  3: ["3. How can you correctly initialize a 2D array in Java?", "a) int[][] arr = new int(3,3);", "b) int arr[][] = {{1,2}, {3,4}};", "c) int arr[][] = new int[2][2]{{1,2}, {3,4}};", "d) int arr[2][2] = {1,2,3,4};"],
  4: ["4. Which data type is best for storing the ASCII value of a character?", "a) char", "b) byte", "c) int", "d) short"]
}
const javaHardAns = ["a", "b", "b", "a"]

const pythonEasyQust = {
  1: ["1. Who developed Python Programming Language?", "a) Wick van Rossum", "b) Rasmus Lerdorf", "c) Guido van Rossum", "d) Niene Stom"],
  2: ["2. Which type of Programming does Python support?", "a) object-oriented programming", "b) structured programming", "c) functional programming", "d) all of the mentioned"],
  3: ["3. Is Python case sensitive when dealing with identifiers?", "a) no", "b) yes", "c) machine dependent", "d) none of the mentioned"],
  4: ["4. Which of the following is the correct extension of the Python file?", "a) .python", "b) .pl", "c) .py", "d) .p"]
}
const pythonEasyAns = ["c", "d", "b", "c"]

const pythonMediumQust = {
  1: ["1. Is Python code compiled or interpreted?", "a) Python code is both compiled and interpreted",
    "b) Python code is neither compiled nor interpreted", "c) Python code is only compiled", "d) Python code is only interpreted"],
  2: ["2. All keywords in Python are in _________", "a) Capitalized", "b) lower case", "c) UPPER CASE", "d) None of the mentioned]"],
  3: ["3. Which of the following is used to define a block of code in Python language?", "a) Indentation", "b) Key", "c) Brackets", "d) All of the mentioned"],
  4: ["4. Which keyword is used for function in Python language?", "a) Function", "b) def", "c) Fun", "d) Define"]
}
const pythonMediumAns = ["a", "d", "a", "b"]

const pythonHardQust = {
  1: ["1. Which of the following character is used to give single-line comments in Python?", "a) //", "b) #", "c) !", "d) /*"],
  2: ["2. Which of the following functions can help us to find the version of python that we are currently working on?",
    "a) sys.version(1)", "b) sys.version(0)", "c) sys.version()", "d) sys.version"],
  3: ["3. Python supports the creation of anonymous functions at runtime, using a construct called __________",
    "a) pi", "b) anonymous", "c) lambda", "d) none of the mentioned"],
  4: ["4. What is the order of precedence in python?", "a) Exponential, Parentheses, Multiplication, Division, Addition, Subtraction", "b) Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
    "c) Parentheses, Exponential, Multiplication, Addition, Division, Subtraction", "d) Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"]
}
const pythonHardAns = ["b", "d", "c", "d"]


let user = {
  name: "",
  email: "",
  password: ""
}

let open_page = "login"
signup_btn.addEventListener("click", () => {
  login_container.style.visibility = "hidden"
  signup_container.style.visibility = "visible"
});

forg_pass.addEventListener("click", () => {
  login_container.style.visibility = "hidden"
  for_pass_container.style.visibility = "visible"
});

pass_change.addEventListener("click", () => {

  let email = for_pass_container.children[0].children[1].value
  let password = for_pass_container.children[0].children[2].value
  let conform_password = for_pass_container.children[0].children[3].value
  for_pass_container.children[0].children[1].value = ""
  for_pass_container.children[0].children[2].value = ""
  for_pass_container.children[0].children[3].value = ""
  if (email == JSON.parse(localStorage.getItem('userData')).email && password == conform_password) {
    alert("Password Change Successfully")
    let userObj = JSON.parse(localStorage.getItem('userData'))
    userObj.password = conform_password
    localStorage.setItem("userData", JSON.stringify(userObj))
    login_container.style.visibility = "visible"
    for_pass_container.style.visibility = "hidden"
  }
  else {
    alert("Try Again!")
  }
});

login_btn.addEventListener("click", () => {

  let email = login_container.children[0].children[1].value
  let password = login_container.children[0].children[2].value
  login_container.children[0].children[1].value = ""
  login_container.children[0].children[2].value = ""
  let userObj = JSON.parse(localStorage.getItem('userData'))
  if (email == userObj.email && password == userObj.password) {
    play_container.style.visibility = "visible"
    login_container.style.visibility = "hidden"
    open_page = "about"
  }
  else {
    alert("Try Again!")
  }
});

create_acc.addEventListener("click", () => {

  user.name = signup_container.children[0].children[1].value
  user.email = signup_container.children[0].children[2].value
  user.password = signup_container.children[0].children[3].value
  signup_container.children[0].children[1].value = ""
  signup_container.children[0].children[2].value = ""
  signup_container.children[0].children[3].value = ""
  localStorage.setItem("userData", JSON.stringify(user))
  alert("Account Created, Successfully!")
  play_container.style.visibility = "visible"
  signup_container.style.visibility = "hidden"
  open_page = "about"

});

play_btn.addEventListener("click", () => {
  play_container.style.visibility = "hidden"
  quiz_option.style.visibility = "visible"
  open_page = "option"
});

about_btn.addEventListener("click", () => {
  play_container.style.visibility = "hidden"
  about_container.style.visibility = "visible"
  open_page = "logo"
});

function back_play_page() {

  if (play_container.lastElementChild.className == open_page) {
    play_container.style.visibility = "hidden"
    login_container.style.visibility = "visible"
  }
  else if (quiz_option.lastElementChild.className == open_page) {
    play_container.style.visibility = "visible"
    quiz_option.style.visibility = "hidden"
    open_page = "about"
  }
  else if (about_container.lastElementChild.className == open_page) {
    play_container.style.visibility = "visible"
    about_container.style.visibility = "hidden"
    open_page = "about"
  }
  else if (level_container.children[2].className == open_page) {
    quiz_option.style.visibility = "visible"
    level_container.style.visibility = "hidden"
    open_page = "option"
  }
  else if (quizs_container.id == open_page) {
    quizs_container.style.visibility = "hidden"
    level_container.style.visibility = "visible"
    open_page = "level"
    count = 1
  }
}

let type = ""
let quiz_level = ""
let options = document.querySelectorAll(".options")
options.forEach((option, index) => {
  option.addEventListener("click", () => {
    let img = option.firstElementChild.src
    let h1 = option.lastElementChild.textContent

    if (h1 == "C++") {
      showCpp()
      type = "C++"
    }
    else if (h1 == "Java") {
      showJava()
      type = "Java"
    }
    else if (h1 == "Python") {
      showPython()
      type = "Python"
    }
  })
})

let count
function showCpp() {
  count = 1
  level_visible()
}
function showJava() {
  count = 1
  level_visible()
}
function showPython() {
  count = 1
  level_visible()
}


function level_visible() {
  quiz_option.style.visibility = "hidden"
  level_container.style.visibility = "visible"
  open_page = "level"
}

document.querySelectorAll(".level").forEach((level, index) => {
  level.addEventListener("click", () => {
    let lev = level.firstElementChild.textContent
    console.log(lev)

    level_container.style.visibility = "hidden"
    quizs_container.style.visibility = "visible"
    open_page = "quizs"

    if (lev == "Easy") {
      quiz_level = "Easy"
      showEasy()
    }
    else if (lev == "Normal") {
      quiz_level = "Medium"
      showMedium()
    }
    else {
      quiz_level = "Hard"
      showHard()
    }
  })
})


document.getElementById("next").addEventListener("click", () => {
  if (quiz_level == "Easy") {
    count++
    showEasy()
  }
  else if (quiz_level == "Medium") {
    count++
    showMedium()
  }
  else {
    count++
    showHard()
  }
})

function showEasy() {

  document.querySelector(".question").innerHTML = ""

  if (type == "C++" && count <= Object.keys(cppEasyQust).length) {
    let h1 = document.createElement("h1")
    h1.textContent = cppEasyQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = cppEasyQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == cppEasyAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }

  else if (type == "Java" && count <= Object.keys(javaEasyQust).length) {
    let h1 = document.createElement("h1")
    h1.textContent = javaEasyQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = javaEasyQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == javaEasyAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }

  else {
    let h1 = document.createElement("h1")
    h1.textContent = pythonEasyQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = pythonEasyQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == pythonEasyAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }
}

function showMedium() {
  document.querySelector(".question").innerHTML = ""

  if (type == "C++" && count <= Object.keys(cppMediumQust).length) {
    let h1 = document.createElement("h1")
    h1.textContent = cppMediumQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = cppMediumQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == cppMediumAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }

  else if (type == "Java" && count <= Object.keys(javaMediumQust).length) {
    let h1 = document.createElement("h1")
    h1.textContent = javaMediumQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = javaMediumQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == javaMediumAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }

  else {
    let h1 = document.createElement("h1")
    h1.textContent = pythonMediumQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = pythonMediumQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == pythonMediumAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }
}

function showHard() {

  document.querySelector(".question").innerHTML = ""

  if (type == "C++" && count <= Object.keys(cppHardQust).length) {
    let h1 = document.createElement("h1")
    h1.textContent = cppHardQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = cppHardQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == cppHardAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }

  else if (type == "C++" && count <= Object.keys(javaHardQust).length) {
    let h1 = document.createElement("h1")
    h1.textContent = javaHardQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = javaHardQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == javaHardAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }

  else {
    let h1 = document.createElement("h1")
    h1.textContent = pythonHardQust[count][0]
    h1.style.fontSize = "40px"
    document.querySelector(".question").append(h1)

    let ul = document.createElement("ul")
    for (let i = 1; i < 5; i += 1) {
      let li = document.createElement("li")
      li.textContent = pythonHardQust[count][i]
      li.style.listStyleType = "none"
      li.style.fontSize = "25px"
      ul.append(li)
    }
    document.querySelector(".question").append(ul)

    document.querySelectorAll("ul li").forEach((li) => {
      li.addEventListener("click", () => {
        let ans = li.textContent.slice(0, 1)
        if (ans == pythonHardAns[count - 1]) {
          li.style.backgroundColor = "green"
        }
        else {
          li.style.backgroundColor = "red"
        }
      })
    })
  }

}

