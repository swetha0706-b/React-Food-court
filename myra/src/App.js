import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import About from './Components/About';
import Likes from './Components/Likes';
import Cart from './Components/Cart';

const App = () => {
  return (
    <div>
       
       <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path={'/'} element={<Home/>} ></Route>
              <Route path={'/about'} element={<About/>} ></Route>
               <Route path={'/likes'} element={<Likes/>} ></Route>
               <Route path={'/cart'} element={<Cart/>} ></Route>

          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App

