import React from 'react'
import { TbStethoscope } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";
import DoctorImg from "../../../assets/DoctorImg.jpg"


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

function Team() {
    return (
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
        </div>)
}

export default Team