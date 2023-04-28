import { Badge, Box, Grid, Typography} from '@mui/material'
import snap from '../images/snap.png'
import crop from '../images/crop.png'
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
        link = ""
        source = "https://github.com/fay-muema/Crop-recommendation-system"
        paragraph = "This is a responsive full stack website. Developed to recommend Kenyan farmers the best crops to grow based on their farm nutrients and Climate"
        language = "REACT"
        tech = "PYTHON"
        />
</Grid>
<Grid item xs={12} md={4}>
   <GridItem 
   img= {snap}
        title ="Landing Page" 
        link = "https://dropdown-challenge.netlify.app/"
        source = "https://github.com/fay-muema/dropdown-navigation"
        paragraph = "This is a responsive landing page. It doesn't do alot is just a landing page done as challenge from frontend mentor."
        language = "HTML"
        tech = "TAILWIND CSS"
        />
</Grid>
<Grid item xs={12} md={4}>
<GridItem 
img= {snap}
        title ="Landing Page" 
        link = "https://dropdown-challenge.netlify.app/"
        source = "https://github.com/fay-muema/dropdown-navigation"
        paragraph = "This is a responsive landing page. It doesn't do alot is just a landing page done as challenge from frontend mentor."
        language = "HTML"
        tech = "TAILWIND CSS"
        />
</Grid>

<Grid item xs={12} md={4}>
<GridItem 
img= {snap}
        title ="Landing Page" 
        link = "https://dropdown-challenge.netlify.app/"
        source = "https://github.com/fay-muema/dropdown-navigation"
        paragraph = "This is a responsive landing page. It doesn't do alot is just a landing page done as challenge from frontend mentor."
        language = "HTML"
        tech = "TAILWIND CSS"
        />
      </Grid>
      </Grid>
    </Box>
  )
}

export default Items
