import React from 'react'
import { IoMdStar } from 'react-icons/io'
import DoctorImg from "../../../assets/DoctorImg.jpg"


function Reviews() {
    return (
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

        </div>)
}

export default Reviews