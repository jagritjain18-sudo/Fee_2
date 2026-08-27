import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buttons = [
  {
    name: "Increment",
    symbol: "+",
    action: "increment",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Decrement",
    symbol: "-",
    action: "decrement",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    name: "Multiply by 3",
    symbol: "×",
    action: "multiply",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Divide by 3",
    symbol: "÷",
    action: "divide",
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    name: "Square",
    symbol: "x²",
    action: "square",
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    name: "Square Root",
    symbol: "√",
    action: "sqrt",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
];
const handleClick = (action)=>{
  switch (action){
    case "increment":
      setCount(count+1);
      break;
    case "decrement":
      setCount(count-1);
      break;
    case "multiply":
      setCount(count*3);
      break;
    case "divide":
      setCount(count/3);
      break;
    case "square":
      setCount(count*count);
      break;
    case "sqrt":
      setCount(Math.sqrt(count));
      break;
    case "reset":
      setCount(0);
      break;
    default :
      break;
  }
}
  return (
    <>
    <div className='bg-black w-full h-vh flex flex-col items-center justify-center'>
      <h1 className='text-white font-bold text-6xl text-center'>COUNTER APP</h1>
      <div className='bg-slate-700 w-300  h-55 flex items-center justify-center flex-col rounded-4xl m-12'>
        <h3 className="text-9xl font-bold text-white text-center ">{count}</h3>
         <p className='text-slate-400 text-lg mt-2 text-center '>Current Count</p>
      </div> 
      <div className='grid grid-cols-6 gap-4'>
        {buttons.map((button)=><button 
        key={button.name}
        onClick={()=>handleClick(button.action)}
        className={`${button.color} w-40 h-32 rounded-xl flex flex-col items-center justify-center p-5 text-white font-semibold transition hover:scale-105`}>
          <div className='text-5xl'>{button.symbol}</div>
          <div className='text-2xl'>{button.name}</div>
        </button>

      )};
      </div>
      <button className='text-white h-15 w-100 rounded-4xl bg-amber-400 mb-5' onClick={()=>handleClick("reset")}>Reset button</button>
    </div>
    </>
  )
}

export default App
