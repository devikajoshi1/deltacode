//for loop
// for(let i=1; i<=5 ;i++){
//     console.log(i);
// }

//print all odd num(1 to 15)
// for(i = 1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("even num");
//print all even num (2 to 10)
// for(let j =2; j<=10; j=j+2){
//     console.log(j);
// }

// console.log("multiplication table of 5")
//print multiplication table of 5
// let n = prompt("enter number");
// n = parseInt(n);
// for (let i = n; i<=n*10 ; i=i+n){
//     console.log(i);

// }
// for(let k = 5; k<=50; k=k+5){
//     console.log(k);
//     // console.log(5*k);
// }


//nested loop
// for (let i =1; i<=3; i++){
//     console.log(`outer loop ${i}`)
//     for(let j =1; j<=3; j++){
//         console.log(j);
//     }
// }


//while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


//loops with array
// console.log("loop with array");
// let fruits = ["mango","apple","banana","lichi","orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

//nested loop with nested array

let heroes = [["Ironman","spiderman","thor"],["Superman","wonderwoman","flash"]];
for(let i=0; i<heroes.length; i++){
    console.log(`list #${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}
console.log("foe nestrd")
for( list of heroes){
    for(hero of list){
        console.log(hero);
    }
}

//for of loop
let fruits = ["mango","apple","banana","lichi","orange"];
for(let fruit of fruits){
    console.log(fruit);
}