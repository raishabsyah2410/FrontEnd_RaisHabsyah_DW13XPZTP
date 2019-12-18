import React, {Component} from 'react';

import {Container, Avatar, Grid, Box, IconButton, Button, TextField} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { Link } from "react-router-dom";

class Story extends Component{
    render(){
        return (
            <div>
            <Container maxWidth="lg">
            <Grid container spacing={2} style={{height: 100}}>
                <Grid item xs={6}>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><h1 style={{marginTop: 20, marginLeft: 38, fontSize: 36, fontWeight: 'bold'}}><i className="fab fa-medium"></i><span style={{fontSize: 16, marginLeft: 5, fontWeight: 400}}>Draft</span></h1></Link>
                </Grid>
                <Grid item xs={6} md={5}>
                <div>
                <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
                    <Box height="10px">
                        <IconButton aria-label="search" color="inherit" className="space">
                        <Button variant="contained" style={{fontSize: 11, width: "50%", color: 'white', backgroundColor: '#8AC3B4'}}>Publish</Button>
                        </IconButton>
                        <IconButton variant="outlined" style={{fontSize: 13, textTransform: 'none', fontFamily: 'Roboto', fontWeight: 400}}><MoreHorizIcon /></IconButton>
                        <IconButton >
                        <span style={{fontSize: '80%'}}>
                        <i className="far fa-bell"></i>
                        </span>
                        </IconButton>
                    
                        <div className="dropdown">
                        <button className="dropbtn" style={{backgroundColor: 'white'}}><IconButton><i className="fas fa-user-circle"></i></IconButton></button>
                        <div className="dropdown-content">
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                            <div style={{paddingLeft: 20, paddingTop: 25}}><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></div>
                            </Grid>
                            <Grid item xs={6}>
                            <p style={{paddingTop: 5, marginRight: 50, fontSize: 14}}>Rais Habsyah</p>
                            <span style={{fontSize: 12}}>@tmrais24</span>
                            </Grid> 
                        </Grid>
                        <p className="become">Become a member</p>
                        <Box border={0.5} borderColor="#D8DCE1" style={{marginTop: 10}}/>
                        <Link to="storyadd" className="dropdown-text">New Story</Link>
                        <Link to="story" className="dropdown-text">Stories</Link>
                        <Link to="stats" className="dropdown-text">Stats</Link>
                        <Box border={0.5} borderColor="#D8DCE1" style={{marginTop: 10}}/>
                        <Link to="bookmark" className="dropdown-text">Bookmarks</Link>
                        <Link to="profile" className="dropdown-text">Profile</Link>
                        <Link to="#" className="dropdown-text">Settings</Link>
                        <Link to="#" className="dropdown-text">Help</Link>
                        <Link to="Login" className="dropdown-text">Sign out</Link>
                        </div>
                        </div>
                        
                    </Box>
                </Box>
                </div>
                </Grid>
            </Grid>
            </Container>
            <Box className="bg-Nav" borderRadius="borderRadius" border={1} borderColor="#E8E8E8" ></Box>

            <Container maxWidth="md" style={{marginTop: 50}}>
                <TextField style={{width: 800}}
                    id="outlined-multiline-static"
                    label="Tell your Story..."
                    multiline
                    rows="20"
                    variant="outlined"
                    />
            </Container>
            </div>
        );
    }
}

export default Story;