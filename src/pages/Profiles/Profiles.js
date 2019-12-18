import React, {Component} from 'react';
import '../../Myapp.css';

import {Container, Avatar, Grid, Box, Button} from '@material-ui/core';
import Navbar from '../../component/Navbar';

import Other from '../../img/other.jpg';

class Profiles extends Component {
    render(){
        return(
            <div>
            <Container maxWidth="lg">
            
                    <Navbar />
                
            </Container>

            <Container maxWidth="md">
             <Grid container>
                 <Grid item xs={7}>
                    <Box style={{marginTop: 70}} display="flex" flexDirection="row">
                        <h1>Rais Habsyah</h1>
                        <Button variant="outlined" style={{padding: 0, width: '15%', textTransform: 'none', marginLeft: 20, height: 40, marginTop: 23, fontSize: 12}}>Edit Profile</Button>
                    </Box>
                 </Grid>
                 <Grid item xs>
                    <Box style={{marginTop: 80, marginRight: 90}} display="flex" flexDirection="row-reverse">
                        <Avatar alt="Remy Sharp" src={Other} style={{width: '45%', height: '30%'}}/>
                    </Box>
                 </Grid>
             </Grid>
             <p style={{marginTop: 90, width: '78%', color: 'rgba(0, 0, 0, 0.54)'}}>Rais Habsyah hasn’t been active on Medium yet. Check back later to see their stories, claps, and highlights.</p>
            </Container>
            </div>
        );
    }
}

export default Profiles;