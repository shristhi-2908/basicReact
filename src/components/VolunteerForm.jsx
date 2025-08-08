import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import volunteerImage from "../assets/donation.webp"


function VolunteerForm() {
  return (
    <div>
      <div className="about-container">
        <h1 className='ngo_heading'>About Us</h1>
        <h5 style={{ color: "#868b8a" }}>Home <MdArrowForwardIos style={{ color: "#1c7a69ff" }} />Form</h5>
        </div>

          <img src={volunteerImage} alt="" srcSet="" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        

      <div className="volunteer-form">
        <h1 className="ngo_heading">Volunteer Form</h1>
        <div className="form-container">
          <form>
            <label htmlFor="exampleInputEmail1" className="form-label"><h5 className="para_title">Your Name</h5></label>
            <input type="text" className="form-control form-input" placeholder='James Parker' />

            <div className="formPart form input">
              <span style={{ width: "50%" }}><label htmlFor="exampleInputEmail1" className="form-label"><h5 className="para_title">Telephone</h5></label>
                <input type="number" className="form-control form-input" placeholder='Telephone' /></span>
              <span style={{ width: "50%" }}><label htmlFor="exampleInputEmail1" className="form-label"><h5 className="para_title">Email</h5></label>
                <input type="email" className="form-control form-input" placeholder='Email' /> </span>
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

export default VolunteerForm
