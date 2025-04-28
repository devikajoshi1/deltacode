function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two()+ one();
    console.log(ans);
}
three();


//Single Threaded
setTimeout(function(){
    console.log("Hello");
},2000);
console.log("World");