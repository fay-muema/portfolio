import { Box, Typography } from '@mui/material'
import {react, js, html, css,git, figma, xd, vscode, photoshop,  sketch} from "../images"
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
        Passionate UI/UX Designer adept at crafting intuitive digital experiences that seamlessly blend
         creativity with user-centric functionality. With a keen eye for detail and a commitment to user empathy,
          I specialize in translating complex ideas into engaging, visually appealing designs. Proficient in leveraging 
          design thinking and cutting-edge tools, I strive to elevate user satisfaction by delivering compelling and
           intuitive interfaces that resonate with diverse audiences.
        </Typography>
        <Typography variant="h5" sx={{textDecoration: "underline", marginTop: "12px"}}>Tools</Typography>
        <img src={figma} alt="figma logo"/>
        <img src={xd} alt="Adobe xd logo"/>
        <img src={vscode} alt="VScode logo"/>
        <Typography variant="h5" sx={{textDecoration: "underline", marginTop: "12px"}}>Languages</Typography>
        <img src={js} alt="js-logo"/>

        <Typography variant="h5" sx={{textDecoration: "underline", marginTop: "12px"}}>Technologies</Typography>
        <img src={react} alt="react-logo"/>
        <img src={html} alt="html-logo"/>
        <img src={css} alt="css-logo"/>
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
