import React from 'react'
import './Education.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import lines from '../../img/lines.svg'
// import Button from '@mui/material/Button';

import Container from 'react-bootstrap/Container';

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faUserGraduate, faBookOpenReader, faCalendarDays, faStar } from '@fortawesome/free-solid-svg-icons'
import { themeContext } from '../../Context';
import { useContext } from "react";
function Education() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 0.9, type: 'spring' }
    return (
        <div id='Education' className='mt-4'>
    
           <Container style={{borderRadius:'10px'}}> 
            <div className='pt-5 site-section' >
                <div class="text-center">
                    <h3>Education</h3>
                    <img src={lines} className="img-lines" alt="lines" />
                </div>
            </div>
            <motion.div
             initial={{ scale: (0) }}
             whileInView={{ scale: (1) }}
             transition={transition}
            >
                    <Row className="justify-content-md-center">
                <Col xs={6} md={4} className='fpadding d-flex align-items-center justify-content-center' >

                    <FontAwesomeIcon icon={faUserGraduate} bounce className='icon-style' />
                </Col>
                <Col
               
                className='right-side fpadding' xs={6} md={4} >
                    <div className='m1-b' style={{ background: darkMode ? 'black' : 'white', zIndex: '1' }}></div>
                    <div className='m1'>
                        <h5>B.Tech in Information Technology</h5>
                        <p>University Institute of Technology, RGPV Bhopal</p>

                        <span><FontAwesomeIcon icon={faCalendarDays} style={{ color: '#FCA61F', fontSize: '15px' ,marginRight:'7px'}} /></span><span>2020-2024</span>
                        <br />
                        <span><FontAwesomeIcon icon={faStar} style={{ color: '#FCA61F', fontSize: '15px' }} /></span><span > 8.12 cgpa</span>
                    </div>
                </Col>

            </Row>
            </motion.div>
            <motion.div
             initial={{ scale: (0) }}
             whileInView={{ scale: (1) }}
             transition={transition}
            >
            <Row className="justify-content-md-center">
                <Col className='lefts fpadding' xs={6} md={4}>
                    <div className=' m2-b' ></div>
                    <div className='m1 text-end'>
                        <h5>Higher Secondary School Certificate</h5>
                        <p>St. Thomas Higher Secondary School, Jabalpur</p>

                        <span>2017-2019</span><span><FontAwesomeIcon icon={faCalendarDays} style={{ color: '#FCA61F', fontSize: '15px' ,marginLeft:'7px'}} /></span>
                        <br />
                        <span > 86% </span><span><FontAwesomeIcon icon={faStar} style={{ color: '#FCA61F', fontSize: '15px' }} /></span>
                    </div>
                </Col>
                <Col xs={6} md={4} className='fpadding d-flex align-items-center justify-content-center left-side right-side' >

                    <FontAwesomeIcon icon={faSchool} bounce className='icon-style' />
                </Col>

            </Row>
            </motion.div>
            <motion.div
             initial={{ scale: (0) }}
             whileInView={{ scale: (1) }}
             transition={transition}
            >
            <Row className="justify-content-md-center">

                <Col xs={6} md={4} className='fpadding d-flex align-items-center justify-content-center' >

                    <FontAwesomeIcon icon={faBookOpenReader} bounce className='icon-style'/>
                </Col>
                <Col className='right-side fpadding' xs={6} md={4}>
                    <div className='m1-b' style={{ background: darkMode ? 'black' : 'white', zIndex: '1' }}></div>
                    <div className='m1'>
                        <h5>High School Certificate</h5>
                        <p>Leonard High School, Jabalpur</p>

                        <span><FontAwesomeIcon icon={faCalendarDays} style={{ color: '#FCA61F', fontSize: '15px' ,marginRight:'7px'}} /></span><span>2007-2017</span>
                        <br />
                        <span><FontAwesomeIcon icon={faStar} style={{ color: '#FCA61F', fontSize: '15px' }} /></span><span > 82.8% </span>
                    </div>
                </Col>
            </Row>
            </motion.div>
            </Container>
        </div>
    )
}

export default Education
