import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { useLocation, useParams } from 'react-router-dom';


function Treatments() {

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
        </div>)
}

export default Treatments