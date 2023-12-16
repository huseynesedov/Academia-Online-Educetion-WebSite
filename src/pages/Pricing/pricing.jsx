import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import AOS from 'aos';
import { Helmet } from 'react-helmet';


import { FaAngleUp, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function App() {
    const [showWidget1, setShowWidget1] = useState(false);
    const [showWidget2, setShowWidget2] = useState(false);
    const [showWidget3, setShowWidget3] = useState(false);

    const handleShowWidget1 = () => {
        setShowWidget1(!showWidget1);
    };

    const handleShowWidget2 = () => {
        setShowWidget2(!showWidget2);
    };

    const handleShowWidget3 = () => {
        setShowWidget3(!showWidget3);
    };


    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Acadenmia-Pricing</title>
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
                                    Pricing <FaChevronRight />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Choose The Right Plan</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                        >
                            <div className="block-7">
                                <div className="text-center">
                                    <span className="excerpt d-block">Basic Plan</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">49K</span>
                                    </span>
                                    <div className="p-4 px-lg-5">
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-outline-primary d-block px-2 py-3"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={200}
                        >
                            <div className="block-7">
                                <div className="text-center">
                                    <span className="excerpt d-block">Beginner Plan</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">79K</span>
                                    </span>
                                    <div className="p-4 px-lg-5">
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-outline-primary d-block px-2 py-3"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={300}
                        >
                            <div className="block-7">
                                <div className="text-center">
                                    <span className="excerpt d-block">Premium Plan</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">109K</span>
                                    </span>
                                    <div className="p-4 px-lg-5">
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-outline-primary d-block px-2 py-3"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={400}
                        >
                            <div className="block-7">
                                <div className="text-center">
                                    <span className="excerpt d-block">Ultimate Plan</span>
                                    <span className="price">
                                        <sup>$</sup> <span className="number">149K</span>
                                    </span>
                                    <div className="p-4 px-lg-5">
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-outline-primary d-block px-2 py-3"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
            <div className="row justify-content-center pb-5">
                    <div
                        className="col-md-7 text-center heading-section"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <span className="subheading">FAQs</span>
                        <h2 className="mb-3">Frequesntly Ask Question</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8" data-aos="fade-up" data-aos-duration={1000}>
                        <div className="accordion" id="accordionExample1">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        onClick={handleShowWidget1}
                                        className={`accordion-button ${showWidget1 ? '' : 'collapsed'}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded={showWidget1 ? 'true' : 'false'}
                                        aria-controls="collapseOne"
                                    >
                                       How to Enroll This Online Courses?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className={`accordion-collapse collapse ${showWidget1 ? 'show' : ''}`}
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample1"
                                >
                                    <div className="accordion-body">
                                    This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8" data-aos="fade-up" data-aos-duration={1000}>
                        <div className="accordion" id="accordionExample2">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        onClick={handleShowWidget2}
                                        className={`accordion-button ${showWidget2 ? '' : 'collapsed'}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded={showWidget2 ? 'true' : 'false'}
                                        aria-controls="collapseTwo"
                                    >
                                       Where It is hidden by default, until the collapse?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className={`accordion-collapse collapse ${showWidget2 ? 'show' : ''}`}
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample2"
                                >
                                    <div className="accordion-body">
                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8" data-aos="fade-up" data-aos-duration={1000}>
                        <div className="accordion" id="accordionExample3">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        onClick={handleShowWidget3}
                                        className={`accordion-button ${showWidget3 ? '' : 'collapsed'}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded={showWidget3 ? 'true' : 'false'}
                                        aria-controls="collapseThree"
                                    >
                                       How It is hidden by default, until the collapse?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className={`accordion-collapse collapse ${showWidget3 ? 'show' : ''}`}
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample3"
                                >
                                    <div className="accordion-body">
                                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer></Footer>
        </>
    );
}
AOS.init();
export default App;
