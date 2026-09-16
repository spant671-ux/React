import './App.css'

function App() {

  let counter = 5
  const addValue = () => {
    console.log("clicked", Math.random());
    
    counter = counter+1
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>add value</button>
    <br />
    <button>remove value</button>
    </>
  )
}

export default App
