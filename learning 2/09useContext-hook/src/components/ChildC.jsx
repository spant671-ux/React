import { useContext } from 'react';
import { UserContext } from '../App';
import { ThemeContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext)
    function clickHandler(){
      if(theme === 'light')
        setTheme('dark')
      else
        setTheme('light')
    }
    return (
    <div>
        <button onClick={clickHandler}>
          Change Theme
        </button>
        data: {user.name}
    </div>
  )
}

export default ChildC