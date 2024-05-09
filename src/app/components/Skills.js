import React from 'react'
import { skillData } from '../constant/SkillData'

export const Skills = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
                <p className=" wow fadeInUp" data-wow-delay=".4s">We put your ideas and thus your wishes in the
                    form of a unique web project that inspires
                    you
                    and you customers.</p>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                {
                    skillData.map((val, index)=>{
                        return (
                            <div className="skill-item wow fadeInUp" data-wow-delay=".3s" key={`${index}`}>
                            <div className="skill-inner">
                                <div className="icon-box">
                                    <img src={val.image} alt=""/>
                                </div>
                                <div className="number">{val.number}</div>
                            </div>
                            <p>{val.name}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
</div>
  )
}
