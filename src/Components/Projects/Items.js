import { Badge, Box, Grid, Typography} from '@mui/material'
import crop from '../images/nifty.png'
import React from 'react'
import {useStyles} from './styles'
import GridItem from './GridItem'
import {Link} from 'react-router-dom'

const Items = ({id}) => {
    const classes = useStyles();
  return (
    <><Link></Link><Box className={classes.box} id={id}>
      <Badge variant="dot" color="warning">
        <Typography variant="h4" sx={{ textDecoration: "underline", margin: "20px", color: "red", fontFamily: "Roboto" }}>MY WORK</Typography>
      </Badge>
      <Typography variant="h5" sx={{ marginTop: "-30px", marginBottom: "20px", textDecoration:"underline", marginBottoms:"20px",color:"white" }}>Read me!!!</Typography>
      <Typography variant="h6" sx={{ marginTop: "-30px", marginBottom: "20px" }}>For the past three months, I've dedicated my time to mastering UI/UX,
       resulting in the creation of these vibrant websites. While the project
       section is a work in progress, I'm eager to receive your honest feedback. You can easily reach me via my Socials, located at the first page.</Typography>
      <Grid container>
        <Grid item xs={12} md={4}>
          <GridItem
            img={crop}
            title="Nifty Restaurant Web Design"
            link="https://www.behance.net/gallery/186787153/Nifty-Restaurant-Website-Design-USE-CASE"
            paragraph=" Nifty is a website design born from my passion for exploring new restaurants and 
            enjoying dining experiences outdoors. I found it delightful 
            to have everything easily accessible on a website, but faced challenges in 
            finding such a platform. To address this, I took it upon myself to create a solution."
            tools="Figma, FigJam, Canva"
          />
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <GridItem
            img={tru}
            title="Tru-Elegance E-commerce"
            link="https://true-elegance.vercel.app/"
            source="https://github.com/fay-muema/e-commerce"
            paragraph="This is a responsive e-commerce website. It uses commercejs API for fetching prices and images."
            language="REACT"
            tech="MATERIAL UI" />
        </Grid>
        <Grid item xs={12} md={4}>
          <GridItem
            img={snap}
            title="Landing Page"
            link="https://dropdown-challenge.netlify.app/"
            source="https://github.com/fay-muema/dropdown-navigation"
            paragraph="This is a responsive landing page. It doesn't do alot is just a landing page done as challenge from frontend mentor. The buttons and navigation Bar does not work since it was just a challenge and that is what was supposed to be done. Afterall I expanded my Tailwind CSS skills here!!😃"
            language="HTML"
            tech="TAILWIND CSS" />
        </Grid>

        <Grid item xs={12} md={4}>
          <GridItem
            img={beauty}
            title="Landing Page "
            link="https://beauty-landingpage.netlify.app/"
            source="https://github.com/fay-muema/dropdown-navigation"
            paragraph="This is a responsive landing page. It is a userInterface design for e-commerce beauty shop. This I can say is my first project when I started coding!😎. It wasn't easy I wanted to expand my skills here for HTML, CSS and Vanilla JS. The reason why the navigation bar and buttons doesn't work is because I had purposed for it to be a Landing page Design."
            language="HTML/ UI/UX"
            tech="Vanilla CSS" />
        </Grid> */}
      </Grid>
    </Box></>
  )
}

export default Items
