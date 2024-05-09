import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="tj-footer-area">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="footer-logo-box">
                    <Link href="#"><img src="/img/logo/logo.png" alt=""/></Link>
                </div>
                <div className="footer-menu">
                    <nav>
                        <ul>
                            <li><Link href="#services-section">Services</Link></li>
                            <li><Link href="#works-section">Works</Link></li>
                            {/* <li><Link href="#resume-section">Resume</Link></li> */}
                            <li><Link href="#skills-section">Skills</Link></li>
                            <li><Link href="#testimonials-section">Testimonials</Link></li>
                            <li><Link href="#contact-section">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="copy-text">
                    <p>&copy; 2024 All rights reserved by <Link href="#" target="_blank">Akshat Sharma</Link></p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
