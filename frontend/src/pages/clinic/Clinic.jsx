import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import './Clinic.scss';
import { IoMdStar } from 'react-icons/io';
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Choose from './components/Choose';
import Treatments from './components/Treatments';
import Team from './components/Team';
import Reviews from './components/Reviews';


function Clinic() {

    // const { clinicId } = useParams();
    const location = useLocation();
    const clinic = location.state?.clinic;

    return (
        <div className="clinic_page">
            <div className="clinic_nav">
                <ul>
                    <li><NavLink to="#gallery" className="clinic_tab">Gallery</NavLink></li>
                    <li><NavLink to="#about" className="clinic_tab">About us</NavLink></li>
                    <li><NavLink to="#treatments" className="clinic_tab">Treatments & Pricing</NavLink></li>
                    <li><NavLink to="#team" className="clinic_tab">Our Team</NavLink></li>
                    <li><NavLink to="#reviews" className="clinic_tab">Reviews & Ratings</NavLink></li>
                </ul>
            </div>


            <div className="clinic_banner">
                <div className='Image_and_slider'>
                    <div className="clinic_banner_image">
                        <img className="clinic_img" src={clinic.image} alt={clinic.Pname} />
                    </div>

                    <div className='slider'>

                    </div>

                </div>
                <div className="clinic_banner_info">
                    <div className="clinic_banner_text">
                        <p className="clinic_banner_name">{clinic.Pname}</p>
                        <p className="clinic_banner_description">{clinic.description}</p>
                    </div>

                    <div className="clinic_contact_info">
                        <p className="clinic_contact_item"><IoLocationOutline /> {clinic.address}</p>
                        <p className="clinic_contact_item"><MdOutlineMail /> {clinic.email}</p>
                        <p className="clinic_contact_item"><IoMdStar /> {clinic.rating} / {clinic.reviews} Reviews</p>
                    </div>

                    <div className="clinic_opening_hours">
                        <p className="clinic_section_title">Opening Hours</p>
                        <div className="clinic_day_row">
                            <p className="clinic_day">Mon-Fri</p>
                            <p className="clinic_time">9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="clinic_day_row">
                            <p className="clinic_day">Saturday</p>
                            <p className="clinic_time">9:00 AM - 2:00 PM</p>
                        </div>
                        <div className="clinic_day_row">
                            <p className="clinic_day">Sunday</p>
                            <p className="clinic_time">Closed</p>
                        </div>
                    </div>
                    <div className='clinic_buttons'>
                        <button className="clinic_button primary_btn">
                            Book an Appointment
                        </button>

                        <button className="clinic_button secondary_btn">
                            Get a Personalized Quote
                        </button>
                    </div>

                </div>

            </div>

            <div className="clinic_details">
                <div className="about_section">
                    <p className="section_title">About us</p>
                    <p className="about_text">{clinic.about}</p>
                </div>

                <Choose />
                <Treatments />
                <Team />
                <Reviews />
            </div>
        </div>
    );
}

export default Clinic;
