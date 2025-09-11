let inp = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let count = 0;
btn.addEventListener("click",()=>{
 let data = inp.value;
 let liItem = document.createElement("li")
 liItem.innerText = data
 ul.append(liItem)

 // console.log(ul.getElementsByTagName("li")[0].textContent);
 // localStorage.setItem("liItem",JSON.stringify(ul.getElementsByTagName("li")[count].textContent));
 // console.log(localStorage.getItem(liItem))
 // count++;

 inp.value = ""
 liItem.addEventListener("click",()=>{
 liItem.remove();
 })

})

document.querySelector("#Delete").addEventListener("click",()=>{
 ul.remove();
})





