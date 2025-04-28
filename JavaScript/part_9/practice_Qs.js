let para1 = document.createElement('p');
para1.innerText = "hey i'm red";
document.querySelector("body").append(para1)

para1.classList.add("red");


let h3 = document.createElement('h3');
h3.innerText = "hey i'm blue";
document.querySelector("body").append(h3);
h3.classList.add("blue");


let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('para2');
h1.innerText = "I'm in a div";
para2.innerText = "Me too";
div.append(h1, para2);
div.classList.add('box');
document.querySelector("body").append(div);