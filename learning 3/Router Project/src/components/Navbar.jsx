import { Link } from "react-router-dom"
import logo from '../assets/Logo.svg'
import toast from "react-hot-toast";

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-290 py-4 mx-auto">

        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className="flex gap-x-6 text-[rgb(164,175,188)]">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>

        <div className="flex items-center gap-x-4">
            { !isLoggedIn &&
                <Link to='/login'>
                    <button className="bg-[rgb(16,21,29)] text-[rgb(164,175,188)] py-2 px-3 rounded-lg border border-[rgb(16,22,30)]">Login</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to='/signup'>
                    <button className="bg-[rgb(16,21,29)] text-[rgb(164,175,188)] py-2 px-3 rounded-lg border border-[rgb(16,22,30)]">Sign Up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/'>
                    <button
                    className="bg-[rgb(16,21,29)] text-[rgb(164,175,188)] py-2 px-3 rounded-lg border border-[rgb(16,22,30)]"
                    onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>Logout</button>
                </Link>
            }
            { isLoggedIn&&
                <Link to='/dashboard'>
                    <button className="bg-[rgb(16,21,29)] text-[rgb(164,175,188)] py-2 px-3 rounded-lg border border-[rgb(16,22,30)]">Dashboard</button>
                </Link>
            }
        </div>
    
    </div>
  )
}

export default Navbar