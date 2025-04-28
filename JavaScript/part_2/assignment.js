let num = 50;
if(num % 10 == 0){
    console.log("good num");
}
else{
    console.log("bad num");
}
// let name = prompt("Enter name");
// let age = prompt("Enter age");
// let msg = alert(`${name} is ${age} year old `);
// console.log(msg);


let quater = 3;
switch(quater){
    case 1:
        console.log("January, Febuary , March")
        break;
    case 2:
        console.log("April ,May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid quarter");
}

let str="golden string"
if((str[0] == 'a' || str[0]=='A') && (str.length > 5)){
    console.log("string is golden");
}
else{
    console.log("string is not golden");
}

let a = 5;
let b = 18;
let c = 13;

if(a > b){
    if(a > c){
        console.log("a is largest");
    }
    else{
        console.log("c is largest");
    }
}
else{
    if(b > c){
        console.log("b is largest");
    }
    else{
        console.log("c is largest");
    }
}

let num1 = 32;
let num2 = 47852;

if((num1 % 10) == (num2 % 10)){
    console.log("number have same last digit is :" + num1%10);
}
else{
    console.log("number have different last digit");
}