import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"


const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [accountType, setAccountType] = useState("student")

    const navigate = useNavigate();

    function changeHandler(e) {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    function submitHandler(e){
        e.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not match")
        }

        setIsLoggedIn(true);
        toast.success("Account created succesfully!")
        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }
        console.log("Printing final account data ")
        console.log(finalData)

        navigate("/dashboard")
    }

    return (
        <div>

            <div className="flex p-1 gap-x-1 my-6 rounded-full max-w-max bg-[rgb(16,21,29)] text-[rgb(119,123,131)]">
                <button 
                className={`${accountType == 'student' ? 'text-[rgb(241,242,255)] bg-[rgb(0,8,15)]' : 'bg-transparent text-'} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType('student')}
                >
                    Student
                </button>
                <button
                className={`${accountType == 'instructor' ? 'text-[rgb(241,242,255)] bg-[rgb(0,8,15)]' : 'bg-transparent text-'} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType('instructor')}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} >

                <div className="flex gap-x-4 mt-2.5">

                    <label className="w-full">
                        <p className="text-[0.875rem] text-[rgb(241,242,255)] mb-1 leading-5.5">
                            First name
                            <sup className="text-pink-400">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            onChange={changeHandler}
                            name='firstname'
                            placeholder="Enter First Name"
                            value={formData.firstname}
                            className="bg-[rgb(16,21,29)] text-[rgb(115,120,127)] rounded-lg w-full p-3"
                        />
                    </label>

                    <label className="w-full">
                        <p className="text-[0.875rem] text-[rgb(241,242,255)] mb-1 leading-5.5">
                            Last name
                            <sup className="text-pink-400">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            onChange={changeHandler}
                            name='lastname'
                            placeholder="Enter Last Name"
                            value={formData.lastname}
                            className="bg-[rgb(16,21,29)] text-[rgb(115,120,127)] rounded-lg w-full p-3"
                        />
                    </label>

                </div>

                <div className="flex gap-x-4 mt-2.5">
                    
                    <label className="w-full">
                        <p className="text-[0.875rem] text-[rgb(241,242,255)] mb-1 leading-5.5">
                            Email address
                            <sup className="text-pink-400">*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            onChange={changeHandler}
                            name='email'
                            placeholder="Enter Email Address"
                            value={formData.email}
                            className="bg-[rgb(16,21,29)] text-[rgb(115,120,127)] rounded-lg w-full p-3"
                        />
                    </label>
                </div>

                <div className="flex gap-x-4 w-full mt-2.5">
                     <label className="relative w-full">
                        <p className="text-[0.875rem] text-[rgb(241,242,255)] mb-1 leading-5.5">
                            Create Password
                            <sup className="text-pink-400">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword  ? ("text") : ("password")}
                            onChange={changeHandler}
                            name='password'
                            placeholder="Enter password"
                            value={formData.password}
                            className="bg-[rgb(16,21,29)] text-[rgb(115,120,127)] rounded-lg w-full p-3"
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-9.5 cursor-pointer">
                            {showPassword ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label> 

                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-[rgb(241,242,255)] mb-1 leading-5.5">
                            Confirm Password
                            <sup className="text-pink-400">*</sup>
                        </p>
                        <input
                            required
                            type={showConfirmPassword  ? ("text") : ("password")}
                            onChange={changeHandler}
                            name='confirmPassword'
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            className="bg-[rgb(16,21,29)] text-[rgb(115,120,127)] rounded-lg w-full p-3"
                        />
                        <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-9.5 cursor-pointer">
                            {showConfirmPassword ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                </div>

                <button className="bg-[rgb(201,166,10)] rounded-lg font-medium text-[rgb(0,8,15)] px-3 py-2 mt-6 w-full">
                    Create Account 
                </button>

            </form>

        </div>
    )
}

export default SignupForm