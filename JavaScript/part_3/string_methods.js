//Trim Method
let msg = "    hello     ";
let newMsg = msg.trim();
console.log(newMsg);

//Upper case and Lower case

let str = "Random String";
let upperCase = str.toUpperCase();
let lowerCase = str.toLowerCase();
console.log(str);
console.log(upperCase);
console.log(lowerCase);

//Index of

let str2 ="I Love Coding";
let index = str2.indexOf("Love");
console.log(index);

//uppercase trim

let str3 = str2.trim().toUpperCase();
console.log(str3);
// str3 = str3.toUpperCase();
// console.log(str3);


//slice
let str4 = "Hello World";
console.log(str4.slice(0,5))

//replace
let newStr4 = str4.replace ("World","devika");
console.log(newStr4);


//repeat
let str5 = "Devika"
let newStr5 = str5.repeat(3);
console.log(newStr5);