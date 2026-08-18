import { useState } from 'react'
function ProductCard(props){
    return(
        <>
        <div style={{border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    width: "300px",
    backgroundColor: "#3d834d",
    boxShadow: "0 4px 8px rgba(122, 43, 43, 0.1)",
    textAlign: "center"}} >
            <h2>Product Name:{props.name}</h2>
            <p>Product Description : {props.description}</p>
            <p>Price :{props.price}</p>
            <p>Avilable: {props.available?"Available":"Not Avilable"}</p>
            <button>Add to cart</button>
            <butto>Buy Now</butto>
        </div>
        </>
    )
}
export default ProductCard;