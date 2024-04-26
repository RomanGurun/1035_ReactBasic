import React from 'react'
import {useEffect} from 'react'
import { useState } from 'react';
const UseEffect = () => {
    const[count,setCount]=useState(0);
    const[count2,setCount2]=useState(0);
    
// Type 1 of UseEffect on the basis of execution
// useEffect(()=>{
//     console.log("Hello world")
// },[]);

// Type 2 of UseEffect on the basis of execution

// useEffect(()=>{

// document.title=count; we can do dom manipulation as well
//     console.log("UseEffect")

// },[count,count2]);


// Type 3 of UseEffect on the basis of execution
const consoleLog=()=>{
    console.log("usEffect Triggered Roman");
// function bata kam garayeko professionals......
}
useEffect(()=>{
consoleLog();

})



  return (
    <div>
  
<h1>Count :{count}</h1>   

<button onClick={()=>setCount(count+1)}>+</button>


<h1>Count2 :{count2}</h1>   

<button onClick={()=>setCount2(count2-1)}>-</button>





</div>
)
}

export default UseEffect
