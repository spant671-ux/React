
function App() {

  function clickHandler(){
    alert("I am clicked!")
  }

  function mouseOver(){
    alert("Mouse is over the paragraph.")
  }

  function inputChangeHandler(e){
    console.log("Value till now: ", e.target.value);
  }

  function submitHandler(e){
    e.preventDefault();
    //writing my customer behaviour down
    alert("Should I submit?")
  }

  return (
    <div>

      <button onClick={() => alert("Button is clicked")}>
        Click Me  
      </button>

      {/* <form onSubmit={submitHandler}>
        <input type="text" onChange={inputChangeHandler} />
        <button type="submit">Submit</button>
      </form> */}

      {/* <p onMouseOver={mouseOver} style={{border:"1px solid black"}}>
        I am a Paragraph.
      </p>
     <button onClick={clickHandler}>
      Click me
     </button> */}
    </div>
  )
}

export default App
