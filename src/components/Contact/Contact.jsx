import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from "react"
import { themeContext } from '../../Context';
import { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import lines from '../../img/lines.svg'

import Container from 'react-bootstrap/Container';

import { motion } from 'framer-motion'
import { Twitter } from '@mui/icons-material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
function Contact() {
    const transition = { duration: 1.5, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mess, setMess] = useState('');
    const [sub, setSub] = useState('');
    const [isLoading, setLoading] = useState(false);

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_fjubfuk', 'template_esw0ene', form.current, 'CK53sJDI2Mvw26l3S')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                setLoading(false);
                setName('');
                setEmail('');
                setMess('');
                setSub('');

            }, (error) => {
                console.log(error.text);
            });
    };


    return (

        <div id='Contact' className='pb-4'>
            <div className='pt-5 mt-3 site-section' >
                <div class="text-center">
                    <h3>Contact Me</h3>
                    <img src={lines} className="img-lines" alt="lines" />
                </div>
            </div>
            <motion.div
                initial={{ scale: (0) }}
                whileInView={{ scale: (1) }}
                transition={transition}>
                <Container>
                    <Row>
                        <Col xs={12} md={6} className='mt-3'>
                            <div>
                                <div className='p-2 mb-4 social-m' style={{ border: darkMode ? '2px solid orange' : 'none', boxShadow: darkMode ? ' rgba(218, 216, 216, 0.082) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' : '' }}>
                                    <div className='text-center social-s'>
                                        <ShareOutlinedIcon className='d-icons social-s-i' style={{
                                            fontSize: '50px', background: darkMode
                                                ? 'orange' : '', color: darkMode ? 'white' : ''
                                        }} />
                                    </div>
                                    <div className='text-center p-1' style={{ color: darkMode ? 'white' : 'rgb(72,72,72)' }}>
                                        <h6>Social Profiles</h6>
                                    </div>
                                    <div className='text-center'>
                                    <a href='https://github.com/01mayurpatel?tab=repositories' target='_blank'><GitHubIcon className='c-icons' style={{ fontSize: '40px', border: darkMode ? '1px solid orange' : 'none' }} />
                                        </a>
                                        <a href='https://www.linkedin.com/in/mayur-patel-b8806220b' target='_blank'><LinkedInIcon className='c-icons' style={{ fontSize: '40px', border: darkMode ? '1px solid orange' : 'none' }} />
                                        </a>
                                        <a href='https://www.instagram.com/_mayur._.patel_/' target='_blank'><InstagramIcon className='c-icons' style={{ fontSize: '40px', border: darkMode ? '1px solid orange' : 'none' }} />
                                        </a>
                                        <a href='https://www.facebook.com/profile.php?id=100007686634229' target='_blank'><FacebookRoundedIcon className='c-icons' style={{ fontSize: '40px', border: darkMode ? '1px solid orange' : 'none' }} />
                                        </a>
                                       

                                       
                                        <a href='https://twitter.com/MayurPatel0101' target='_blank'><Twitter className='c-icons' style={{ fontSize: '40px', border: darkMode ? '1px solid orange' : 'none' }} />
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                            <Row>
                                <Col xs={6} md={6} >
                                    <div className='p-2 social-m' style={{ background: darkMode ? 'black' : 'white', border: darkMode ? '2px solid orange' : 'none', boxShadow: darkMode ? ' rgba(218, 216, 216, 0.082) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' : '' }}>
                                        <div className='text-center social-s'>
                                            <MailOutlineIcon className='d-icons social-s-i' style={{
                                                fontSize: '50px', background: darkMode
                                                    ? 'orange' : '', color: darkMode ? 'white' : ''
                                            }} />
                                            <div className='text-center p-1' style={{ color: darkMode ? 'white' : 'rgb(72,72,72)' }}>
                                                <h6>Email Me</h6>
                                            </div>
                                            <div className='text-center ' style={{ color: darkMode ? 'white' : 'rgb(72,72,72)' }}>
                                                <p className='c-p' style={{ letterSpacing: '0.8px' }}>321patelmayur@gmail.com</p>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col xs={6} md={6}>
                                    <div className='p-2 social-m' style={{ background: darkMode ? 'black' : 'white', border: darkMode ? '2px solid orange' : 'none', boxShadow: darkMode ? ' rgba(218, 216, 216, 0.082) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' : '' }}>
                                        <div className='text-center social-s'>
                                            <AddIcCallIcon className='d-icons social-s-i' style={{
                                                fontSize: '50px', background: darkMode
                                                    ? 'orange' : '', color: darkMode ? 'white' : ''
                                            }} />
                                            <div className='text-center p-1' style={{ color: darkMode ? 'white' : 'rgb(72,72,72)' }}>
                                                <h6>Call Me</h6>
                                            </div>
                                            <div className='text-center ' style={{ color: darkMode ? 'white' : 'rgb(72,72,72)', letterSpacing: '1px' }}>
                                                <p className='c-p' style={{ letterSpacing: '0.8px' }}>+91 9981040418</p>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6} className='mt-3  social-m ml-2 mr-2' style={{ background: darkMode ? 'black' : 'white', border: darkMode ? '2px solid orange' : 'none', boxShadow: darkMode ? ' rgba(218, 216, 216, 0.082) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' : '' }}>
                            <div className='p-4   ' style={{}}>

                                <form ref={form} onSubmit={sendEmail} >

                                    <div style={{ width: '100%', display: 'inline-flex' }}>
                                        <span style={{ width: '50%', padding: '3%' }}>
                                            <input style={{ color: darkMode ? '#c3c3c3' : '', background: darkMode ? 'black' : '' }} type="text" className="user f-items" name='user_name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />

                                        </span>
                                        <span style={{ width: '50%', padding: '3%' }}>
                                            <input style={{ color: darkMode ? '#c3c3c3' : '', background: darkMode ? 'black' : '' }} type="email" name='user_email' className='user f-items' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </span>
                                    </div>

                                    <div style={{ padding: '3%', paddingTop: '0' }}>
                                        <input style={{ color: darkMode ? '#c3c3c3' : '', background: darkMode ? 'black' : '' }} value={sub} type="text" className="subject user f-items" name='subject' placeholder='Subject' onChange={(e) => setSub(e.target.v)} />
                                    </div>
                                    <div style={{ padding: '3%', paddingTop: '0' }}>
                                        <textarea style={{ color: darkMode ? '#c3c3c3' : '', background: darkMode ? 'black' : '' }} name="message" className="user f-items" value={mess} placeholder='Message' onChange={(e) => setMess(e.target.value)} />
                                    </div>
                                    <div style={{ padding: '3%' }} className='text-center'>

                                        <button type="submit" className="button" > {isLoading ? 'Sending...' : 'Send Message'}</button>
                                    </div>
                                    <div className="sent_text">
                                        <span >{done && "Message Sent"}</span>
                                        <br />
                                        <span>{done && "Thanks for contacting me!"}</span>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    )
}

export default Contact
