let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log("error",err)
// })

async function getFacts() {
    try {
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console. log ("data1 - ", data1);
        let res2 = await fetch(url);
        let data2 = await res2.json ();
        console. log("data2 -", data2);
    }   catch (e) {
        console. log ("error: ", e);
    }
}
getFacts();