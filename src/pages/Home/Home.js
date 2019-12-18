import React, {Component} from 'react';
import {Container, Grid, Box, Hidden, IconButton, CardMedia, CardContent, Typography} from '@material-ui/core';

import '../../Myapp.css';
import Navbar from '../../component/Navbarm';

import { Link } from "react-router-dom";

// Import Icons
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

// import Images

import Images from '../../img/room.jpeg';
import Img1 from '../../img/1img.jpeg';
import Img2 from '../../img/2img.jpeg';
import Img3 from '../../img/3img.jpeg';
import Img4 from '../../img/4img.jpeg';

class Home extends Component {

  render(){
    return (
      <div>
      <Container maxWidth="lg">
      
          <Navbar />

      <Container>
        <center>
          <Box className="topnav" display='flex' justifyContent='center'>
            <i class="fas fa-chevron-left" style={{paddingTop: 14}}></i>
                      <Link to="/" className="active">HOME</Link>
                      <Link to="category">ONEZERO</Link>
                      <Link to="category">ELEMENTAL</Link>
                      <Link to="category">GEN</Link>
                      <Link to="category">ZORA</Link>
                      <Link to="category">FORGE</Link>
                      <Link to="category">HUMAN PARTS</Link>
                      <Link to="category">MARKER</Link>
                      <Link to="category">LEVEL</Link>
                      <Link to="category">HEATED</Link>
                      <Link to="category">MODUS</Link>
            <i class="fas fa-chevron-right" style={{paddingTop: 14}}></i>
          </Box>
        </center>
      </Container>
      <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
          <Link to="article" style={{textDecoration: 'none', color: 'black'}}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={Images}
              title="Contemplative Reptile"
            />
            <CardContent>
              <h3 style={{fontWeight: 400}}>
                Do These Things Before Going to Bed
              </h3>
              <Typography variant="body2" color="textSecondary" component="p">
                Both regular and decaf boost your health
              </Typography>
            </CardContent>
            </Link>
            </Grid>
            <Grid Item xs style={{paddingLeft: 20}}>
              <div style={{display: 'flex', flexDirection: 'row', marginTop: 13}}>
                  <CardMedia style={{width: '100px'}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="100"
                    image={Img1}
                    title="Contemplative Reptile"
                  />
                <CardContent style={{ flex: '1 0 auto', padding: 0, paddingLeft: 16}}>
                 <h3 style={{paddingBottom: 10, fontWeight: 400, margin: 0, width: 250}}>
                    Do Not Give Up Coffee
                  </h3>
                  <Typography variant="body2" color="black" component="p" style={{fontSize: 13}}>
                    Brianna Wiest in Human Parts
                  </Typography>
                  <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13}}>
                    Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                  </Typography>
                </CardContent>
            </div>
          </Grid>
            <Hidden smDown>
              <Grid item lg={4} md={12}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={Img4}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom component="h5">
                    8 Timeless Skills to Learn Now in Under 8 Hours to Change your Life Forever
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Both regular and decaf boost your health
                  </Typography>
                </CardContent>
                </Grid>
            </Hidden>
        </Grid>
        <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
            <Link to="/" className="noborder"><p className="termpriv-log">SEE ALL FEATURED <i className="fas fa-chevron-right"> </i></p></Link>
        </Box>
        <Box borderBottom={1} style={{color: '#B9BABD'}}></Box>

        <Grid container spacing={2}>
          <Grid item md={7}>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 45}}>
                  <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16, width: 50}}>
                    <p className="title-blog">WOMEN <span className="cat-blog">Popular topic</span></p>
                    <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18, marginTop: 12}}>
                      I hired a wife. And my career took off.
                    </Typography>
                    <p style={{fontSize: 13, marginBottom: 20}}>
                    Her name is Luisa. Late 20s, Brazilian, smiley, warm, beautiful. 
                    Last Fall, I hired her to take over for my long-term sitter, who had moved…
                    </p>
                    <Grid container spacing={2}>
                    <Grid Item xs={8}>
                    <Typography variant="body3" color="black" component="p" style={{fontSize: 13, marginBottom: 5, marginLeft:8}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13, marginLeft:8}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                    </Typography>
                    </Grid>
                    <Grid Item xs>
                      <IconButton>
                        <BookmarkBorderIcon />
                      </IconButton>
                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </Grid>
                    </Grid>
                  </CardContent>
                  <CardMedia style={{width: '25%', marginLeft: 5, marginTop: 10}}
                      component="img"
                      alt="Contemplative Reptile"
                      height="30%"
                      image={Img1}
                      title="Contemplative Reptile"
                    />
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: 45}}>
                  <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16, width: 50}}>
                    <p className="title-blog">WOMEN <span className="cat-blog">Popular topic</span></p>
                    <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18, marginTop: 12}}>
                      I hired a wife. And my career took off.
                    </Typography>
                    <p style={{fontSize: 13, marginBottom: 20}}>
                    Her name is Luisa. Late 20s, Brazilian, smiley, warm, beautiful. 
                    Last Fall, I hired her to take over for my long-term sitter, who had moved…
                    </p>
                    <Grid container spacing={2}>
                    <Grid Item xs={8}>
                    <Typography variant="body3" color="black" component="p" style={{fontSize: 13, marginBottom: 5, marginLeft:8}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13, marginLeft:8}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                    </Typography>
                    </Grid>
                    <Grid Item xs>
                      <IconButton>
                        <BookmarkBorderIcon />
                      </IconButton>
                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </Grid>
                    </Grid>
                  </CardContent>
                  <CardMedia style={{width: '25%', marginLeft: 5, marginTop: 10}}
                      component="img"
                      alt="Contemplative Reptile"
                      height="30%"
                      image={Img1}
                      title="Contemplative Reptile"
                    />
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: 45}}>
                  <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16, width: 50}}>
                    <p className="title-blog">WOMEN <span className="cat-blog">Popular topic</span></p>
                    <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18, marginTop: 12}}>
                      I hired a wife. And my career took off.
                    </Typography>
                    <p style={{fontSize: 13, marginBottom: 20}}>
                    Her name is Luisa. Late 20s, Brazilian, smiley, warm, beautiful. 
                    Last Fall, I hired her to take over for my long-term sitter, who had moved…
                    </p>
                    <Grid container spacing={2}>
                    <Grid Item xs={8}>
                    <Typography variant="body3" color="black" component="p" style={{fontSize: 13, marginBottom: 5, marginLeft:8}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13, marginLeft:8}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                    </Typography>
                    </Grid>
                    <Grid Item xs>
                      <IconButton>
                        <BookmarkBorderIcon />
                      </IconButton>
                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </Grid>
                    </Grid>
                  </CardContent>
                  <CardMedia style={{width: '25%', marginLeft: 5, marginTop: 10}}
                      component="img"
                      alt="Contemplative Reptile"
                      height="30%"
                      image={Img3}
                      title="Contemplative Reptile"
                    />
              </div>

              <div style={{display: 'flex', flexDirection: 'row', marginTop: 45}}>
                  <CardContent style={{flex: '1 0 auto', padding: 0, paddingLeft: 16, width: 50}}>
                    <p className="title-blog">WOMEN <span className="cat-blog">Popular topic</span></p>
                    <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: 18, marginTop: 12}}>
                      I hired a wife. And my career took off.
                    </Typography>
                    <p style={{fontSize: 13, marginBottom: 20}}>
                    Her name is Luisa. Late 20s, Brazilian, smiley, warm, beautiful. 
                    Last Fall, I hired her to take over for my long-term sitter, who had moved…
                    </p>
                    <Grid container spacing={2}>
                    <Grid Item xs={8}>
                    <Typography variant="body3" color="black" component="p" style={{fontSize: 13, marginBottom: 5, marginLeft:8}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13, marginLeft:8}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                    </Typography>
                    </Grid>
                    <Grid Item xs>
                      <IconButton>
                        <BookmarkBorderIcon />
                      </IconButton>
                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </Grid>
                    </Grid>
                  </CardContent>
                  <CardMedia style={{width: '25%', marginLeft: 5, marginTop: 10}}
                      component="img"
                      alt="Contemplative Reptile"
                      height="25%"
                      image={Img2}
                      title="Contemplative Reptile"
                    />
              </div>
          </Grid>
          <Grid item md>
          <h2 className="popular">Popular on Medium</h2>
          <Box borderBottom={1} style={{color: '#B9BABD', width: '300px', marginLeft: 33}}></Box>

             <Grid container spacing={2}>
              <Grid Item xs={2}>
                <h2 className="Number">01</h2>
              </Grid>
              <Grid Item xs={6}>
                <h2 className="category">A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h2>
                    <Typography variant="body3" color="black" component="p" style={{fontSize: 13, marginBottom: 5}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                    </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid Item xs={2}>
                <h2 className="Number">02</h2>
              </Grid>
              <Grid Item xs={6}>
                <h2 className="category">A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h2>
                    <Typography variant="body3" color="black" component="p" style={{fontSize: 13, marginBottom: 5}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                    </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid Item xs={2}>
                <h2 className="Number">03</h2>
              </Grid>
              <Grid Item xs={6}>
                <h2 className="category">A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h2>
                    <Typography variant="body3" color="black" component="p" style={{fontSize: 13, marginBottom: 5}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                    </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid Item xs={2}>
                <h2 className="Number">04</h2>
              </Grid>
              <Grid Item xs={6}>
                <h2 className="category">A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades</h2>
                    <Typography variant="body3" color="black" component="p" style={{fontSize: 13, marginBottom: 5}}>
                      Melissa Chu in The Startup
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p" style={{fontSize: 13}}>
                      Nov 15 • 7 min read <span style={{fontSize: 11}}><i class="fas fa-star"></i></span>
                    </Typography>
              </Grid>
            </Grid>
            <Box borderBottom={1} style={{color: '#ECECEC', width: '75%', marginTop: 100, marginLeft: 35}}></Box>

            <div style={{ width: '100%' , marginLeft: 20}}>
              <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" style={{paddingBottom:0, marginBottom: 0}}>
                <Box p={1}>
                  <span className="footer-title">Help</span>
                </Box>
                <Box p={1} >
                  <span className="footer-title">Status</span>
                </Box>
                <Box p={1} >
                  <span className="footer-title">Writers</span>
                </Box>
                <Box p={1} >
                  <span className="footer-title">Blog</span>
                </Box>
                <Box p={1} >
                  <span className="footer-title">Carrers</span>
                </Box>
              </Box>
            </div>

            <div style={{ width: '100%' , marginLeft: 20}}>
              <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" style={{paddingTop:0, marginTop: 0}}>
                <Box p={1}>
                  <span className="footer-title">Privacy</span>
                </Box>
                <Box p={1} >
                  <span className="footer-title">Terms</span>
                </Box>
                <Box p={1} >
                  <span className="footer-title">About</span>
                </Box>
              </Box>
            </div>

          </Grid>

        </Grid>
      </Container>
      </div>
    );
  }
}


export default Home;