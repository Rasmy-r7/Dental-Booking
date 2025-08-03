import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.scss";
import CommonLayout from './views/CommonLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login/>}/>

          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App