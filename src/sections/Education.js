import React from 'react';
import '../styles/Education.css'
import EducationFeature from '../components/EducationFeature'
import { GiBullHorns, GiMagnetMan } from 'react-icons/gi'
import { IconContext } from 'react-icons';

const Education = () => {
	return(
        <section style={{background: 'linear-gradient(#181B46, #4C1B76)' }} id="education">
            <h1 data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200" style={{color: '#fff', marginBottom: -60}}>Education & Organizations</h1>
            <div data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200"
            className="education__tab section__margin" style={{color: 'white'}}>
                <div className="education__tab-feature">
                    <EducationFeature title1="2022-2026" text={["Austin, TX"]}/>
                </div>
                <div className="education__tab-heading">
                    <h2 className="gradient__text" style={{marginRight: 20}}>The University of Texas at Austin</h2>
                    <IconContext.Provider value={{color: '#ff8606', size: '80px'}}>
                        <GiBullHorns />
                    </IconContext.Provider>
                    <p className="gradient__text" style={{marginLeft: 20}}><b>BS in Computer Science Honors<br/>BBA in Business Honors<br/>Cumulative GPA: 3.8</b></p>
                </div>
                <div className="education__tab-container">
                    <EducationFeature title1="Coursework" text={["Computer Science: Data Structures (H), Computer Architecture & Organization (H)", "Mathematics: Discrete Math (H), Multivariable Calculus, Statistics & Probability", "Business: Business Communications (H), Management Information Systems (H), Longhorn Startup Seminar"]} />
                    <EducationFeature title1="Achievements" text={["USA Computing Olympiad Gold", "Coca-Cola Scholar Semifinalist", "First Place HackSMU State Farm Sponsor Award", "Second Place EarthXHack State Farm and Oxy Sponsor Awards"]} />
                </div>
            </div>
            <div data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200"
            className="education__tab section__margin" style={{color: 'white', marginBottom: '0px'}}>
                <div className="education__tab-feature">
                    <EducationFeature title1="2022-Present" text={["Austin, TX"]}/>
                </div>
                <div className="education__tab-heading">
                    <h2 className="gradient__text" style={{marginRight: 40}}>Convergent Forge Startups</h2>
                    <IconContext.Provider value={{color: '#ff8606', size: '80px'}}>
                        <GiMagnetMan />
                    </IconContext.Provider>
                    <p className="gradient__text" style={{marginLeft: 20}}><b>Software Engineer</b></p>
                </div>
                <div className="education__tab-container">
                    <EducationFeature title1="Projects" text={["VlogMi:  Migrated startup’s vlog app to React Native from Android and iOS and outlined AWS database infrastructure to store users’ content. Refined monetization interface that enables content creators to track daily users and income through data visualization graphs."]} />
                </div>
            </div>
        </section>
    )
};

export default Education;