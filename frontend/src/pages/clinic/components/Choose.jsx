import React from 'react'
import { GoPerson } from "react-icons/go";
import { VscSymbolColor } from "react-icons/vsc";
import { TbHeartHandshake } from "react-icons/tb";
import { HiOutlinePercentBadge } from "react-icons/hi2";
import { LuLanguages } from "react-icons/lu";


function Choose() {
    return (
        <div className="why_choose_us">
            <p className="section_title">Why Choose Us?</p>
            <div className="features_grid">
                <div className="feature_card">
                    <GoPerson className="feature_icon" />
                    <div className="feature_content">
                        <p className="feature_title">Qualified Professionals</p>
                        <p className="feature_text">Our dentists are highly qualified, with international training and years of experience.</p>
                    </div>
                </div>
                <div className="feature_card">
                    <VscSymbolColor className="feature_icon" />
                    <div className="feature_content">
                        <p className="feature_title">State-of-the-Art Technology</p>
                        <p className="feature_text">We utilize the latest equipment, including 3D imaging and laser dentistry.</p>
                    </div>
                </div>
                <div className="feature_card">
                    <TbHeartHandshake className="feature_icon" />
                    <div className="feature_content">
                        <p className="feature_title">Uncompromised Hygiene</p>
                        <p className="feature_text">Adherence to strict international sterilization protocols.</p>
                    </div>
                </div>
                <div className="feature_card">
                    <HiOutlinePercentBadge className="feature_icon" />
                    <div className="feature_content">
                        <p className="feature_title">Transparent Pricing</p>
                        <p className="feature_text">Clear cost estimates and no hidden fees.</p>
                    </div>
                </div>
                <div className="feature_card">
                    <LuLanguages className="feature_icon" />
                    <div className="feature_content">
                        <p className="feature_title">Multilingual Staff</p>
                        <p className="feature_text">We speak English, Sinhala, Tamil, and German.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose