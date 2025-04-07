
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Router, Route } from "react-router-dom"
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Users from './components/Users'
import Header from './components/Header'
import PageNotFound from './components/PageNotFound'
import Userdetail from './components/Userdetail'
import FlightsList from './components/FlightsList'
import Flights from './components/flights'
import Profile from './components/Profile'
import DashBoard from './components/DashBoard'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />}>
            <Route path='profile' element={<Profile />} />
            <Route path='dashboard' element={<DashBoard />} />
          </Route>
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='flights' element={<Flights />} />
          <Route path='flightslist' element={<FlightsList />} />
          <Route path='contactUs' element={<ContactUs />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<Userdetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes></BrowserRouter>
    </div>
  )
}

export default App
