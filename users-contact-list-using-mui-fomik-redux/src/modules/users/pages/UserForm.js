import { Button, Paper} from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import React from 'react';
import useUser from '../hooks/useUser';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {Form, Formik } from 'formik';
import MyTextField from '../../common/components/form/MyTextField';
;
 //eslint-disable-next-line
const EMAIL_REGEXP =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is Required';
    }
    if (!values.surname) {
        errors.surname = 'Surname is Required';
    }
    if (!values.email.toLowerCase().match(EMAIL_REGEXP)) {
        errors.email = 'Email is Invalid';
    }
    if (!values.email) {
        errors.email = 'Email is Required';
    }
    return errors;
}

function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, saveUser } = useUser(id);
 
 

    function onFormSubmit(values) {
        saveUser(values);
        navigate('..');
    }

    return (
        <Paper sx={{ marginTop: '20px' }}>
           <Formik  
                initialValues={user} 
                enableReinitialize={true} 
                onSubmit={onFormSubmit}
                validate={validate}
                validateOnMount={true}>
            {({isValid})=>(
                    <Form>
                        <MyTextField name="name" label="Name" fullWidth/>
                        <MyTextField name="surname" label="Surname" fullWidth/>
                        <MyTextField name="email" label="Email" fullWidth/>
                        <Button
                            disabled={!isValid}
                            sx={{ marginTop: '8px' }}
                            type="submit"
                            color="primary"
                            variant="contained"
                            startIcon={<SaveAsOutlinedIcon/>}
                            >
                            Save
                        </Button>
                        <Button
                            sx={{ marginTop: '8px' }}
                            to=".."
                            component={NavLink}
                            startIcon={<CancelOutlinedIcon/>}
                            >
                            Cancel
                        </Button>
                    </Form>)}
           </Formik>
        </Paper>
    );
}

export default UserForm;


