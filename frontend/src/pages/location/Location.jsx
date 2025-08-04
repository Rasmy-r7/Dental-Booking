import React, { useState } from 'react';
import './Location.scss';
import locationBg from '../../assets/clinicImg2.jpg';
import { FaChevronDown, FaHeart } from 'react-icons/fa';
import cardImage from '../../assets/cardImage.jpg';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';



const locationData = [
    {
        title: "Western Province",
        districts: [
            {
                name: "Colombo",
                count: 10,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "16 Galle Road, Colombo 03, Sri Lanka",
                        email: "info@smilezone.lk",
                        reviews: 247,
                        rating: 4.8,
                        about: "Smile Zone Clinic Dental Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {

                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "20 Galle Road, Colombo 03, Sri Lanka",
                        email: "info@everwhite.lk",
                        reviews: 227,
                        rating: 4.8,
                        about: "Everwhite Dental Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 3,
                        Pname: "Golden Tooth Clinic",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "35 Galle Road, Colombo 03, Sri Lanka",
                        email: "info@goldentooth.lk",
                        reviews: 207,
                        rating: 4.6,
                        about: "Golden Tooth Clinic Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 4,
                        Pname: "City Dental Clinic",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "50 Galle Road, Colombo 03, Sri Lanka",
                        email: "info@citydental.lk",
                        reviews: 247,
                        rating: 4.7,
                        about: "City Dental Clinic Dental Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 5,
                        Pname: "Bright Dental Centre",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "10 Galle Road, Colombo 03, Sri Lanka",
                        email: "info@brightdental.lk",
                        reviews: 147,
                        rating: 4.9,
                        about: "Bright Dental Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 6,
                        Pname: "Dental House",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "13 Galle Road, Colombo 03, Sri Lanka",
                        email: "info@dentalhouse.lk",
                        reviews: 117,
                        rating: 4.9,
                        about: "Dental House Dental Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 7,
                        Pname: "Everwhite Dental",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "10 Galle Road, Colombo 08, Sri Lanka",
                        email: "info@everwhitedental.lk",
                        reviews: 147,
                        rating: 4.7,
                        about: "Everwhite Dental Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 8,
                        Pname: "Smile Zone Clinic",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "10 Galle Road, Colombo 03, Sri Lanka",
                        email: "info@smilezone.lk",
                        reviews: 147,
                        rating: 4.8,
                        about: "Smile Zone Dental Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 9,
                        Pname: "City Dental Clinic",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "01 Galle Road, Colombo 05, Sri Lanka",
                        email: "info@citydental.lk",
                        reviews: 147,
                        rating: 4.7,
                        about: "City Dental Clinic Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    },
                    {
                        _id: 10,
                        Pname: "CityCare Dental",
                        location: "Colombo, Western Province",
                        description: "Your Smile, Our Priority – World-Class Dental Care in the Heart of Colombo",
                        address: "40 Galle Road, Colombo 12, Sri Lanka",
                        email: "info@citycare.lk",
                        reviews: 157,
                        rating: 4.8,
                        about: "CityCare Dental Centre is a leading dental clinic in Colombo, Sri Lanka, dedicated to providing exceptional dental care to both local and international patients. Established in 2005, we combine cutting-edge technology with a compassionate approach, ensuring a comfortable and effective treatment experience. Our mission is to make high-quality, affordable dental care accessible to everyone.",
                        image: cardImage,
                        treatments: [
                            {
                                title: "Implant Procedures",
                                treatments: [
                                    { name: "Single Tooth Implant", price: 60000 },
                                    { name: "All-on-4 Implants", price: 250000 },
                                ],
                            },
                            {
                                title: "Crowns/Veneers",
                                treatments: [
                                    { name: "Porcelain Crown", price: 15000 },
                                    { name: "Ceramic Veneer", price: 18000 },
                                ],
                            },
                            {
                                title: "Dentures",
                                treatments: [
                                    { name: "Complete Denture", price: 35000 },
                                    { name: "Partial Denture", price: 15000 },
                                ],
                            },
                            {
                                title: "Root Canal Treatment",
                                treatments: [
                                    { name: "Anterior Tooth", price: 10000 },
                                    { name: "Molar Tooth", price: 15000 },
                                ],
                            },
                            {
                                title: "Cleaning, Whitening, Filling & Extractions",
                                treatments: [
                                    { name: "Teeth Cleaning", price: 3000 },
                                    { name: "Teeth Whitening", price: 5000 },
                                    { name: "Tooth Filling", price: 2500 },
                                    { name: "Tooth Extraction", price: 3500 },
                                ],
                            },
                            {
                                title: "Diagnostics",
                                treatments: [
                                    { name: "X-Ray (Single)", price: 1500 },
                                    { name: "Full Mouth X-Ray", price: 5000 },
                                ],
                            },
                            {
                                title: "Other Procedures",
                                treatments: [
                                    { name: "Gum Surgery", price: 25000 },
                                    { name: "Mouth Guard", price: 8000 },
                                ],
                            },
                            {
                                title: "Orthodontics",
                                treatments: [
                                    { name: "Braces - Metal", price: 75000 },
                                    { name: "Clear Aligners (Invisalign)", price: 150000 },
                                ],
                            },
                        ]
                    }
                ]

            },
            {
                name: "Gampaha",
                count: 5,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Gampaha, Western Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Gampaha, Western Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 3,
                        Pname: "Golden Tooth Clinic",
                        location: "Gampaha, Western Province",
                        rating: 4.6,
                        image: cardImage
                    },
                    {
                        _id: 4,
                        Pname: "City Dental Clinic",
                        location: "Gampaha, Western Province",
                        rating: 4.7,
                        image: cardImage
                    },
                    {
                        _id: 5,
                        Pname: "Bright Dental Centre",
                        location: "Gampaha, Western Province",
                        rating: 4.9,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Kalutara",
                count: 3,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Kalutara, Western Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Kalutara, Western Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 3,
                        Pname: "Golden Tooth Clinic",
                        location: "Kalutara, Western Province",
                        rating: 4.6,
                        image: cardImage
                    },
                ]
            }
        ]
    },
    {
        title: "Central Province",
        districts: [
            {
                name: "Kandy",
                count: 5,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Kandy, Central Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Kandy, Central Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 3,
                        Pname: "Golden Tooth Clinic",
                        location: "Kandy, Central Province",
                        rating: 4.6,
                        image: cardImage
                    },
                    {
                        _id: 4,
                        Pname: "City Dental Clinic",
                        location: "Kandy, Central Province",
                        rating: 4.7,
                        image: cardImage
                    },
                    {
                        _id: 5,
                        Pname: "Bright Dental Centre",
                        location: "Kandy, Central Province",
                        rating: 4.9,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Matale",
                count: 2,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Matale, Central Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Matale, Central Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Nuwara Eliya",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Nuwara Eliya, Central Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            }
        ]
    },
    {
        title: "Southern Province",
        districts: [
            {
                name: "Galle",
                count: 3,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Galle, Southern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Galle, Southern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 3,
                        Pname: "Golden Tooth Clinic",
                        location: "Galle, Southern Province",
                        rating: 4.6,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Matara",
                count: 2,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Matara, Southern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Matara, Southern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Hambantota",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Hambantota, Southern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            }
        ]
    },
    {
        title: "Northern Province",
        districts: [
            {
                name: "Jaffna",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Jaffna, Northern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Kilinochchi",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Kilinochchi, Northern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Mannar",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Mannar, Northern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Vavuniya",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Vavuniya, Northern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Mullaitivu",
                count: 0,
                clinics: []
            }
        ]
    },
    {
        title: "Eastern Province",
        districts: [
            {
                name: "Trincomalee",
                count: 2,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Trincomalee, Eastern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Trincomalee, Eastern Province",
                        rating: 4.8,
                        image: cardImage
                    },

                ]
            },
            {
                name: "Batticaloa",
                count: 3,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Batticaloa, Eastern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Batticaloa, Eastern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 3,
                        Pname: "Golden Tooth Clinic",
                        location: "Batticaloa, Eastern Province",
                        rating: 4.6,
                        image: cardImage
                    },

                ]
            },
            {
                name: "Ampara",
                count: 2,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Ampara, Eastern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Ampara, Eastern Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            }
        ]
    },
    {
        title: "North Western Province",
        districts: [
            {
                name: "Kurunegala",
                count: 4,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Kurunegala, North Western Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Kurunegala, North Western Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 3,
                        Pname: "Golden Tooth Clinic",
                        location: "Kurunegala, North Western Province",
                        rating: 4.6,
                        image: cardImage
                    },
                    {
                        _id: 4,
                        Pname: "City Dental Clinic",
                        location: "Kurunegala, North Western Province",
                        rating: 4.7,
                        image: cardImage
                    },

                ]
            },
            {
                name: "Puttalam",
                count: 2,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Puttalam, North Western Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Puttalam, North Western Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            }
        ]
    },
    {
        title: "North Central Province",
        districts: [
            {
                name: "Anuradhapura",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Anuradhapura, North Central Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Polonnaruwa",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Polonnaruwa, North Central Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            }
        ]
    },
    {
        title: "Uva Province",
        districts: [
            {
                name: "Badulla",
                count: 2,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Badulla, Uva Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Badulla, Uva Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Monaragala",
                count: 1,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Monaragala, Uva Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            }
        ]
    },
    {
        title: "Sabaragamuwa Province",
        districts: [
            {
                name: "Ratnapura",
                count: 2,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Ratnapura, Sabaragamuwa Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Ratnapura, Sabaragamuwa Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            },
            {
                name: "Kegalle",
                count: 2,
                clinics: [
                    {
                        _id: 1,
                        Pname: "Smile Zone Clinic",
                        location: "Kegalle, Sabaragamuwa Province",
                        rating: 4.8,
                        image: cardImage
                    },
                    {
                        _id: 2,
                        Pname: "Everwhite Dental",
                        location: "Kegalle, Sabaragamuwa Province",
                        rating: 4.8,
                        image: cardImage
                    },
                ]
            }
        ]
    }
];

function Location() {
    const [openProvinceIndices, setOpenProvinceIndices] = useState([]);
    const [openDistricts, setOpenDistricts] = useState({});

    const toggleProvince = (index) => {
        if (openProvinceIndices.includes(index)) {
            setOpenProvinceIndices(openProvinceIndices.filter((i) => i !== index));
        } else {
            setOpenProvinceIndices([...openProvinceIndices, index]);
        }
    };

    const toggleDistrict = (provinceIndex, districtIndex) => {
        const key = `${provinceIndex}-${districtIndex}`;
        setOpenDistricts((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="location">
            <div
                className="location_hero"
                style={{ backgroundImage: `url(${locationBg})` }}
            >
                <div className="location_overlay">
                    <p className="location_title">Discover Dental Clinics Across Beautiful Sri Lanka</p>
                    <p className="location_subtitle">
                        Whether you're visiting for leisure or residing locally, find top-rated dental clinics conveniently located in every district of Sri Lanka. Click on a district to explore the quality dental care available in that region.
                    </p>
                </div>
            </div>

            <div className="location_province_list">
                {locationData.map((province, provinceIndex) => (
                    <div className="province_item" key={provinceIndex}>
                        <div
                            className="province_title"
                            onClick={() => toggleProvince(provinceIndex)}
                        >
                            <p>{province.title}</p>
                            <FaChevronDown
                                className={`dropdown_icon ${openProvinceIndices.includes(provinceIndex) ? 'rotate' : ''
                                    }`}
                            />
                        </div>

                        {openProvinceIndices.includes(provinceIndex) && (
                            <ul className="province_districts">
                                {province.districts.map((district, districtIndex) => {
                                    const key = `${provinceIndex}-${districtIndex}`;
                                    return (
                                        <li key={key}>
                                            <div
                                                className="district_title"
                                                onClick={() => toggleDistrict(provinceIndex, districtIndex)}
                                            >
                                                {district.name} ({district.count})
                                                <FaChevronDown
                                                    className={`dropdown_icon small ${openDistricts[key] ? 'rotate' : ''
                                                        }`}
                                                />
                                            </div>

                                            {openDistricts[key] && district.clinics.length > 0 && (
                                                <div className="clinic_cards">
                                                    {district.clinics.map((clinic, j) => (
                                                        <Link className="clinic_card" key={clinic._id} onClick={() => window.scrollTo(0, 0)} to={`/clinic/${clinic._id}`} state={{ clinic }}>
                                                            <div className="image_content">
                                                                <img
                                                                    src={clinic.image || cardImage}
                                                                    alt={clinic.Pname}
                                                                    className="clinic_card_image"
                                                                />
                                                                <FaHeart className="heart_icon" />

                                                            </div>
                                                            <div className="clinic_info">
                                                                <p className="clinic_name">{clinic.Pname}</p>
                                                                <div className="clinic_details">
                                                                    <p className="clinic_location">{clinic.location}</p>
                                                                    <p className="clinic_rating"><IoMdStar /> {clinic.rating}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Location;
