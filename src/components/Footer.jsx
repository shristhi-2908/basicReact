import React from 'react'
import { RiEmpathizeFill } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
    return (
        <div className='ngo_footer'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center border-top footer">
                <div className="d-flex align-items-center footer1">
                    <span className="mb-3 mb-md-0" style={{ fontSize: "3rem" }}><RiEmpathizeFill className='icon' />
                        Charityfy</span>
                    <h3>Kindness starts with you – give today</h3>
                </div>
                <hr />
                <div className="footer_item">
                    <div className="footer2">
                        <h4>Quick Links</h4>
                        <ul className='footer_list '>
                            <li>About Us</li>
                            <li>Volunteer Form</li>
                            <li>Contact Us</li>
                            <li>Get Involved</li>
                            <li>Donate</li>
                        </ul>
                    </div>

                    <div className="footer3">
                        < h4>Stay Connected</h4>
                        <ul className='footer_list '>
                            <li>hello@kindlys.org</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>

                        < h4>Visit</h4>
                        <ul className='footer_list '>
                            <li>123 Kindness Street, Hope City, HC 45678</li>
                        </ul>
                    </div>
                    <div className="footer4">
                        < h2>Follow Us</h2>
                        <ul className=' d-flex footer_list list-unstyled'>
                            <li><a className='social'><FaInstagram /></a></li>
                            <li><a className='social'>< FaFacebookF  /></a></li>
                            <li><a className='social'><FaLinkedinIn/></a></li>
                            <li><a className='social'><FaTwitter /></a></li>
                        </ul>
                  <span className='footer_email'><input type="email" className='email' placeholder='Enter your email to spread kindness' /> <FaArrowRight /></span>
                        </div>

                    </div>
            </footer>
        </div>
    )
}

export default Footer
