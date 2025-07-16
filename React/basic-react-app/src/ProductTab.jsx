import Product from "./Product.jsx";
function ProductTab(){
    let options = ["hi-tech", "durable", "fast"];
    // let options2={a:"hi-tech" , b:"durable" ,c:"fast"}
return(
    <>
    <Product title="phone" price={30000} />
    <Product title="laptop" price={40000}/>
    <Product title="pen" price={10}/>
</>
);
}

export default ProductTab;