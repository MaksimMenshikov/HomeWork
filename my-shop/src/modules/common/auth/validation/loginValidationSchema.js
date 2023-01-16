import * as yup from 'yup';
const REGEXP=/(?=.*[0-9])/g
export default yup.object().shape({
    username: yup.string().required().min(3).label('Name'),
    password: yup.string().required('Put a password').min(8, 'min password must be 8 symbols').matches(REGEXP,"password must contain a number"), 
});