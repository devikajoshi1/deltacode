//Q-1
let arr = [7,9,0,-2];
let n=3;
let ans = arr.slice(0,n)
console.log(ans);

//Q-2
let arr2 =[7,9,0,-2];
let n2=3;
let ans2 = arr2.slice(arr2.length-n);
console.log(ans2);

//Q-3
let str = prompt("enter your string");
if(str.length == 0 ){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
}

//Q-4
let str2 =("apNa CollaGe");
let idx = 3;
if(str2[idx] == str2[idx].toLowerCase()){
    console.log("char is lowercase")
}
else{
    console.log("char is uppercase")
}

//Q-5
console.log(`original string ${str}`)
console.log(`string without white space ${str.trim()}`);

//Q-6
let arr3 = ["hello",'a',23,64,99,-6];
let item =64;
if(arr3.indexOf(item)!=-1){
    console.log("element exists in arry");

}
else{
    console.log("element does not exist in array");
}