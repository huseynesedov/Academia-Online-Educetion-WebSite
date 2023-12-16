import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './footer.css'

import { FaPaperPlane, FaTwitter, FaFacebook, FaInstagram, FaCalendarAlt, FaUserAlt, FaMap, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {


    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('https://academia-api.vercel.app/home-blog');
                setTodos(response.data)
            } catch (err) {
                console.log(err);
            }
        };
        fetchTodos();
    }, []);

    return (

        <>
            <section className="ftco-intro py-5 bg-primarys">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10">
                            <div className="row g-lg-5">
                                <div className="col-md-7 text-lg-right">
                                    <h2 className="mb-0">Newsletter - Stay tune and get the latest update</h2>
                                    <p>Far far away, behind the word mountains</p>
                                </div>
                                <div className="col-md-5 border-left d-flex align-items-center">
                                    <form action="#" className="subscribe-form">
                                        <div className="form-group d-flex align-items-center">
                                            <input type="text" className="form-control" placeholder="Enter email address" />
                                            <Link className="btn-icon">
                                                <span>
                                                    <FaPaperPlane class="fa fa-paper-plane" />
                                                </span></Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="ftco-footer">
                <div className="container-xl">
                    <div className="row mb-5 justify-content-between">
                        <div className="col-md-6 col-lg">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2 logo d-flex">
                                    <a className="navbar-brand align-items-center" href="index.html">
                                        Academia
                                        <span>Online Education &amp; Learning</span>
                                    </a>
                                </h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </p>
                                <ul className="ftco-footer-social list-unstyled mt-2">
                                    <li><a href="#">
                                        <span>
                                            <FaTwitter />
                                        </span>
                                    </a></li>
                                    <li><a href="#">
                                        <span>
                                            <FaFacebook />
                                        </span>
                                    </a></li>
                                    <li><a href="#">
                                        <span>
                                            <FaInstagram />
                                        </span>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Explore</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />About Us</a></li>
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Services</a></li>
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Courses</a></li>
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Blog</a></li>
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Quick Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Contact Us</a>
                                    </li>
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Pricing</a></li>
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Terms &amp;Conditions</a></li>
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Privacy</a></li>
                                    <li><a href="#"><FaArrowRightLong className="ion ion-ios-arrow-round-forward me-2" />Feedbacks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Recent Posts</h2>
                                {todos.length > 0 ?

                                    todos.map((todo) => (
                                        <div className="block-21 mb-4 d-flex" key={todo.id}>
                                            <a className="blog-img img rounded">
                                                <img className='img' src={todo.src} />
                                            </a>
                                            <div className="text">
                                                <div className="meta">
                                                    <div><a href="#"><FaCalendarAlt className="fa fa-calendar" /> {todo.date}</a></div>
                                                    <div><a href="#"><FaUserAlt className="fa fa-user" /> Admin</a></div>
                                                </div>
                                                <h3 className="heading"><a href="#">Creativity and Inspiration</a></h3>
                                            </div>
                                        </div>

                                    )) : null
                                }
                            </div>
                        </div>
                        <div className="col-md-6 col-lg">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><FaMap className="icon fa fa-map marker" /><span className="text">203 Fake St. Mountain
                                            View, San Francisco, California, USA</span></li>
                                        <li><a href="#"><FaPhoneAlt className="icon fa fa-phone" /><span className="text">+2 392 3929
                                            210</span></a></li>
                                        <li><a href="#"><FaPaperPlane className="icon fa fa-paper-plane" /><span className="text"><span className="__cf_email__" data-cfemail="264f484049665f49535442494b474f480845494b">Itbrains@edu.az</span></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer