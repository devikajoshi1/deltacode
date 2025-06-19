const { error } = require("console");
const express = require("express");
const app = express();

app.use((req,res,next) => {
  console.log("I'm real middleware");
  next();
});
// app.use((req, res, next) => {
// req. responseTime = new Date(Date.now()).toString();
// console.log (req.method, req.path, req. responseTime, req.hostname);
// next();
// });

// app.use((req,res)=>{
//   res.send("page not found")
// })

app.use("/api",(req,res,next)=>{
  let {token} = req.query;
  if(token === "give access"){
    next();
  }
  throw new Error("ACCESS DENIED!");
});

// app.get("/wrong",(req,res)=>{
//   abcd=abcd;
// })

app.get("/api",(req,res)=>{
  res.send("data");
})

app.get("/random", (req, res,next) => {
  console.log("i'm only for random");
  next();
});

app.get("/", (req, res) => {
  res.send("hi i'm root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

app.listen(8080, () => {
  console.log("app.listening");
});
