import React from 'react'
import SignUp from './Pages/SignUp'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import OAuth from './Components/OAuth'
const App = () => {
  return (
    <Routes>
       <Route path="/" element={<SignUp />} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App