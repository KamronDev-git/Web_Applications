import React from 'react'
import Navbar from '../conponents/Navbar/Navbar'
import About from '../conponents/About/About'
import Services from '../conponents/Services/Services'
import Works from '../conponents/Works/Works'
import Contact from '../conponents/Contact/Contact'
import Footer from '../conponents/Footer/Footer'

const Home = () => {
  return (
    <div className='font-nunito dark:bg-slate-900' >

        <div className='h-screen bg-gradient-to-t from-indigo-300 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden'>
            <Navbar/>
        </div>
          <About/>
          <Services/>
          <Works/>
          <Contact/>
          <Footer/>

    </div>
  )
}

export default Home