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
import Contact from './Components/COntact';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import EditTask from './Components/EditTask';

function App() {

  return (
    <>
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
              <Button color="inherit"><Link to="tasks" style={{ textDecoration: 'none', color: 'white' }}>Tasks</Link></Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='tasks/addtask' element={<AddTask />} />
          <Route path='tasks/edittask/:id' element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
