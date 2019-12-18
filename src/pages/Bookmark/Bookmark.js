import React, {Component} from 'react';

import { Container, Box, Grid, Button } from '@material-ui/core';

import BookmarkIcon from '@material-ui/icons/Bookmark';
import Navbarm from '../../component/Navbarm';

class Bookmark extends Component {
    render (){
        return(
            <div>
                
            <Navbarm />

            <Container maxWidth="lg">
                <Box style={{padding: 35, width: '88%'}}>
                    <h1 style={{fontSize: 40 , color: 'rgba(0, 0, 0, 0.84)'}}>Bookmarks</h1>
                    <Box style={{padding: 25, color: 'rgba(0, 0, 0, 0.1)'}} border={1} borderRadius="borderRadius">
                      <Grid container>
                          <Grid>
                            <Box borderRight={1} style={{paddingRight: 20, color: 'rgba(0, 0, 0, 0.1)'}}>
                                <BookmarkIcon style={{paddingTop: 6, color: 'black'}}/>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={8}>
                            <h1 style={{margin: 0, paddingLeft: 30, color: '#3A3A3F', fontFamily: 'mono'}}> Offline reading is here. </h1>
                          </Grid>
                          <Grid item xs={12} md={3}>
                           <Box display="flex" flexDirection="row" justifyContent="flex-end">
                            <Button variant="contained" style={{backgroundColor: '#1A1A1C', color: 'white'}}>
                                <span style={{textTransform: 'none', fontWeight: 400}}>Upgrade</span>
                            </Button>
                            </Box>
                          </Grid>

                      </Grid>
                    </Box>
                </Box>
            </Container>
            </div>
        )
    }
}

export default Bookmark;