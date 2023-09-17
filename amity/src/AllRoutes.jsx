
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashborad from './Components/Dashborad'
import Profile from './Components/Profile'
import Registration from './Components/Registration'
import Card from './Components/Card'



const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashborad/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/id" element={<Card/>}></Route>
      </Routes>
  )
}

export default AllRoutes