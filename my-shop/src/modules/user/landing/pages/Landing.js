import { NavLink } from 'react-router-dom';
import React from 'react';
import useUser from '../../../common/auth/hooks/useUser';

function Landing() {
    const user = useUser();

    return (
        <div style={{ textAlign:'center'}}>
            {JSON.stringify(user)}
        <br/>
            Landing.............
        <br/>
            <NavLink to="/auth" >Login</NavLink >
        <br/>
            <NavLink to="/admin">Admin Panel</NavLink>

        </div>
    );
}

export default Landing;