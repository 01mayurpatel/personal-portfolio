import React from 'react'
import './Projects.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import P1 from '../../img/p1.png'
import P2 from '../../img/p2.png'
import P3 from '../../img/p3.png'
import P4 from '../../img/p4.png'

import GitHubIcon from '@mui/icons-material/GitHub';



function Projects() {
    
    
    
  
    


    return (
        <div



        >
            <Container id='Project'>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={4} className='p-4 p-div' >
                        <div className="p-heading mt-4 " style={{ height: '120px' }}>
                            <h3>
                                Look Over My Recent <span style={{ color: '#FCA61F' }}><h3>PROJECTS</h3></span>
                            </h3>
                        </div>
                        <div >
                            <div
                                

                                className="p-box  mt-4 box-section-in box-contain">
                                <div className="box-contain">
                                    <div class="respo">

                                        <img class="img-responsive pb-2 " src={P1} alt="" /></div>
                                    <div class="box-content-in p-3">
                                        <h3 class="mt-2 pb-3 text-left">Text Analyzer</h3>


                                        <p class="text-secondary mt-2">Created with React an app that can modify your text(upper, lower case and can analyze your text)
                                        </p>
                                    </div>


                                    <div className=" ps-2 pe-2">
                                        <div className='d-flex justify-content-between' style={{ marginTop: '0', marginBottom: '12px' }}>
                                            <span>

                                               <a style={{textDecoration:'none'}} rel="noreferrer" href="https://textmayur.netlify.app/" target='_blank'> <button type="submit" className="button" >View Demo</button></a>
                                            </span>
                                           <a style={{textDecoration:'none'}} rel="noreferrer" href='https://github.com/01mayurpatel/text-utils' target='_blank'> <GitHubIcon className='c-icons' style={{ fontSize: '40px' }} /></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div

                                className="p-box  mt-4 box-section-in box-contain">
                                <div className="box-contain">
                                    <div class="respo">

                                        <img class="img-responsive pb-2 " src={P3} alt="" /></div>
                                    <div class="box-content-in p-3">
                                        <h3 class="mt-2 pb-3 text-left">Dynamic Qoutes</h3>


                                        <p class="text-secondary mt-2">Created with Nodejs, it suggests random quotes on every click, which you can tweet also 
                                        </p>
                                    </div>


                                    <div className=" ps-2 pe-2">
                                        <div className='d-flex justify-content-between' style={{ marginTop: '0', marginBottom: '12px' }}>
                                            <span>

                                                <a href="https://mayur-dynamic-quotes.netlify.app/" rel="noreferrer" style={{textDecoration:'none'}} target='_blank'><button type="submit" className="button" >View Demo</button></a>
                                            </span>
                                           <a href="https://github.com/01mayurpatel/dynamic-quotes" rel="noreferrer" style={{textDecoration:'none'}} target='_blank'> <GitHubIcon className='c-icons' style={{ fontSize: '40px' }} /></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                    <Col xs={12} md={4} className='p-4'>
                    <div>
                        <div
                       
                        className="p-box  mt-4 box-section-in box-contain">
                            <div className="box-contain">
                                <div class="respo">

                                    <img class="img-responsive pb-2 " src={P2} alt="" /></div>
                                <div class="box-content-in p-3">
                                    <h3 class="mt-2 pb-3 text-left">Dynamic Weather Report</h3>


                                    <p class="text-secondary mt-2">Created with Nodejs, an weather app which works by fetching api, it tells weather conditions of any city
                                    </p>
                                </div>


                                <div className=" ps-2 pe-2">
                                    <div className='d-flex justify-content-between' style={{ marginTop: '0', marginBottom: '12px' }}>
                                        <span>

                                            <a href="https://dynamic-weather.onrender.com/" rel="noreferrer" target='_blank' style={{textDecoration:'none'}}><button type="submit" className="button" >View Demo</button></a>
                                        </span>
                                      <a href="https://github.com/01mayurpatel/dynamic_weather" rel="noreferrer" target='none' style={{textDecoration:'none'}}>  <GitHubIcon className='c-icons' style={{ fontSize: '40px' }} /></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div>
                            <div
                            
                            className="p-box  mt-4 box-section-in box-contain">
                                <div className="box-contain">
                                    <div class="respo">

                                        <img class="img-responsive pb-2 " src={P4} alt="" /></div>
                                    <div class="box-content-in p-3">
                                        <h3 class="mt-2 pb-3 text-left">Text Analyzer</h3>


                                        <p class="text-secondary mt-2">It's an demo travel site, In which I had used HTML, CSS, JS, Bootstrap to make this site fully responsive
                                        </p>
                                    </div>


                                    <div className=" ps-2 pe-2">
                                        <div className='d-flex justify-content-between' style={{ marginTop: '0', marginBottom: '12px' }}>
                                            <span>

                                              <a href="https://01mayurpatel.github.io/travel/" rel="noreferrer" style={{textDecoration:'none'}} target='_blank'>  <button type="submit" className="button" >View Demo</button></a> 
                                            </span>
                                            <a href='https://github.com/01mayurpatel/travel.git' rel="noreferrer" style={{textDecoration:'none'}} target='_blank'><GitHubIcon className='c-icons' style={{ fontSize: '40px' }} /></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4" style={{ height: '120px' }}>
                            <div className='text-center pt-3'>

                                <a href="https://github.com/01mayurpatel" rel="noreferrer" style={{textDecoration:'none'}} target='_blank'><button type="submit" className="button" >View all projects</button></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects
