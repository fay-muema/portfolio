import React from 'react'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { AppBar, Box, List, ListItem, Typography, Toolbar, IconButton, Avatar, Link} from '@mui/material'
import avatar from '../images/fay.jpg'
// import { BrowserRouter, Link } from 'react-router-dom';

import './styles.css'


const Navbar = () => {

  return (
  
    <AppBar className="appbar" position = "fixed" sx={{shadowBox: 'none', background: "#282c34"}}>
    <Toolbar>
        
          <IconButton sx={{mt: 0.1}} color='inherit'>
          <LogoDevIcon/>
          </IconButton>
          <Typography textAlign="start" variant='h6' sx={{flexGrow: 1, cursor:"pointer" }}>
            PORTFOLIO</Typography>

            <Box>
            
                <List sx={{display: { xs: 'none', md: 'flex' }, cursor: "pointer" }} variant='h6'>
                 <ListItem sx={{":hover":{
                  bgcolor: "red"
                 }}}><Link href="#home" color="inherit" underline='hover'>Home </Link></ListItem>
                    <ListItem  sx={{":hover":{
                  bgcolor: "red"}}}><Link href="#about" color="inherit" underline='hover'>About </Link></ListItem> 
                    <ListItem sx={{":hover":{
                  bgcolor: "red"
                 }}}><Link href="#item" color="inherit" underline='hover'>Works </Link></ListItem>
                  <ListItem sx={{":hover":{
                  bgcolor: "red"
                 }}}><Link href="#contact" color="inherit" underline='hover'>Resume</Link></ListItem>
                </List>
                </Box>
            <Avatar src={avatar} alt='fay'></Avatar>
           
    </Toolbar>
   </AppBar>
   
  )
}

export default Navbar
