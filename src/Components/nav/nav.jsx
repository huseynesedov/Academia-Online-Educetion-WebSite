import React, { useState } from 'react';
import { FaRegClock, FaPhoneAlt, FaTwitter, FaFacebook, FaInstagram, } from "react-icons/fa";
import { IoMenu } from 'react-icons/io5';

import { Link } from 'react-router-dom';


function Navbar() {

   
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return (
        <>
            <div class="top-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-md col-xl-5 d-flex align-items-center">
                            <Link class="navbar-brand align-items-center" to='/' >
                                Academia
                                <span>Online Education &amp; Learning</span>
                            </Link>
                        </div>
                        <div class="col-md d-flex align-items-center">
                            <div class="con d-flex">
                                <div class="icon"><span class="flaticon-clock"><FaRegClock /></span></div>
                                <div class="text">
                                    <span>Monday - Friday</span>
                                    <strong>8:00AM-8:00PM</strong>
                                </div>
                            </div>
                        </div>
                        <div class="col-md d-flex align-items-center">
                            <div class="con d-flex">
                                <div class="icon"><span class="flaticon-telephone"><FaPhoneAlt /></span></div>
                                <div class="text">
                                    <span>Call Us</span>
                                    <strong>+2 392 3929 210</strong>
                                </div>
                            </div>
                        </div>
                        <div class="col-md d-flex justify-content-end align-items-center">
                            <div class="social-media">
                                <p class="mb-0 d-flex">
                                    <Link class="d-flex align-items-center justify-content-center">
                                        <span class="fa fa-facebook"><FaFacebook /></span>
                                    </Link>
                                    <Link class="d-flex align-items-center justify-content-center">
                                        <span class="fa fa-facebook"><FaTwitter /></span>
                                    </Link>
                                    <Link class="d-flex align-items-center justify-content-center">
                                        <span class="fa fa-instagram"><FaInstagram /></span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg  ftco-navbar-light">
                <div class="container-xl">
                    <a href="#" class="btn-custom order-lg-last">Get Certificate</a>
                    <button class="navbar-toggler  
                    collapsed" onClick={handleShowNavbar}
                    type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <IoMenu /> Menu
                    </button>
                    <div className={`collapse navbar-collapse ${showNavbar && 'show'}`} 
                    id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/Allcourses" >All Courses</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/About" >About</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/Team">Team</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/Pricing">Pricing</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/Journal">Journal</Link></li>
                            <li class="nav-item"><Link class="nav-link" to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;





