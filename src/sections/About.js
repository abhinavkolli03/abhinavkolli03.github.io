import React, {useState } from 'react';
import Pic from '../media/me.jpg'
import { Button, SimpleButton2 } from '../components/ButtonElement.js'
import { GiBullHorns, GiWeightLiftingUp, GiTechnoHeart } from 'react-icons/gi'
import '../styles/About.css'
import { IntroBtnWrapper } from '../components/IntroParts/IntroPartsElements'
import { IoPaperPlane, IoHeartCircleSharp } from 'react-icons/io5'
import pdf from '../media/resume.pdf'

const About = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    }

	return(
        <section style={{background: 'linear-gradient(#000000, #181B46)'}} id="about">
            <h1 data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400" style={{color: '#fff'}}>About Me</h1>
            <div className="container about__container">
                <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400" className="about__me">
                    <div className="about__me-image">
                        <img src={Pic} alt="Abhinav Kolli Img" />
                    </div>
                </div>
                <div className='about__content'>
                    <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400" className='about__cards'>
                        <article className='about__card'>
                            <div className='about__words'>
                                <h2 style={{textAlign: 'center'}}><GiTechnoHeart /><br></br> Career Goals</h2>
                                <p>I'm a proficient full-stack software engineer and an aspiring ML engineer interested in developing data-driven, scalable applications!</p>
                            </div>
                        </article>
                        <article className='about__card'>
                            <div className='about__words'>
                                <h2 style={{textAlign: 'center'}}><GiBullHorns /><br></br> Current Status</h2>
                                <p>I'm an undergraduate student at UT Austin's CS and Business Honors program looking for possible internship and work opportunities!</p>
                            </div>
                        </article>
                        <article className='about__card'>
                            <div className='about__words'>
                                <h2 style={{textAlign: 'center'}}><GiWeightLiftingUp /><br></br> Hobbies</h2>
                                <p>Aside from spending hours debugging VSCode, I love cycling, hiking at national parks, football, binging mystery movies or comedy classics, and cooking!</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <IntroBtnWrapper className="button__container">
                <SimpleButton2
                data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                color='white'>
                    <a href={pdf} style={{color: 'black'}} target="_blank" rel="noreferrer">
                        <b style={{display: 'inline-block'}}>See Resume<IoPaperPlane style={{marginLeft: '8px',
                        fontSize: '20'}}/></b>
                    </a>
                </SimpleButton2>
                <Button to='contact' 
                data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                enable='true'
                primary='true'
                dark='true'
                color='white'>
                <b>Get In Touch<IoHeartCircleSharp style={{marginLeft: '8px',
                fontSize: '20'}}/></b>
                </Button>
            </IntroBtnWrapper>
        </section>
    )
};

export default About;