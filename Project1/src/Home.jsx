import { useState } from 'react'
import './App.css'
import hero from "./assets/hero.png"
import ProductCard from './ProductCard.jsx'
import Counter from "./Counter.jsx"

function Home() {
    const products = [
    { name: "Iphone17", description: "Mobile", price: 80000, available: true },
    { name: "Jeans", description: "Blue Jeans", price: 2000, available: true },
    { name: "Samsung", description: "Phone", price: 60000, available: true },
    { name: "Irtyu", description: "Casual Shirt", price: 1500, available: false },
    { name: "Laptop", description: "Gaming Laptop", price: 120000, available: true },
    { name: "Shoes", description: "Running Shoes", price: 3500, available: true },
    { name: "Watch", description: "Smart Watch", price: 5000, available: true },
    { name: "Headphones", description: "Wireless Headphones", price: 2500, available: false },
    { name: "Tablet", description: "Android Tablet", price: 30000, available: true },
    { name: "Camera", description: "DSLR Camera", price: 45000, available: true }
  ]
  const [count, setCount] = useState(0)
  const name="Jagrit";
  const age=25;
  const a=5;
  const b=10;
  const flag=true;
  function greet(){
    return "Hii"
  }
  const student={
    name:"rahul",
    age:17
  }
  const arr=["apple","mango","cherry","orange"]
  const url="https://google.com"

  return (
   <>
   <p>Name: {name}</p>
   <label htmlFor="email"></label>
   <input type="text" maxLength={5}/>
   <p className='ab'>chitkara</p>
   <p>Age: {age}</p>
   <p>{a+b}</p>
   <p>{greet()}</p>
   <p>{name.toUpperCase()}</p>
   {/*no use of if else,for loop,while,in return statements*/}
   <p>{flag?"niket":"gupta"}</p>
   <p>{student.name}</p>
   <p>{arr[0]}</p>
   <p style={{color:"red", fontSize:"50px"}}>G1 students</p>
   {/*inner for object and outer forjs*/}
   <img src={hero} alt="" ></img>
   <a href={url}>Google</a>
   <ul>
    {arr.map((fruit,index)=>{
        return(<li key={index}>{fruit}</li>)
    })}
    
   </ul>
   {/*key help to differeniate and for optimization purpose for search and delete */}
   {products.map((product)=>{
    return <ProductCard 
    name={product.name}
    description={product.description}
    price={product.price}
    available={product.available}
    />
    
   })}
   <Counter/>
   </>
  )
}

export default Home
