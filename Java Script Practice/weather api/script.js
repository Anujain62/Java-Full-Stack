
let inp = document.querySelector("input")
let btn = document.querySelector("button")
let key = "07fbcf1d2c6789857d4b0e1816ce2d8e"
let container = document.querySelector(".container")
let data_present = false 

btn.addEventListener("click",()=>{
 let city = inp.value.trim()

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
 .then((data)=>{
  return data.json()
 }).then((res)=>{

   if(data_present){
    container.innerHTML = ""
    show(res)
    inp.value = ""
   }
   else{
    show(res)
    inp.value = ""
    data_present = true
   }
 })
})


function show(res){

 let country = document.createElement("h2")
 country.textContent = "Country : "+ res.sys.country
 country.style.marginTop = "-50px"
 container.append(country,document.createElement('br'))

 let city = document.createElement("h3")
 city.textContent = "City : " + res.name
 city.style.marginTop = "-30px"
 container.append(city,document.createElement('br'))

 let ul = document.createElement("ul")
 var li = document.createElement("li")
 li.textContent = "Pressure : "+res.main.pressure+"hPa"
 ul.append(li)

 //maximum temperature 
 var li = document.createElement("li")
 li.textContent = "Max. Temperature : "+res.main.temp_max+"k"
 ul.append(li) 
 //minimum temperature 
 var li = document.createElement("li")
 li.textContent = "Min. Temperature : "+res.main.temp_min+"k"
 ul.append(li)

 // temperature
 var li = document.createElement("li")
 li.textContent = "Temperature : "+ res.main.temp+ "k"
 ul.append(li)

 // sunrise
 var li = document.createElement("li")
 li.textContent = "Sunrise : "+(new Date((res.sys.sunrise)*1000)).toLocaleTimeString([],{hour:'2-digit',minute:"2-digit",second:"2-digit"})
 ul.append(li)

 // sunset
 var li = document.createElement("li")
 li.textContent = "Sunset : "+(new Date((res.sys.sunset)*1000)).toLocaleTimeString([],{hour:'2-digit',minute:"2-digit",second:"2-digit"})
 ul.append(li)

 // wind speed
 var li = document.createElement("li")
 li.textContent = "Wind Speed : "+res.wind.speed+"m/s"
 ul.append(li)

 // cloudiness
 var li = document.createElement("li")
 li.textContent = "Clouds : "+res.clouds.all+"%"
 ul.append(li)
 ul.style.marginTop = "10px"

 container.append(ul)
}











