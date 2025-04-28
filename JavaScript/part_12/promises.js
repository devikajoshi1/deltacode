h1 = document.querySelector ("h1");
function changeColor (color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1. style.color = color;
            resolve("color change")
        },delay)
    })
    
}
async function show(params) {
    await changeColor("violet",1000);
    await changeColor("indio",1000);
    await changeColor("red",1000);
    await changeColor("blue",1000);
}

// changeColor("red",1000).then(()=>{
//         console.log("red color completed");
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("orange color completed")
//         return changeColor("green",1000)
//     })
//     .then(()=>{
//         console.log("green color completed")
//         return changeColor("blue",100)
//     })
//     .then(()=>{
//         console.log("blue color completed")
//     })
// changeColor("red",1000 , ()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 changeColor("yellow",1000);
//             });
//         });
//     });
// });



// function saveToDB(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }

// }
// saveToDB("devika" ,() =>{
//     console.log("your data was save")
// }, ()=>{
//     console.log("your data was not save")
// });

// function saveToDB(data){
//     return new Promise((resolve , reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
// }

// let request = saveToDB("devika");
// request.then(()=>{
//     console.log("promise resolve");
// })
// .catch(()=>{
//     console.log("promise reject");
// })


// saveToDB("devika")
// .then(()=>{
//     console.log("promise 1 resolved")
//     return saveToDB("hello")
// })
// .then(()=>{
//     console.log("promise 2 resolved");
// })
// .catch(()=>{
//     console.log("some promise rejected");
// })

// saveToDB ("Devika")
// .then ((result) => {
// console.log("result: ", result); console.log("promisel resolved");
// return saveToDB("hello world");
// })
// .then ((result) => {
//     console.log("result: ", result); console.log ("promise2 resolved");
// })
// .catch((error) => {
//     console. log("error : ", error);
//     console.log ("some promise rejected");
// }) ;

// saveToDB("devika");
