import { useState } from 'react'
import './App.css'
import AutoIncrement from './components/Autoincreament'
import SignUp from './components/SignUp'
function App() {


  return (
    <>
      <div>
        {/* <AutoIncrement /> */}
        <SignUp />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
