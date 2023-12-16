import React ,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';


import { FaCalendarAlt, FaChevronRight, FaCommentDots, FaUser } from 'react-icons/fa';

function Journal() {
    const [todos, setTodos] = useState({});


    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`https://academia-api.vercel.app/blog`);
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
                <title>Acadenmia-Journal</title>
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
                                    Blog <FaChevronRight />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Blog Posts</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container-xl">
                    <div className="row justify-content-center">


                        {todos.length > 0 ?

                            todos.map((todo) => (

                                <div className="col-md-6 col-lg-4 d-flex">
                                    <div
                                        className="blog-entry justify-content-end"
                                        data-aos="flip-right"
                                        data-aos-duration={1000}
                                        data-aos-delay={100}
                                    >
                                        <a
                                            href="blog-single.html"
                                            className="block-20 img im"
                                            style={{ backgroundImage: `url(${todo.src})` }}
                                        ></a>
                                        <div className="text">
                                            <p className="meta">
                                                <span>
                                                    <FaUser />
                                                    Admin
                                                </span>{" "}
                                                <span>
                                                    <FaCalendarAlt />
                                                    {todo.date}
                                                </span>{" "}
                                                <span>
                                                    <a href="#">
                                                        <FaCommentDots />{todo.comment}
                                                    </a>
                                                </span>
                                            </p>
                                            <h3 className="heading mb-3">
                                                <a href="#">
                                                    Build your Dream Software &amp; Engineering Career
                                                </a>
                                            </h3>
                                            <p>
                                                A small river named Duden flows by their place and supplies it
                                                with the necessary regelialia.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )) : null
                        }

                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    <li>
                                        <a href="#">&lt;</a>
                                    </li>
                                    <li className="active">
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">5</a>
                                    </li>
                                    <li>
                                        <a href="#">&gt;</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      
            <Footer></Footer>
        </>
    );
}

export default Journal;
