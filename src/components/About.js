import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// #FFD739

function About() {
  return <>
  <Box id="About" sx={{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-around",alignItems:"center",width:{xs:"80%",sm:"80%",md:"60%"},margin:"65px auto 30px auto",gap:{xs:3,sm:5}}}>

   <Box>
    <h6 style={{fontSize:"20px",margin:"10px 0px",fontFamily:"tahoma",color:"#333"}}>Hi I'm Syed Abdul Rahman</h6>
    <h6 style={{fontSize:"18px",margin:"10px 0px",fontFamily:"tahoma",color:"#e9ba00"}}>Full Stack MERN Developer</h6>
    <p style={{fontSize:"14px",lineHeight:"23px",fontWeight:500,textAlign:"justify"}}>I am a confident, self driven, passionate, hardworking fresher looking for an opportunity to work in a challenging environment and grow up with the organization.
     I am also a fast learner who likes to constantly upgrade myself.</p>
     <p style={{fontSize:"14px",margin:"10px 0px",fontWeight:700}}>rahmanabdul10@outlook.com</p>
     <p style={{fontSize:"14px",margin:"0px 0px 20px 0px",fontWeight:600}}>9600528513</p>
     <a className='anchor' href="Abdul Rahman.pdf" download="Abdul Rahman.pdf"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"8px 16px"}}>Download My CV</Button></a>
   </Box>
   <Box sx={{backgroundColor:"#FFD739"}}>
    <Box
    component="img"
    src="images/abdul-pic12.png"
    sx={{
        objectFit:"cover",
        width:"320px",
        height:"350px",
    }}
    />
   </Box>

  </Box>
  </>
}

export default About