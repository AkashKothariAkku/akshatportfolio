import React from 'react'
import { educationData, experienceData } from '../constant/EducationData'

export const Experience = () => {
  return (
    <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section-header wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title">My Experience</h2>
                        </div>

                        <div className="resume-widget">
                            {experienceData.map((val,index)=>{
                                return (
                                    <div className="resume-item wow fadeInLeft" data-wow-delay=".4s" key={`${index}`}>
                                <div className="time">
                                    {val.year}
                                </div>
                                <h3 className="resume-title">{val.post}</h3>
                                <div className="institute">
                                    {val.company}
                                </div>
                            </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="section-header wow fadeInUp" data-wow-delay=".4s">
                            <h2 className="section-title">My Education</h2>
                        </div>

                        <div className="resume-widget">
                        {educationData.map((val, index)=>{
                                return (
                                    <div className="resume-item wow fadeInLeft" data-wow-delay=".4s" key={`${index}`}>
                                <div className="time">
                                    {val.year}
                                </div>
                                <h3 className="resume-title">{val.course}</h3>
                                <div className="institute">
                                    {val.university}
                                </div>
                            </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
  )
}
