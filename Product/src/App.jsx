import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const products = [
    { name: "Wireless Mouse", description: "Ergonomic design with 2.4GHz connectivity", price: "$15", available: true, image: "/mouse.png" },
    { name: "Mechanical Keyboard", description: "RGB backlit, blue switches", price: "$45", available: true, image: "/keyboard.png" },
    { name: "Gaming Headset", description: "Surround sound with noise-canceling mic", price: "$60", available: false, image: "/headset.png" },
    { name: "Smartwatch", description: "Tracks fitness, heart rate, and sleep", price: "$120", available: true, image: "/Smart.png" },
    { name: "Portable SSD", description: "1TB storage, USB-C interface", price: "$99", available: true, image: "/ssd.png" },
    { name: "Bluetooth Speaker", description: "Waterproof, 12-hour battery life", price: "$35", available: true, image: "/speaker.png" },
    { name: "Smartphone Stand", description: "Adjustable aluminum desk holder", price: "$10", available: true, image: "/stand.png" },
    { name: "LED Desk Lamp", description: "Touch control with 3 brightness levels", price: "$25", available: false, image: "/lamp.png" },
    { name: "USB-C Hub", description: "5-in-1 hub with HDMI and SD card reader", price: "$40", available: true, image: "/hub.png" },
    { name: "Noise Cancelling Earbuds", description: "Wireless earbuds with charging case", price: "$75", available: true, image: "/earbuds.png" },
    { name: "Laptop Cooling Pad", description: "Silent fans with adjustable height", price: "$30", available: true, image: "/coolingpad.png" },
    { name: "External Hard Drive", description: "2TB portable storage", price: "$85", available: true, image: "/hard.png" },
    { name: "Webcam", description: "1080p HD with built-in mic", price: "$50", available: false, image: "/webcam.png" },
    { name: "Power Bank", description: "20000mAh fast charging", price: "$40", available: true, image: "/power.png" },
    { name: "Wireless Charger", description: "Fast Qi charging pad", price: "$25", available: true, image: "/charger.png" }
  ];

  const [filtered, setFiltered] = useState(products);

  function Above() {
    const result = products.filter(
      (product) => parseInt(product.price.replace("$", "")) > 15
    );
    setFiltered(result);
  }

  function Reset() {
    setFiltered(products);
  }

  return (
    <main className="min-h-screen bg-linear-to-r from-indigo-50 to-purple-100 p-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 text-center uppercase tracking-wide mb-10 drop-shadow-lg">
        Products Card
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        <button 
          onClick={Above} 
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Show Above $15
        </button>
        <button 
          onClick={Reset} 
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition"
        >
          Show All
        </button>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, key) => (
            <Card
              key={key}
              image={product.image}
              name={product.name}
              price={product.price}
              available={product.available}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
