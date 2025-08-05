import React, { useState } from 'react'

import "./Navbar.scss"
import logoBlack from "../../assets/logoBlack.png"
import locationLogo from "../../assets/location_logo.png"
import { CiHeart, CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [filter, setFilter] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className='navbar'>
        <img src={logoBlack} alt="Logo" className="navbar_logo" />
        <div className='navbar_filters'>
          <select className="navbar_select">
            <option>Location</option>
          </select>
          <select className="navbar_select">
            <option>Treatment</option>
          </select>
          <select className="navbar_select">
            <option>Clinic</option>
          </select>
          <div className="search_icon">
            <CiSearch />
          </div>
        </div>
        <button className='location_btn' onClick={() => navigate("location")}>
          <img src={locationLogo} alt="" className='location_logo' />
          Locations
        </button>
        <div className="nav_search_box">
          <input type="text" placeholder="Search" className="nav_search_input" />
          <CiSearch className="nav_search_icon" />
        </div>

        <div className='menu_icon'>
          <CiSearch className="nav_search_icon" />
          <IoMenu onClick={() => { setFilter(prev => !prev); window.scrollTo(0, 0) }} />
        </div>

        <div className='Navbar_icon'>
          <CiHeart />
          <GrLanguage />
          <GoPerson onClick={() => navigate("profile")} />
        </div>

      </div>

      {filter && (
        <div className="mobile_menu">

          <div className='mobile_logo_close'>
            <img src={logoBlack} alt="Logo" className="navbar_logo" />
            <IoClose onClick={() => setFilter(false)} />
          </div>
          <div className='mobile_contant'>
            <div className="navbar_filters">
              <select className="navbar_select"><option>Location</option></select>
              <select className="navbar_select"><option>Treatment</option></select>
              <select className="navbar_select"><option>Clinic</option></select>
            </div>

            <button className="location_btn">
              <img src={locationLogo} alt="" className="location_logo" />
              Locations
            </button>

            <div className="Navbar_icon">
              <CiHeart />
              <GrLanguage />
              <GoPerson onClick={() => navigate("profile")} />
            </div>
          </div>

        </div>
      )}
    </>

  )
}

export default Navbar