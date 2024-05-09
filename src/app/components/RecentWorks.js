"use client"
import React, { useEffect, useState } from 'react'
import { recentWorksHeading } from '../constant/qualityData'
import Link from 'next/link'

export const RecentWorks = () => {
    const [activeName, setActiveName] = useState("All")
    const [filterName, setFilterName] = useState(["All"])

    useEffect(()=>{
    let data = ["All"]
       recentWorksHeading.forEach((val)=>{
            if(!data.includes(val.name)){
                data.push(val.name)
            }
        })
        console.log(data,"data")
        setFilterName(data)
    },[])
  return (
    <div className="col-md-12">
    <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".5s">
        <div className="button-group filter-button-group">
            {
                filterName.map((val, index)=>{
                    return <button key={`${index}`} style={activeName===val ? {"backgroundColor":"#8750f7"} : {"backgroundColor":""}} onClick={()=>setActiveName(val)}>{val}</button>
                })
            }
        </div>
    </div>

    <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
        <div className="portfolio-sizer"></div>
        <div className="gutter-sizer"></div>
        <div className='row'>
            {recentWorksHeading.map((val, index)=>{
                return (
                   activeName===val.name ? <div className="col-md-6 portfolio-item branding" key={`${index}`}>
                    <div className="image-box">
                        <img src={val.image} alt=""/>
                    </div>
                    <Link href={val.url} target='_blank' style={{cursor: "pointer", textDecoration: "none", color:"white"}} >
                    <div className="content-box">
                        <h3 className="portfolio-title">{val.title}</h3>
                        <p>{val.para}</p>
                        <i className="flaticon-up-right-arrow"></i>
                        <button data-mfp-src="#portfolio-wrapper"
                            className="portfolio-link modal-popup"></button>
                    </div>
                    </Link>
                </div> : activeName==="All" ? <div className="col-md-6 portfolio-item branding" key={`${index}`}>
                    <div className="image-box">
                        <img src={val.image} alt=""/>
                    </div>
                    <Link href={val.url} target='_blank' style={{cursor: "pointer", textDecoration: "none", color:"white"}}>
                    <div className="content-box">
                        <h3 className="portfolio-title">{val.title}</h3>
                        <p>{val.para}</p>
                        <i className="flaticon-up-right-arrow"></i>
                        <button data-mfp-src="#portfolio-wrapper"
                            className="portfolio-link modal-popup"></button>
                    </div>
                    </Link>
                </div> : ""
                )
            })}
        </div>
    </div>
</div>
  )
}
