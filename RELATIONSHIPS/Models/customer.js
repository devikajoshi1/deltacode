const mongoose = require("mongoose");
const { Schema } = mongoose;
main().then(()=>console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new mongoose.Schema({
    item:String,
    price:Number
}); 

const customerSchema = new mongoose.Schema({
    Name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});
 
const Order =  mongoose.model ("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

// const addCustomer = async()=>{
//     let cust1 = new Customer({ 
//         Name: "RaghulKumar",
//     });
//     let order1 = await Order.findOne({item:"chips"});
//     let order2 = await Order.findOne({item:"chocolate"});

//     cust1.orders.push(order1);
//     cust1 .orders.push(order2);

//     let res = await cust1.save();
//     console.log(res); 

// }
// addCustomer(); 
const findCustomer = async () => {
let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};
findCustomer();


// const addOrders = async () => {
// let res = await Order.insertMany([
//     {item:"samosa",price:12},
//     {item:"chips",price:10},
//     {item:"chocolate",price:40} 
// ])
// console.log(res);
// };

// addOrders();

