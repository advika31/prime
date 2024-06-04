import React from "react"
import Navbar from "./components/navbar"
import Title from "./components/pages/title"
// import Categories from "./components/pages/categories"
// import Home from "./components/pages/home"
import Livetv from "./components/pages/livetv"
import Store from "./components/pages/store"
import SignIn from"./components/pages/signin"
import Movies from "./components/pages/movies"
import TVshows from "./components/pages/tvshows"
import {  Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <>
      <Navbar/>
      <div className='container'>
      <Routes>
        
        <Route path='/' element={<Title />} />
        {/* <Route path='/categories' element={< Categories/>} /> */}
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/livetv' element={<Livetv />} />
        <Route path='/store' element={<Store />} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/tvshows' element={<TVshows/>} />
        
      </Routes>
    </div>
    
      </>
    </div>
  );
}

export default App;
