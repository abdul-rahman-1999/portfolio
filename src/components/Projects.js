import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Projects() {
  return <>
  <h6 id="Projects" style={{fontSize:"20px",textAlign:"center",margin:"30px 0px 30px 0px"}}>Projects</h6>
  <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"row"},gap:{xs:3,sm:5},width:{xs:"80%",sm:"90%",md:"80%"},margin:"0px auto",flexWrap:"wrap",justifyContent:"center"}}>

   {/* <Paper sx={{padding:"10px 20px",width:{sm:"50%",md:"25%"}}}>
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
   </Paper> */}

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
    <h6 style={{fontSize:"18px",textAlign:"center",margin:"10px 0px"}}>Book My Show</h6>
    <p style={{fontSize:"14px",margin:"14px auto",width:"90%",textAlign:"justify",lineHeight:"24px",fontWeight:500}}>Users can Book Tickets for Movie and get a Confirmation mail of ticket. Concepts Which I used Authentication, Context API, Fetch, Nodemailer. The Tech Stack Which I used is MERN.</p>
    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://github.com/abdul-rahman-1999/bookmyshow-frontend")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github FrontEnd</Button></a>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://github.com/abdul-rahman-1999/bookmyShow-Backend")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github BackEnd</Button></a>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://superlative-gumdrop-e9fb14.netlify.app/")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
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
    <h6 style={{fontSize:"18px",textAlign:"center",margin:"10px 0px"}}>Dress Color Suggestion</h6>
    <p style={{fontSize:"14px",margin:"14px auto",width:"90%",textAlign:"justify",lineHeight:"24px",fontWeight:500}}>Users can get a Color Suggestions for dress & Order dress using Payment. Concepts Which I used Authentication, Context API, Fetch, Payment. The Tech Stack Which I used is MERN.</p>
    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://github.com/abdul-rahman-1999/daliyDressShop-FrontEnd")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github FrontEnd</Button></a>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://github.com/abdul-rahman-1999/dailyDressShop-Backend")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github BackEnd</Button></a>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://stupendous-sprinkles-375b8d.netlify.app/")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
   </Paper>

      <Paper sx={{padding:"10px 20px",width:{sm:"40%",md:"25%"}}}>
   <Box
    component="img"
    src="images/chatApp.png"
    sx={{
        objectFit:"contain",
        width:{xs:"100%",sm:"100%"},
        height:{xs:"200px",sm:"200px"},
    }}
    />
    <h6 style={{fontSize:"18px",textAlign:"center",margin:"10px 0px"}}>Chat Application</h6>
    <p style={{fontSize:"14px",margin:"14px auto",width:"90%",textAlign:"justify",lineHeight:"24px",fontWeight:500}}>Users who are in Online they can Send Messages to each other via this App. Concepts Which I used Authentication, Context API, Fetch, WebSocket (ws). The Tech Stack Which I used is MERN.</p>
    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://github.com/abdul-rahman-1999/ChatApp-FrontEnd")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github FrontEnd</Button></a>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://github.com/abdul-rahman-1999/ChatApp-Backend")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github BackEnd</Button></a>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://spectacular-syrniki-b51c37.netlify.app/")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
   </Paper>

      <Paper sx={{padding:"10px 20px",width:{sm:"40%",md:"25%"}}}>
   <Box
    component="img"
    src="images/fileUpload.png"
    sx={{
        objectFit:"contain",
        width:{xs:"100%",sm:"100%"},
        height:{xs:"200px",sm:"200px"},
    }}
    />
    <h6 style={{fontSize:"18px",textAlign:"center",margin:"10px 0px"}}>File Upload Application</h6>
    <p style={{fontSize:"14px",margin:"14px auto",width:"90%",textAlign:"justify",lineHeight:"24px",fontWeight:500}}>Users can Post Pictures & like each other's Post & get Notification instantly. Concepts Which I used Authentication, Context API, Fetch, Socket IO. The Tech Stack Which I used is MERN.</p>
    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:1,sm:1},flexWrap:"wrap",justifyContent:"center"}}>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://github.com/abdul-rahman-1999/SimpleMedia-FrontEnd")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github FrontEnd</Button></a>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://github.com/abdul-rahman-1999/simpleMedia-Backend")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Github BackEnd</Button></a>
    <a style={{textDecoration:"none"}} onClick={() => window.open("https://moonlit-valkyrie-487721.netlify.app/")}><Button sx={{backgroundColor:"#FFD739",color:"black",padding:"5px 20px",width:"100%"}}>Netlify</Button></a>
    </Box>
   </Paper>

  </Box>
  </>
}

export default Projects