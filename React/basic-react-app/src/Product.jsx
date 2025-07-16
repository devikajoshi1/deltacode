import "./Product.css";
function Product({ title, price}) {
    let styles={backgroundColor: price > 30000?"blue" : ""}
    return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price: {price}</h5>
      {price > 30000 && <p>Discount of : 5%</p> }
    </div>
  );
}


export default Product

 // let list=features.map((feature)=><li>{feature}</li>)
 {/* <p>{features.map((feature) => (
            <li>{feature}</li>  
        ))}
      </p> */}
      {/* <p>{features2?.a}</p>
      <p>{features2?.b}</p> */}