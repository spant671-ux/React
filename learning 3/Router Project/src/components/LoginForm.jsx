import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({email:"", password:""})

    function changeHandler(e){
        setFormData( (prevData) => (
            {
                ...prevData, 
                [e.target.name]:event.target.value
            }
        ) )
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ")
        console.log(formData)
        navigate('/dashboard');
    }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <label className="w-full">
            <p className="text-[0.875rem] text-[rgb(241,242,255)] mb-1 leading-5.5">
                Email Address<sup className="text-pink-400">*</sup>
            </p>
            <input 
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id" 
            name="email"
            className="bg-[rgb(16,21,29)] text-[rgb(115,120,127)] rounded-lg w-full p-3"
            />
        </label>

        <label className="w-full relative">
            <p className="text-[0.875rem] text-[rgb(241,242,255)] mb-1 leading-5.5">
                Password<sup className="text-pink-400">*</sup>
            </p>
            <input required
            type={showPassword ? ("text") : ("password") }
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password" 
            className="bg-[rgb(16,21,29)] text-[rgb(115,120,127)] rounded-lg w-full p-3"
            />

            <span 
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-9.5 cursor-pointer"
            >
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>

            <Link to="#">
                <p className="text-xs mt-1 text-blue-200 max-w-max ml-auto">
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className="bg-[rgb(201,166,10)] rounded-lg font-medium text-[rgb(0,8,15)] px-3 py-2 mt-6">
            Sign In
        </button>
    </form>
  )
}

export default LoginForm