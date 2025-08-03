import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Layout from '../components/commonFile/Layout'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function CommonLayout() {
    return (
        <div className=''>
            <Navbar />
            <Outlet />

            <Footer />

        </div>
    )
}

export default CommonLayout