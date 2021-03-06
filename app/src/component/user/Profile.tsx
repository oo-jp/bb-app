import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TimeLine from '../article/TimeLine';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileInfo } from '../../interface/profile';
import { useStyles } from '../../styles/profile'

const Profile = (props: ProfileInfo) => {

  const classes = useStyles();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  const logoutWithRedirect = () => 
  logout({
    returnTo: window.location.origin
  })

  return (
    <>
      <p>プロフィール</p>
      <Button variant='contained' color='primary'>
        プロフィール編集
      </Button>
      <Button
        onClick={logoutWithRedirect}
        variant='contained'
        color='secondary'
      >
        ログアウト
      </Button>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p>ユーザー名 : {user} </p>
          </Grid>
          <Grid item xs={12}>
            <p>bio</p>
          </Grid>
          <Grid item xs={6}>
            <p>Followers</p>
          </Grid>
          <Grid item xs={6}>
            <p>Following</p>
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Profile;
