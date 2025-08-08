import React from 'react'
import Card from './Card'
import ngoImage from "../assets/charity3.jpg"
import handsImage from "../assets/ngo.png"
import { MdArrowForwardIos } from "react-icons/md";
import { TiTick } from "react-icons/ti";



function About() {
    return (
        <div>
            <div className="row py-lg-5" style={{ margin: "20px" }}>
                <div className="about-container">
                    <h1 className='ngo_heading'>About Us</h1>
                    <h5 style={{ color: "#868b8a" }}>Home <MdArrowForwardIos style={{ color: "#1c7a69ff" }} /> About Us</h5></div>
                <img src={ngoImage} alt="" srcSet="" style={{ width: "100%", height: "500px", objectFit: "cover" }} />

             <h5 style={{ color: "#07705C" }}>About Us</h5>
                <div className="about-content">
                    <div className="left-about">
                        <h1 className="ngo_heading">Driven by Compassion, Powered by People.</h1>
                        <button className='home-btn'>Learn More</button>
                        <p className='para'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean euismod, felis at suscipit scelerisque, purus sapien tempus justo, nec placerat libero magna in nisi. Integer eget lorem non odio posuere tincidunt. Donec sed lacus ut sapien suscipit facilisis vel nec nun</p>

                        <p className='para'>Duis eget sapien vel nunc varius tincidunt. Curabitur ac justo ut erat interdum pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                            Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>

                        <h3 className='para_title' >What We Do</h3>
                        <div className="paras">
                            <ul className='para'>
                                <p> <TiTick />Community Support</p>
                                <p> <TiTick />Hunger Relief</p>
                                <p> <TiTick />Education & Mentorship</p>
                                <p> <TiTick />Hunger Relief</p>
                            </ul>
                        </div>

                    </div>
          


                    <div className="right-about">
                        <div className="right-card" >
                            <div className="card-body" style={{ borderRadius: "15px" }}>
                                {/* <h5 className="card-title">Card title</h5> */}
                                <p className=""><b>10,000 Volunteers</b>, One Mission: Changing Lives Together!.</p>
                            </div>
                        </div>
                        <img src={handsImage} alt="" srcSet="" style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "15px" }} />
                    </div>
                    {/* <hr style={{width:"50%"}}/>  */}  
                </div>
            </div>
        </div>
    )
}

export default About
