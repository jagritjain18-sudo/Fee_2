import { useState } from 'react'
import './App.css'
import './index.css'
function Card(props){
    return(
        <>
        <h3 className='bg-white'>Product Name :{props.name} </h3>
        <p>Product Description:{props.description}</p>
        <p>Price:{props.price} </p>
        <p>Available:{props.available}</p>
        <button>{props.buy} </button>
        <button>Add to cart</button>
        </>
    )
}
export default Card