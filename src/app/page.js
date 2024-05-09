import Image from "next/image";
import { Preloader } from "./components/Preloader";
import Link from "next/link";
import { Header } from "./components/Header";
import { LeftContainer } from "./components/LeftContainer";
import { RightContainer } from "./components/RightContainer";
import { QualityServices } from "./components/QualityServices";
import { RecentWorks } from "./components/RecentWorks";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { ClientStories } from "./components/ClientStories";
import { AllBlogs } from "./components/AllBlogs";
import { Footer } from "./components/Footer";
import { Featuers } from "./components/Featuers";
import { RecentWorksDescription } from "./components/RecentWorksDescription";

export default function Home() {
  return (
    <>
     {/* <Preloader /> */}
     <Header />

    <main className="site-content" id="content">
        <section className="hero-section d-flex align-items-center" id="intro">
            <div className="intro_text">
                <svg viewBox="0 0 1320 300">
                    <text x="50%" Y="50%" text-anchor="middle">
                       MERN
                    </text>
                </svg>
            </div>
            <div className="container">
                <div className="row align-items-center">
                   <LeftContainer/>
                   <RightContainer />
                </div>

                <Featuers />
            </div>
        </section>

        <section className="services-section" id="services-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Quality Services</h2>
                            <p className=" wow fadeInUp" data-wow-delay=".4s">Providing top-notch MERN stack and Next.js development services for user-friendly and efficient web applications.</p>
                        </div>
                    </div>
                </div>

                < QualityServices />
            </div>
        </section>

        <div id="service-wrapper" className="popup_content_area zoom-anim-dialog mfp-hide">
            <div className="popup_modal_img">
                <img src="/img/services/modal-img.jpg" alt=""/>
            </div>

            <div className="popup_modal_content">
                <div className="service_details">
                    <div className="row">
                        <div className="col-lg-7 col-xl-8">
                            <div className="service_details_content">
                                <div className="service_info">
                                    <h6 className="subtitle">SERVICES</h6>
                                    <h2 className="title">UI/UX Design</h2>
                                    <div className="desc">
                                        <p>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst
                                            car
                                            boot a load of old tosh is cracking goal blow off telling brown.</p>

                                        <p>Brolly show off show off pick your nose and blow off well A bit of how’s your
                                            father tomfoolery blimey, me old mucker starkers Queen’s English dropped a
                                            clanger bite your arm spiffing good time burke Why chancer. Hotpot bum bag
                                            cracking goal young delinquent naff bugger cup of chars bender loo it’s all
                                            gone
                                            to pot the nancy cheeky.</p>

                                        <p>At public school cras bog some dodgy chav Richard Why argy bargy vagabon
                                            William
                                            bender matie boy, off his nut chancer Jeffrey up the kyver say mufty you mug
                                            ummm telling pear shaped Oxford owt to do with me do one so said are you
                                            taking
                                            his.</p>
                                    </div>

                                    <h3 className="title">Services Process</h3>
                                    <div className="desc">
                                        <p>Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst
                                            car
                                            boot a load of old tosh is cracking goal blow off telling brown.</p>
                                    </div>
                                    <ul>
                                        <li>Reinvent Your Business to Better</li>
                                        <li>Pioneering the Internet`s First</li>
                                        <li>Pioneering the Design World`s First</li>
                                        <li>Pioneering the Design World`s First</li>
                                        <li>Pioneering the Design World`s First</li>
                                        <li>Pioneering the Design World`s First</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="tj_main_sidebar">
                                <div className="sidebar_widget services_list">
                                    <div className="widget_title">
                                        <h3 className="title">All Services</h3>
                                    </div>
                                    <ul>
                                        <li className="active">
                                            <button>
                                                <i className="flaticon-design"></i>
                                                Branding Design
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <i className="flaticon-3d-movie"></i>
                                                3D Animation
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <i className="flaticon-ux-design"></i>
                                                UI/UX Design
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <i className="flaticon-web-design"></i>
                                                Web Design
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <i className="flaticon-ui-design"></i>
                                                App Design
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sidebar_widget contact_form">
                                    <div className="widget_title">
                                        <h3 className="title">Get in Touch</h3>
                                    </div>

                                    <form action="index.html">
                                        <div className="form_group">
                                            <input type="text" name="name" id="name" placeholder="Name"
                                                autocomplete="off" />
                                        </div>
                                        <div className="form_group">
                                            <input type="email" name="semail" id="semail" placeholder="Email"
                                                autocomplete="off" />
                                        </div>
                                        <div className="form_group">
                                            <textarea name="smessage" id="smessage" placeholder="Your message"
                                                autocomplete="off"></textarea>
                                        </div>
                                        <div className="form_btn">
                                            <button className="btn tj-btn-primary" type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="portfolio-section" id="works-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Recent Works</h2>
                            <p className=" wow fadeInUp" data-wow-delay=".4s">I have recently developed and deployed several web applications using the MERN stack and Next.js, focusing on responsive design and user experience.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                   <RecentWorks />
                </div>
            </div>
        </section>
        <div id="portfolio-wrapper" className="popup_content_area zoom-anim-dialog mfp-hide">
          <RecentWorksDescription />
        </div>

        <section className="resume-section" id="resume-section">
           <Experience />
        </section>

        <section className="skills-section" id="skills-section">
           <Skills />
        </section>

        <section className="testimonial-section" id="testimonials-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="section-header">
                            <h2 className="section-title wow fadeInLeft" data-wow-delay=".3s">My Team`s Stories</h2>
                            <p className=" wow fadeInLeft" data-wow-delay=".4s">When we work together on different projects, my team appreciates my dedication, collaboration, and contribution to achieving our goals.</p>
                        </div>
                    </div>

                    <div className="col-lg-7 col-xl-6 offset-xl-1">
                       <ClientStories />
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="blog-section" id="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">Recent Blogs</h2>
                            <p className=" wow fadeInUp" data-wow-delay=".4s">We put your ideas and thus your wishes in the
                                form of a unique web project that inspires
                                you
                                and you customers.</p>
                        </div>
                    </div>
                </div>
               <AllBlogs />
            </div>
        </section> */}

        <section className="contact-section" id="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 order-2 order-md-1">
                        <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                            <div className="section-header">
                                <h2 className="section-title">Let’s work together!</h2>
                                <p>I design and code beautifully simple things and i love what i do. Just simple like
                                    that!
                                </p>
                            </div>

                            <div className="tj-contact-form">
                                <form action="index.html">
                                    <div className="row gx-3">
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input type="text" name="fname" id="fname" placeholder="First name"
                                                    autocomplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input type="text" name="lname" id="lname" placeholder="Last name"
                                                    autocomplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input type="email" name="email" id="email" placeholder="Email address"
                                                    autocomplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form_group">
                                                <input type="tel" name="phone" id="phone" placeholder="Phone number"
                                                    autocomplete="off" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_group">
                                                <select name="service" id="service" className="tj-nice-select">
                                                    <option value="" selected disabled>Choose Service</option>
                                                    <option value="braning">Branding Design</option>
                                                    <option value="web">Web Design</option>
                                                    <option value="uxui">UI/UX Design</option>
                                                    <option value="app">App Design</option>
                                                    <option value="app">Web Development</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_group">
                                                <textarea name="message" id="message" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form_btn">
                                                <button type="submit" className="btn tj-btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 col-md-5  d-flex flex-wrap align-items-center  order-1 order-md-2">
                        <div className="contact-info-list">
                            <ul className="ul-reset">
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                    data-wow-delay=".4s">
                                    <div className="icon-box">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Phone</p>
                                        <Link href="tel:917239892448">+91 7239892448</Link>
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                    data-wow-delay=".5s">
                                    <div className="icon-box">
                                        <i className="flaticon-mail-inbox-app"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Email</p>
                                        <Link href="mailto:aksharma2299@gmail.com">aksharma2299@gmail.com</Link>
                                    </div>
                                </li>
                                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                    data-wow-delay=".6s">
                                    <div className="icon-box">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <div className="text-box">
                                        <p>Address</p>
                                        <Link href="#">Delhi, India</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

<Footer />

    </>
  );
}
