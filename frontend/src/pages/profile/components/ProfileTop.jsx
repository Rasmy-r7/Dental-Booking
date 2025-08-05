import React from 'react'
import profile from "../../../assets/profile.jpg";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function ProfileTop() {
    return (
        <div className="profile_top">
            <div className="profile_info">
                <img src={profile} alt="Profile" className="profile_img" />
                <p className="profile_name">AMM.Rasmy</p>
            </div>
            <div className='profile_contacts_btn'>
                <div className="profile_contacts">
                    <p className="profile_name">AMM.Rasmy</p>
                    <p className='contact_detail'><MdOutlineMail /> rasmy5741@gmail.com</p>
                    <p className='contact_detail'><IoCallOutline /> +94774363845</p>
                    <p className='contact_detail'><IoLocationOutline /> Sri Lanka</p>
                </div>
                <button className="edit_btn"><FiEdit /> Edit Profile</button>

            </div>

        </div>)
}

export default ProfileTop