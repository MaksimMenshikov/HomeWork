import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import GroupIcon from '@mui/icons-material/Group';
function MainNavigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }} to='/' component={NavLink} >
          Users Contact List
        </Typography>
        <Button color='inherit' to='users' component={NavLink} startIcon={<GroupIcon/>}>Users</Button>
      </Toolbar>
          </AppBar>

  )
}

export default MainNavigation