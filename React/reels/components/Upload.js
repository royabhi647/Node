import React from 'react'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';


function Upload() {
  return (
    <div className='upload-btn'>
        <Button 
        color="secondary" 
        variant="outlined" 
        component="label"
        fullWidth 
        size="large" 
        startIcon={<MovieIcon />}
    > 
        Upload video
        <input hidden accept="*" multiple type="file" />
    </Button>
    <LinearProgress
    color='secondary'
        variant='determinate'
        value={"60"} 
        sx={{mt:'0.2rem'}} />
  </div>
  )
}

export default Upload