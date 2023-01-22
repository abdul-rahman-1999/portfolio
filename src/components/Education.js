import React from 'react'
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import { Paper } from '@mui/material';

function Education() {
  return <>
  <h6 id="Education" style={{fontSize:"20px",textAlign:"center",margin:"30px 0px 30px 0px"}}>Education</h6>
  <Box sx={{display:"flex",flexDirection:"column",gap:3,width:"80%",margin:"0px auto",justifyContent:"center"}}> 

  <Paper sx={{display:"flex",gap:{xs:0,sm:5},width:{xs:"80%",sm:"90%",md:"60%"},margin:"0px auto",justifyContent:"center", alignItems:"center",flexDirection:{xs:"column",sm:"row"},padding:"20px"}}> 
   <SchoolIcon/>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>Higher Secondary Certificate</p>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>Sacred Heart Higher Secondary School, Panagudi</p>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>2017</p>
  </Paper>

  <Paper sx={{display:"flex",gap:{xs:0,sm:5},width:{xs:"80%",sm:"90%",md:"60%"},margin:"0px auto",justifyContent:"center", alignItems:"center",flexDirection:{xs:"column",sm:"row"},padding:"20px"}}> 
   <SchoolIcon/>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>Bachelor of Computer Application</p>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>Muslim Arts College, Thiruvithancode</p>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>2020</p>
  </Paper>

  <Paper sx={{display:"flex",gap:{xs:0,sm:5},width:{xs:"80%",sm:"90%",md:"60%"},margin:"0px auto",justifyContent:"center", alignItems:"center",flexDirection:{xs:"column",sm:"row"},padding:"20px"}}> 
   <SchoolIcon/>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>Graphic and Web Design</p>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>Image Creative Education, Nagercoil</p>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>2021</p>
  </Paper>

  <Paper sx={{display:"flex",gap:{xs:0,sm:5},width:{xs:"80%",sm:"90%",md:"60%"},margin:"0px auto",justifyContent:"center", alignItems:"center",flexDirection:{xs:"column",sm:"row"},padding:"20px"}}> 
   <SchoolIcon/>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>Full Stack Development MERN</p>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>Guvi IITM Research Park, Chennai (Internship)</p>
   <p style={{fontSize:"16px",textAlign:"center",fontWeight:600,margin:"10px"}}>2022</p>
  </Paper>

  </Box>
  </>
}

export default Education