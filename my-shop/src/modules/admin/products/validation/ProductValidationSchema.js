import * as yup from 'yup';

export default yup.object().shape({
    title: yup.string('must be a string').required('Put product title').min(3),
    price: yup.number().required('Put product price'), 
    description:yup.string().required('Put product description').min(3).label('Description')
});