import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/about')
  }
  return (
    <div>
        <div>
          Home Page
        </div>
         <button
        onClick={clickHandler}
        className=" flex justify-center align-middle rounded-md bg-indigo-600 px-4 py-2 font-medium text-white cursor-pointer hover:bg-indigo-700">
          Move to About Page
        </button>
    </div>
  )
}

export default Home