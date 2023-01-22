import React from 'react'
import Box from '@mui/material/Box';

function Skills() {
  return <>
  <h6 id="Skills" style={{fontSize:"20px",textAlign:"center",margin:"0px 0px 30px 0px"}}>Skills</h6>
  <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"row"},gap:{xs:3,sm:5},width:{xs:"80%",sm:"80%",md:"60%"},margin:"0px auto",flexWrap:"wrap",justifyContent:"center"}}>

  <Box
    component="img"
    src="images/html5.svg"
    sx={{
        objectFit:"cover",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

<Box
    component="img"
    src="images/html5-logo-31821.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

      <Box
    component="img"
    src="images/javascript-39393.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

  <Box
    component="img"
    src="images/1174949_js_react js_logo_react_react native_icon.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

<Box
    component="img"
    src="images/1012820_code_development_logo_nodejs_icon.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

<Box
    component="img"
    src="images/1012822_code_development_logo_mongodb_programming_icon.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

<Box
    component="img"
    src="images/2993707_adobe_brand_brands_logo_logos_icon.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

<Box
    component="img"
    src="images/2993708_adobe_brand_brands_illustrator_logo_icon.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

<Box
    component="img"
    src="images/4373061_adobe_logo_logos_xd_icon.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

<Box
    component="img"
    src="images/9117956_bootstrap_fill_icon.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />

<Box
    component="img"
    src="images/7564187_figma_logo_brand_icon.png"
    sx={{
        objectFit:"contain",
        width:{xs:"120px",sm:"90px"},
        height:{xs:"150px",sm:"120px"},
        margin:"0px auto"
    }}
    />
  </Box>
  </>
}

export default Skills