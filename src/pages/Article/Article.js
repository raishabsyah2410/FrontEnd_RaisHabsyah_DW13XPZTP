import React, {Component} from 'react';
import {Container, Avatar, Grid, Box, Hidden, IconButton, Button, CardMedia, CardContent, Typography} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import '../../Myapp.css';

import Navbar from '../../component/Navbar';

import Rom from '../../img/room.jpeg';

import { Link } from "react-router-dom";


class Article extends Component {
    render() {
        return(
            <div>
                <Navbar />
                    <div className="bg-s">
                        <Container maxWidth="lg">
                            <Box display="flex" flexDirection="row" alignItems="center" height="50px">
                                <h2 style={{marginLeft: 40}}><i className="fab fa-fort-awesome-alt"></i> <span style={{fontSize: 18}}> Mrspongebob.com </span></h2>
                                <span style={{fontSize: 15, marginLeft: 20, fontWeight: '400', marginTop: 4, color: '#AAAFB9'}}>Mission Origonal </span>
                                <p style={{fontSize: 24, marginLeft: 10, color: '#AAAFB9'}}> | </p>
                                <span style={{fontSize: 14, marginLeft: 10, fontWeight: '400', marginTop: 4, color: '#AAAFB9'}}>Subscribe </span>
                            </Box>
                        </Container>
                    </div>

                    <Container maxWidth="sm">
                        <h1 style={{fontFamily: 'mono'}}>Do These Things Before Going to Bed and You’ll Wake up Energized for Tomorrow</h1>
                        <p>Your day really starts the night before.</p>
                        <Grid container>
                            <Grid item xs>
                                <Box display="flex" flexDirection="row">
                                    <Avatar alt="Remy Sharp" src={Rom} style={{ width: 60, height: 60 , marginTop: 8}}/>
                                    <Box display="flex" flexDirection="column">
                                        <Grid container>
                                            <Grid item xs={7}>
                                            <p style={{margin: 0,marginLeft: 20, marginTop: 15, fontSize: 13}}> Monkey Mon </p>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Button variant="outlined" style={{fontSize: 10, height: 28, marginTop: 10, color: 'rgba(132, 133, 133, 1)', marginLeft: 4}}>Follow</Button>
                                            </Grid>
                                        </Grid>
                                        <p style={{margin: 0,marginLeft: 20, paddingTop: 5, fontSize: 14}}>Nov 27 · 5 min read</p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                                    <IconButton style={{color: "black"}}>
                                        <i class="fab fa-twitter"></i>
                                    </IconButton>
                                    <IconButton style={{color: "black"}}>
                                        <i class="fab fa-facebook-square"></i>
                                    </IconButton>
                                    <IconButton style={{color: "black"}}>
                                         <BookmarkBorderIcon />
                                    </IconButton>

                                </Box>
                            </Grid>
                        </Grid>
                        
                    </Container>

                    <Container maxWidth="lg">
                        <Box display="flex" justifyContent="center" m={1} p={1}>
                             <img src={Rom} alt="Room Kamar" width="90%" height="60%"/>
                        </Box>
                        <p style={{textAlign: 'center'}}>Photo by Joshua Rawson-Harris on Unsplash</p>
                    </Container>

                    <Container maxWidth="md">
                        <h3 style={{fontWeight: '400', fontFamily: 'mono', lineHeight: 2, fontSize: 26}}>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
<h3 style={{fontWeight: '400', fontFamily: 'mono', lineHeight: 2, fontSize: 26}}>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
<h3 style={{fontWeight: '400', fontFamily: 'mono', lineHeight: 2, fontSize: 26}}>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
<h3 style={{fontWeight: '400', fontFamily: 'mono', lineHeight: 2, fontSize: 26}}>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
<h3 style={{fontWeight: '400', fontFamily: 'mono', lineHeight: 2, fontSize: 26}}>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                    </Container>

                    <Container maxWidth="md">
                      <Box borderBottom={1} style={{marginBottom: 20, color: '#D1D7E4'}}>
                        <Grid container>
                            <Grid item xs>
                                <Box display="flex" flexDirection="row">
                                    <IconButton style={{marginTop: 10, width: '25%', hight: '25%'}}>
                                        <h3 style={{margin: 0, fontSize: 30}}><i className="fas fa-sign-language"></i></h3>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                                    <IconButton style={{color: "black"}}>
                                        <i class="fab fa-twitter"></i>
                                    </IconButton>
                                    <IconButton style={{color: "black"}}>
                                        <i class="fab fa-facebook-square"></i>
                                    </IconButton>
                                    <IconButton style={{color: "black"}}>
                                         <BookmarkBorderIcon />
                                    </IconButton>
                                    <IconButton>
                                        <MoreHorizIcon />
                                    </IconButton>

                                </Box>
                            </Grid>
                        </Grid>
                      </Box>
                        
                        <Grid container>
                            <Grid item xs={9}>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: 12, marginBottom: 12, marginLeft: 40}}>
                                <Avatar alt="Remy Sharp" src={Rom} style={{ width: 60, height: 60 , marginTop: 8}}/>
                                    <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16}}>
                                    <Typography gutterBottom color="textSecondary" component="p" style={{margin: 0}}>
                                        WRITTEN BY
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18}}>
                                        Tim Denning
                                    </Typography>
                                    <Typography gutterBottom color="textSecondary" component="p" style={{margin: 0, width: '50%'}}>
                                        Aussie Viral Blogger - Inspiring the world through Personal Development and Entrepreneurship. www.timdenning.net
                                    </Typography>
                                    </CardContent>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" style={{marginTop: 30, textTransform: 'none', fontWeight: '400', width: 90, fontSize: 12}}>Follow</Button>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={9}>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: 12, marginBottom: 12, marginLeft: 40}}>
                                <Avatar alt="Remy Sharp" src={Rom} style={{ width: 60, height: 60 , marginTop: 8}}/>
                                    <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16}}>
                                    <Typography gutterBottom color="textSecondary" component="p" style={{margin: 0}}>
                                        WRITTEN BY
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18}}>
                                        Tim Denning
                                    </Typography>
                                    <Typography gutterBottom color="textSecondary" component="p" style={{margin: 0, width: '50%'}}>
                                        Aussie Viral Blogger - Inspiring the world through Personal Development and Entrepreneurship. www.timdenning.net
                                    </Typography>
                                    </CardContent>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" style={{marginTop: 30, textTransform: 'none', fontWeight: '400', width: 90, fontSize: 12}}>Follow</Button>
                            </Grid>
                        </Grid>
                      
                        <center><Link to="comment" style={{textDecoration: 'none'}}><Button variant="outlined" style={{width: '90%', height: 50, marginTop: 10, marginBottom: 10}}>see responses</Button></Link></center>

                    </Container>

                    <Container maxWidth="lg" style={{marginTop: 30}}>
                        <Box borderBottom={1} style={{marginBottom: 35}}>
                        <h2>More From Medium</h2>
                        </Box>

                        <Grid container>
                        <Box display="flex" flexDirection="row">
                            <Grid item md={4} xs={12}>
                                <p>More from The Startup</p>
                                <CardMedia style={{width: '80%'}}
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={Rom}
                                title="Contemplative Reptile"
                                />
                                <CardContent style={{padding: 0, width: '80%'}}>
                                <Typography gutterBottom variant="h5" component="h2" style={{paddingTop: 20}}>
                                 How to Escape Competition (and Build a Business on Your Own Terms)
                                </Typography>
                                
                                <Grid container style={{paddingBottom: 30}}>
                                        <Grid item xs={2} style={{marginTop: 20}}>
                                            <Avatar alt="Remy Sharp" src={Rom} />
                                        </Grid>
                                        <Grid item xs={6} style={{marginTop: 20}}>
                                            <Typography gutterBottom component="p" style={{margin: 0, fontSize: 14}}>
                                                Ali Mese in The Startup
                                            </Typography>
                                            <Typography gutterBottom component="p" style={{margin: 0, fontSize: 12}}>
                                                Dec 2 · 5 mins read
                                            </Typography>
                                        </Grid>
                                        <Grid>
                                            <Box display="flex" flexDirection="row-reverse">
                                                <IconButton style={{marginTop: 10, width: '25%', hight: '25%'}}>
                                                    <i className="fas fa-sign-language"></i> <span style={{fontSize: 24, marginLeft: 10, color: '#AAAFB9'}}> | </span> <BookmarkBorderIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <p>More from The Startup</p>
                                <CardMedia style={{width: '80%'}}
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={Rom}
                                title="Contemplative Reptile"
                                />
                                <CardContent style={{padding: 0, width: '80%'}}>
                                <Typography gutterBottom variant="h5" component="h2" style={{paddingTop: 20}}>
                                 How to Escape Competition (and Build a Business on Your Own Terms)
                                </Typography>
                                
                                <Grid container>
                                        <Grid item xs={2} style={{marginTop: 20}}>
                                            <Avatar alt="Remy Sharp" src={Rom} />
                                        </Grid>
                                        <Grid item xs={6} style={{marginTop: 20}}>
                                            <Typography gutterBottom component="p" style={{margin: 0, fontSize: 14}}>
                                                Ali Mese in The Startup
                                            </Typography>
                                            <Typography gutterBottom component="p" style={{margin: 0, fontSize: 12}}>
                                                Dec 2 · 5 mins read
                                            </Typography>
                                        </Grid>
                                        <Grid>
                                            <Box display="flex" flexDirection="row-reverse">
                                                <IconButton style={{marginTop: 10, width: '25%', hight: '25%'}}>
                                                    <i className="fas fa-sign-language"></i> <span style={{fontSize: 24, marginLeft: 10, color: '#AAAFB9'}}> | </span> <BookmarkBorderIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <p>More from The Startup</p>
                                <CardMedia style={{width: '80%'}}
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={Rom}
                                title="Contemplative Reptile"
                                />
                                <CardContent style={{padding: 0, width: '80%'}}>
                                <Typography gutterBottom variant="h5" component="h2" style={{paddingTop: 20}}>
                                 How to Escape Competition (and Build a Business on Your Own Terms)
                                </Typography>
                                
                                <Grid container>
                                        <Grid item xs={2} style={{marginTop: 20}}>
                                            <Avatar alt="Remy Sharp" src={Rom} />
                                        </Grid>
                                        <Grid item xs={6} style={{marginTop: 20}}>
                                            <Typography gutterBottom component="p" style={{margin: 0, fontSize: 14}}>
                                                Ali Mese in The Startup
                                            </Typography>
                                            <Typography gutterBottom component="p" style={{margin: 0, fontSize: 12}}>
                                                Dec 2 · 5 mins read
                                            </Typography>
                                        </Grid>
                                        <Grid>
                                            <Box display="flex" flexDirection="row-reverse">
                                                <IconButton style={{marginTop: 10, width: '25%', hight: '25%'}}>
                                                    <i className="fas fa-sign-language"></i> <span style={{fontSize: 24, marginLeft: 10, color: '#AAAFB9'}}> | </span> <BookmarkBorderIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                            </Box>
                        </Grid>
                    </Container>

                    <div style={{backgroundColor: '#171718'}}>
                        <Container maxWidth="lg" style={{padding: 50}}>
                        <Hidden mdDown>
                         <Box borderBottom={1} style={{color: 'white'}}>
                          <Grid container style={{paddingBottom: 35}}>
                            <Grid item xs={4} style={{paddingRight: 10}}>
                                <h3 style={{color: 'white'}}>Discover Medium</h3>
                                <p style={{color: 'white'}}>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</p>
                            </Grid>
                            <Grid item xs={4} style={{paddingRight: 10, paddingLeft: 10}}>
                                <h3 style={{color: 'white'}}>Make Medium yours</h3>
                                <p style={{color: 'white'}}>Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. Explore</p>
                            </Grid>
                            <Grid item xs={4} style={{paddingRight: 10, paddingLeft: 10}}>
                                <h3 style={{color: 'white'}}>Become a member</h3>
                                <p style={{color: 'white'}}>Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just $5/month. Upgrade</p>
                            </Grid>
                          </Grid>
                          </Box>
                          </Hidden>

                          <Box>
                            <Grid container>
                                <Grid item xs>
                                    <h2 style={{color: 'white', marginTop: 30, fontFamily: 'mono'}}>Medium</h2>
                                </Grid>
                                <Grid item xs>
                                   <Box display="flex" justifyContent="flex-end">
                                    <p style={{color: '#7C7C83', paddingRight: 35, marginTop: 35}}>About</p>
                                    <p style={{color: '#7C7C83', paddingRight: 35, marginTop: 35}}>Help</p>
                                    <p style={{color: '#7C7C83', paddingRight: 35, marginTop: 35}}>Legal</p>
                                   </Box>
                                </Grid>
                            </Grid>
                          </Box>

                        </Container>
                    </div>
            </div>
        );
    }
}


export default Article;