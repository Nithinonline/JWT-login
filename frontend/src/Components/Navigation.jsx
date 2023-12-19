import React, { useState } from 'react'
import { AppBar, Box, Tabs, Toolbar, Typography, Tab } from "@mui/material"

import { Outlet,Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navigation = () => {
const isLoggedIn=useSelector((state)=>state.isLoggedIn)
    const [value,setValue]=useState()
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h4'>JWT</Typography>
                <Box sx={{ marginLeft: "auto"}}>
                    <Tabs textColor='inherit' onChange={(e,val)=>setValue(val)} value={value}>
                        <Tab label="Login" LinkComponent={Link} to="/login"/>
                        <Tab label="Signup"LinkComponent={Link} to="/signup"/>
                        {isLoggedIn && <Tab to="/login" label="Logout"></Tab> }
                        
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    <Outlet/>
        
    </div>
  )
}

export default Navigation