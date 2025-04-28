function hello (){
    console.log("hello");
}
hello();

function printName(firstName,lastName){
    console.log(firstName);
    console.log(lastName);
}
printName("devika" , "joshi");


//function expretion
// const sum = function(a,b){
//     return a+b;
// }
// console.log(sum(5,6));


//higher order function
function multipleGreed(func,n){
    for(let i=1; i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreed(greet,5);

//methods
const calculator={
    add : function(a,b){
        return a+b;
    },
    subtract : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
        return a*b;
    }
};
console.log(calculator.add(5,6));
console.log(calculator.subtract(5,6));
console.log(calculator.multiply(5,6));