import React from 'react'
import Button from "./button"

// import { isElement } from 'react-dom/test-utils'

const Home = () => {
  return (
<ul>
<li>how</li>
<li>are</li>
<li>you</li>
<Button textInsideButton="Home"/>
<button style={{backgroundColor:"red"}}>Register</button>
<button style={{backgroundColor:"blue"}}>Login</button>
</ul>


)
}

export default Home