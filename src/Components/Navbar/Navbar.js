import React from 'react'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { AppBar, Box, List, ListItem, Typography, Toolbar, IconButton, Avatar} from '@mui/material'
import avatar from '../images/fay.jpg'


import './styles.css'


const Navbar = () => {

  return (
    <AppBar className="appbar" position = "static" sx={{shadowBox: 'none', background: "#282c34"}}>
    <Toolbar>
        
          <IconButton sx={{mt: 0.1}} color='inherit'>
          <LogoDevIcon/>
          </IconButton>
          <Typography textAlign="start" variant='h6' sx={{flexGrow: 1}}>
            PORTFOLIO</Typography>
            <Box>
                <List sx={{display: { xs: 'none', md: 'flex' }, cursor: "pointer" }} variant='h6'>
                 <ListItem>Home</ListItem>
                    <ListItem>About</ListItem> 
                    <ListItem>Works</ListItem>
                  <ListItem>Contact</ListItem>
                </List>
                </Box>
            <Avatar src={avatar} alt='fay'></Avatar>
           
    </Toolbar>
   </AppBar>
  )
}

export default Navbar
