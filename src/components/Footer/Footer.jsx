import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll';
import { faAnglesUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { themeContext } from '../../Context';
import { useContext } from "react";
function Footer() {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div>
            <div className='text-center p-5 m-div' style={{
        background:darkMode? 'black'
      :''}}>
                <Link spy={true} to='intro' className='nav-l ' style={{  cursor: 'pointer' }}>

                    <FontAwesomeIcon icon={faAnglesUp} bounce className='up-icon' />

                </Link>
                <div>
                © All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
