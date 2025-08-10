import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { getCountries, getCountryCallingCode } from 'react-phone-number-input'
import en from 'react-phone-number-input/locale/en.json';
import { FaCircleCheck } from "react-icons/fa6";

import "./Login.scss"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [country, setCountry] = useState('LK')
  const [otp, setOtp] = useState(false)
  const [phone, setPhone] = useState('')
  const [success, setSuccess] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [otpInput, setOtpInput] = useState('');

  const countries = getCountries()

  const navigate = useNavigate()

  const handleContinue = (e) => {
    e.preventDefault();
    if (signUp) {
      // call api
      setSuccess(true)
    } else if (phone) {
      setOtp(true)
    }
  }

  const handleBack = () => {
    setOtp(false)
  }

  const handleVerify = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <div className="login">
      {success ? (
        <div className="success_message">
          <FaCircleCheck className="success_icon" />
          <p className="success_title">Login Successful!</p>
          <p className="success_text">
            Welcome back! Redirecting you to your account dashboard...
          </p>
        </div>
      ) : (
        <div className="login_container">
          <div className="login_header">
            {otp && !signUp ? (
              <IoIosArrowBack className="back_icon" onClick={handleBack} />
            ) : (
              <div>

              </div>
            )}
            <p className="login_title">Login or Sign up</p>
            <IoClose className="close_icon" onClick={() => navigate("/")} />
          </div>

          <div className="login_body">
            {!otp ? (
              <p className="login_welcome">Welcome to Book Dentist</p>
            ) : (
              <p className="otp_number">A 6-digit code has been sent to {phone}</p>
            )}
            {signUp && (
              <p className='otp_number'>It looks like you're new here. Just a few more details to create your account.</p>
            )}

            <form
              className="login_form"
              onSubmit={otp && !signUp ? handleVerify : handleContinue}
            >
              {signUp ? (
                <>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />

                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className='login_note'>By selecting Complete Sign Up, you agree to the [Terms & Conditions] and [Privacy Policy].</p>

                  <button type="submit" className="login_continue_btn" >
                    Complete Sign Up
                  </button>
                </>
              ) : (
                <>
                  {!otp ? (
                    <>
                      <label htmlFor="countryCode">Country Code</label>
                      <select
                        id="countryCode"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        {countries.map((c) => (
                          <option key={c} value={c}>
                            {en[c]} (+{getCountryCallingCode(c)})
                          </option>
                        ))}
                      </select>

                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />

                      <p className="login_note">
                        We'll send a one-time verification code (OTP) to your phone.
                      </p>

                      <button type="submit" className="login_continue_btn">
                        Continue
                      </button>
                    </>
                  ) : (
                    <>
                      <label htmlFor="otp">OTP</label>
                      <input
                        type="text"
                        id="otp"
                        value={otpInput}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d{0,6}$/.test(val)) setOtpInput(val);
                        }}
                        maxLength={6}
                        placeholder="Enter the OTP you received"
                        required
                      />

                      <div className="resent_Verify">
                        <button type="button" className="resent_btn">
                          Resend Code
                        </button>
                        <button type="submit" className="veryfy_btn">
                          Verify & Proceed
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </form>


            {!otp && (
              <p className="toggle_account">
                {signUp ? "Already have an account?" : "Don't have an account?"}
                <span
                  className="toggle_link"
                  onClick={() => {
                    setSignUp(!signUp);
                    setOtp(false);
                    setPhone('');
                    setFullName('');
                    setEmail('');
                    setOtpInput('');
                  }}
                >
                  {signUp ? " Log in" : " Sign up"}
                </span>
              </p>
            )}

            {!otp && !signUp && (
              <>
                <div className="login_divider">
                  <hr />
                  <p>Or, log in with</p>
                  <hr />
                </div>

                <button className="login_google_btn">
                  <FcGoogle />
                  Continue with Google
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );

}

export default Login;
