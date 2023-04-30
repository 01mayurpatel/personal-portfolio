import React from 'react'
import './Toggle.css'
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import { themeContext } from '../../Context'
import { useContext } from 'react'
function Toggler() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick=()=>{
    theme.dispatch({type:'toggle'});
  }
  return (
    <div>
        <div className="toggle" onClick={handleClick}>
            <UilMoon/>
            <UilSun/>
            <div className="t-button"
            
            style = {darkMode?{left:'2px'} : {right:'2px'}}
            >
                
            </div>
        </div>
    </div>
  )
}

export default Toggler
