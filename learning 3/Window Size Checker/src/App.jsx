import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [windowsize, setWindowsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect( () => {
    const handleResize = () => {
      setWindowsize( {
        width: window.innerWidth,
        height: window.innerHeight
      } )
    }
    window.addEventListener('resize', handleResize)

    return() => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
    <h1>Window Resize</h1>
    <p>width: {windowsize.width}</p>
    <p>height: {windowsize.height}</p>
    </>
  )
}

export default App
