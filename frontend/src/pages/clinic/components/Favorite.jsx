import React from 'react'
import cardImage from '../../../assets/cardImage.jpg';
import { IoMdStar } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa6';


const favoritData = [
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

function Favorite() {
    return (
        <div className="favorites_tab">
            <p className="tab_title">Favorite</p>
            <div className="favorit_cards_main">
                {favoritData.map((favorit, index) => (
                    <div className="favorit_card" key={index}>
                        <div className="image_content">
                            <FaHeart className="heart_icon" />
                            <img src={favorit.image} alt="Clinic" className="favorit_card_image" />
                        </div>
                        <div className="favorit_card_info">
                            <p className="favorit_card_name">{favorit.name}</p>
                            <div className="favorit_card_details">
                                <p className="favorit_card_location">{favorit.location}</p>
                                <p className="favorit_card_rating">
                                    <IoMdStar className="favorit_card_rating_icon" />
                                    {favorit.rating}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorite