let arr = [1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);

arr.forEach(function(el){
    console.log(el);
});


//map
console.log("map function");
let num = [1,2,3,4];
let double = num.map(function(el){
    return el*2;
})
console.log(double);


//filter
console.log("filter function");
let num2 = [2,4,1,5,6,2,7,8,9];
let even = num2.filter((num)=> (num%2 ==0));
console.log(even);

//every
console.log("every");
let num3 = [2,4,1,5,6,2,7,8];
let check = num3.every((num)=> (num%2 ==0));
console.log(check);



//reduce
console.log("reduce");
let num4 = [1,2,3,4];
let sum = num4.reduce((res,el)=> (res+el));
console.log(sum);

//Finding Maximum in an array
let nums = [2,3,4,5,3,4,7,8,1,2];
let result = nums.reduce((max,el)=>{
    if(max < el){
        return el;
    }
    else{
        return max;
    }
});
console.log(result);

//defult parameters
function add(a,b=3){
    return a+b;
}
console.log(add(2));
//spread
console.log(..."devika");

let arr2 = [1,2,3,4,5];
let newArr = [...arr2]
console.log(newArr);

const data={
    email:"ironman@gmail.com",
    password:"abcd",

};
let copy = {...data,id:123};
console.log(copy); 

//rest
function add2(...args){
    // for(let i =0; i<args.length;i++){
    //     console.log("you gave us :",args[i]);
    // }
    return args.reduce((add,el)=>add+el);

}
console.log(add2(1,2,3,4,5)); 
// console.log(add2(1,2,3,4,5));

//destructuring
let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = names;
console. log (winner, runnerup); //"tony" "bruce"

const student = {
    name: "Devika",
    class: 9,
    age: 14,
    subjects: ["hindi", "english", "math", "science", "social studies"],
    username:"devika123",
    password: 1234,
   
} ;
const { username: user, password: pass } = student;
console.log(user)