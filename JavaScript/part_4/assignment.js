//Q-1

let arr = [1,2,3,4,5,6,2,3];
let num =2;
for(let i =0; i<arr.length;i++){
    if(arr[i] == num){
        arr.splice(i , 1);

    }
   
}
console.log(arr);

//Q-2 
let no = 287152;
let count = 0;
let copy = no;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//Q-3
let no2 = 287152;
let sum = 0;
let coppy = no2;
while(coppy > 0){
    let digit = coppy%10;
    sum+= digit;
    coppy = Math.floor(coppy/10);
}
console.log(sum);

//Q-4
let n=5;
let factorial = 1;
for(let i = 1; i<=n;i++){
    factorial*=i;

}
console.log(`factorial of ${n} is ${factorial}`);

//Q-5
let arr2 = [2,5,10,4,2,7,1,9];
let large = 0;
for(let i =0; i<arr2.length;i++){
    if(large < arr2[i]){
        large = arr2[i];
    }
}
console.log(large);

