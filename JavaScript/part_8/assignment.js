//Q-1
let num =[1,2,3,4,5];
const square = num.map((num)=> num*num);
console.log(square);
let sum = square.reduce((acu,cur)=>acu+cur,0);
console.log(sum);
let avg=  sum/num.length;
console.log(avg);

//Q-2
let numbers = [2,4,6,8,-2,-4];
console.log(numbers.map((number)=> number+5));

//Q-3
let strings =["adam","bob","catlyn","donald","eve"];
console.log(strings.map((string)=> string.toUpperCase()));

//Q-4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ... args.map ( (v) => v * 2) ,
];
doubleAndReturnArgs ([1, 2, 31, 4, 4]); // 11,2,3,8,81
doubleAndReturnArgs ([2], 10, 4); //11 12, 20, 81
console.log(doubleAndReturnArgs);

//Q-5
const mergeObjects = (obj1, obj2) => ({... obj1, ...obj2 });
mergeObjects ({a: 1, b: 2}, { c: 3, d: 4 }); // {a:1, b:2,
console.log(mergeObjects);