import React, { Component } from 'react';

import { CardMedia, CardContent, Typography } from '@material-ui/core';

import Img1 from '../img/1img.jpeg';

class Content extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}


export default Content;