import { createContext, useContext, useState } from "react"
import ChildA from "./components/ChildA";
import './App.css'

//Step 1: Create Context
const UserContext = createContext();

//Step 2: Wrap all the child inside a provider
//Step 3: Pass value
//Step 4: Consume by going inside consumer

const ThemeContext = createContext();

function App() {
  const[user, setUser] = useState({name: "Sans"})
  const[theme, setTheme] = useState('light')
  return (
    <>    
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme, setTheme}}>
         <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
          <ChildA />
         </div>
        </ThemeContext.Provider>
      </UserContext.Provider> 
    </>
  )
}

export default App
export {UserContext}
export {ThemeContext}