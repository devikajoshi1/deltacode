const mongoose = require('mongoose');
main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}
const bookSchema = new mongoose.Schema({
      title:{
        type:String,
        required:true
    },
      author : {
        type:String
    },
      price:{
        type:Number,
        min:[1,"price is too low for amazon selling"]
    },
    discount: {
        type: Number,
        default:0
    }
}) 
const Book =mongoose.model("Book",bookSchema);

let book1 = new Book ({
    title:"Mathematic",
    author:"RD Sharma",
    price:1200
});
let book2 = new Book ({
    title:"gone girl",
    price:500
});
Book.findByIdAndUpdate("68469a15edb0298e355c7945",{price:-100},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// book2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })