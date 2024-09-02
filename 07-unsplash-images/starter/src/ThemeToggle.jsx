import { useGlobalContext } from './context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ThemeToggle = () => {
  const {darkTheme, toggleDarkTheme} = useGlobalContext()
   
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {
          darkTheme? <BsFillMoonFill className='toggle-icon'/> : 
          <BsFillSunFill className='toggle-icon'/>
        }
      </button>
    </section>
    
  )
}

export default ThemeToggle