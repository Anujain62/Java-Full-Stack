let signUpfieldset = document.querySelector("fieldset");
let formEle = document.querySelector("form");
let submitBtn = document.querySelector("#submitBtn");
let signUpBtn = document.querySelector("#signUp");
let signInForm = document.querySelector("#signInform");
let signInBtn = document.querySelector("#signIn");
let data = {};

formEle.addEventListener("submit",(e)=>{
 e.preventDefault();
 data = {
  firstName : formEle[0].value,
  lastName : formEle[1].value,
  email: formEle[2].value,
  number: formEle[3].value,
  password: formEle[4].value  
 }

 localStorage.setItem("signUp",JSON.stringify(data));
 console.log(localStorage.getItem("signUp"));
});


submitBtn.addEventListener("click",()=>{
 signUpfieldset.style.visibility = "hidden";
 formEle.style.visibility = "hidden";
 document.querySelector("#back").style.visibility = "visible";
 let h1 = document.querySelector("#createAcc");
 // h1.style.visibility = "visible";
 // console.log(h1);
 h1.innerText = "Account was created";
 
});

signInBtn.addEventListener("click",()=>{
 signUpfieldset.style.visibility = "hidden";
 formEle.style.visibility = "hidden";
 document.querySelector("#signInField").style.visibility = "visible";
 signUpBtn.style.visibility = "visible";
 signInForm.style.visibility = "visible";
 document.querySelector("#login").style.visibility = "visible";
})


document.querySelector("#back").addEventListener("click",()=>{
 formEle.style.visibility = "visible";
 signUpfieldset.style.visibility = "visible";
 document.querySelector("#back").style.visibility = "hidden";
 let h1 = document.querySelector("#createAcc");
 h1.style.visibility = "hidden";
})

signUpBtn.addEventListener("click",()=>{
 signUpfieldset.style.visibility = "visible";
 formEle.style.visibility = "visible";
 document.querySelector("#signInField").style.visibility = "hidden";
 signUpBtn.style.visibility = "hidden";
 signInForm.style.visibility = "hidden";
 document.querySelector("#login").style.visibility = "hidden";
})

document.querySelector("#login").addEventListener("click",()=>{

 document.querySelector("#signInField").style.visibility = "hidden";
 signInForm.style.visibility = "hidden";
 document.querySelector("#login").style.visibility = "hidden";
 signUpBtn.style.visibility = "hidden";

 let email = formEle[2].value;
 let password = formEle[4].value;
 let currEmail = signInForm[0].value;
 let currPassword = signInForm[1].value;

 if(email === currEmail && password === currPassword){
  document.querySelector("#account").innerText = "You are login successfully";
 }
 else if(email !== currEmail && password === currPassword){
  alert("Email is wrong");
 }
 else if(email === currEmail && password !== currPassword){
  alert("Password is wrong");
 }
 else{
  alert("Something wants gone wrong");
 }
})




