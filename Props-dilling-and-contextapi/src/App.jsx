import React from "react";
import { useState } from 'react'
import './App.css'
import CompA from './components/compA'
import ContextA from './components/ContextAPI/ContextA'
import Header from "./components/CounterApp/Header";
import Content from "./components/CounterApp/Content";

export const AppContext = React.createContext(null)
function App() {

  const [user, setUser] = useState({
    name: 'Gaurav'
  })
  const [count, setcount] = useState(0)
  function incr() {
    setcount(count + 1);
  }
  function decr() {
    setcount(count - 1);
  }
  function reset() {
    setcount(0);
  }
  function setData(user) {
    setUser(user)
  }
  let userObj = { user, count, incr, decr, reset, setData };
  return (
    <>
      <div className="container border bg-light w-25 p-5">
        <h6> Component Apps</h6>
        <h6> Name : {user.name}</h6>
        {/* <CompA user={user} and update={getData} /> */}
        <AppContext.Provider value={userObj}>
          {/* <ContextA /> */}
          <Header />
          <Content />
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App
