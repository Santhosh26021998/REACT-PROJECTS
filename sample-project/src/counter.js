import React, { useState } from "react";
export function Counter(){
    const [count,setCount]=useState(0);
    return(
    <div className="text-center">
        <h1>COUNTER</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>INCREAMENT</button>
        <button onClick={()=>setCount(count*0)}>RESET</button>
        <button onClick={()=>setCount(count-1)}>DECREAMENT</button>
    </div> 
    );
}