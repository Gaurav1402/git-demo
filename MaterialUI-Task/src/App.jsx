import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'
import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import Tasks from './components/Tasks/Tasks';
import AddTask from './components/Tasks/Add-Task';
import OTPVerification from './components/d';

function App() {

  return (
    <>
      <OTPVerification />
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton ize="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              <Button color="inherit"><Link to="home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
              <Button color="inherit"><Link to="contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></Button>
              <Button color="inherit"><Link to="tasks" style={{ textDecoration: 'none', color: 'white' }}>tasks</Link></Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='/tasks/add-tasks' element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
