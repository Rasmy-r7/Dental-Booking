import React, { useState } from 'react';
import "./Profile.scss";
import { IoMdCheckmark } from "react-icons/io";
import AppointmentUpcoming from './components/AppointmentUpcoming';
import ProfileTop from './components/ProfileTop';
import AppointmentPast from './components/AppointmentPast';
import Favorite from '../clinic/components/Favorite';

function Profile() {
    const [activeTab, setActiveTab] = useState("appointments");
    const [appointmentTab, setAppointmentTab] = useState("upcoming");

    return (
        <div className="profile_container">
            <ProfileTop />

            <div className="profile_content">
                <div className="tab_nav">
                    <button
                        className={activeTab === "appointments" ? "active" : ""}
                        onClick={() => setActiveTab("appointments")}
                    >
                        Appointments
                    </button>
                    <button
                        className={activeTab === "favorites" ? "active" : ""}
                        onClick={() => setActiveTab("favorites")}
                    >
                        Favorites
                    </button>
                </div>

                <div className="tab_content">
                    {activeTab === "appointments" && (
                        <div className="appointments_tab">
                            <div className="appointment_filters">
                                <p className="tab_title">Appointments</p>

                                <div className='filter_btn'>
                                    <button
                                        className={appointmentTab === "upcoming" ? "selected" : ""}
                                        onClick={() => setAppointmentTab("upcoming")}
                                    >
                                        <IoMdCheckmark className={appointmentTab === "upcoming" ? "show" : ""} />
                                        Upcoming
                                    </button>
                                    <button
                                        className={appointmentTab === "past" ? "selected" : ""}
                                        onClick={() => setAppointmentTab("past")}
                                    >
                                        <IoMdCheckmark className={appointmentTab === "past" ? "show" : ""} />
                                        Past
                                    </button>

                                </div>

                            </div>
                            <div className="appointment_list">
                                {appointmentTab === "upcoming" ? (
                                    <AppointmentUpcoming />
                                ) : (
                                    <AppointmentPast />
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === "favorites" && (
                        <Favorite />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
