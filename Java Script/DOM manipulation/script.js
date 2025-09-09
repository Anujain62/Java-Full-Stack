// getElementById
// const title = document.getElementById('main-heading');
// console.log(title);


// getElementByClassName
// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);


// getElementByTagName
// const listItem = document.getElementsByTagName('li');
// console.log(listItem);


// querySelector
// const container = document.querySelector('div');
// console.log(container);


// querySelectorAll
// const container = document.querySelectorAll('div');
// console.log(container);


// attribute gets and sets
// let a= document.querySelector("a");
// console.log(a.getAttribute("href"));
// a.setAttribute("href","http://flipkart.com");
// console.log(a); 




// DOM manipulation

// styling elements

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// const listItem = document.querySelectorAll('.list-items');
// for(i=0;i<listItem.length;i++){
//  listItem[i].style.fontSize = '2rem';
// }

// creating elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// adding element
// ul.append(li);
// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// modifying the text
// li.innerText = "X-men";

// modifying attribute & classes
// li.setAttribute('id',"main-heading");
// li.removeAttribute('id');
// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// li.classList.add('list-items');
// console.log(li.classList.contains('list-items'));

// remove elements
// li.remove();



let ul =  document.querySelector('ul');
// parent node traversal
// console.log(ul);
// console.log(ul.parentElement);
// console.log(ul.parentElement.parentNode);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);
 

// child node traversal
// console.log(ul);
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor = 'blue';
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// sibling node traversal
// console.log(ul.previousSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextSibling);
// console.log(ul.nextElementSibling);




