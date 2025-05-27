const express = require("express");
const app = express();
const port =8080;
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
 
app.set("views",path.join(__dirname,"views"));
app.use(express.static (path.join(__dirname,"public")));

let posts = [
    {
        id:uuidv4(),
        username:"Apnacollage",
        content:"i love coding"
    },
    {
        id: uuidv4(),
        username:"Devika",
        content:"Hardwork is important to achieve success "
    },
    {
        id:uuidv4(),
        username:"Ronit",
        content:"i'm a designer "
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

//create new post
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
});

//newpost
app.post("/posts",(req,res)=>{
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({id,username, content});
    res.redirect("/posts");
});

//show post
app.get ("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id ===p.id);
    res.render("show.ejs",{post})
});

//update route
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id ===p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})

//edit post
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id ===p.id);
    res.render("edit.ejs",{post});
})

//delete post
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !==p.id);
    res.redirect("/posts");
})
app.listen(port,()=>{
    console.log("app is listening to :8080 ")
})