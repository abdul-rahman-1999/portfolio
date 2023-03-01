import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup"
import emailjs from '@emailjs/browser';

function Form() {

    const formValidationSchema = yup.object({
        to_name: yup.string().required(),
        from_name:yup.string().required().min(10),
        mob_no:yup.string().required().min(10).max(13),
        message:yup.string().required().min(10)
      })
  
        const {handleSubmit,values, handleChange,handleBlur,touched, errors} = useFormik({
          initialValues:{
            to_name:'',
            from_name:'',
            mob_no:'',
            message:''
          },
          validationSchema : formValidationSchema,
          onSubmit:(e) => {
            sendEmail(e)
          }
        })
  
        const form = useRef();
        const sendEmail = (e) =>{
          emailjs.sendForm('service_57amgt8', 'template_2s308xt', form.current, 'IsruJrbnUCTtgV8UR')
            .then(() => {
                alert("Email Sent")
            }, (error) => {
                console.log(error.text);
            });
        }
  

  return <>
  <h6 style={{fontSize:"20px",textAlign:"center",margin:"30px 0px 30px 0px"}}>Fill this Form to Reach Me...🤗</h6>
  <Box sx={{display:"flex",flexDirection:"column",gap:3,width:{xs:"80%",sm:"80%",md:"50%"},margin:"0px auto",justifyContent:"center",padding:"0px 0px 20px 0px"}}>

  <form ref={form} onSubmit = {handleSubmit} id="Form">

  <TextField 
   sx={{background:'white',marginTop:"15px"}}
  fullWidth label="Name" 
  name="to_name"
  value={values.to_name}
  onBlur={handleBlur}
  onChange={handleChange}
  type="text"
  id="fullWidth"
  className='rounded my-3'
  error = {touched.to_name && errors.to_name}
  helperText =  {touched.to_name && errors.to_name ? errors.to_name :null}
  />
 
  <TextField 
  sx={{background:'white',marginTop:"15px"}}
  fullWidth label="Email" 
  name="from_name"
  value={values.from_name}
  onBlur={handleBlur}
  onChange={handleChange}
  id="fullWidth"
  type="email"
  className='rounded my-3'
  error = {touched.from_name && errors.from_name}
  helperText =  {touched.from_name && errors.from_name ? errors.from_name :null} 
  />

<TextField 
  sx={{background:'white',marginTop:"15px"}}
  fullWidth label="Mobile No" 
  name="mob_no"
  value={values.mob_no}
  onBlur={handleBlur}
  onChange={handleChange}
  id="fullWidth"
  type="text"
  className='rounded my-3'
  error = {touched.mob_no && errors.mob_no}
  helperText =  {touched.mob_no && errors.mob_no ? errors.mob_no :null} 
  />
 
   <TextField 
    sx={{background:'white',marginTop:"15px"}}
  fullWidth label="Message" 
  name="message"
  value={values.message}
  onBlur={handleBlur}
  onChange={handleChange}
  id="fullWidth"
  type="text"
  className='rounded my-3'
  error = {touched.message && errors.message}
  helperText = {touched.message && errors.message ? errors.message :null} 
  />
  
 <Button type="submit" variant="contained" sx={{backgroundColor:"#FFD739",margin:"15px 0px",width:"100%",padding:"12px 0px"}}>
      Submit
 </Button>
                  </form>

  </Box>
  </>
}

export default Form