
import './App.css'
// import Contact from './components/Contact'
// import Home from './components/Home'
// import Products from './components/products'
// import Tasks from './components/Tasks'
// import User from './components/User'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import './App.css'
import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom"
import Counter from './components/Callback/Counter'
import Age from './components/MemoDemo/Age'
import Users from './components/CustomHooks/Users'
import Form from './components/CustomHooks/Form'
import Search from './components/useRefHooks/Search'
import SearchProduct from './components/useRefHooks/SearchProduct'
import Demo from './components/ErrorBoundry/Demo'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'


function App() {
  // const Test=GetUser(User);
  return (
    <>
      {/* <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              <Button color="inherit"><Link to="home" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
              <Button color="inherit"><Link to="contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></Button>
              <Button color="inherit"><Link to="tasks" style={{ textDecoration: 'none', color: 'white' }}>Tasks</Link></Button>
              <Button color="inherit"><Link to="user" style={{ textDecoration: 'none', color: 'white' }}>User</Link></Button>
              <Button color="inherit"><Link to="products" style={{ textDecoration: 'none', color: 'white' }}>Products</Link></Button></Toolbar>
          </AppBar>
        </Box>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='user' element={<User />} />
          <Route path='products' element={<Products />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Test/> */}
      {/* <User/> */}
      {/* <Products/> */}
      {/* <Tasks /> */}
      {/* <Counter /> */}
      {/* <Age /> */}
      {/* <Users />
      <Form /> */}
      {/* <Search /> */}
      {/* <SearchProduct /> */}
      <ErrorBoundry>
        <Demo />
      </ErrorBoundry>
    </>
  )
}

export default App
