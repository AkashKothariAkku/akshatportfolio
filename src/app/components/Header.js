"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { HeaderData } from '../constant/HeaderData';

export const Header = () => {
    const [header, setHeader] = useState(0)
    const [menu, setMenu] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            console.log(window.scrollY);
            setHeader(window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    function changeMenu(){
        setMenu(!menu)
    }
  return (
    <header className={header===0 ? `tj-header-area header-absolute sticky-out` : `tj-header-area header-2 header-sticky sticky`}>
    <div className="container">
        <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">

                <div className="logo-box">
                    <Link href="/">
                        <img src="/img/logo/logo.png" alt="logo"/>
                    </Link>
                </div>

                <div className="header-info-list d-none d-md-inline-block">
                    <ul className="ul-reset">
                        <li><Link href="mailto:aksharma2299@gmail.com">aksharma2299@gmail.com</Link></li>
                    </ul>
                </div>

                <div className={menu ? `header-menu opened` : `header-menu`}>
                    <nav>
                    <ul>
                        {HeaderData.map((val, index)=>{
                            return <li key={`${index}`}><Link href={`#${val.url}`} onClick={changeMenu}>{val.name}</Link></li>
                        })}
                        </ul>
                    </nav>
                </div>

                 <div className="header-button">
                    <Link href="#contact-section" className="btn tj-btn-primary">Hire me!</Link>
                </div>

                <div className={`menu-bar d-lg-none ${menu ? "menu-bar-toggeled" : ""}`} onClick={changeMenu}>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}
