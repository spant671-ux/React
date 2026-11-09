import { useNavigate } from "react-router-dom"

const About = () => {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/support')
  }
  return (
    <div>
        <div>
          About Page
        </div>
         <button
        onClick={clickHandler}
        className=" flex justify-center align-middle rounded-md bg-indigo-600 px-4 py-2 font-medium text-white cursor-pointer hover:bg-indigo-700">
          Move to Support Page
        </button>
    </div>
  )
}

export default About