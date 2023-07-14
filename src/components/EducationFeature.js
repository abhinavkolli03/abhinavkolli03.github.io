import React from 'react'
import '../styles/Education.css'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import { IconContext } from 'react-icons'

export const EducationFeature = ({title1, text, title2}) => {
  return (
    <div className="education__features-container__feature">
      <div className="education__features-container__feature-title">
        <div className="education__features-container__feature-div"/>
        <h2 className="gradient__text">{title1}</h2>
        <h3>{title2}</h3>
      </div>
      <div className="education__features-container__feature-text">
        <ul>
          {text.map(element => {
            return(
              <IconContext.Provider value={{color: 'orange', size: '10px'}}>
                <li><VscDebugBreakpointData /> <b>{element}</b></li>
                <br></br>
              </IconContext.Provider>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default EducationFeature;