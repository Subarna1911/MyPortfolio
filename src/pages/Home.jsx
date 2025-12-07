import React from 'react'

import {ArrowDownRight} from 'lucide-react'
import {useRef, useEffect} from 'react'

const Home = ({heroRef}) => {

  const videoRef = useRef(null);
  useEffect (()=>{

    if(videoRef.current){
      videoRef.current.playbackRate = 0.6;
    };

  },[]);  

  return (
 <div
  id="home"
  ref={heroRef}
  className="relative w-full md:min-h-screen  min-h-[60vh]
  sm:min-h-[90vh] flex items-center justify-center overflow-hidden"
>
  {/* Video Background */}
 

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 text-center space-y-6 px-4">
    <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-white">
      Front End Engineer
    </h1>

    <p className="text-gray-200 text-lg md:text-xl">
      I'm Subarna Tamang  
    </p>

    <p className="text-gray-300 text-lg md:text-xl">
      Turning websites into experiences people love.
    </p>

    <h2 className="flex gap-3 justify-center text-3xl md:text-4xl font-bold underline text-white cursor-pointer">
      <a href="#about">I Craft Like This</a>
      <ArrowDownRight size={30} />
    </h2>

    <h2 className="text-2xl md:text-3xl font-bold text-pink-500">
      <a href="#contact">Portfolio</a>
    </h2>
  </div>
</div>

  )
}

export default Home
