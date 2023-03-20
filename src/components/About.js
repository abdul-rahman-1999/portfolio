import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function About() {
  return <>
  <Box id="About" sx={{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-around",alignItems:"center",width:{xs:"80%",sm:"80%",md:"60%"},margin:"95px auto 30px auto",gap:{xs:3,sm:5}}}>

   <Box>
    <h6 style={{fontSize:"20px",margin:"0px 0px 10px 0px",fontFamily:"tahoma",color:"#333"}}>Hi I'm Syed Abdul Rahman</h6>
    <h6 style={{fontSize:"18px",margin:"10px 0px",fontFamily:"tahoma",color:"#e9ba00"}}>Full Stack MERN Developer</h6>
    <p style={{fontSize:"14px",lineHeight:"23px",fontWeight:500,textAlign:"justify"}}>I am a confident, self driven, passionate, hardworking fresher looking for an opportunity to work in a challenging environment and grow up with the organization.
     I am also a fast learner who likes to constantly upgrade myself.</p>
     <p style={{fontSize:"14px",margin:"10px 0px",fontWeight:700}}>rahmanabdul10@outlook.com <br/> <span style={{coor:"grey",fontSize:"13px",fontWeight:600}}>Or</span> <br/>syedrahmanabdul5@gmail.com</p>
     <p style={{fontSize:"14px",margin:"0px 0px 20px 0px",fontWeight:600}}>9600528513</p>
     <Box sx={{display:"flex",alignItems:"center",gap:2,marginBottom:"12px"}}>
      <a className='text' onClick={() => window.open("https://github.com/abdul-rahman-1999")}><GitHubIcon sx={{width:"40px",height:"40px", cursor:"pointer"}}/></a>
      <a className='text' onClick={() => window.open("https://www.linkedin.com/in/syed-abdul-rahman-85192922b/")}><LinkedInIcon sx={{color:"#0A66C2",width:"40px",height:"40px", cursor:"pointer"}}/></a>
      <a className='text' onClick={() => window.open("https://app.netlify.com/teams/abdul-rahman-1999/overview")}>
        <Box
        component="img"
        src="images/netlify.svg"
        sx={{
        objectFit:"cover",
        width:"40px",
        height:"40px",
        cursor:"pointer"
        }}
        /></a>
     </Box>
     <a className='anchor' onClick={() => window.open("https://drive.google.com/file/d/1Q4lwqn7APzy6JpWMln_g1w10qDImr7sR/view")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"8px 16px"}}>Click Here For Resume</Button></a>
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