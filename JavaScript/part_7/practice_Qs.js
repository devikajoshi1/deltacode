const square = (n) =>(n*n);
console.log(square(5)); // Output: 25

let id = setInterval(() => {
    console.log("hello world")
}, 2000);

setTimeout(() => {
    clearInterval(id);
},10000)
