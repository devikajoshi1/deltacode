const express = require("express");
const app = express();
const port =8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.listen(port, () => {
    console.log(`port is listening on ${port}`);
});
app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Get response welcome ${user}`);
});
app.post("/register",(req ,res)=>{
    let { user, password } =(req.body);
    res.send(`accepted Post ${user}`);
});
 