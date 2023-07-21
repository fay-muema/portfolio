import { Box, Typography } from '@mui/material'
import {react, js, python, clanguage, html, css, material, tailwind, jquery, mysql, mongo, express, flask, git} from "../images"
import React from 'react'
import fay from '../images/fay.png';
import './styles.css';

const About = ({id}) => {
  return (
    <Box id={id} >
    <Box sx={{color: "white", display:{md: "flex"}}} className="about-container" >
        <Box className="about-box1" sx={{width:{md: "60%"}, ml:{md:"50px"}, maxHeight:"100%", overflow:"auto", m: "1em"}}>
        <Typography variant="h6" align='center'>Who am I?</Typography>
        <Typography variant="h3">HELLO!</Typography>
        <Typography variant="body1">
        As a front-end developer, I am skilled  professional who is passionate about creating engaging and user-friendly web experiences.
         I am well-versed in creating responsive, visually appealing, and accessible websites that meet the needs of clients and users alike. 
         Overall, I am committed to continuous learning and growth, and I take pride in leveraging my skills to deliver innovative solutions that drive business success.
        </Typography>

        <Typography variant="h5" sx={{textDecoration: "underline", marginTop: "12px"}}>Languages</Typography>
        <img src={js} alt="js-logo"/>
        <img src={python} alt="python logo"/>
        <img src={clanguage} alt="c-logo"/>
        <Typography variant="h5" sx={{textDecoration: "underline", marginTop: "12px"}}>Technologies</Typography>
        <img src={react} alt="react-logo"/>
        <img src={html} alt="html-logo"/>
        <img src={css} alt="css-logo"/>
        <img src={material} alt="material-ui logo"/>
        <img src={tailwind} alt="tailwind-logo"/>
        <img src={jquery} alt="jquery-logo"/>
        <img src={mongo} alt='mongodb-logo'/>
        <img src={mysql} alt='mysql-logo'/>
        <img src={express} alt="expressjs-logo"/>
        <img src={flask} alt='flask-logo'/>
        <img src={git} alt='git-logo'/>

        
        </Box>

        <Box className="about-box2">
            
            <img src={fay} alt="fay" className="about-image"/>
            
        </Box>
      
        </Box>
    </Box>
  )
}

export default About
