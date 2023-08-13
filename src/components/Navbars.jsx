import React from 'react'
import './Navbars.css'
import Toggler from "./Toggler/Toggler.jsx";
import { Link } from 'react-scroll';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { themeContext } from '../Context';
import { useContext } from "react";
import { Container } from 'react-bootstrap';
import Resume from '../Mayur_Patel_Resume.pdf'
function Navbars() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div id='Navbars' >
            <Navbar style={{ background: darkMode ? 'rgb(0 ,0, 0, 0.96)' : 'white' }} expand="lg" variant={darkMode ? "dark" : "light"} className='fixed-top navbox'>
                <Container>
                    <Navbar.Brand href="#home" style={{ color: '#FCA61F', fontSize: '35px' }}>Mayur</Navbar.Brand>
                    <Toggler bg='light' />
                    <a href={Resume} download><button type="submit"  className='cv-btn'>Download CV</button></a>
                    <Navbar.Toggle style={{ color: '#FCA61F' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto px-5 " >


                            <Nav.Link className='text-dark px-4 nav-item mt-3' href="#home">


                                <Link spy={true} to='Navbars' style={{ color: darkMode ? 'white' : 'black' }} className='nav-l' activeClass='activeClass'>
                                   <p> Home</p>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className=' px-4 nav-item mt-3' href="#Services">
                                <Link spy={true} to='Skills' className='nav-l' style={{ color: darkMode ? 'white' : 'black' }}>

                                   <p> Skills</p>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className=' px-4 nav-item mt-3' href="#portfolio">

                                <Link spy={true} smooth={false} to='Education' className='nav-l' style={{ color: darkMode ? 'white' : 'black' }}>

                                    <p>Education</p>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className=' px-4 nav-item mt-3' href="#project">

                                <Link spy={true} smooth={false} to='Project' className='nav-l' style={{ color: darkMode ? 'white' : 'black' }}>

                                    <p>Project</p>
                                </Link>
                            </Nav.Link>
                            <Nav.Link className='px-4 nav-item mt-3' href="#Contact" >
                                <Link spy={true} to='Contact' className='nav-l' style={{ color: darkMode ? 'white' : 'black' }}>

                                    <p>Contact</p>
                                </Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars
