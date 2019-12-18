import React, {Component} from 'react';

import { Container, TextField, Avatar, Grid, Box, Button } from '@material-ui/core';

import Other from '../../img/other.jpg';
import Navbar from '../../component/Navbar';
import Prof from '../../img/prof.jpg';

class Comment extends Component {
    render(){
        return(
            <div>
           
                <Navbar />

            <Container maxWidth="md">
                <Box style={{paddingTop: 30, marginBottom: 30}}>
                    <p style={{fontWeight: 'bold', color: 'rgba(0,0,0,.68)'}}>Showing responses for:</p>
                    <Box border={1} borderRadius="borderRadius" style={{padding: 10, color: '#B9B9CA'}}>
                     <Grid container>
                         <Grid>
                            <p style={{color: 'black', margin: 0, paddingTop: 10, paddingLeft: 10}}>7 Reasons Why Smart, Hardworking People Don’t Become Successful</p>
                            <p style={{fontSize: 16, margin: 0, padding: 0, paddingBottom: 10, paddingLeft: 10}}>Melissa Chu</p>
                         </Grid>
                         <Grid item xs={4} style={{padding: 10, color: '#B9B9CA'}}>
                            <Box display="flex" flexDirection="row" justifyContent="flex-end">
                               <p style={{color: 'rgba(0,0,0,.54)'}}> <i class="fas fa-sign-language"></i> 54K </p>
                               <p style={{marginLeft: 15, color: 'rgba(0,0,0,.54)'}}><i class="fas fa-comment"></i> 5</p>
                            </Box>
                         </Grid>
                     </Grid>
                    </Box>
                </Box>

                <Box style={{paddingBottom: 30}}>
                    <p style={{fontWeight: 'bold', color: 'rgba(0,0,0,.68)'}}>Responses</p>
                    <Box border={1} borderRadius="borderRadius" style={{padding: 10, color: '#B9B9CA'}}>
                     <Grid container>
                      <Grid item xs={1}>
                        <Avatar alt="Remy Sharp" src={Other} style={{marginTop: 8, marginLeft: 5}}/>
                      </Grid>
                      <Grid item xs={9}>
                        <TextField id="outlined-basic" label="Write a response..." variant="outlined" style={{width: '100%'}}/>
                     </Grid>
                     <Grid xs={2}>
                     <Button variant="contained" style={{marginTop: 15, marginLeft: 10, backgroundColor: '#2BBC45', color: 'white'}}><i class="far fa-paper-plane"></i></Button>
                     </Grid>
                     </Grid>
                    </Box>
                </Box>

                <Box border={1} borderRadius="borderRadius" style={{padding: 10, color: '#B9B9CA', marginBottom: 30}}>
                        <Grid container>
                            <Grid item xs>
                                <Box display="flex" flexDirection="row">
                                    <Avatar alt="Remy Sharp" src={Prof} style={{ width: 50, height: 50 , marginTop: 10}}/>
                                    <Box display="flex" flexDirection="column">
                                        <Grid container>
                                            <Grid item>
                                            <p style={{margin: 0,marginLeft: 20, marginTop: 15, fontSize: 13, color: '#03a87c'}}> Monkey Mon </p>
                                            </Grid>
                                        </Grid>
                                        <p style={{margin: 0,marginLeft: 20, paddingTop: 5, fontSize: 14, color: '#727873'}}>Nov 27 · 5 min read</p>
                                    </Box>
                                </Box>
                                <Box>
                                    <p style={{width: '80%', marginLeft: 40, color: 'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p style={{marginLeft: 40}}>Read more ...</p>
                                </Box>
                            </Grid>
                        </Grid>
                </Box>
            </Container>
            </div>
        );
    }
}


export default Comment;