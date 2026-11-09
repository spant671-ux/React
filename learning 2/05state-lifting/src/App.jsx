import Card from "./components/Card"

import { useState } from "react"

function App() {

  //create state
  //manage state
  //change state
  //sync state to all child

  const[name, setName] = useState('');
  return (
   <div>
    <Card title="Card 1" name={name} setName={setName}/>
    <Card title="Card 2" name={name} setName={setName}/>
    {/* <p>I am inside Parent component and value of Name is: {name}</p> */}
   </div>
  )
}

export default App
