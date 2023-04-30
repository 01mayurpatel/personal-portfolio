import React from 'react'
import './Intro.css'

import { themeContext } from '../../Context';
import { useContext } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll';

import { faAnglesDown} from '@fortawesome/free-solid-svg-icons'

function Intro() {
  
  

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro mt-5 pb-5'>
      <Container>
      <Row>

      <Col xs={12} md={6}>
      <div className="i-left mt-5">
        <div className="i-name">
            <span > Hy! I Am</span>
            <span>Mayur Patel</span>
            <p style={{color:'rgb(0,0,0,0.8)'}} className='fs-6 text  fw-light'>
            Hello! I'm Mayur, seeking an opportunity in a challenging environment where I can deliver my best with my technical knowledge and functional expertise and enhance more my skills that can be utilized for the overall development of an organization. If you have a project that you want to get started or think you need my help with something, then get in touch.
            </p>

        </div>

      
        <Link spy={true} to='Skills' className='nav-l' style={{ color: darkMode ? 'white' : 'black', cursor:'pointer' }}>

        <FontAwesomeIcon icon={faAnglesDown} bounce className='icon-style' />
                            
                        </Link>
   

       
      </div>
      </Col>
      <Col xs={12} md={6} className='intro-right'>
      
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Intro
