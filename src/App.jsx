
// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './home';
import router from './routes'
import {RouterProvider} from 'react-router-dom';

function App() {
// var mystyle={
// color:"red",
// backgroundColor:"blue"

// };


  return (
// ==================================== First way of routing ==========================================

// <BrowserRouter>
// <Routes>
//   <Route path="/element" element={<Home/>}/>
//   <Route path="/" element={<h1>Hello world</h1>}/>
//   <Route path="/about" element={<h1>about</h1>}/>


// </Routes>
// </BrowserRouter>

// <>




// <h1 style={mystyle}>hey</h1>
// <h1>Hello World</h1>
// <h1 style={{color:"blue"}}>Good Bye</h1>

//        </>   



// ==============================33333333333.Second way of routing..... ==========================================
<RouterProvider router={router}/>



)
}

export default App
