import { useNavigate } from "react-router-dom"

const Labs = () => {

  const navigate = useNavigate();

  const clickHandler = () => {
    //move to about page
    navigate('/')
  } 
  return (
    <div>
        <div>
          Labs
        </div>
        <button
        onClick={clickHandler}
        className=" flex justify-center align-middle rounded-md bg-indigo-600 px-4 py-2 font-medium text-white cursor-pointer hover:bg-indigo-700">
          Move to Home Page
        </button>
    </div>
  )
}

export default Labs