import React from 'react'
import "./components/Nav"
import Mainroutes from './components/routes/Mainroutes'
import Nav from './components/Nav'
import Highlights from './components/pages/Highlights'


const App = () => {
  return (
    <div className='bg-amber-200 h-full w-full max-w-[100vw] overflow-x-hidden min-h-screen  uppercase' style={{ fontFamily:  '"Montserrat", sans-serif' }}>
 

          <Highlights/>
  
        <section className='bg-green-700' >
        <Nav />
      <Mainroutes/>
      </section>


    </div>
  )
}

export default App
