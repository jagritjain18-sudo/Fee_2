import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const products = [
  {
    name: "Wireless Mouse",
    description: "Ergonomic design with 2.4GHz connectivity",
    price: "$15",
    available: true,
    buyNow: "Buy Now at $15"
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB backlit, blue switches",
    price: "$45",
    available: true,
    buyNow: "Buy Now at $45"
  },
  {
    name: "Gaming Headset",
    description: "Surround sound with noise-canceling mic",
    price: "$60",
    available: false,
    buyNow: "Buy Now at $60"
  },
  {
    name: "Smartwatch",
    description: "Tracks fitness, heart rate, and sleep",
    price: "$120",
    available: true,
    buyNow: "Buy Now at $120"
  },
  {
    name: "Portable SSD",
    description: "1TB storage, USB-C interface",
    price: "$99",
    available: true,
    buyNow: "Buy Now at $99"
  },
  {
    name: "Bluetooth Speaker",
    description: "Waterproof, 12-hour battery life",
    price: "$35",
    available: true,
    buyNow: "Buy Now at $35"
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable aluminum desk holder",
    price: "$10",
    available: true,
    buyNow: "Buy Now at $10"
  },
  {
    name: "LED Desk Lamp",
    description: "Touch control with 3 brightness levels",
    price: "$25",
    available: false,
    buyNow: "Buy Now at $25"
  },
  {
    name: "USB-C Hub",
    description: "5-in-1 hub with HDMI and SD card reader",
    price: "$40",
    available: true,
    buyNow: "Buy Now at $40"
  },
  {
    name: "Noise Cancelling Earbuds",
    description: "Wireless earbuds with charging case",
    price: "$75",
    available: true,
    buyNow: "Buy Now at $75"
  }
];


  return (
    <>
      {products.map((product,index)=>{
        return (<Card
        name={product.name}
        description={product.description}
        price={product.price}
        available={product.available}
        buy={product.buyNow}
        />)
      })

      
      }
    </>
  )
}

export default App
