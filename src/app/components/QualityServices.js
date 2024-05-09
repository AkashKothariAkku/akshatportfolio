"use client"
import React, { useState } from 'react'
import { qualityData } from '../constant/qualityData'

export const QualityServices = () => {
    const [active, setActive] = useState(1)
    const setNumber = (number) => {
        setActive(number)
    }
  return (
    <div className="row">
    <div className="col-md-12">
        <div className="services-widget position-relative">
            {qualityData.map((val,index)=>{
                return(
                    <div className={`service-item d-flex flex-wrap align-items-center wow fadeInUp ${active===index+1 ? "quality" : ""}`}
                    data-wow-delay=".5s" onMouseOver={()=>setNumber(index+1)} onClick={()=>setNumber(index+1)} key={`${index}`}>
                    <div className="left-box d-flex flex-wrap align-items-center">
                        <span className="number">0{index+1}</span>
                        <h3 className="service-title">{val.title}</h3>
                    </div>
                    <div className="right-box">
                        <p>{val.para}</p>
                    </div>
                    <i className="flaticon-up-right-arrow"></i>
                    <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
                </div>
                )
            })}
            {/* <div className="active-bg wow fadeInUp mleave" data-wow-delay=".5s" style={{top: active, height: "105px", visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp"}}></div> */}
        </div>
    </div>
</div>
  )
}
