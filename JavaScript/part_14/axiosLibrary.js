let btn = document.querySelector("button");
let url2 ="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async()=>{
        let link = await getImg();
        // console.log(link);
        let img = document.querySelector("#result");
        img.setAttribute("src" , link);
        console.log(link)
    })
    
    async function getImg(params) {
        try{
            let res = await axios.get(url2);
            return res.data.message;
            // return res.data.fact
           
        }catch(e){
            console.log("ERROE - ",e);
            return ' /';
        }
    }

// btn.addEventListener("click",async()=>{
//     let fact = await getFact();
//      console.log(fact);
//      let p = document.querySelector("#result");
//      p.innerText =fact;
// })


// let url = "https://catfact.ninja/fact";

// async function getFact(params) {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact
       
//     }catch(e){
//         console.log("ERROE - ",e);
//         return 'no fact found'
//     }
// }
// getFact()