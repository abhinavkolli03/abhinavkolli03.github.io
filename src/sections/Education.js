import React from 'react';
import '../styles/Education.css'
import EducationFeature from '../components/EducationFeature'
import { GiBullHorns, GiMagnetMan, GiWorld, GiLightBulb } from 'react-icons/gi'
import { IconContext } from 'react-icons';

const Education = () => {
	return(
        <section style={{background: 'linear-gradient(#181B46, #4C1B76)' }} id="education">
            <h1 data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200" style={{color: '#fff', marginBottom: -60}}>Education & Organizations</h1>
            <div data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200"
            className="education__tab section__margin" style={{color: 'white'}}>
                <div className="education__tab-feature">
                    <EducationFeature title1="2022-2025" text={["Austin, TX"]}/>
                </div>
                <div className="education__tab-heading">
                    <h2 className="gradient__text" style={{marginRight: 20}}>The University of Texas at Austin</h2>
                    <IconContext.Provider value={{color: '#ff8606', size: '80px'}}>
                        <GiBullHorns />
                    </IconContext.Provider>
                    <p className="gradient__text" style={{marginLeft: 20}}><b>BS in Computer Science Honors<br/>BBA in Canfield Business Honors</b></p>
                    <p className="gradient__text" style={{marginLeft: 20}}>CSB Honors Program</p>
                    <p className="gradient__text" style={{marginLeft: 20}}>Overall GPA: 3.70/4.00</p>
                </div>
                <div className="education__tab-container">
                    <EducationFeature title1="Coursework" text={["Computer Science: Data Structures (H), Computer Architecture & Organization (H), Discrete Math (H), Operating Systems (H), Longhorn Startup Seminar", "Mathematics: Multivariable Calculus, Statistics & Probability, Linear Algebra", "Business: Business Communications (H), Management Information Systems (H), Honors Lyceum (H), Fundamentals of Financial Accounting (H), Innovation and Entreprenuership (H)"]} />
                    <EducationFeature title1="Achievements" text={["University Honors Outstanding (x2)", "USA Computing Olympiad Gold", "Coca-Cola Scholar Semifinalist", "First Place HackSMU State Farm Sponsor Award", "Second Place EarthXHack State Farm and Oxy Awards"]} />
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
                    <p className="gradient__text" style={{marginLeft: 20}}><b>June 2023 - Present: Project Tech Lead</b></p>
                    <p className="gradient__text" style={{marginLeft: 20}}><b>Sept 2022 - May 2023: Software Engineer</b></p>
                </div>
                <div className="education__tab-container">
                    <EducationFeature title1="Projects" text={["VlogMi:  Migrated startup’s vlog app to React Native from Android and iOS and outlined AWS database infrastructure to store users’ content. Refined monetization interface that enables content creators to track daily users and income through data visualization graphs.",
                    "ShoMe: Built e-learning startup's landing, home, and search screens using React, Firestore, and OAuth2 social login providers. Also worked on collaborative filtering model to provide user to user review recommendations.",
                    ]} />
                </div>
            </div>

            <div data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200"
            className="education__tab section__margin" style={{color: 'white', marginBottom: '0px'}}>
                <div className="education__tab-feature">
                    <EducationFeature title1="2023-Present" text={["Austin, TX"]}/>
                </div>
                <div className="education__tab-heading">
                    <h2 className="gradient__text" style={{marginRight: 40}}>Texas 180 Degrees Consulting</h2>
                    <IconContext.Provider value={{color: '#ff8606', size: '80px'}}>
                        <GiWorld />
                    </IconContext.Provider>
                    <p className="gradient__text" style={{marginLeft: 20}}><b>June 2023 - Present: Senior Consultant</b></p>
                    <p className="gradient__text" style={{marginLeft: 20}}><b>January 2023 - May 2023: Junior Consultant</b></p>
                </div>
                <div className="education__tab-container">
                    <EducationFeature title1="Projects" text={["Austin Disaster Relief Network: Created non-profit’s QR code scanning app to allow admins to verify volunteer badges through UUIDs upon entering disaster zones. Connected scan results with API to organization’s Envoy database, permitting 6.5K volunteers to update roles after check-in process.",
                    ]} />
                </div>
            </div>

            <div data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200"
            className="education__tab section__margin" style={{color: 'white', marginBottom: '0px'}}>
                <div className="education__tab-feature">
                    <EducationFeature title1="2023-Present" text={["Austin, TX"]}/>
                </div>
                <div className="education__tab-heading">
                    <h2 className="gradient__text" style={{marginRight: 40}}>Product@TX Fellowship</h2>
                    <IconContext.Provider value={{color: '#ff8606', size: '80px'}}>
                        <GiLightBulb />
                    </IconContext.Provider>
                    <p className="gradient__text" style={{marginLeft: 20}}><b>June 2023 - Present: Fellow</b></p>
                </div>
                <div className="education__tab-container">
                    <EducationFeature title1="Experience" text={["Learning about current events and new technological advancements to foster technical PM mindset. Also, understanding roles/responsibilities of product managers in the workforce. Grasping techniques on helpful presentation tips and techniques during interviews, conducting networking events with senior PMs, and engaging in mock interviews.",
                    ]} />
                </div>
            </div>

        </section>
    )
};

export default Education;