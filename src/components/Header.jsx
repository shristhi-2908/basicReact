import React, { useState } from 'react'
import { RiEmpathizeFill } from "react-icons/ri";
import {Link,NavLink} from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <div className="ngo_header">
            <header className="d-flex flex-wrap  py-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" aria-hidden="true"><use xlinkHref="#bootstrap"></use></svg>
                    <h1 className="fs-4 charity header_name" style={{color:"#32403E"}}><RiEmpathizeFill className='icon'/>
Charityfy</h1> </Link>

<div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>&#9776;</div>
                <ul className={`nav_list ${isMenuOpen ? 'show' : ''}`}>
                    <li className="nav-item"><NavLink to="/" end  className={({isActive})=>`nav-link ${(isActive?"fw-bold text-success text-decoration-underline":"text-gray")}`}>Home</NavLink></li>
                    <li className="nav-item"><NavLink to="about" className={({isActive})=>`nav-link ${(isActive)?" fw-bold text-success text-decoration-underline":"text-gray"} `}>About</NavLink></li>
                    <li className="nav-item"><NavLink to="form"className={({isActive})=>`nav-link ${(isActive)?" fw-bold text-success text-decoration-underline":"text-gray"} `}>Form</NavLink></li>
                    <li className="nav-item"><NavLink to="contact" className={({isActive})=>`nav-link ${(isActive)?" fw-bold text-success text-decoration-underline":"gray"} `}>Contact</NavLink></li>
                    <li className="nav-item"><NavLink to="github" className={({isActive})=>`nav-link  ${(isActive)?" fw-bold text-success text-decoration-underline":"gray"} `}>Github</NavLink></li>
                     <li><button className='home-btn'>Start Giving!</button></li>                    
                </ul>
            </header>
        </div>
    )
}

export default Header
