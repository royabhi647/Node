import React from 'react'
import TextField from '@mui/material/TextField';
// Next inbuilt Image
import Image from 'next/image';
import insta from '../../assets/insta.jpg';
import { Button } from '@mui/material';

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={insta}/>
            <TextField size="small" margin='dense'
             id="outlined-basic" fullWidth 
             label="Email" variant="outlined" />

<           TextField size="small" margin='dense'
             id="outlined-basic" fullWidth 
             label="Password" type="password" variant="outlined" />

            <TextField size="small" margin='dense'
             id="outlined-basic" fullWidth 
             label="Full Name" variant="outlined" />

        <Button variant="outlined" fullWidth component="label" style={{marginTop:'1rem'}}>
            Upload
         <input hidden accept="image/*" multiple type="file" />
        </Button>

        <Button variant="contained" fullWidth  style={{marginTop:'1rem'}}>
            Sign Up
        </Button>
        </div>

        <div className='bottom-card'>
            Already Have an Account? <span style={{color:'blue'}}>Login</span>
        </div>
    </div>
  )
}

export default index