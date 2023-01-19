import { Form, Formik } from 'formik';
import React from 'react';
import { Button} from '@mui/material';
import { Navigate } from 'react-router-dom';
import loginValidationSchema from '../validation/loginValidationSchema';
import useAuth from '../hooks/useAuth';
import MyTextField from '../../form/MyTextField'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MySelect from '../../form/MySelect';

const initialValues = { username: '', password: '', role:'admin' };

 

function Login() {
    const auth = useAuth();
   

    function onSubmit(values) {
        auth.login(values.username, values.password, values.role);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginValidationSchema}
        >
            {({isValid}) =>
                 (
                    <Container component="main" maxWidth="xs">
                       <CssBaseline />
                        <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            </Avatar>
                            <Typography component="h1" variant="h5" sx={{mb:3}}>
                                Sign in
                            </Typography>
                            <Form >
                                    {auth.isAuthorized && <Navigate to="/" />}
                                    
                                    <MyTextField name="username" label="Name" />
                                   
                                    <MyTextField name="password" label="Password" />
                                    
                                   
                                    
                                    <FormControl fullWidth>
                                    <InputLabel name='role'>role</InputLabel>
                                        <MySelect  name="role" 
                                                 fullWidth 
                                                 label="Role" 
                                                 id="role"
                                        >
                                            <MenuItem value={'admin'}>Admin</MenuItem>
                                            <MenuItem value={'user'}>User</MenuItem>

                                        </MySelect>
                                    </FormControl>
                                    <Button
                                        disabled={!isValid}
                                        fullWidth
                                        sx={{ mt: 3, mb: 2 }}
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        >
                                        Sign In
                                    </Button>
                            </Form>
                            <Grid container>
                                <Grid item xs>
                                        <Link href="#" variant="body2">
                                        Forgot password?
                                        </Link>
                                </Grid>
                                <Grid item>
                                        <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                        </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                )
            }
        </Formik>
    );
}

export default Login;