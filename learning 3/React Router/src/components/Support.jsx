import { useNavigate } from "react-router-dom"

const Support = () => {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/labs')
  }

  function backHandler(){
    navigate(-1);
  }

  return (
    <div>
      <div>
        Support Page
      </div>
         <button
        onClick={clickHandler}
        className=" flex justify-center align-middle rounded-md bg-indigo-600 px-4 py-2 font-medium text-white cursor-pointer hover:bg-indigo-700">
          Move to Labs Page
        </button>
        <button 
        onClick={backHandler}
        className=" flex justify-center align-middle rounded-md bg-indigo-600 px-4 py-2 font-medium text-white cursor-pointer hover:bg-indigo-700">Go Back</button>
    </div>
  )
}
export default Support