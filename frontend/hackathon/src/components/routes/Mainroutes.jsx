import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Product'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Shopmenu from '../pages/Shopmenu'
import { Route, Routes } from 'react-router-dom'
import Shop from '../pages/Shop'
import Forartist from '../pages/ForArtist'
import Artistmenu from '../pages/Artistmenu'


const Mainroutes = () => {
  return (
    <div className='bg-[#e6e5e3] '>

       <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/shop" element={<Shop />} /> // if you have a separate Shop page
<Route path="/shopmenu" element={<Shopmenu />} /> // for mobile panel

<Route path="/forartist" element={<Forartist />} /> // if you have a separate Artist page
<Route path="/artistmenu" element={<Artistmenu />} /> // for mobile panel



    
        <Route path='/product' element={<Products />} />

      
             
            
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default Mainroutes
