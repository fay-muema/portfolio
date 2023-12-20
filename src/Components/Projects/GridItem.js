import { Card, CardContent, CardHeader, CardMedia, Container, IconButton, Typography, Box, Link } from '@mui/material'
import React from 'react'
import { useStyles } from './ItemsStyles'
import LaunchIcon from '@mui/icons-material/Launch';

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
              {props.tools}
            </Typography>

            </Box> 
        </CardContent>
        <Box>
            <Link href={props.link} target="_blank">
            <IconButton sx={{color: 'white'}} >
                <Typography variant="body1">
                Use-Case
                <LaunchIcon/>
                </Typography>
            </IconButton>
            </Link>
        </Box>


            
    </Card>
    </Container>
  )
}


export default GridItem
