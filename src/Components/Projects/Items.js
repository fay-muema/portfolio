import { Badge, Box, Grid, Typography} from '@mui/material'
import snap from '../images/snap.png'
import crop from '../images/crop.png'
import tru from '../images/tru.png'
import beauty from '../images/beauty.png'
import React from 'react'
import {useStyles} from './styles'
import GridItem from './GridItem'

const Items = () => {
    const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Badge variant="dot" color="warning">
      <Typography variant="h4" sx={{textDecoration:"underline", margin:"20px", color: "red", fontFamily:"Roboto"}}>MY WORK</Typography>
      </Badge>
      <Typography variant="h5" sx={{marginTop: "-30px", marginBottom:"20px"}}>Awesome projects</Typography>
      <Grid container> 
      <Grid item xs={12} md={4}>
        <GridItem
        img= {crop}
        title ="Crop Recommendation System" 
        link = "https://crop-recommendation-system-fay-muema.vercel.app/"
        source = "https://github.com/fay-muema/Crop-recommendation-system"
        paragraph = "This is a responsive full stack website. Developed to recommend Kenyan farmers the best crops to grow based on their farm nutrients and Climate. Uses Flask to fetch the World map API. The project will not predict since I have not deployed the backend yet!! But it works😊"
        language = "REACT"
        tech = "PYTHON"
        />
</Grid>
<Grid item xs={12} md={4}>
   <GridItem 
   img= {tru}
        title ="Tru-Elegance E-commerce" 
        link = "https://true-elegance.vercel.app/"
        source = "https://github.com/fay-muema/e-commerce"
        paragraph = "This is a responsive e-commerce website. It uses commercejs API for fetching prices and images."
        language = "REACT"
        tech = "MATERIAL UI"
        />
</Grid>
<Grid item xs={12} md={4}>
<GridItem 
img= {snap}
        title ="Landing Page" 
        link = "https://dropdown-challenge.netlify.app/"
        source = "https://github.com/fay-muema/dropdown-navigation"
        paragraph = "This is a responsive landing page. It doesn't do alot is just a landing page done as challenge from frontend mentor. The buttons and navigation Bar does not work since it was just a challenge and that is what was supposed to be done. Afterall I expanded my Tailwind CSS skills here!!😃"
        language = "HTML"
        tech = "TAILWIND CSS"
        />
</Grid>

<Grid item xs={12} md={4}>
<GridItem 
img= {beauty}
        title ="Landing Page " 
        link = "https://beauty-landingpage.netlify.app/"
        source = "https://github.com/fay-muema/dropdown-navigation"
        paragraph = "This is a responsive landing page. It is a userInterface design for e-commerce beauty shop. This I can say is my first project when I started coding!😎. It wasn't easy I wanted to expand my skills here for HTML, CSS and Vanilla JS. The reason why the navigation bar and buttons doesn't work is because I had purposed for it to be a Landing page Design."
        language = "HTML/ UI/UX"
        tech = "Vanilla CSS"
        />
      </Grid>
      </Grid>
    </Box>
  )
}

export default Items
