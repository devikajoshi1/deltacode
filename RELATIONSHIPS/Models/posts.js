const mongoose = require("mongoose");
const { Schema } = mongoose;
main().then(()=>console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new mongoose.Schema({
    username:String,
    email:String
}); 

const postSchema = new mongoose.Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema. Types. ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

const addData = async()=>{
    let user1 = new User({
        username: "rahulkumar", 
        email: "rahul@gmail.co m"
    });
    let post1 = new Post({
        content: "Hello World!",
        likes: 7
    });
    post1.user = user1;

    await user1.save();
    await post1.save();
};
addData();


//for delete copy
// const del = async () => {
// await Post.findByIdAndDelete("651db703119223d32b0c102b");
// await User.findByIdAndDelete("651db5b552cf598a629e0ef9");
// }
// del();