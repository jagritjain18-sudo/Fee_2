import { useState } from "react"

function Counter(){
    
    const [count,setCount]=useState(counter);
    function handleClick(){
       
        setCount(count+1);

    }
    return(
        <>
        <h3>Count:{count}</h3>
        <button onClick={handleClick}>Add</button>
        </>
    )
}
export default Counter