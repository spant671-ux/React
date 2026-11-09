
const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={(e) => props.setName(e.target.value)} />
        <p>Name state variable value inside the {props.title}: {props.name}</p>
    </div>
  )
}

export default Card