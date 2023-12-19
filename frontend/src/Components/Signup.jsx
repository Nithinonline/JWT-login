import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Signup() {
  const navigate=useNavigate()

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"" 
  })

//   const handleData=(e)=>{
//     const newData ={...formData}
//     newData[e.target.name] = e.target.value;
//     setFormData(newData)
//     console.log(newData)
//    }

const handleChange=(e)=>{
  setFormData((prev)=>({
    ...prev,
    [e.target.name]:e.target.value
  }))
}

const senderFunction=async()=>{
  const res=await axios.post("http://localhost:9000/demo/signup",{
    name:formData.name,
    email:formData.email,
    password:formData.password,
  }).catch((error)=>{
    console.log(error);
  });
  console.log(res)

  const data=await res.data;
  return data;
 }

const handleSubmit=(e)=>{
  e.preventDefault()
  senderFunction().then(()=>navigate("/login"))
}

  return (
    <div style={{marginTop:"100px"}}>Signup
    <form onSubmit={handleSubmit}>
      <Box 
      display="flex"
      flexDirection="column"
      marginLeft="auto"
      width="300px"
      marginRight="auto"
      justifyContent="center"
      alignItems="center">
        <Typography variant='h2'>Signup</Typography>
        <TextField
        name='name'
        type='text'
        variant='outlined'
        placeholder='Name'
        margin='normal'
        onChange={handleChange}
        />

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

        <Button variant='contained' type='submit'>Signup</Button>
      </Box>

    </form>
    </div>
  )
}

export default Signup