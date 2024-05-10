import Link from 'next/link'
import React from 'react'
import { socialIcons } from '../constant/HeaderData'

export const LeftContainer = () => {
  return (
    <div className="col-md-6">
    <div className="hero-content-box">
        <span className="hero-sub-title wow fadeInLeft" data-wow-delay="1.1s">I am Akshat</span>
        <h1 className="hero-title wow fadeInLeft" data-wow-delay="1.2s">Full Stack Developer +<br />Next Developer
        </h1>

        <div className="hero-image-box d-md-none text-center wow fadeInRight" data-wow-delay="1.3s">
            <img src="/img/hero/akprofile.jpeg" alt=""/>
        </div>

        <p className="lead wow fadeInLeft" data-wow-delay="1.4s">Skilled developer experienced in MERN stack and Next.js, creating efficient web apps for great user experiences.</p>
        <div className="button-box d-flex flex-wrap align-items-center">
            {/* <Link href="../assets/img/portfolio/akashResume.pdf" target="_blank" className="btn tj-btn-secondary wow fadeInLeft" data-wow-delay="1.5s" download>Download
                Resume</Link> */}
            {/* <ul className="ul-reset social-icons wow fadeInLeft" data-wow-delay="1.6s">
                {socialIcons.map((e, index)=>{
                    return <li key={`${index}`}><Link href={e.link} target='_blank'><i className={e.className}></i></Link></li>
                })}
            </ul> */}
        </div>
    </div>
</div>
  )
}
