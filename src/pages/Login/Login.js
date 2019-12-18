import React, {Component} from 'react';
import {Box, Container, TextField, Hidden, Button} from '@material-ui/core';
import '../../Myapp.css';

import { Link } from "react-router-dom";


class Login extends Component {
  render(){
    return(
      <div>
          <Container maxWidth="md" style={{marginTop: 90}}>
              <Box className="bg-shadow" borderRadius="borderRadius" border={1} borderColor="#BCBCBC">
                <Container maxWidth="sm" style={{width: '60%'}}>
                    {/* Register */}
                        <h2 className="fontwhite"> Sign in with email </h2>
                        <Hidden smDown>
                        <p className="subject-log"> Enter the email address associated with your account, and we’ll send a magic link to your inbox.  </p>
                        </Hidden>

                        <form noValidate autoComplete="off">
                          <p className="youremail">Your email</p>
                          <center><TextField className="input-log" id="standard-basic"/></center>
                          <p className="youremail">Your password</p>
                          <center><TextField className="input-log" type="password" id="standard-basic"/></center>

                          <center><Button variant="contained" style={{marginTop: 20, marginBottom: 15, backgroundColor: '#2D2D2D', color: 'white', fontSize: 12, textTransform: 'none'}}>
                          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Continue</Link></Button></center>
                        </form>

                        <Link to="signup" className="noborder"><p className="termpriv-log"><i className="fas fa-chevron-left"> </i> All sign in options</p></Link>

                    </Container>
                  
              </Box>
          </Container>
      </div>
    );
  }
}

export default Login;