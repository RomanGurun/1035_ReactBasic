// import React from 'react'
// import Button from "./button"

// // import { isElement } from 'react-dom/test-utils'

// const Home = () => {
//   return (
// <ul>
// <li>how</li>
// <li>are</li>
// <li>you</li>
// <Button textInsideButton="Home"/>
// <button style={{backgroundColor:"red"}}>Register</button>
// <button style={{backgroundColor:"blue"}}>Login</button>
// </ul>


// )
// }

// export default Home
// ========================Old code without hooks ============================

// import {Component} from "react"
// class Home extends Component{
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }

// increaseCounter(){
//   this.setState({count:this.state.count+1})
// }
// render(){
// return(

// <div>
// <h1>Count : {this.state.count}</h1>
// <button onClick={()=>this.increaseCounter()}>+</button>



// </div>


// )
// }


// }

// export default Home





// ============================ HOOKS CODE ================================================
import React from 'react'
import {useState} from "react"

const Home = () => {
 // const state=useState(0) //[0,FUNCTION]
//const state1=state[0]; //initial value
//const state2=state[1]; //function

//   console.log(state[0]);
// console.log(state[1]);
const [count,setCounts]=useState(10)
// const increaseCount=()=>setCount(count+1);
{/* <button onClick={()=>increaseCount}>+</button> same as below fnction in below tag  */}
 

// const [initial value,function] = useState(0); 


  return (
    <div>

      <h1>{count}</h1>
<button onClick={()=>setCounts(count +1)}>+</button>
    </div>
  )
}

export default Home
