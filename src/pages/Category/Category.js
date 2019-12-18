import React, {Component} from 'react';
import { Container, Grid, Box, Hidden, Button } from '@material-ui/core';


// import Component
import Navbar from '../../component/Navbar';
// 

// CSS
import '../../Myapp.css';
// Close CSS

// Import Images
import One from '../../img/One.png';
import Cate from '../../img/cat1.jpeg';
import Ilus from '../../img/ilus.gif';
import Other from '../../img/other.jpg';
// Close Images

class Category extends Component{
    render(){
        return(
        <div>
        
            <Navbar />
        
        <div>
          <Container maxWidth="lg" style={{marginTop: 55}}>
                <Grid container spacing={1}>
              {/* Image left */}
                    <Grid item xs={6} md={4}>
                      <img src={One} Width="80%" alt="left" style={{marginLeft: 60}}/>
                    </Grid>
              {/* Close Image left */}

                  <Hidden mdUp>
                      <Grid item xs={6} md={3}>
                        <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
                          <Button variant="outlined" style={{width: '20%', color: 'rgba(140, 93, 255, 1)'}}>
                            <span style={{fontSize: 11, textTransform: 'none'}}>Follow</span>
                          </Button>
                        </Box>
                      </Grid>
                    </Hidden>

                    {/* Register */}
                    <Grid item xs={0} sm={12} md={5}>
                        <h2 style={{lineHeight: 1.2, margin: 6, marginTop: 13, fontSize: '130%' , fontWeight: 400, fontFamily: 'Titillium Web'}}>
                        <span style={{color: '#6A0BFF'}}>The front lines of the future.</span> A Medium publication about tech and science. </h2>
                    </Grid>
                    {/* Close Register */}

                    {/* Image Right */}

                    <Hidden smDown>
                      <Grid item xs={6} md={3}>
                        <Box display="flex" flexDirection="row-reverse" p={1} m={1} bgcolor="background.paper">
                          <Button variant="outlined" style={{marginRight: 120, width: '20%', color: 'rgba(140, 93, 255, 1)'}}>
                            <span style={{fontSize: 11, textTransform: 'none'}}>Follow</span>
                          </Button>
                        </Box>
                      </Grid>
                    </Hidden>

                    {/* Close Image Right */}

                  </Grid>

                  <Grid container spacing={0} style={{padding: 20, marginTop: 80}}>

                    <Grid item xs={12} md={7} style={{padding: 0}}>
                      <div style={{overflow: 'none'}}>
                        <img style={{height: '340px', overflow: 'hidden'}} src={Cate} width="100%" alt="left"/>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={4} style={{padding: 0}}>
                      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{height: '300px', overflow: 'none', backgroundColor: '#6A0BFF', padding: 20}}>
                        <h2 className="title-cat">The Influencer and the Hit Man</h2>
                        <p className="subtitle-cat">How a years-long domain name feud ended in a bloody shootout</p>
                        <p style={{color: '#DAF832'}}>Ian Frisch</p>
                        <p style={{color: 'white', margin: 0}}>Dec 10 • 24 min read</p>
                      </Box>
                    </Grid>

                  </Grid>

                  <Grid container spacing={0} style={{padding: 20}}>

                    <Grid item xs={12} md={4} style={{padding: 0}}>
                      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{height: '300px', overflow: 'none'}}>
                        <h2 className="title-cat" style={{color: 'black'}}>The Influencer and the Hit Man</h2>
                        <p className="subtitle-cat" style={{color: 'black'}}>How a years-long domain name feud ended in a bloody shootout</p>
                        <p style={{color: '#6A0BFF'}}>Ian Frisch</p>
                        <p style={{color: 'white', margin: 0}}>Dec 10 • 24 min read</p>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={7} style={{padding: 0}}>
                      <div style={{overflow: 'none'}}>
                        <img style={{height: '340px', overflow: 'hidden'}} src={Ilus} width="100%" alt="left"/>
                      </div>
                    </Grid>

                  </Grid>

                  <Grid container spacing={0} style={{padding: 20}}>

                    <Grid item xs={12} md={7} style={{padding: 0}}>
                      <div style={{overflow: 'none'}}>
                        <img style={{height: '340px', overflow: 'hidden'}} src={Cate} width="100%" alt="left"/>
                      </div>
                    </Grid>
                    
                    <Grid item xs={12} md={4} style={{padding: 0}}>
                      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{height: '300px', overflow: 'none', backgroundColor: '#6A0BFF', padding: 20}}>
                        <h2 className="title-cat">The Influencer and the Hit Man</h2>
                        <p className="subtitle-cat">How a years-long domain name feud ended in a bloody shootout</p>
                        <p style={{color: '#DAF832'}}>Ian Frisch</p>
                        <p style={{color: 'white', margin: 0}}>Dec 10 • 24 min read</p>
                      </Box>
                    </Grid>

                  </Grid>
                    <Box display="flex" width="89%" flexDirection="column" style={{backgroundColor: '#DAF832', marginLeft: 20}}>
                      <blockquote><h2 style={{paddingLeft: 40}}> " We have a few new things to share. "</h2>
                      <span style={{paddingLeft: 40}}>— Damon Beres</span>
                      <h4 style={{paddingLeft: 40, paddingTop: 20, margin: 0}}>Welcome to a Refreshed OneZero</h4>
                      <p style={{paddingLeft: 40, paddingTop: 10, margin: 0}}>Dec 3 • 2 min read</p>
                      </blockquote>
                    </Box>
                    <Container maxWidth="md">
                    {/* Content Blog */}
                      <center><Box borderBottom={1} style={{marginTop: 30, marginBottom: 20, width: '90%', marginRight: 100, color: '#6A0BFF'}}/></center>

                      <Grid container spacing={0} style={{padding: 20}}>

                      <Grid item xs={6} style={{padding: 0, marginLeft: 10}}>
                        <h3>An Eerie Historical Deepfake Imagines Nixon Telling the World the Moon Landing Failed</h3>
                        <p>A team of scientists created a convincing facsimile of a speech that never happened, and put the threat of fake information front and…</p>
                        <p style={{color: '#6A0BFF', margin: 0, paddingTop: 10}}>Andrew Dickson</p>
                        <p style={{margin: 0, paddingTop: 10}}>Dec 10 • 2 min read</p>
                      </Grid>

                        <Grid item xs={5} style={{padding: 0, marginLeft: 10}}>
                          <div style={{overflow: 'none'}}>
                            <center><img style={{overflow: 'hidden'}} src={Other} width="80%" alt="left"/></center>
                          </div>
                        </Grid>
                      </Grid>
                      <center><Box borderBottom={1} style={{marginTop: 30, marginBottom: 20, width: '90%', marginRight: 100, color: '#BEBEBE'}}/></center>

                    {/* Close Content Blog */}

                    {/* Content Blog  II */}

                      <Grid container spacing={0} style={{padding: 20}}>

                      <Grid item xs={6} style={{padding: 0, marginLeft: 10}}>
                        <h3>An Eerie Historical Deepfake Imagines Nixon Telling the World the Moon Landing Failed</h3>
                        <p>A team of scientists created a convincing facsimile of a speech that never happened, and put the threat of fake information front and…</p>
                        <p style={{color: '#6A0BFF', margin: 0, paddingTop: 10}}>Andrew Dickson</p>
                        <p style={{margin: 0, paddingTop: 10}}>Dec 10 • 2 min read</p>
                      </Grid>

                        <Grid item xs={5} style={{padding: 0, marginLeft: 10}}>
                          <div style={{overflow: 'none'}}>
                            <center><img style={{overflow: 'hidden'}} src={Other} width="80%" alt="left"/></center>
                          </div>
                        </Grid>
                      </Grid>
                      <center><Box borderBottom={1} style={{marginTop: 30, marginBottom: 20, width: '90%', marginRight: 100, color: '#BEBEBE'}}/></center>

                    {/* Close Content Blog */}
                    </Container>
          </Container>

          <Box borderTop={1} style={{color: 'rgba(0, 0, 0, 0.1)'}}>
              <Container maxWidth="md">
                <Box display="flex" justifyContent="flex-end" alignItems="center" height="80px">
                  <p style={{fontSize: 16, color: '#91949A', fontWeight: 'small', marginRight: 20}}>About OneZero · About Medium· Terms · Privacy</p>
                </Box>
              </Container>
          </Box>
      </div>

        </div>

        
        );
    }
}


export default Category;