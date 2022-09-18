import React from 'react'
import TextField from '@mui/material/TextField';
// Next inbuilt Image
import Image from 'next/image';
import insta from '../../assets/insta.jpg';
import { Button } from '@mui/material';
import { CarouselProvider, Slider, Slide, Image as Img} from 'pure-react-carousel';
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'
import bg4 from '../../assets/bg4.jpg'


function index() {
  return (
    <div className='login-container'>
        <div className='carbg'>
            <div className='car'>
                <Carousel showIndicators={false} showThumbs={false} showStatus={false} 
                  showArrows={false} infiniteLoop={true} interval={2000} autoPlay={true}>
                    <Image src={bg1}></Image>
                    <Image src={bg2}></Image>
                    <Image src={bg3}></Image>
                    <Image src={bg4}></Image>
                </Carousel>
            </div>
        </div>
        <div>
        <div className='login-card'>
            <Image src={insta}/>
            <TextField size="small" margin='dense'
             id="outlined-basic" fullWidth 
             label="Email" variant="outlined" />

<           TextField size="small" margin='dense'
             id="outlined-basic" fullWidth 
             label="Password" type="password" variant="outlined" />

             <div style={{color:'red'}}>Error yaha aayega</div>

        <Button variant="contained" fullWidth  style={{marginTop:'1rem'}}>
            LOGIN
        </Button>

        <div style={{color:'blue',marginTop:'0.5rem'}}>Forgot Password</div>
        </div>

        <div className='bottom-card'>
            Don't Have an Account? <span style={{color:'blue'}}>Sign Up</span>
        </div>
    </div>
    </div>
  )
}

export default index