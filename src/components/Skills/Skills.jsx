import React from 'react'
import lines from '../../img/lines.svg'
import './Skills.css'
import { motion } from 'framer-motion'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Skills() {
  const transition = { duration: 1, type: 'spring' }
  return (

    <div className='pt-5  site-section' id='Skills' >
      <Container>
      <div class="text-center">
        <h3>My Skills</h3>
        <img src={lines} className="img-lines" alt="lines" />
      </div>
      <Row>
      <Col xs={6} md={4}>
        <h6>HTML/CSS</h6>
          <div className='sec-prog mb-3 '>
            
            <motion.div
              initial={{ scale: (0) }}
              whileInView={{ scale: (1) }}
              transition={transition}

              className="prog-fill w-75 ">
             </motion.div>
          </div>
        </Col>
        <Col xs={6} md={4}>
        <h6>JavaScript</h6>
          <div className='sec-prog mb-3 '>
            
            <motion.div
              initial={{ scale: (0) }}
              whileInView={{ scale: (1) }}
              transition={transition}

              className="prog-fill  " style={{width:'60%'}}>
             </motion.div>
          </div>
        </Col>
        <Col xs={6} md={4}>
        <h6>ReactJS</h6>
          <div className='sec-prog mb-3 '>
            
            <motion.div
              initial={{ scale: (0) }}
              whileInView={{ scale: (1) }}
              transition={transition}

              className="prog-fill " style={{width:'55%'}}>
             </motion.div>
          </div>
        </Col>
        <Col xs={6} md={4}>
        <h6>Nodejs, MongoDB</h6>
          <div className='sec-prog mb-3 '>
            
            <motion.div
              initial={{ scale: (0) }}
              whileInView={{ scale: (1) }}
              transition={transition}

              className="prog-fill w-50 ">
             </motion.div>
          </div>
        </Col>
        <Col xs={6} md={4}>
        <h6>C++, Python</h6>
          <div className='sec-prog mb-3 '>
            
            <motion.div
              initial={{ scale: (0) }}
              whileInView={{ scale: (1) }}
              transition={transition}

              className="prog-fill  " style={{width:'55%'}}>
             </motion.div>
          </div>
        </Col>
        <Col xs={6} md={4}>
        <h6>Data Structures</h6>
          <div className='sec-prog mb-3 '>
            
            <motion.div
              initial={{ scale: (0) }}
              whileInView={{ scale: (1) }}
              transition={transition}

              className="prog-fill w-50 ">
             </motion.div>
          </div>
        </Col>
        <Col xs={6} md={4}>
        <h6>Algorithms</h6>
          <div className='sec-prog mb-3 '>
            
            <motion.div
              initial={{ scale: (0) }}
              whileInView={{ scale: (1) }}
              transition={transition}

              className="prog-fill w-50 ">
             </motion.div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Skills
