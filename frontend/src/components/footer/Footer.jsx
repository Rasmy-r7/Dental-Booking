import React from 'react';
import FooterImg from "../../assets/logoBlack.png";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_about">
          <img src={FooterImg} alt="Footer Logo" className="footer_logo" />
          <p className="footer_description">
            Your trusted gateway to quality dental care in Sri Lanka. Connecting you with top-rated clinics and experienced dentists for a healthier, brighter smile.
          </p>
          <div className="footer_contact">
            <IoCallOutline className="footer_icon" />
            <p className="footer_contact_text">+94 11 234 5678 (Mon-Fri, 9 AM - 5 PM SLST)</p>
          </div>
          <div className="footer_contact">
            <CiMail className="footer_icon" />
            <p className="footer_contact_text">support@bookdentist.lk</p>
          </div>
        </div>

        <div className="footer_links">
          <p className="footer_links_title">Quick Links</p>
          <ul className="footer_links_list">
            <li>Find a Clinic</li>
            <li>Locations</li>
            <li>Favorites</li>
            <li>Profile</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer_links">
          <p className="footer_links_title">Connect with Us</p>
          <ul className="footer_links_list">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div className="footer_bottom">
        <p className="footer_copy">© 2025 Book Dentist. All rights reserved.</p>
        <div className="footer_policies">
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Cancellation Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
