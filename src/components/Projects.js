import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Projects() {
  return <>
  <h6 id="Projects" style={{fontSize:"20px",textAlign:"center",margin:"30px 0px 30px 0px"}}>Projects</h6>
  <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"row"},gap:{xs:3,sm:5},width:{xs:"80%",sm:"90%",md:"80%"},margin:"0px auto",flexWrap:"wrap",justifyContent:"center"}}>

   <Paper sx={{padding:"10px 20px",width:{sm:"50%",md:"25%"}}}>
   <Box
    component="img"
    src="images/utubeclone.png"
    sx={{
        objectFit:"contain",
        width:{xs:"100%",sm:"100%"},
        height:{xs:"200px",sm:"200px"},
    }}
    />
    <h6 style={{fontSize:"20px",textAlign:"center",margin:"10px"}}>Youtube Clone</h6>
    <p style={{fontSize:"14px",margin:"14px auto",width:"90%",textAlign:"justify",lineHeight:"24px",fontWeight:500}}>This Project is the First Webcode of Mine from GUVI. In this Project Technology which I used is HTML, CSS, JAVASCRIPT. The API which I used is Official Youtube's API.</p>

    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} href="https://stupendous-sprinkles-375b8d.netlify.app/"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github</Button></a>
    <a style={{textDecoration:"none"}} href="https://verdant-manatee-6c741f.netlify.app/"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
   </Paper>

   <Paper sx={{padding:"10px 20px",width:{sm:"40%",md:"25%"}}}>
   <Box
    component="img"
    src="images/bookmyshow.png"
    sx={{
        objectFit:"contain",
        width:{xs:"100%",sm:"100%"},
        height:{xs:"200px",sm:"200px"},
    }}
    />
    <h6 style={{fontSize:"20px",textAlign:"center",margin:"10px"}}>Book My Show</h6>
    <p style={{fontSize:"14px",margin:"14px auto",width:"90%",textAlign:"justify",lineHeight:"24px",fontWeight:500}}>This Project is the Second Webcode of Mine from GUVI. In this Project Technology which I used is React JS, Node JS, Express JS, Mongo DB a Full Stack Web Application to book a Movie Tickets.
     In this Project I Implement New Things like Authentication & Authorization Which the User used to Register and Login to Enter into an Application.</p>

    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} href="https://github.com/abdul-rahman-1999/bookmyshow-frontend"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github FrontEnd</Button></a>
    <a style={{textDecoration:"none"}} href="https://github.com/abdul-rahman-1999/bookmyShow-Backend"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github BackEnd</Button></a>
    <a style={{textDecoration:"none"}} href="https://superlative-gumdrop-e9fb14.netlify.app/"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
   </Paper>

   <Paper sx={{padding:"10px 20px",width:{sm:"40%",md:"25%"}}}>
   <Box
    component="img"
    src="images/dailydress.png"
    sx={{
        objectFit:"contain",
        width:{xs:"100%",sm:"100%"},
        height:{xs:"200px",sm:"200px"},
    }}
    />
    <h6 style={{fontSize:"20px",textAlign:"center",margin:"10px"}}>Dress Color Suggestion</h6>
    <p style={{fontSize:"14px",margin:"14px auto",width:"90%",textAlign:"justify",lineHeight:"24px",fontWeight:500}}>This Project is the First Capstone Project of Mine from GUVI. In this Project Technology which I used is React JS, Node JS, Express JS, Mongo DB a Full Stack Web Application to Suggest Colors on Daily Basis for Women.
     In this Project also I Implement Authentication & Authorization as well as I Implement another new Technology also for Just Authentication & Authorization only using Firebase that the User can Signin with Google also but unfortunately not Working because I gave auth permission to my Application from My backend otherwise It Works Perfectly and My Code is in Github. And also I Implement Add to Cart, Cart Value Updation using Context API & useReducer hook and Checkout Page which all the E-Commerce website have.</p>

    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} href="https://github.com/abdul-rahman-1999/daliyDressShop-FrontEnd"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github FrontEnd</Button></a>
    <a style={{textDecoration:"none"}} href="https://github.com/abdul-rahman-1999/dailyDressShop-Backend"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github BackEnd</Button></a>
    <a style={{textDecoration:"none"}} href="https://stupendous-sprinkles-375b8d.netlify.app/"><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
   </Paper>

  </Box>
  </>
}

export default Projects