import UserCard from './components/UserCard'
import './App.css'
import ZoroPic from "./assets/Zoro.jpg";
import MikeyPic from "./assets/Mikey.jpg";
import GutsPic from "./assets/Guts.jpg";

function App() {
  return (
    <div className='container'>
      <UserCard name="Zoro" desc="desc1" image={ZoroPic} style={{"border-radius": "10px"}}/>
      <UserCard name="Mikey" desc="desc2" image={MikeyPic} style={{"border-radius": "10px"}}/>
      <UserCard name="Guts" desc="desc3" image={GutsPic} style={{"border-radius": "10px"}}/>
    </div>
  )
}

export default App
