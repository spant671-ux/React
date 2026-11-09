import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1);
  }

  return (

    <div>
      <Button incrementCount={handleClick} text="Click Me">
        <h1>{count}</h1>
      </Button>
      {/* <Card name="Santosh Pant">
        <h1>Best Web Dev Course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children="Hello Guys, I'm a children.">
      </Card> */}
    </div>
  )
}

export default App
