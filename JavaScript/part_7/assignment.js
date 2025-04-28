const arrayAvrage = (arr)=>{
    let total =0;
    for(let number of arr){
        total += number;

    }
    return total / arr.length;
}
let arr=[1,2,3,4,5,6];
console.log(arrayAvrage(arr)); //3.5

let num =4 ;
const isEven = (num) => num % 2 ==0;
console.log(isEven(num)); //true


let object = {
    msg:"hello world",
    longMsg(){
        console.log(this.msg)
    }
    
}
setTimeout(object.longMsg,1000);

let length = 4;
function callBack(){
    console.log(this.length);    
}
 object = {
    length:5,

    method(callBack){
        callBack();
    },
}
object.method(callBack,1,2); //undefined

