import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';
import { FaComputer, FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegFileCode, FaConnectdevelop, FaPalette, FaBullhorn, FaChevronRight } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { SiAdobeacrobatreader } from "react-icons/si";
import { MdOutlineDesignServices, MdOutlineEngineering, MdOutlineManageAccounts, MdOutlineBusinessCenter } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoFitnessOutline } from "react-icons/io5"
import { GiMusicalNotes } from "react-icons/gi";

import AOS from 'aos';
import { Helmet } from 'react-helmet';


function Course() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Acadenmia-All Course</title>
      </Helmet>

      <Navbar></Navbar>


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
                  Courses <FaChevronRight />
                </span>
              </p>
              <h1 className="mb-0 bread">Explore Courses</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section courses-section">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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
            <div
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="courses course">
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


      <Footer></Footer>


    </>
  );
}
AOS.init();

export default Course;


