import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';
import { Helmet } from 'react-helmet';

import { FaArrowRightLong, FaComputer, FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegCalendarAlt, FaGraduationCap, FaRegFileCode, FaConnectdevelop, FaPalette, FaBullhorn , FaQuoteLeft,FaCommentDots,FaCalendarAlt} from "react-icons/fa";
import { GiChemicalTank, GiBookmarklet } from "react-icons/gi";
import { PiCertificateBold } from "react-icons/pi";
import { MdEngineering } from "react-icons/md";
import { SiAdobeacrobatreader } from "react-icons/si";
import { MdOutlineDesignServices, MdOutlineEngineering, MdOutlineManageAccounts, MdOutlineBusinessCenter } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoFitnessOutline } from "react-icons/io5"
import { GiMusicalNotes } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function home() {

    const settings = {
        dots: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Academia</title>
            </Helmet>
            <Navbar></Navbar>


            <section
                className="hero-wrap"
                style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/academia/images/bg_1.jpg.webp")' }}
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center">
                        <div className="col-lg-5">
                            <div
                                className="text mt-5 pt-5"
                                data-aos="fade-up"
                                data-aos-delay={300}
                                data-aos-duration={1000}
                            >
                                <span className="subheading">Welcome to Academia</span>
                                <h1 className="mb-4">Best Online Education Expertise </h1>
                                <p className="mb-4">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <p>
                                    <a href="#" className="btn btn-primary p-4 py-3">
                                        Get Started Now!{" "}
                                        <span className="ion-ios-arrow-round-forward" >
                                            <FaArrowRightLong></FaArrowRightLong>
                                        </span>
                                    </a>{" "}
                                    <a href="#" className="btn btn-white p-4 py-3">
                                        View Course <span className="ion-ios-arrow-round-forward" >
                                            <FaArrowRightLong></FaArrowRightLong>
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container-xl">
                    <div className="row g-xl-5">
                        <div
                            className="col-md-6 d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={100}
                            data-aos-duration={1000}
                        >
                            <div
                                className="img im w-100"
                                style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/about.jpg.webp)" }}
                            ></div>
                        </div>
                        <div
                            className="col-md-6 heading-section d-flex align-items-center"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={1000}
                        >
                            <div className="mt-0 my-lg-5 py-5">
                                <span className="subheading">Learn Anything</span>
                                <h2 className="mb-2">Benefits About Online Learning Expertise</h2>
                                <div className="row mt-4 g-lg-2">
                                    <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                                        <div className="services d-flex">
                                            <div className="icon">
                                                <span className="flaticon-online-learning" >
                                                    <GiBookmarklet />
                                                </span>
                                            </div>
                                            <div className="text">
                                                <h2>Online Courses</h2>
                                                <p className="mb-0">
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                                        <div className="services d-flex">
                                            <div className="icon">
                                                <span className="flaticon-certificate" >
                                                    <PiCertificateBold />
                                                </span>
                                            </div>
                                            <div className="text">
                                                <h2>Earn A Certificates</h2>
                                                <p className="mb-0">
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                                        <div className="services d-flex">
                                            <div className="icon">
                                                <span className="flaticon-scientist" >
                                                    <GiChemicalTank />
                                                </span>
                                            </div>
                                            <div className="text">
                                                <h2>Learn with Expert</h2>
                                                <p className="mb-0">
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section-counter im img" style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/bg_3.jpg)" }}>
                <div className="overlay" ></div>
                <div className="container">
                    <div className="row section-counter">
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div
                                className="counter-wrap-2 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={100}
                                data-aos-duration={1000}
                            >
                                <div className="icon">
                                    <span className="flaticon-graduation" >
                                        <FaGraduationCap />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2 className="number">
                                        <span className="countup">3000</span>
                                    </h2>
                                    <span className="caption">Success Stories</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div
                                className="counter-wrap-2 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={200}
                                data-aos-duration={1000}
                            >
                                <div className="icon">
                                    <span className="flaticon-scientist" >
                                        <GiChemicalTank />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2 className="number">
                                        <span className="countup">320</span>
                                    </h2>
                                    <span className="caption">Trusted Tutors</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div
                                className="counter-wrap-2 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={300}
                                data-aos-duration={1000}
                            >
                                <div className="icon">
                                    <span className="flaticon-calendar" >
                                        <FaRegCalendarAlt />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2 className="number">
                                        <span className="countup">1000</span>
                                    </h2>
                                    <span className="caption">Schedules</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div
                                className="counter-wrap-2 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={400}
                                data-aos-duration={1000}
                            >
                                <div className="icon">
                                    <span className="flaticon-learning" >
                                        <GiBookmarklet />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2 className="number">
                                        <span className="countup">587</span>
                                    </h2>
                                    <span className="caption">Courses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section courses-section ftco-no-pb">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div
                            className="col-md-10 text-center heading-section"
                            data-aos="fade-up"
                        >
                            <span className="subheading">Our Courses</span>
                            <h2 className="mb-5">Explore Our Popular Online Courses</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div
                            className="col-md-12"
                            data-aos="fade-up"
                            data-aos-delay={100}
                            data-aos-duration={1000}
                        >
                            <Slider {...settings}>



                                <div className="item">
                                    <div className="courses">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <span className="flaticon-engineer" >
                                                    <MdEngineering />
                                                </span>
                                            </div>
                                            <div className="text">
                                                <h2>Basic Fundamentals for Software Engineering</h2>
                                                <p className="rate">
                                                    ★★★★
                                                    <span>(4.0)</span>
                                                </p>
                                                <div className="author-wrap d-flex align-items-center">
                                                    <div
                                                        className="img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/author-1.jpg.webp)" }}
                                                    />
                                                    <span className="author">by John Smith</span>
                                                </div>
                                                <p className="lec">
                                                    <a href="#">50 lectures (190 hrs)</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center bg-light rounded py-2 my-3">
                                            <p className="course-price mb-0">
                                                <span>$100 All Course</span> / <span>$15 per month</span>
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <a
                                                href="#"
                                                className="btn d-block btn-primary btn-outline-primary py-3"
                                            >
                                                Enroll Now!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="courses">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <span className="flaticon-engineer" >
                                                    <SiAdobeacrobatreader />
                                                </span>
                                            </div>
                                            <div className="text">
                                                <h2>Enhancing Adobe Photoshop CC 2020 Skills</h2>
                                                <p className="rate">
                                                    ★★★★★
                                                    <span>(5.0)</span>
                                                </p>
                                                <div className="author-wrap d-flex align-items-center">
                                                    <div
                                                        className="img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/author-1.jpg.webp)" }}
                                                    />
                                                    <span className="author">by John Smith</span>
                                                </div>
                                                <p className="lec">
                                                    <a href="#">50 lectures (190 hrs)</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center bg-light rounded py-2 my-3">
                                            <p className="course-price mb-0">
                                                <span>$100 All Course</span> / <span>$15 per month</span>
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <a
                                                href="#"
                                                className="btn d-block btn-primary btn-outline-primary py-3"
                                            >
                                                Enroll Now!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="courses">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <span className="flaticon-engineer" >
                                                    <FaRegFileCode />

                                                </span>
                                            </div>
                                            <div className="text">
                                                <h2>HTML, CSS, and Javascript for Web Developers</h2>
                                                <p className="rate">
                                                    ★★★
                                                    <span>(3.0)</span>
                                                </p>
                                                <div className="author-wrap d-flex align-items-center">
                                                    <div
                                                        className="img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/author-1.jpg.webp)" }}
                                                    />
                                                    <span className="author">by John Smith</span>
                                                </div>
                                                <p className="lec">
                                                    <a href="#">50 lectures (190 hrs)</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center bg-light rounded py-2 my-3">
                                            <p className="course-price mb-0">
                                                <span>$100 All Course</span> / <span>$15 per month</span>
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <a
                                                href="#"
                                                className="btn d-block btn-primary btn-outline-primary py-3"
                                            >
                                                Enroll Now!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="courses">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <span className="flaticon-engineer" >
                                                    <FaConnectdevelop />
                                                </span>
                                            </div>
                                            <div className="text">
                                                <h2>Introducing to Programming with WordPress</h2>
                                                <p className="rate">
                                                    ★★★★
                                                    <span>(4.0)</span>
                                                </p>
                                                <div className="author-wrap d-flex align-items-center">
                                                    <div
                                                        className="img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/author-1.jpg.webp)" }}
                                                    />
                                                    <span className="author">by John Smith</span>
                                                </div>
                                                <p className="lec">
                                                    <a href="#">50 lectures (190 hrs)</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-center bg-light rounded py-2 my-3">
                                            <p className="course-price mb-0">
                                                <span>$100 All Course</span> / <span>$15 per month</span>
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <a
                                                href="#"
                                                className="btn d-block btn-primary btn-outline-primary py-3"
                                            >
                                                Enroll Now!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div
                            className="col-md-8 heading-section text-center mb-5"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <span className="subheading">Courses</span>
                            <h2 className="mb-4">Browse Our Online Courses</h2>
                        </div>
                    </div>
                    <div className="row g-lg-2 justify-content-center">
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={100}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-design" >
                                        <MdOutlineDesignServices />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>UI/UX Design Courses</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2 active">
                                <div className="icon">
                                    <span className="flaticon-paint-palette" >
                                        <FaPalette />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Art &amp; Design</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-computer-science" >
                                        <FaComputer />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Computer Science</h2>
                                    <span>10 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-magnifying-glass" >
                                        <FaMagnifyingGlass />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>History &amp; Archeologic</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-engineer" >
                                        <MdOutlineEngineering />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Software Engineering</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-algorithm" >
                                        <IoIosInformationCircleOutline />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Information Software</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={100}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-dumbbell" >
                                        <IoFitnessOutline />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Health &amp; Fitness</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-bullhorn" >
                                        <FaBullhorn />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Marketing</h2>
                                    <span>15 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-vector" >
                                        <MdOutlineDesignServices />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Graphic Design</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-musical-notes" >
                                        <GiMusicalNotes />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Music</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-calendar-1" >
                                        <MdOutlineBusinessCenter />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Business Administration</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-md-3 col-xl-2 text-center d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={400}
                            data-aos-duration={1000}
                        >
                            <a href="#" className="services-2">
                                <div className="icon">
                                    <span className="flaticon-coding" >
                                        <MdOutlineManageAccounts />
                                    </span>
                                </div>
                                <div className="text">
                                    <h2>Web Management</h2>
                                    <span>25 Courses</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section testimony-section bg-light">
                <div className="container-xl">
                    <div className="row justify-content-center pb-4">
                        <div
                            className="col-md-7 text-center heading-section"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <span className="subheading">Testimonial</span>
                            <h2 className="mb-5">Our Successful Students</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-12"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={100}
                        >
                            <div className="carousel-testimony">
                                <Slider {...settings}>
                                    <div className="item">
                                        <div className="testimony-wrap">
                                            <div className="text">
                                                <div className="d-flex align-items-center mb-4">
                                                    <div
                                                        className="user-img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/person_1.jpg.webp)" }}
                                                    >
                                                        <div className="icon d-flex align-items-center justify-content-center">
                                                            <span className="fa fa-quote-left" >
                                                                <FaQuoteLeft />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ps-3 tx">
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                                <p className="mb-4 msg">
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap">
                                            <div className="text">
                                                <div className="d-flex align-items-center mb-4">
                                                    <div
                                                        className="user-img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/person_2.jpg.webp)" }}
                                                    >
                                                        <div className="icon d-flex align-items-center justify-content-center">
                                                            <span className="fa fa-quote-left" >
                                                                <FaQuoteLeft />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ps-3 tx">
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                                <p className="mb-4 msg">
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap">
                                            <div className="text">
                                                <div className="d-flex align-items-center mb-4">
                                                    <div
                                                        className="user-img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/person_3.jpg.webp)" }}
                                                    >
                                                        <div className="icon d-flex align-items-center justify-content-center">
                                                            <span className="fa fa-quote-left" >
                                                                <FaQuoteLeft />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ps-3 tx">
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                                <p className="mb-4 msg">
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap">
                                            <div className="text">
                                                <div className="d-flex align-items-center mb-4">
                                                    <div
                                                        className="user-img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/person_1.jpg.webp)" }}
                                                    >
                                                        <div className="icon d-flex align-items-center justify-content-center">
                                                            <span className="fa fa-quote-left" >
                                                                <FaQuoteLeft />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ps-3 tx">
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                                <p className="mb-4 msg">
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimony-wrap">
                                            <div className="text">
                                                <div className="d-flex align-items-center mb-4">
                                                    <div
                                                        className="user-img"
                                                        style={{ backgroundImage: "url(https://preview.colorlib.com/theme/academia/images/person_2.jpg.webp)" }}
                                                    >
                                                        <div className="icon d-flex align-items-center justify-content-center">
                                                            <span className="fa fa-quote-left" >
                                                                <FaQuoteLeft />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="ps-3 tx">
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                                <p className="mb-4 msg">
                                                    Far far away, behind the word mountains, far from the
                                                    countries Vokalia and Consonantia, there live the blind
                                                    texts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section bg-light ftco-no-pt">
                <div className="container-xl">
                    <div className="row justify-content-center mb-5">
                        <div
                            className="col-md-7 heading-section text-center"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <span className="subheading">Our Blog</span>
                            <h2>Recent From Blog</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div
                                className="blog-entry justify-content-end"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                                data-aos-delay={100}
                            >
                                <a
                                    href="blog-single.html"
                                    className="block-20 img im"
                                    style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/academia/images/image_1.jpg.webp")' }}
                                ></a>
                                <div className="text">
                                    <p className="meta">
                                        <span>
                                        <RiAdminFill />
                                            Admin
                                        </span>{" "}
                                        <span>
                                        <FaCalendarAlt />
                                            Jan. 18, 2021
                                        </span>{" "}
                                        <span>
                                            <a href="#">
                                            <FaCommentDots /> 10 Comments
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
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div
                                className="blog-entry justify-content-end"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                                data-aos-delay={100}
                            >
                                <a
                                    href="blog-single.html"
                                    className="block-20 img im"
                                    style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/academia/images/image_2.jpg.webp")' }}
                                ></a>
                                <div className="text">
                                    <p className="meta">
                                        <span>
                                            <RiAdminFill />
                                            Admin
                                        </span>{" "}
                                        <span>
                                        <FaCalendarAlt />
                                            Jan. 12, 2023
                                        </span>{" "}
                                        <span>
                                            <a href="#">
                                            <FaCommentDots /> 6 Comments
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
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div
                                className="blog-entry justify-content-end"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                                data-aos-delay={100}
                            >
                                <a
                                    href="blog-single.html"
                                    className="block-20 img im"
                                    style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/academia/images/image_3.jpg.webp")' }}
                                ></a>
                                <div className="text">
                                    <p className="meta">
                                        <span>
                                        <RiAdminFill />
                                            Admin
                                        </span>{" "}
                                        <span>
                                        <FaCalendarAlt />
                                            Jan. 07, 2018
                                        </span>{" "}
                                        <span>
                                            <a href="#">
                                            <FaCommentDots /> 5 Comments
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
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-no-pt">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div
                            className="col-md-7 text-center heading-section"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                        >
                            <span className="subheading">Our Pricing</span>
                            <h2 className="mb-3">
                                Pricing &amp; <span>Packages</span>
                            </h2>
                        </div>
                    </div>
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


            <Footer></Footer>
        </>
    );
}

export default home;


