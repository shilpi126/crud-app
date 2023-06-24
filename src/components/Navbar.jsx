import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/" style={{textDecoration:"none", color:"white"}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          >
          <HomeSharpIcon />
          </IconButton>
          </Link>
          </Typography>
        
          <Link to="/form" style={{ color:"white"}}>
          <Button color="inherit" >Create User</Button>
          </Link>
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default Navbar