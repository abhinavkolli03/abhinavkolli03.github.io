import React from 'react';
import '../styles/Education.css'
import EducationFeature from '../components/EducationFeature'
import { GiBullHorns, GiMagnetMan } from 'react-icons/gi'
import { IconContext } from 'react-icons';

const Education = () => {
	return(
        <section style={{background: 'linear-gradient(#181B46, #4C1B76)' }} id="education">
            <h1 data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200" style={{color: '#fff', marginBottom: -60}}>Education</h1>
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
                    <p className="gradient__text" style={{marginLeft: 20}}><b>BS in Computer Science Honors<br/>BBA in Business Honors<br/>GPA: 4.0</b></p>
                </div>
                <div className="education__tab-container">
                    <EducationFeature title1="Coursework" text={["Computer Science: Data Structures (H)", "Mathematics: Discrete Math (H), Calculus I-III", "Business: Business Communications (H), Longhorn Startup Seminar"]} />
                    <EducationFeature title1="Achievements" text={["USA Computing Olympiad Gold", "Coca-Cola Scholar Semifinalist"]} />
                    <EducationFeature title1="Activities" text={["Texas Undergraduate Computational Finance", "UT Programming Contests", "Freetail Hackers", "CSB Association"]} />
                </div>
            </div>
            <div data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200"
            className="education__tab section__margin" style={{color: 'white', marginBottom: '0px'}}>
                <div className="education__tab-feature">
                    <EducationFeature title1="2017-2021" text={["Frisco, TX"]}/>
                </div>
                <div className="education__tab-heading">
                    <h2 className="gradient__text" style={{marginRight: 40}}>Centennial High School</h2>
                    <IconContext.Provider value={{color: '#ff8606', size: '80px'}}>
                        <GiMagnetMan />
                    </IconContext.Provider>
                    <p className="gradient__text" style={{marginLeft: 20}}><b>High School Diploma<br/>GPA: 4.0<br/>ACT Score: 35</b></p>
                </div>
                <div className="education__tab-container">
                    <EducationFeature title1="Coursework" text={["Computer Science: Advanced CS, Advanced Video Game Design, Mobile Programming", "Mathematics: Calculus BC, Statistics, Physics I/II/C", "Business: Research"]} />
                    <EducationFeature title1="Achievements" text={["HackSMU - 1st Place State Farm Sponsor", "EarthXHack - 2nd Place State Farm and Oxy Sponsor"]} />
                    <EducationFeature title1="Activities" text={["Mu Alpha Theta", "DECA", "Computer Science Team", "Business Professionals of America"]} />
                </div>
            </div>
        </section>
    )
};

export default Education;