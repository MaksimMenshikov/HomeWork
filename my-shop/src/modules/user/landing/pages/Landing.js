import { NavLink } from 'react-router-dom';
import React from 'react';
import useUser from '../../../common/auth/hooks/useUser';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Landing() {
    const user = useUser();

    return (
        <AppBar position="absolute">
            <Toolbar >
                {JSON.stringify(user)}
                <Typography sx={{flexGrow: 1,ml:'120px' }}>
                    Landing
                </Typography>
                <Box >
                    <NavLink sx={{ml:'120px'}} to="/auth">Login</NavLink>
                </Box>
                <LoginIcon color="secondary"/>

                <Box sx={{ml:'20px'}}>
                    <NavLink  to="/auth/logout">Logout</NavLink>
                </Box>
                <LogoutIcon color="secondary"/>
                <Box sx={{ ml:'20px' }}>
                    <NavLink to="/admin">Admin Panel</NavLink>
                </Box>
                <AdminPanelSettingsIcon color="secondary"/>
            </Toolbar>
        </AppBar>
    );
}

export default Landing;