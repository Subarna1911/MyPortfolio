import React from 'react'
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import CustomCursor from './components/CustomCursor';
import Body from './components/Body';


const App = () => {
  return (
    <div className="relative">
      <CustomCursor/>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
