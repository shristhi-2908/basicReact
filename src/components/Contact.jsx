import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import ngoImage from "../assets/charity2.jpg"
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <div className="about-container">
              <h1 className='ngo_heading'>Contact Us</h1>
              <h5 style={{ color: "#868b8a" }}>Home <MdArrowForwardIos style={{ color: "#1c7a69ff" }} />Contact Us</h5>
            </div>
            <img src={ngoImage} alt="" srcSet="" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
      
            <h5 style={{ color: "#07705C", marginTop: "30px" }}>About Us</h5>
      
            <div className="contact-container">
              <h1 className="ngo_heading">Let’s Talk and Collaborate</h1>
              <p style={{ color: "#868b8a", fontSize: "20px" }}>Lorem ipsum dolor sit amebcst, consectetur adipiscing elit.<br /> Nulla facilisi. Aenean euismod, felis at suscipit scelerisque,<br /> purus sapien tempus justo nec placerat libero magna in .</p>
            </div>
      
            <div className="contact-source d-flex">
              <div className='d-flex'><a className='social'><IoIosCall /></a>
                <span><h3 className='para_title'>Contact Us</h3>
                  <p className='para'>+1 (555) 123-4567</p></span>
              </div>
              <div className='d-flex'><a className='social'><MdEmail /></a>
                <span><h3 className='para_title' >Send Us Email</h3>
                  <p className='para'>hello@kindlys.org</p></span>
              </div>
              <div className='d-flex'><a className='social'><FaLocationDot /></a>
                <span><h3 className='para_title'>Visit Us Now</h3>
                  <p className='para'>123 Kindness Street, Hope City, HC 456787</p></span>
              </div>
            </div>
            <hr />
      
            <div className="contact-content">
              <div className="location">
              </div>
              <div className="form-container">
                <form>
                    <label htmlFor="exampleInputEmail1" className="form-label"><h5 className="para_title">Your Name</h5></label>
                    <input type="text" className="form-control form-input" placeholder='James Parker' />
      
      <div className="formPart form input">
                     <span style={{width:"50%"}}><label htmlFor="exampleInputEmail1" className="form-label"><h5 className="para_title">Telephone</h5></label>
                    <input type="number" className="form-control form-input" placeholder='Telephone' /></span>
                     <span style={{width:"50%"}}><label htmlFor="exampleInputEmail1" className="form-label"><h5 className="para_title">Email</h5></label>
                    <input type="email" className="form-control form-input" placeholder='Email'/> </span>
                    </div>
                   
                    <label htmlFor="exampleInputEmail1" className="form-label"><h5 className="para_title">Subject</h5></label>
                    <input type="text" className="form-control form-input" placeholder='Your Subject' />
                  
                    <label htmlFor="exampleInputEmail1" className="form-label"><h5 className="para_title">Send Us Message</h5></label>
                    <textarea type="text" className="form-control " placeholder='Your Message' />
                  
                  <button type="submit" className="form-btn ">Send Us Message</button>
                </form>
              </div>
            </div>
    </div>
  )
}

export default Contact
