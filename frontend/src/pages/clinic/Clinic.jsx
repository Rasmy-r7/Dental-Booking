import React, { useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import './Clinic.scss';
import { IoMdStar } from 'react-icons/io';
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { VscSymbolColor } from "react-icons/vsc";
import { TbHeartHandshake } from "react-icons/tb";
import { HiOutlinePercentBadge } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";
import { FaChevronDown } from 'react-icons/fa';
import { TbStethoscope } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";
import DoctorImg from "../../assets/DoctorImg.jpg"

const teamData = [
    {
        name: "Dr. Asha Fernando",
        qualifications: "BDS, MFDS RCS Eng, GDC Reg. UK",
        image: DoctorImg,
        specialties: ["Dental Implants", "Cosmetic Dentistry", "Full Mouth Rehabilitations"],
        languages: ["English", "Sinhala"],
    },
    {
        name: "Dr. Kaveesha Perera",
        qualifications: "BDS, MSc Orthodontics",
        image: DoctorImg,
        specialties: ["Braces", "Invisalign", "Jaw Correction"],
        languages: ["English", "Sinhala", "Tamil"],
    },
    {
        name: "Dr. Harsha Silva",
        qualifications: "BDS, MDS Oral Surgery",
        image: DoctorImg,
        specialties: ["Wisdom Tooth Removal", "Oral Surgery"],
        languages: ["English"],
    },
    {
        name: "Dr. Nadeesha Gunawardena",
        qualifications: "BDS, MDS Periodontology, PhD (Japan)",
        image: DoctorImg,
        specialties: ["Gum Disease Treatment", "Laser Dentistry", "Dental Implants"],
        languages: ["English", "Sinhala"]
    }

];




function Clinic() {
    const { clinicId } = useParams();
    const location = useLocation();
    const clinic = location.state?.clinic;


    const [openIndex, setOpenIndex] = useState(null);

    const toggleCategory = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };




    if (!clinic) {
        return (
            <div className="clinic_error">
                <h2>Clinic not found</h2>
                <p>This clinic information is unavailable or the link is invalid.</p>
            </div>
        );
    }

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

                <div className="why_choose_us">
                    <p className="section_title">Why Choose Us?</p>
                    <div className="features_grid">
                        <div className="feature_card">
                            <GoPerson className="feature_icon" />
                            <div className="feature_content">
                                <p className="feature_title">Qualified Professionals</p>
                                <p className="feature_text">Our dentists are highly qualified, with international training and years of experience.</p>
                            </div>
                        </div>
                        <div className="feature_card">
                            <VscSymbolColor className="feature_icon" />
                            <div className="feature_content">
                                <p className="feature_title">State-of-the-Art Technology</p>
                                <p className="feature_text">We utilize the latest equipment, including 3D imaging and laser dentistry.</p>
                            </div>
                        </div>
                        <div className="feature_card">
                            <TbHeartHandshake className="feature_icon" />
                            <div className="feature_content">
                                <p className="feature_title">Uncompromised Hygiene</p>
                                <p className="feature_text">Adherence to strict international sterilization protocols.</p>
                            </div>
                        </div>
                        <div className="feature_card">
                            <HiOutlinePercentBadge className="feature_icon" />
                            <div className="feature_content">
                                <p className="feature_title">Transparent Pricing</p>
                                <p className="feature_text">Clear cost estimates and no hidden fees.</p>
                            </div>
                        </div>
                        <div className="feature_card">
                            <LuLanguages className="feature_icon" />
                            <div className="feature_content">
                                <p className="feature_title">Multilingual Staff</p>
                                <p className="feature_text">We speak English, Sinhala, Tamil, and German.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {clinic?.treatments?.length > 0 && (
                        <div className="clinic_treatments">
                            <h2 className="clinic_section_title">Treatments & Pricing</h2>
                            <div className="treatment_categories">
                                {clinic.treatments.map((category, index) => (
                                    <div className="treatment_category" key={index}>
                                        <div
                                            className={`category_title ${openIndex === index ? "open" : ""}`}
                                            onClick={() => toggleCategory(index)}
                                        >
                                            {category.title}

                                            <FaChevronDown className={`chevron_icon ${openIndex === index ? "rotated" : ""}`} />
                                        </div>
                                        {openIndex === index && (
                                            <div className="treatment_list">
                                                {category.treatments.map((item, i) => (
                                                    <div className="treatment_card" key={i}>
                                                        <p className="treatment_name">{item.name}</p>
                                                        <p className="treatment_price">
                                                            Rs. {item.price.toLocaleString()}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="clinic_team" id="team">
                    <p className="section_title">Our Team</p>

                    <div className="team_grid">
                        {teamData.map((member, index) => (
                            <div className="team_card" key={index}>
                                <div className="team_profile">
                                    <img src={member.image} alt={member.name} className="team_img" />
                                    <div className='dr_details'>
                                        <p className="team_name">{member.name}</p>
                                        <p className="team_qualifications">{member.qualifications}</p>
                                    </div>
                                </div>

                                <div className="team_specialties">
                                    <TbStethoscope className="team_icon" />
                                    <div>
                                        <p className="team_section_title">Specialties</p>
                                        {member.specialties.map((spec, i) => (
                                            <p key={i} className="team_text">{spec}</p>
                                        ))}
                                    </div>
                                </div>

                                <div className="team_languages">
                                    <MdLanguage className="team_icon" />
                                    <div>
                                        <p className="team_section_title">Languages</p>
                                        {member.languages.map((lang, i) => (
                                            <p key={i} className="team_text">{lang}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reviews_section">
                    <div className="reviews_header">
                        <p className="section_title">Reviews & Ratings</p>
                        <button className="review_btn">Write a Review</button>
                    </div>

                    <div className="reviews_overview">
                        <p className="average_rating">4.92</p>
                        <p className="rating_label">Patient Favorite</p>
                    </div>

                    <div className="reviews_filter">
                        <p className="review_count">247 reviews</p>
                        <select className="filter_select">
                            <option value="">Filter</option>
                        </select>
                    </div>

                    <div className='review_cards'>

                        <div className="review_card">
                            <div className="review_user">
                                <img src={DoctorImg} alt="Reviewer" className="review_user_img" />
                                <div>
                                    <p className="review_user_name">John Doe</p>
                                    <p className="review_user_location">Australia</p>
                                </div>
                            </div>
                            <div className="review_rating">
                                <ul className="stars">
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                </ul>
                                <p className="review_date">July 15, 2025</p>
                            </div>

                            <p className="review_text">
                                Came for a teeth whitening session. The results are fantastic, and the process was quick and painless. Saved so much compared to back home.
                            </p>
                            <p className="review_showmore">Show more</p>
                        </div>
                    </div>

                </div>



            </div>



        </div>
    );
}

export default Clinic;
