"use client"
import React from 'react'
import { clientData } from '../constant/ClientData';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), { ssr: false });
export const ClientStories = () => {
  return (
    <div className="testimonials-widget wow fadeInRight" data-wow-delay=".5s">
  {(typeof window !== 'undefined') && <OwlCarousel
    className="owl-theme"
    loop
    items={2}
>
    {
        clientData.map((val,index)=>{
            return (
                <div className="testimonial-item" key={`${index}`}>
                <div className="top-area d-flex flex-wrap justify-content-between">
                    <div className="logo-box">
                        <img src={val.logo} alt="" style={{backgroundColor:"white", padding:"3px", borderRadius:"1px"}}/>
                    </div>
                    <div className="image-box">
                        <img src={val.image} alt=""/>
                    </div>
                </div>
                <div className="icon-box">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_588)" />
                        <defs>
                            <linearGradient id="paint0_linear_263_588" x1="-0.0363755"
                                y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="1" stop-color="var(--tj-theme-primary)" />
                                <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_589)" />
                        <defs>
                            <linearGradient id="paint0_linear_263_589" x1="-0.0363755"
                                y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="1" stop-color="var(--tj-theme-primary)" />
                                <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p className="quote">{val.statement}</p>
                <h4 className="name">{val.name}</h4>
                <span className="designation">{val.position}</span>
            </div>
            )
        })
    }
        </OwlCarousel>}
</div>
  )
}
