import React from 'react';
import { TbStethoscope } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { FaHeart } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import CardImg from "../../../assets/cardImage.jpg";

const appointmentsPast = [
    {
        id: "DGLP-805-67890",
        clinicName: "Lanka Pearl Dental Centre",
        treatment: "Dental Implants Consultation",
        doctor: "Dr. Asha Fernando",
        date: "Tuesday, August 5, 2025",
        time: "10:00 AM - 10:30 AM (SLST)",
        location: "15 Galle Road, Colombo 03",
        image: CardImg,
    },
    {
        id: "DGLP-805-12345",
        clinicName: "Colombo Smile Dental",
        treatment: "Root Canal Treatment",
        doctor: "Dr. Nuwan Perera",
        date: "Wednesday, August 6, 2025",
        time: "02:00 PM - 02:30 PM (SLST)",
        location: "22 Duplication Rd, Colombo 04",
        image: CardImg,
    },
    {
        id: "DGLP-805-67890",
        clinicName: "Lanka Pearl Dental Centre",
        treatment: "Dental Implants Consultation",
        doctor: "Dr. Asha Fernando",
        date: "Tuesday, August 5, 2025",
        time: "10:00 AM - 10:30 AM (SLST)",
        location: "15 Galle Road, Colombo 03",
        image: CardImg,
    },
    {
        id: "DGLP-805-12345",
        clinicName: "Colombo Smile Dental",
        treatment: "Root Canal Treatment",
        doctor: "Dr. Nuwan Perera",
        date: "Wednesday, August 6, 2025",
        time: "02:00 PM - 02:30 PM (SLST)",
        location: "22 Duplication Rd, Colombo 04",
        image: CardImg,
    },
];

function AppointmentUpcoming() {
    return (
        <div className="appointment_card_wrapper">
            {appointmentsPast.map((appointment, index) => (
                <div className="appointment_card" key={index}>
                    <div className="appointment_card_top">
                        <div className="appointment_image_wrapper">
                            <img src={appointment.image} alt="Clinic" className="appointment_img" />
                            <FaHeart className="favorite_icon" />
                        </div>

                        <div className="appointment_info">
                            <div className='id_name_type'>
                                <p className="appointment_id">{appointment.id}</p>
                                <p className="clinic_name">{appointment.clinicName}</p>
                                <p className="treatment_type">{appointment.treatment}</p>
                            </div>
                            <div className='name_date_time_location'>
                                <p className="doctor_name"><TbStethoscope /> {appointment.doctor}</p>
                                <p className="appointment_date"><LuCalendarDays /> {appointment.date}</p>
                                <p className="appointment_time"><FaRegClock /> {appointment.time}</p>
                                <p className="appointment_location"><IoLocationOutline /> {appointment.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="appointmentUp_actions">
                        <button className="btn">Reschedule</button>
                        <button className="btn">Add to Calendar</button>
                        <button className="btn">Cancel</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AppointmentUpcoming;
