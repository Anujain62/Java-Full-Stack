
document.getElementById('start').addEventListener("click",()=>{
  document.getElementById('front-page').style.visibility = 'hidden'
  document.querySelector('#login-container').style.visibility = 'visible'
})

document.querySelector('#login-container').addEventListener("click",()=>{
 document.querySelector('#login-container').style.visibility = 'hidden'
 document.querySelector('#options').style.visibility = 'visible'
})




