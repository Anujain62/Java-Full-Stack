// local storage -> it is used like data base,this is stored minimum data (5MB).

let formEl = document.querySelector("form");
let removeBtn = document.querySelector("#remove")
let data = {};
formEl.addEventListener("submit",(e)=>{
 e.preventDefault();
 // this gets every value of inside the form
 // console.log(formEl[0].value);
 // console.log(formEl[1].value);
 // console.log(formEl[2].value);

 data = {
  name: formEl[0].value,
  email: formEl[1].value,
  password: formEl[2].value
 }
 // for storing data inside local storage
 localStorage.setItem("formData",JSON.stringify(data));
 console.log(localStorage.getItem("formData"));

});
// for removing data from the local storage
removeBtn.addEventListener("click",()=>{ 
 let key = data;
 localStorage.removeItem(key);
 localStorage.clear();
 console.log(localStorage.getItem("formData"));
});
















