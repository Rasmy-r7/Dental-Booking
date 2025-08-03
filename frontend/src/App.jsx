import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.scss";
import CommonLayout from './views/CommonLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import Location from './pages/location/Location';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route element={<Landing />} />
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='location' element={<Location />} />

          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App