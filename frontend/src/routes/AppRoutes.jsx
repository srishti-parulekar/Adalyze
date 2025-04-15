import React from 'react'
import { Route, Routes} from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<LandingPage/>} />
    </Routes>
  )
}

export default AppRoutes