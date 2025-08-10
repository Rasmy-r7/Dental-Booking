import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import './BookAppointment.scss';
import { IoIosArrowBack } from 'react-icons/io';
import DoctorImg from "../../../../assets/DoctorImg.jpg";
import { TbStethoscope } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";

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

function BookAppointment({ onClick, clinicName }) {
  const [chooesDr, setChooseDr] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [Country, setCountry] = useState("");
  const [message, setMessage] = useState("");



  const generateTimeSlots = (start = 9, end = 18) => {
    const slots = [];
    for (let hour = start; hour < end; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    slots.push(`${end}:00`);
    return slots;
  };

  const formatTime = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
  };

  const formatFullDate = (dateString) => {
    if (!dateString) return "";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleBack = () => {
    if (chooesDr) {
      setChooseDr(false);
    } else {
      setStep(prev => Math.max(1, prev - 1));
    }
  };

  const getNextHalfHour = (time) => {
    let [hour, minute] = time.split(":").map(Number);
    minute += 30;
    if (minute >= 60) {
      hour += 1;
      minute -= 60;
    }
    return `${hour}:${minute === 0 ? "00" : minute}`;
  };




  return (
    <div className="popup_card">
      <div className="popup_header">
        <div>
          {(step === 2 || step === 3 ||step === 4 || chooesDr) ? (
            <IoIosArrowBack
              onClick={() => {
                if (chooesDr) {
                  setChooseDr(false);
                } else {
                  setStep(prev => Math.max(1, prev - 1));
                }
              }}
            />
          ) : (
            <div></div>
          )}
        </div>
        <p className="popup_heading">Book Your Consultation</p>
        <IoClose className="close_icon" onClick={onClick} />
      </div>

      <div className="popup_body">
        {!chooesDr && step === 1 && (
          <div className='dr_form'>
            <p className="popup_intro">Choose Your Appointment Slot</p>

            <form className="popup_form">
              <label>Select Treatment</label>
              <select>
                <option value="">Treatment Type</option>
              </select>

              <label>Choose Your Date</label>
              <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
            </form>

            <div className="popup_doctor_section">
              <p>Choose Your Doctor</p>
              <button onClick={() => setChooseDr(true)}>Select Doctor</button>
            </div>

            {selectedDoctor && (
              <div className="selected_doctor_card">
                <div className="dr_profile">
                  <img src={selectedDoctor.image} alt={selectedDoctor.name} className="team_img" />
                  <div className="dr_detail">
                    <p className="dr_name">{selectedDoctor.name}</p>
                    <p className="dr_qualifications">{selectedDoctor.qualifications}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="popup_slot_info">
              <p>Select your time slots</p>
              {selectedDoctor ? (
                <div className='time_slot'>
                  {generateTimeSlots().map((slot, index) => (
                    <button
                      key={index}
                      className={`slot_btn ${selectedTime === slot ? "active" : ""}`}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {formatTime(slot)}
                    </button>
                  ))}
                </div>
              ) : (
                <p>Please select a doctor to view their available time slots.</p>
              )}
            </div>
          </div>
        )}

        {chooesDr && (
          <div className='dr_info'>
            <p className='popup_intro'>Select your doctor</p>
            <div className='dr_details'>
              {teamData.map((member, index) => (
                <div
                  className={`dr_card ${selectedDoctor?.name === member.name ? "selected" : ""}`}
                  key={index}
                  onClick={() =>
                    setSelectedDoctor(prev => prev?.name === member.name ? null : member)
                  }
                >
                  <div className="dr_profile">
                    <img src={member.image} alt={member.name} className="team_img" />
                    <div className='dr_detail'>
                      <p className="dr_name">{member.name}</p>
                      <p className="dr_qualifications">{member.qualifications}</p>
                    </div>
                  </div>
                  <div className="dr_specialties">
                    <TbStethoscope className="dr_icon" />
                    <div>
                      <p className="dr_section_title">Specialties</p>
                      {member.specialties.map((spec, i) => (
                        <p key={i} className="dr_text">{spec}</p>
                      ))}
                    </div>
                  </div>
                  <div className="dr_languages">
                    <MdLanguage className="dr_icon" />
                    <div>
                      <p className="dr_section_title">Languages</p>
                      {member.languages.map((lang, i) => (
                        <p key={i} className="dr_text">{lang}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && !chooesDr && (
          <div className="patient_info_form">
            <p className="popup_intro">Patient Information</p>
            <form className="popup_form">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
              <label>Age</label>
              <input
                type="number"
                placeholder="Age"
                required
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
              />
              <label>Nationality</label>
              <select required value={Country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select Nationality</option>
                <option value="Sri Lankan">Sri Lankan</option>
                <option value="Indian">Indian</option>
                <option value="Other">Other</option>
              </select>

              <label>Message</label>
              <textarea
                placeholder="Type your message here..."
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
              </textarea>
            </form>

          </div>
        )}

        {step === 3 && (
          <div className="appointment_summary">
            <p className="summary_title">Summary of Your Appointment</p>
            <div className="summary_details">
              <div className="summary_row">
                <p className="summary_label">Clinic</p>
                <p className="summary_value">: {clinicName}</p>
              </div>
              <div className="summary_row">
                <p className="summary_label">Date</p>
                <p className="summary_value">: {date ? formatFullDate(date) : "Not selected"}</p>
              </div>
              <div className="summary_row">
                <p className="summary_label">Time</p>
                <p className="summary_value">: {selectedTime ? `${formatTime(selectedTime)} - ${formatTime(getNextHalfHour(selectedTime))}` : "Not selected"}</p>
              </div>
              <div className="summary_row">
                <p className="summary_label">Patient Name</p>
                <p className="summary_value">: {patientName || "Not provided"}</p>
              </div>
              <div className="summary_row">
                <p className="summary_label">Country of Residence</p>
                <p className="summary_value">: {Country || "Not provided"}</p>
              </div>
            </div>
          </div>
        )}
         {step === 4 && (
          <div className="">
            <p className="">payment</p>
          </div>
        )}

      </div>

      <div className="popup_footer">
        {chooesDr ? (
          <div className="dr_choose_btn">
            <button className="back_choose" onClick={handleBack}>Back</button>
            <button className="next_choose" onClick={() => setChooseDr(false)} disabled={!selectedDoctor}>
              Next
            </button>
          </div>
        ) : step === 1 ? (
          <button
            className="next_step_btn"
            onClick={() => setStep(2)}
            disabled={!selectedDoctor || !selectedTime}
          >
            Next
          </button>
        ) : step === 2 || step === 3 ? (
          <div className="confirm_footer">
            <button className="back_choose" onClick={handleBack}>Back</button>
            <button className="submit_btn" onClick={() => setStep(step + 1)}>
              Next
            </button>
          </div>
        ) : null}
      </div>

    </div>
  );
}

export default BookAppointment;
