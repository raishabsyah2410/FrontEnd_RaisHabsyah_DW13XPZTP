import React, {Component} from 'react';

import { Container, Grid, Box, Button } from '@material-ui/core';
import Navbarcom from '../../component/Navbarcom';

// Tabs
import CoolTabs from 'react-cool-tabs';


import { Link } from "react-router-dom";

class Content1 extends Component {
    render() {
      return <div style={{padding: 150, textAlign: 'center'}}>
        <h4 style={{fontWeight: 400}}> You have no drafts </h4>
        <h3 style={{fontWeight: 300}}>Write on the go with our iOS and Android apps!</h3>
      </div>
    }
  }
  class Content2 extends Component {
    render() {
      return <div style={{padding: 150, textAlign: 'center'}}>
        <h3 style={{fontWeight: 300}}>You haven’t published any public stories yet.</h3>
      </div>
    }
  }

class Story extends Component {
    render(){
        return(
            <div>
            
                <Navbarcom />

            <Container maxWidth="lg" style={{marginLeft: 80, marginTop: 50, marginBottom: 30}}>
                <Grid container>
                    <Grid item xs={5}>

                        <h1>Your Stories</h1>

                    </Grid>
                    <Grid item xs={5}>
                        <Box display="flex" flexDirection="row" justifyContent="flex-end" style={{marginTop: 25}}>
                         <Button variant="outlined" style={{marginRight: 10, textTransform: 'none', ontWeight: 400}}>Import a story</Button>
                         <Link to="storyadd" style={{textDecoration: 'none'}}><Button variant="outlined" style={{marginRight: 10, textTransform: 'none', fontWeight: 400, color: 'rgba(2, 158, 116, 1)', borderColor: 'rgba(3, 168, 124, 1)'}}>Write a story</Button></Link>
                        </Box>
                    </Grid>

                </Grid>

                <div>
                    <CoolTabs
                    tabKey={'1'}
                    style={{ width:  '90%', height:  400, background:  'white' }}
                    activeTabStyle={{ color:  'black', fontSize: 14}}
                    unActiveTabStyle={{ color:  'gray' , fontSize: 14}}
                    activeLeftTabBorderBottomStyle={{ background:  'black', height:  2 }}
                    activeRightTabBorderBottomStyle={{ background:  'black', height:  2 }}
                    tabsBorderBottomStyle={{ background:  'gray', height:  1 }}
                    leftContentStyle={{ background:  'white' }}
                    rightContentStyle={{ background:  'white' }}
                    leftTabTitle={'Drafts'}
                    rightTabTitle={'Right title'}
                    leftContent={<Content1/>}
                    rightContent={<Content2/>}
                    contentTransitionStyle={'transform 0.6s ease-in'}
                    borderTransitionStyle={'all 0.6s ease-in'}/>
                </div>
            </Container>
            
            </div>
        );
    }
}


export default Story;