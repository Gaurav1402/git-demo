import React from 'react'
import './App.css'
import CounterReducer from './components/CounterReducer'
import Productreducer from './components/Productreducer'
import ReducerProductList from './components/ReducerProductList'
function App() {

  return (
    <>


      <div className="container ">
        {/* <CounterReducer /> */}
        {/* <Productreducer /> */}
        <ReducerProductList />
      </div>

    </>
  )
}

export default App
