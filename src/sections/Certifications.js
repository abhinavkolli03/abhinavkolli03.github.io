import React from 'react'
import awsPic from "../media/certifications/aws_cert.png"
import ibmPic from "../media/certifications/ibm_cert.png"
import "../styles/Certification.css"

const certifications = [
  {
    title: "AWS Solutions Architect (2022)",
    img: awsPic
  },
  {
    title: "IBM Accelerate – Client Engineering (2024)",
    img: ibmPic
  },
];

const Certifications = () => {
  return (
    <section style={{background: 'linear-gradient(#BB496B, #BB496B)'}} id="skills">
      <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" style={{color: '#fff'}}>Certifications</h1>
      <h5 className="h5_subtitle" style={{marginBottom: '-60px'}}>Here are some cool certifications I achieved over the years.</h5>
      <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="certifications__container">
        {certifications.map((cert, idx) => (
          <div className="certification__tab" key={idx}>
            <img src={cert.img} alt={cert.title} />
            <p style={{color: "#fff", marginTop: "10px", textAlign: "center"}}>{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;