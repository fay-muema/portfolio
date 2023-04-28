import { Card, CardContent, CardHeader, CardMedia, Container, IconButton, Typography, Box, Link } from '@mui/material'
import React from 'react'
import { useStyles } from './ItemsStyles'

import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const GridItem = (props) => {
    const classes = useStyles();
  return (
    <Container className={classes.container}>
    <Card raised className={classes.root} style={{backgroundColor: "rgb(29, 29, 46)"}}>
        <CardHeader sx={{color:'white'}} title={props.title}/>
        <CardMedia 
        className={classes.media}
        image={props.img}>
            
            </CardMedia>

        <CardContent>
            <Typography variant='body1' sx={{color: 'white'}}>
            {props.paragraph}
            </Typography>
            <Box sx={{display:'flex', margin: 2}}>
            <Typography variant='body1' sx={{ marginRight: 2, color:'yellow'}} >
              {props.language}
            </Typography>
            <Typography variant='body1' sx={{color: 'yellow'}}>
            {props.tech}
            </Typography>

            </Box> 
        </CardContent>
        <Box>
            <Link href={props.link} target="_blank">
            <IconButton sx={{color: 'white'}} >
                <Typography variant="body1">
                
                Live
                <LaunchIcon/>
                </Typography>

               
            </IconButton>
            </Link>
            <Link href={props.source} target='_blank'>
            <IconButton sx={{color: 'white'}}>
                <Typography variant="body1">
                Source Code
                <GitHubIcon/>
                </Typography>
                

            </IconButton>
            </Link>
        </Box>


            
    </Card>
    </Container>
  )
}


export default GridItem
