const mongoose = require('mongoose');
main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema = new mongoose. Schema({
    name:String,
    email:String,
    age:Number
})
const User = mongoose.model("User",userSchema);
const user1 = new User({
    name:"adam",
    email:"adam@yahoo.com",
    age:48
});

//delete find by id and delete
User.findByIdAndDelete("684685ab66259036a010c0e9").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


//delete one and many
// User.deleteOne({name:"adam"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// User.deleteMany({age:48}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })





//find one and update
// User.findOneAndUpdate({name:"bruce"} ,{age:35}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//find by id and update
// User.findOneAndUpdate({name:"bruce"} ,{age:35},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


//update by one and many
// User.updateMany({age:{$gt:48}} ,{age:55}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// User.updateOne({name:"bruce"},{age:49}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



//find by one and many
// User.findById("684682f8a7ff6f34304d6405").then((res) =>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// }); 
// User.findOne({_id:"684682f8a7ff6f34304d6405"}).then((res) =>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// }); 




//insert many
// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:50},
//     {name:"bruce",email:"bruce@gmail.com",age:47},
//     {name:"peter",email:"peter@gmail.com",age:30}
// ]).then((data)=>{
//     console.log(data);
// })





//insert one
// const user2 = new User({
//     name:"eve",
//     email:"eve@google .com",
//     age:48
// });
// user1.save();
// user2.save().then ((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })