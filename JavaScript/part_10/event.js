let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function(){
//     console.log("Button clicked");
// }

// function sayHello(){
//     console.log("Hello");
// }
// btn.onclick = sayHello;
// btn.onmouseenter = function(){
//     console.log("Mouse entered");
// }


//event listener

// btn.addEventListener("click", function(){
//     console.log("Button clicked");
// })


//this in event listeners
// btn.addEventListener("click", function(){
//     console.log(this.innerText);
// })

btn.addEventListener("click",function(event){
    console.log("Button clicked");
    console.log(event);
})

//keyboard event
let input = document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log(event.key);
})

