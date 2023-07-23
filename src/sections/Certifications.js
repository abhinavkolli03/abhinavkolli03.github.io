import React from 'react'
import Pic from "../media/aws_cert.png"
import "../styles/Certification.css"

const Certifications = () => {
    return (
      <section style={{background: 'linear-gradient(#BB496B, #BB496B)'}} id="skills">
          <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" style={{color: '#fff'}}>Certifications</h1>
          <h5 className="h5_subtitle" style={{marginBottom: '-60px'}}>Here are some cool certifications I achieved over the years.</h5>
          <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
          className="container  skills__container">
              <div className="certification__tab">
                <img src={Pic} />
              </div>
          </div>
    </section>
    );
}

export default Certifications