import React from 'react'
// import {Link} from 'react-router-dom'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';

import Icon from './components/Auth/icon';
// import M from 'materialize-css'
import useStyles from './components/Auth/styles';


const SignIn  = ()=>{
    
    
  const classes = useStyles();
    
   return (
      

      <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} >
          <Grid container spacing={2}>
            
            <Input name="email" label="Email Address"  type="email" />
            <Input name="password" label="Password" />
           </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
          <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth  disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button>
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
   )
}


export default SignIn;