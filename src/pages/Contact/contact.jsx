import { Helmet } from 'react-helmet';

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import { FaChevronRight } from 'react-icons/fa';




function Contact() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Acadenmia-Contact</title>
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
                                    Contact <FaChevronRight />
                                </span>
                            </p>
                            <h1 className="mb-0 bread">Contact us</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row g-0">
                                    <div className="col-lg-6 order-lg-last">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3>Contact us</h3>
                                            <p className="mb-4">
                                                We're open for any suggestion or just to have a chat
                                            </p>
                                            <div className="row mb-4">
                                                <div className="col-md-4">
                                                    <div className="dbox w-100 d-flex align-items-start">
                                                        <div className="text">
                                                            <p>
                                                                <span>Address:</span> 198 West 21th Street, Suite 721
                                                                New York NY 10016
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="dbox w-100 d-flex align-items-start">
                                                        <div className="text">
                                                            <p>
                                                                <span>Email:</span>{" "}
                                                                <a href="/cdn-cgi/l/email-protection#91f8fff7fed1e8fee4e3e2f8e5f4bff2fefc">
                                                                    <span
                                                                        className="__cf_email__"
                                                                        data-cfemail="c0a9aea6af80b9afb5b2b3a9b4a5eea3afad"
                                                                    >
                                                                        itbrains@gmail.com
                                                                    </span>
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="dbox w-100 d-flex align-items-start">
                                                        <div className="text">
                                                            <p>
                                                                <span>Phone:</span>{" "}
                                                                <a href="tel://1234567920">+ 1235 2355 98</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form
                                                id="contactForm"
                                                name="contactForm"
                                                className="contactForm"
                                            >
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group form-grou">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="name"
                                                                id="name"
                                                                placeholder="Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Subject"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                name="message"
                                                                className="form-control"
                                                                id="message"
                                                                cols={30}
                                                                rows={4}
                                                                placeholder="Create a message here"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="submit"
                                                                defaultValue="Send Message"
                                                                className="btn btn-primary"
                                                            />
                                                            <div className="submitting" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-100 social-media mt-5">
                                                <h3>Follow us here</h3>
                                                <p>
                                                    <a href="#">Facebook</a>
                                                    <a href="#">Twitter</a>
                                                    <a href="#">Instagram</a>
                                                    <a href="#">Dribbble</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-stretch">
                                        <div id="map" className="bg-white">
                                            <div>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.42835065887!2d49.85134057559085!3d40.377198058045096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e0!3m2!1str!2saz!4v1702029636522!5m2!1str!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </div>
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

export default Contact;
