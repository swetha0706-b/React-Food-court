import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import About from './Components/About';

const App = () => {
  return (
    <div>
       
       <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path={'/'} element={<Home/>} ></Route>
              <Route path={'/about'} element={<About/>} ></Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App

