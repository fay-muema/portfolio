import React from 'react'
import about from '../images/about.png'
import {Avatar, Box, IconButton, Stack, Link} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './styles.css'

const Home = ({id}) => {
  return (
    <Box sx={{m:2, display: {md: 'flex', xs:'block'}}} className="container" id={id}>
        <Box>
        <img src={about} alt="fay pic" className='boxImage'/>
        </Box>
        <Box sx={{display:'block',ml:{md: -2}, p:2}} className="box2">
            {/* <Stack spacing={4} direction="row">
              <Link href="https://www.facebook.com/profile.php?id=100008729359351" target="_blank">
            <Avatar sx={{bgcolor: 'blue'}} >
                <FacebookIcon/>
            </Avatar>
            </Link>
            <Link href="https://twitter.com/Ms_Muema" target="_blank">
            <Avatar sx={{bgcolor: 'blue'}}><TwitterIcon/>
            </Avatar>

            </Link>
            <Link href="https://www.linkedin.com/in/faith-muema-b777931aa/" target="_blank">
            <Avatar sx={{bgcolor: 'blue'}}><LinkedInIcon/></Avatar>
            </Link>
            <Link href="https://www.instagram.com/fayloverattor/" target="_blank">
            <Avatar sx={{bgcolor: 'blue'}}><InstagramIcon/></Avatar>
            </Link>
            </Stack> */}
 
        <h1>My name is Faith Muema</h1>
        <p>I'm a UI/UX Designer based in Nairobi, Kenya</p>

        </Box>

        <Box className="box3">
                <IconButton sx={{color:"white", height: "60px"}} >
                <ArrowDownwardIcon fontSize="1.2rem"/>
                </IconButton>
              </Box>
    </Box>

      

  )
}

export default Home
