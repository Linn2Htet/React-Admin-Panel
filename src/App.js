import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'

import {
  PublicRoute,
  ProtectedRoute
} from "./Routes";

import MainLayout from './shared/MainLayout'
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Login from './pages/Login';

const App = () => {
  return (
    <div>

      <Routes>
          <PublicRoute path="/login" component={ <Login /> } />
          <ProtectedRoute path="/" component={ <MainLayout /> }  >
            <Route index element={ <Dashboard /> } />
            <Route path="users" element={ <User /> } />
          </ProtectedRoute>
      </Routes>

    </div>
  )
}

export default App