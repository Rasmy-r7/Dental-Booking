import React from 'react';
import Filter from '../../components/filter/Filter';
import cardImage from '../../assets/cardImage.jpg';
import { IoMdStar } from 'react-icons/io';
import { FaHeart } from "react-icons/fa";
import './Home.scss';

const clinicData = [
  {
    name: "Colombo Smile Dental & Aesthetics",
    location: "Colombo, Western Province",
    rating: 4.9,
    image: cardImage,
  },
  {
    name: "Pearl Dental Care",
    location: "Colombo 07",
    rating: 4.8,
    image: cardImage,
  },
  {
    name: "Smile Studio Lanka",
    location: "Nugegoda, Colombo",
    rating: 4.7,
    image: cardImage,
  },
  {
    name: "City Dental Clinic",
    location: "Bambalapitiya",
    rating: 4.6,
    image: cardImage,
  },
  {
    name: "Elegant Smiles",
    location: "Wellawatte",
    rating: 4.9,
    image: cardImage,
  },
  {
    name: "Dental House",
    location: "Rajagiriya",
    rating: 4.8,
    image: cardImage,
  },
  {
    name: "White Pearl Dental",
    location: "Mount Lavinia",
    rating: 4.7,
    image: cardImage,
  },
  {
    name: "CityCare Dental",
    location: "Kollupitiya",
    rating: 4.9,
    image: cardImage,
  },
  {
    name: "Smile Zone Clinic",
    location: "Battaramulla",
    rating: 4.6,
    image: cardImage,
  },
  {
    name: "Bright Dental Centre",
    location: "Nawala",
    rating: 4.7,
    image: cardImage,
  },
  {
    name: "Golden Tooth Clinic",
    location: "Dehiwala",
    rating: 4.8,
    image: cardImage,
  },
  {
    name: "Family Dental Hub",
    location: "Panadura",
    rating: 4.9,
    image: cardImage,
  }
];



function Home() {
  return (
    <div className="home">
      <Filter />

      <div className="home_content">
        <div className="home_heading">
          <p className="home_heading_title">Dental Clinics for "Dental Implants" in Colombo</p>
          <p className="home_heading_subtitle">Showing 25 out of 150 results</p>
        </div>
        <div className="clinic_cards_main">
          {clinicData.map((clinic, index) => (
            <div className="clinic_card" key={index}>
              <div className="image_content">
                <FaHeart className="heart_icon" />
                <img src={clinic.image} alt="Clinic" className="clinic_card_image" />
              </div>
              <div className="clinic_card_info">
                <p className="clinic_card_name">{clinic.name}</p>
                <div className="clinic_card_details">
                  <p className="clinic_card_location">{clinic.location}</p>
                  <p className="clinic_card_rating">
                    <IoMdStar className="clinic_card_rating_icon" />
                    {clinic.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
