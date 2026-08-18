import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {
 const products = [
  {
    name: "Wireless Mouse",
    description: "Ergonomic design with 2.4GHz connectivity",
    price: "$15",
    available: true,
    buyNow: "Buy Now at $15",
    image: "/mouse.png"
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB backlit, blue switches",
    price: "$45",
    available: true,
    buyNow: "Buy Now at $45",
    image: "/keyboard.png"
  },
  {
    name: "Gaming Headset",
    description: "Surround sound with noise-canceling mic",
    price: "$60",
    available: false,
    buyNow: "Buy Now at $60",
    image: "/headset.png"
  },
  {
    name: "Smartwatch",
    description: "Tracks fitness, heart rate, and sleep",
    price: "$120",
    available: true,
    buyNow: "Buy Now at $120",
    image: "/Smart.png"
  },
  {
    name: "Portable SSD",
    description: "1TB storage, USB-C interface",
    price: "$99",
    available: true,
    buyNow: "Buy Now at $99",
    image: "/ssd.png"
  },
  {
    name: "Bluetooth Speaker",
    description: "Waterproof, 12-hour battery life",
    price: "$35",
    available: true,
    buyNow: "Buy Now at $35",
    image: "/speaker.png"
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable aluminum desk holder",
    price: "$10",
    available: true,
    buyNow: "Buy Now at $10",
    image: "/stand.png"
  },
  {
    name: "LED Desk Lamp",
    description: "Touch control with 3 brightness levels",
    price: "$25",
    available: false,
    buyNow: "Buy Now at $25",
    image: "/lamp.png"
  },
  {
    name: "USB-C Hub",
    description: "5-in-1 hub with HDMI and SD card reader",
    price: "$40",
    available: true,
    buyNow: "Buy Now at $40",
    image: "/hub.png"
  },
  {
    name: "Noise Cancelling Earbuds",
    description: "Wireless earbuds with charging case",
    price: "$75",
    available: true,
    buyNow: "Buy Now at $75",
    image: "/earbuds.png"
  },
  {
    name: "Laptop Cooling Pad",
    description: "Silent fans with adjustable height",
    price: "$30",
    available: true,
    buyNow: "Buy Now at $30",
    image: "/coolingpad.png"
  },
  {
    name: "External Hard Drive",
    description: "2TB portable storage",
    price: "$85",
    available: true,
    buyNow: "Buy Now at $85",
    image: "/hard.png"
  },
  {
    name: "Webcam",
    description: "1080p HD with built-in mic",
    price: "$50",
    available: false,
    buyNow: "Buy Now at $50",
    image: "/webcam.png"
  },
  {
    name: "Power Bank",
    description: "20000mAh fast charging",
    price: "$40",
    available: true,
    buyNow: "Buy Now at $40",
    image: "/power.png"
  },
  {
    name: "Wireless Charger",
    description: "Fast Qi charging pad",
    price: "$25",
    available: true,
    buyNow: "Buy Now at $25",
    image: "/charger.png"
  }
];

  
  return (
    <>
   
     <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-5xl font-bold text-indigo-800 text-center uppercase tracking-wide mb-6">
          PRODUCTS CARD
        </h1>
      <div className="max-w-1200px mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product,key)=>{
      return (<Card
      image={product.image}
      name={product.name}
      price={product.price}
      available={product.available}
      description={product.description}

      />)
})}</div></div>
</main>

    </>
  );
}

export default App
