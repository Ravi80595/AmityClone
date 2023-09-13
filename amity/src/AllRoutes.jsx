
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashborad from './Components/Dashborad'
import Profile from './Components/Profile'



const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashborad/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>

      </Routes>
  )
}

export default AllRoutes