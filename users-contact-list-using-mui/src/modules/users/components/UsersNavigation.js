import { Paper, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';

function UsersNavigation() {
  return (
    <Paper>
      <Button to="" component={NavLink} startIcon={<ViewListIcon/>}>
        List
      </Button>
      <Button to="new" component={NavLink} startIcon={<AddIcon/>}>
        Add User
      </Button>
    </Paper>
  )
}

export default UsersNavigation