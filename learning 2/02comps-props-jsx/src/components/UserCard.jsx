import './UserCard.css';
// import Zoro from '../assets/Zoro.jpg'
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id= 'user-img' src={props.image} alt='caption'/>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard