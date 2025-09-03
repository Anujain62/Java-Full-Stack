const reviews = [
 {
  id: 1,
  name: "Anu Jain",
  job: "web developer",
  img: "person2.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit eligendi cum officia hic doloribus sint iusto reprehenderit quidem doloremque.",
 },
 {
  id: 2,
  name: "Sarthak",
  job: "web developer",
  img: "person3.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit eligendi cum officia hic doloribus sint iusto reprehenderit quidem doloremque.",
 },
  {
  id: 3,
  name: "Akanksha kumari",
  job: "web developer",
  img: "person4.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit eligendi cum officia hic doloribus sint iusto reprehenderit quidem doloremque.",
 },
  {
  id: 4,
  name: "Shivam",
  job: "web developer",
  img: "person5.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit eligendi cum officia hic doloribus sint iusto reprehenderit quidem doloremque.",
 },
 {
  id: 5,
  name: "Ananya Rajak",
  job: "web developer",
  img: "person6.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit eligendi cum officia hic doloribus sint iusto reprehenderit quidem doloremque.",
 },
 {
  id: 6,
  name: "Teja sareen",
  job: "web developer",
  img: "person1.png",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit eligendi cum officia hic doloribus sint iusto reprehenderit quidem doloremque.",
 },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtm = document.querySelector(".suprise");

let currItem = 0;

window.addEventListener('DOMContentLoaded',function(){
 showPerson(currItem);
});

function showPerson(person){
 const item = reviews[person];
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text; 
}

nextBtn.addEventListener('click',function(){
 if(currItem === reviews.length){
  currItem = 0;
 }
 else{
  currItem++;
 }
 showPerson(currItem);
})

prevBtn.addEventListener('click',function(){
 if(currItem === 0){
  currItem = reviews.length;
 }
 else{
  currItem--;
 }
 showPerson(currItem);
})

randomBtm.addEventListener('click',function(){
 let random = Math.floor(Math.random()*reviews.length);
 currItem = random;
 showPerson(currItem);
})






