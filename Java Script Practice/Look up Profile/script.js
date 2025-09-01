var contacts = [
 {
  firstName : "aKira",
  lastName : "Laine",
  number : "05677632749",
  likes : ["Pizza", "Coding", "Brownie Points"]
 },
 {
  firstName : "Harry",
  lastName : "Potter",
  number : "052949734",
  likes : ["Hogwarts", "Magic", "Hagrid"]
 },
 {
  firstName : "Sherlock",
  lastName : "Holmes",
  number : "0579348899",
  likes : ["Intriguing Cases", "Violin"]
 },
 {
  "firstName" : "Kristian",
  "lastName" : "Vos",
  "number" : "Unknown",
  "likes" : ["Java Script", "Gaming", "Foxes"]
 }
];

function lookUpProfile(name,prop){
 for(var i=0;i<contacts.length;i++){
  if(contacts[i].firstName === name){
   return contacts[i][prop] || "No such property";
  }
 }
 return "No such contact";
}
var data = lookUpProfile("aKira", "likes");
console.log(data);














