let nums = [10,20,30,40];
let ans = nums.every((el) => el%10==0);
console.log(ans);

let arr = [1,2,3,4,5,];
let res = arr.reduce((min,el)=>{
    if(min < el){
        return min;
    }
    else{
        return el;
    }
});
console.log(res);