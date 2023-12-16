

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import { FaRegCalendarAlt, FaGraduationCap, FaQuoteLeft,FaChevronRight} from "react-icons/fa";
import { GiChemicalTank, GiBookmarklet } from "react-icons/gi";
import { PiCertificateBold } from "react-icons/pi";

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from 'aos';
import { Helmet } from 'react-helmet';



function about() {

    const settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1200,
    };

    return (
        <>
            <Navbar></Navbar>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Acadenmia-About</title>
            </Helmet>

            <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/academia/images/bg_2.jpg.webp")' }}
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
                  About us <FaChevronRight />
                </span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
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
            


            <Footer></Footer>
        </>
    );
}
AOS.init();
export default about;


