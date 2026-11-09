import './App.css'
import {useState } from 'react'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () =>{
    
    // counter = counter+1;
    setCounter((previous) => Math.min(previous + 1, 20))
  }

  const removeValue = () =>{
    
    // counter = counter+1;
    setCounter((previous) => Math.max(previous - 1, 0))
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter} </button>
    <br />
    <button onClick={removeValue}>Remove Value {counter} </button>
    <p>Footer: {counter} </p>
    </>
  )
}

export default App
