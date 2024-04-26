
// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './home';
import About from './About';
import UseEffect from './UseEffect';
function App() {
// var mystyle={
// color:"red",
// backgroundColor:"blue"

// };


  return (
// ==================================== First way of routing ==========================================
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<h2>Contact page</h2>}/>


<Route path="/useEffect" element={<UseEffect/>}/>


</Routes>
</BrowserRouter>


// ==============================33333333333.Second way of routing..... ==========================================
// {/* <RouterProvider router={router}/> */}
//  <RouterProvider router={Home}/>


)
}

export default App
