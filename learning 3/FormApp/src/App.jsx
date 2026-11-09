
import { useState } from 'react'
import './App.css'

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName)
  // console.log(lastName)

  // function firstNameHandler(e){
  //   setFirstName(e.target.value);
  // }

  // function lastNameHandler(e){
  //   setLastName(e.target.value);
  // }

  const [formData, setFormData] = useState({firstName: "", lastName: "", email:"", comments:"", isVisible:true, mode:"", favCar:""});

  function changeHandler(e){
    const {name, value, checked, type} = e.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(e){
    e.preventDefault;
    console.log("Finally printing  all datas of form");
  }

  return (
    <>
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input 
        type="text"
        placeholder='First Name'
        onChange={changeHandler} 
        name='firstName'
        value={formData.firstName}
        />

        <br/>

        <input 
        type="text"
        placeholder='Last Name'
        onChange={changeHandler}
        name='lastName' 
        value={formData.lastName}
        />

        <br/>

        <input 
        type="email"
        placeholder='E-Mail'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />

        <br/>

        <textarea
        placeholder='Enter your Comments here'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />

        <br/>
        
        <label htmlFor='isVisible'>Am I visible?</label>
        <input 
        type="checkbox" 
        name="isVisible"
        id='isVisible'
        onChange={changeHandler}
        checked={formData.isVisible}
        />

        <br/>

        <fieldset>
          <legend>Mode: </legend>

          <label htmlFor='Online-Mode'>Am I Online?</label>
        <input 
        type="radio" 
        name="mode"
        onChange={changeHandler} 
        value="Online-Mode" 
        id="Online-Mode"
        checked={formData.mode === "Online-Mode"}
        />

        <label htmlFor='Offline-Mode'>Am I Offline?</label>
        <input 
        type="radio" 
        name="mode"
        onChange={changeHandler} 
        value="Offline-Mode" 
        id="Offline-Mode"
        checked={formData.mode === "Offline-Mode"}
        />
        </fieldset>

        <label htmlFor='favCar'>Your favourite car: </label>
        <select 
        onChange={changeHandler}
        name = "favCar"
        value={formData.favCar}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Bugatti">Bugatti</option>
        </select>

        <br/>

        <button>Submit</button>

      </form>
    </div>
    </>
  )
}

export default App
