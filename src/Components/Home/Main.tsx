import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from '../Authentication/Login/Login';
import { AuthProvider } from '../Contexts/Auth';
import PrivateRoute from '../Contexts/PrivateRoute';
import AdminDashboard from '../Admin/Dashboard/AdminDashboard';
import ClientDashboard from '../Client/ClientDashboard';


const Main:React.FC = () => {
    return (
      <>
        <AuthProvider>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/admin-dashboard' element={<PrivateRoute staff={<AdminDashboard />} />} />
              <Route path='/client-dashboard' element={<PrivateRoute client={<ClientDashboard />} />} />
          </Routes>
        </AuthProvider>
      </>
    )
  }

export default Main;