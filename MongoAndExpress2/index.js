const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js"); 
const methodOverride = require('method-override');
const ExpressError = require("./ExpressError")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs"); 
app.use(express.static (path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}


//home
app.get("/",(req,res)=>{
    res.send("working root");
});

//error handling middleware
app.use((err,req,res,next)=>{
  let{ status = 500 ,message = "SOME ERROR" } = err;
  res.status(status).send(message) ;

})

//index route
app.get("/chats",async(req,res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});

})

//create route
app.post("/chats",asyncWrap(async(req,res)=>{
  
      let {from,to,msg}= req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()  // 
});
    await newChat.save();
    res.redirect("/chats")
  
}))

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err))
    }
}

//new route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404, "Page n 
    res.render("new.ejs");
})

//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}= req.params;
    let chat = await Chat.findById(id); 
    res.render("edit.ejs",{chat });
})

//NEW - Show Route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
let { id } = req.params;
let chat = await Chat.findById(id);
if(!chat){
    return next(new ExpressError(500, "chat not found"));
}
res.render ("edit.ejs",{chat});
}))

//update route
app.put("/chats/:id",async(req,res)=>{
    let { id } = req. params;
    let{msg: newMsg} = req.body; 
    let updatedChat = await  Chat.findByIdAndUpdate(id,{msg:newMsg} ,{runValidators: true, new:true});
    console.log(updatedChat); 
    res.redirect("/chats"); 
})

//destroy route
app.delete("/chats/:id",async(req,res)=>{
    let { id } = req. params; 
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats"); 
})

app.listen(8080,()=>{
    console.log("app is listening on port 8080");
})