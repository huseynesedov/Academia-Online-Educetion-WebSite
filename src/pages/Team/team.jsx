import React,{ useEffect, useState } from 'react';
import axios from 'axios';

import { FaTwitter, FaGooglePlusG, FaInstagram, FaFacebook, FaChevronRight } from "react-icons/fa";

import AOS from 'aos';
import { Helmet } from 'react-helmet';


import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

function team() {
    const [todos, setTodos] = useState({});


    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`https://academia-api.vercel.app/team`);
                setTodos(response.data)
            } catch (err) {
            }

        };
        fetchTodos();

    }, []);

    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Acadenmia-Team</title>
            </Helmet>
            <Navbar></Navbar>
            <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/academia/images/bg_2.jpg)' }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 pt-5 mt-5 text-center">
                            <p className="breadcrumbs">
                                <span className="me-2">
                                    <a href="index.html">
                                        Home <FaChevronRight />
                                    </a>
                                </span>{" "}
                                <span>
                                    Team <FaChevronRight />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Team</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">

                        {todos.length > 0 ?

                            todos.map((todo) => (

                                <div
                                    className="col-md-6 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-duration={1000}
                                    data-aos-delay={100}
                                >
                                    <div className="staff">
                                        <div
                                            className="img im"
                                            style={{ backgroundImage: `url(${todo.src})` }}
                                        >
                                            <ul className="ftco-social">
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-twitter" >
                                                            <FaTwitter />
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-facebook" >
                                                            <FaFacebook />
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-instagram" >
                                                            <FaInstagram />
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-google-plus" >
                                                            <FaGooglePlusG />
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="text">
                                            <h3>{todo.name}</h3>
                                            <span className="position">{todo.title}</span>
                                        </div>
                                    </div>
                                </div>
                            )) : null
                        }
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
AOS.init();

export default team;
