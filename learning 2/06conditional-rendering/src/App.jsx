import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn';

function App() {

  const[isLoggedIn, setLoggedIn] = useState(true);

  if(!isLoggedIn){
    return(
      <LoginBtn />
    )
  }

  return(
    <div>
      <h1>Welcome to React Learning!</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )

  //Using Ternary

  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )

  //Using If-else

  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn />
  //   )
  // }
  // else{
  //   return(
  //   <LoginBtn />
  //   )
  // }
}

export default App
