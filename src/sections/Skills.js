import React from 'react'
import '../styles/Skills.css'
import pythonPic from '../media/languages/python.png'
import javaPic from '../media/languages/java.png'
import jsPic from '../media/languages/javascript.png'
import cplusplusPic from '../media/languages/c++.png'
import htmlPic from '../media/languages/html5.png'
import cssPic from '../media/languages/css3.png'
import sassPic from '../media/languages/sass.png'
import mysqlPic from '../media/languages/mysql.png'
import mongoPic from '../media/languages/mongodb.png'
import swiftPic from '../media/languages/swift.png'
import reactPic from '../media/languages/react.png'
import nodePic from '../media/languages/nodejs.png'
import bootstrapPic from '../media/languages/bootstrap.png'
import flaskPic from '../media/languages/flask.png'
import seleniumPic from '../media/languages/selenium.png'
import tfPic from '../media/languages/tensorflow.png'
import kerasPic from '../media/languages/keras.png'
import numpyPic from '../media/languages/numpy.png'
import pandasPic from '../media/languages/pandas.png'
import openCVPic from '../media/languages/opencv.png'
import sklearnPic from '../media/languages/scikit-learn.png'
import reduxPic from '../media/languages/redux.png'
import materialuiPic from '../media/languages/materialui.png'
import awsPic from '../media/languages/aws.png'
import gitPic from '../media/languages/git.png'
import firebasePic from '../media/languages/firebase.png'
import trelloPic from '../media/languages/trello.png'
import sketchPic from '../media/languages/sketch.png'
import figmaPic from '../media/languages/figma.png'
//new images
import terrPic from '../media/languages/terraform.png'
import armPic from '../media/languages/arm.png'
import cPic from '../media/languages/c.png'
import latexPic from '../media/languages/latex.png'
import rPic from '../media/languages/R.png'
import gcpPic from '../media/languages/gcp.png'
import appDPic from '../media/languages/appD.png'
import rallyPic from '../media/languages/rally.png'

const Skills = () => {
  return (
    <section style={{background: 'linear-gradient(#4C1B76, #BB496B)'}} id="skills">
        <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" style={{color: '#fff'}}>Tech Stack</h1>
        <h5 className="h5_subtitle" style={{marginBottom: '-60px'}}>Here's a list of tech that I've picked up or used recently. This includes technologies I use for full-stack software engineering, data analysis, and designing/planning.</h5>
        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="container  skills__container">
            <div className="skills__title">
                <h2><b>Languages and Tools</b></h2>
            </div>
            <div className='skills__content'>
                <div className="skills__container-tech-stack">
                    <div className="skill">
                        <img src={pythonPic} alt="Python Icon" /><span style={{color: 'white'}}>Python</span>
                    </div>
                    <div className="skill">
                        <img src={javaPic} alt="Java Icon" /><span style={{color: 'white'}}>Java</span>
                    </div>
                    <div className="skill">
                        <img src={terrPic} alt="Terraform Icon" /><span style={{color: 'white'}}>Terraform/HCL</span>
                    </div>
                    <div className="skill">
                        <img src={jsPic} alt="JavaScript Icon" /><span style={{color: 'white'}}>JavaScript</span>
                    </div>
                    <div className="skill">
                        <img src={nodePic} alt="Node.js Icon" /><span style={{color: 'white'}}>Node.js</span>
                    </div>
                    <div className="skill">
                        <img src={htmlPic} alt="HTML5 Icon" /><span style={{color: 'white'}}>HTML5</span>
                    </div>
                    <div className="skill">
                        <img src={cssPic} alt="CSS3 Icon" /><span style={{color: 'white'}}>CSS3</span>
                    </div>
                    <div className="skill">
                        <img src={sassPic} alt="Sass Icon" /><span style={{color: 'white'}}>Sass</span>
                    </div>
                    <div className="skill">
                        <img src={cPic} alt="C Icon" /><span style={{color: 'white'}}>C</span>
                    </div>
                    <div className="skill">
                        <img src={cplusplusPic} alt="C++ Icon" /><span style={{color: 'white'}}>C++</span>
                    </div>
                    <div className="skill">
                        <img src={swiftPic} alt="Swift Icon" /><span style={{color: 'white'}}>Swift</span>
                    </div>
                    <div className="skill">
                        <img src={mysqlPic} alt="MySQL Icon" /><span style={{color: 'white'}}>MySQL</span>
                    </div>
                    <div className="skill">
                        <img src={latexPic} alt="LaTeX Icon" /><span style={{color: 'white'}}>LaTeX</span>
                    </div>
                    <div className="skill"> 
                        <img src={rPic} alt="R Icon" /><span style={{color: 'white'}}>R</span>
                    </div>
                    <div className="skill">
                        <img src={gitPic} alt="Git Icon" /><span style={{color: 'white'}}>Git</span>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="container skills__container-reverse">
            <div className='skills__content'>
                <div className="skills__container-tech-stack">
                    <div className="skill">
                        <img src={reactPic} alt="React.js Icon" /><span style={{color: 'white'}}>React</span>
                    </div>
                    <div className="skill" style={{whiteSpace: 'nowrap'}}>
                        <img src={reactPic} alt="React.js Icon" /><span style={{color: 'white'}}>React Native</span>
                    </div>
                    <div className="skill">
                        <img src={awsPic} alt="AWS Icon" /><span style={{color: 'white'}}>AWS</span>
                    </div>
                    <div className="skill">
                        <img src={gcpPic} alt="GCP Icon" /><span style={{color: 'white'}}>GCP</span>
                    </div>
                    <div className="skill">
                        <img src={flaskPic} alt="Flask Icon" /><span style={{color: 'white'}}>Flask</span>
                    </div>
                    <div className="skill">
                        <img src={tfPic} alt="Tensorflow Icon" /><span style={{color: 'white'}}>Tensorflow</span>
                    </div>
                    <div className="skill">
                        <img src={kerasPic} alt="Keras Icon" width="50" height="50"/><span style={{color: 'white'}}>Keras</span>
                    </div>
                    <div className="skill">
                        <img src={firebasePic} alt="Firebase Icon" /><span style={{color: 'white'}}>Firebase</span>
                    </div>
                    <div className="skill">
                        <img src={mongoPic} alt="MongoDB Icon" /><span style={{color: 'white'}}>MongoDB</span>
                    </div>
                    <div className="skill">
                        <img src={seleniumPic} alt="Selenium Icon" /><span style={{color: 'white'}}>Selenium</span>
                    </div>
                </div>
            </div>
            <div className="skills__title">
                <h2><b>Frameworks and Technologies</b></h2>
            </div>
        </div>
        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="container skills__container">
            <div className="skills__title">
                <h2><b>Libraries</b></h2>
            </div>
            <div className='skills__content'>
                <div className="skills__container-tech-stack">
                    <div className="skill">
                        <img src={numpyPic} alt="Numpy Icon" /><span style={{color: 'white'}}>Numpy</span>
                    </div>
                    <div className="skill">
                        <img src={pandasPic} alt="Pandas Icon" width="50" height="50"/><span style={{color: 'white'}}>Pandas</span>
                    </div>
                    <div className="skill">
                        <img src={openCVPic} alt="OpenCV Icon" /><span style={{color: 'white'}}>OpenCV</span>
                    </div>
                    <div className="skill">
                        <img src={sklearnPic} alt="Scikit-Learn Icon" width="50" height="50"/><span style={{color: 'white'}}>Sklearn</span>
                    </div>
                    <div className="skill">
                        <img src={reduxPic} alt="Redux Icon" /><span style={{color: 'white'}}>Redux</span>
                    </div>
                    <div className="skill">
                        <img src={materialuiPic} alt="MaterialUI Icon" /><span style={{color: 'white'}}>MaterialUI</span>
                    </div>
                    <div className="skill">
                        <img src={bootstrapPic} alt="Bootstrap Icon" /><span style={{color: 'white'}}>Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="container skills__container-reverse">
            <div className='skills__content'>
                <div className="skills__container-tech-stack">
                    <div className="skill">
                        <img src={trelloPic} alt="Trello Icon" /><span style={{color: 'white'}}>Trello</span>
                    </div>
                    <div className="skill">
                        <img src={sketchPic} alt="Sketch Icon" /><span style={{color: 'white'}}>Sketch</span>
                    </div>
                    <div className="skill">
                        <img src={figmaPic} alt="Figma Icon" width="50" height="50"/><span style={{color: 'white'}}>Figma</span>
                    </div>
                    <div className="skill">
                        <img src={rallyPic} alt="Rallu Icon" width="50" height="50"/><span style={{color: 'white'}}>Rally</span>
                    </div>
                    <div className="skill">
                        <img src={appDPic} alt="AppDynamics Icon" width="50" height="50"/><span style={{color: 'white'}}>AppDynamics</span>
                    </div>
                </div>
            </div>
            <div className="skills__title">
                <h2><b>Monitoring and Design</b></h2>
            </div>
        </div>
    </section>
  )
}

export default Skills