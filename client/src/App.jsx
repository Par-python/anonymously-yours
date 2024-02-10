import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [imageOpacity, setImageOpacity] = useState(1); 

  useEffect(() => {
    const LoadingScreenPhoto = () => {
      setImageOpacity(0);
    };

    window.onload = LoadingScreenPhoto;

    return () => {
      window.onload = null; 
    };
  }, []);


  return (
    <div className='comments'>
      <div className='commentSection'>
        <div className='LoadingScreenLogo' style={{
          opacity: imageOpacity,  
          transition: 'opacity 5s ease',
          WebkitTransition: 'opacity 5s ease', // For Safari and older versions of iOS
          MozTransition: 'opacity 5s ease', // For Firefox
          OTransition: 'opacity 5s ease', // For Opera 
        }}></div>
      </div>
    </div>
  )
}

export default App
