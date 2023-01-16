import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

function MyTextField({name,...restProps}) {
    const [{value,onChange,onBlur},{touched,error}]=useField(name)
  return (
    <TextField
        fullWidth
        sx={{mb:2}}
        error={touched&&!!error}
        helperText={touched?error:null} 
        name={name} 
        {...restProps} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur}/>
  )
}

export default MyTextField