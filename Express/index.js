const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
        console.log(`port is listening on ${port}`);
});
app.get("/", (req, res) => {
    res.send("hello i am node");
});
//query string
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("no search query")
    }
    res.send(`these are the result for: ${q}`)
})



//path parameter
// app.get("/:username", (req, res) => {
//     console.log(req.params); // Logs the username
//     let { username } = req.params;
//     res.send(`This account belongs to @${username}`);
// });


// //res
// app.listen(port, () => {
//     console.log(`port is listening on ${port}`);
// });

// app.get("/", (req, res) => {
//     res.send("hello i am node");
// });

// app.get("/orange",(req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("*", (req, res) => {
//     res.send("Path does not exist");
// });



// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("this is a basic response");
//     res.send({
//         name:"apple",
//         color:"red"
//     })
// })