import React,{ useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Login() {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    
    email:"",
    password:"" 
  })


  const handleChange=(e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }



  const senderFunction=async()=>{
    const res=await axios.post("http://localhost:9000/demo/login",{
     
      email:formData.email,
      password:formData.password,
    }).catch((error)=>{
      console.log(error);
    });
    console.log(res)
  
    const data=await res.data;
    console.log(data);
  
}
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    senderFunction().then(()=>navigate("/home"))
  }
  return (
    <div style={{marginTop:"100px"}}>
    

    <form onSubmit={handleSubmit}>
      <Box 
      display="flex"
      flexDirection="column"
      marginLeft="auto"
      width="300px"
      marginRight="auto"
      justifyContent="center"
      alignItems="center">
        <Typography variant='h2'>Login</Typography>
       

<TextField
        name='email'
        type='email'
        variant='outlined'
        placeholder='Email'
        margin='normal'
        onChange={handleChange}
    
        />

<TextField
        name='password'
        type='password'
        variant='outlined'
        placeholder='Password'
        margin='normal'
        onChange={handleChange}
        />

        <Button variant='contained' type='submit'>Login</Button>
      </Box>

    </form>
    
    
    
    
    </div>

  )
}

export default Login