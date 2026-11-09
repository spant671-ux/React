import {  NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}> Home </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}> About </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" : ""}> Dashboard </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar