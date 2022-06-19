import React from 'react';

import { FaSchool, FaHandPointRight } from 'react-icons/fa'
import { IoSchoolSharp } from 'react-icons/io5'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Experience.css'
import { List } from 'semantic-ui-react'


const Experience = () => {
    let collegeStyles = { background: '#e83b36' }
    let schoolStyles = { background: '#fffe01' }
    let experienceTimeline = [
        {
            "id": 1,
            "title": "Kalvi Prep (E-Learning Startup)",
            "location": "Frisco, TX",
            "description1": "Updated current website with new database form and mobile app features using React Native.",
            "description2": "Created institute’s 32-week AP Computer Science and Intermediate/Advanced Java course to over 600 registered students.",
            "date": "May 2021 - September 2021",
            "job": "Software Engineer Intern and Coding Instructor",
            "icon": "college"
        },
        {
            "id": 2,
            "title": "initializeChange() (Non-Profit)",
            "location": "Dallas, TX",
            "description1": "Hosted over 240 hours of individualized mentoring on hackathon-related programming frameworks and languages.",
            "description2": "Partnered with National Tech Administration in organizing 9 workshops, HackCOVID, and Techspire accelerator program.",
            "description3": "Led a beginner Swift iOS and MIT App Inventor bootcamp to 25 students for two months.",
            "date": "May 2019 - August 2021",
            "job": "Co-founder",
            "icon": "college"
        }, 
        {
            "id": 3,
            "title": "UT Dallas AI Labs",
            "location": "Richardson, TX",
            "description1": "Explored various classifications, regressions, and algorithmic concepts under Dr. Anurag Nagar.",
            "description2": "Cleaned and prepared data for Dr. Nagar's research and helped train an ARIMA-LSTM neural network model using Tensorflow-Keras to predict stock trends.",
            "date": "May 2020 - August 2020",
            "job": "Machine Learning Research Intern",
            "icon": "school"
        },
        {
            "id": 4,
            "title": "Allstate Insurance",
            "location": "Frisco, TX",
            "description1": "Shadowed senior security team members on handling policy requests, audits, and patch updates to company software.", 
            "description2": "Implemented firewall security measures (firemon), python, and CompTia Security+ daily to monitor servers and networks.",
            "date": "June 2019 - July 2019",
            "job": "Cybersecurity Risk Analyst Intern",
            "icon": "school"
        },
    ]

	return(
        <section style={{background: 'linear-gradient(#BB496B, #e83b36)'}} id="experience">
            <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" style={{color: '#fff'}}>Experience</h1>
            <VerticalTimeline style={{marginBottom: '20px'}}>
                {
                    experienceTimeline.map(element => {
                        let isCollegeIcon = element.icon === 'college';

                        return (
                            <VerticalTimelineElement 
                                contentStyle={{ background: 'rgba(122, 17, 111, 1)' }}
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                className="vertical-timeline.vertical-timeline-custom-line"
                                iconStyle={isCollegeIcon ? collegeStyles : schoolStyles}
                                icon={isCollegeIcon ? <IoSchoolSharp /> : <FaSchool />}>
                                    <div style={{color: '#fff'}}>
                                        <h2 className="vertical-timeline-element-title" style={{color: '#ddd'}}><b>{element.title}</b></h2>
                                        <h3 className="vertical-timeline-element-subtitle"><b>{element.job}</b></h3><br></br>
                                        <h4 className="vertical-timeline-element-subtitle"><b>{element.location}</b></h4>
                                        <div className='List'>
                                            <List>
                                                <br></br>
                                                <List.Item icon='users' content={<b><FaHandPointRight /> {element.description1}</b>} />
                                                <br></br>
                                                <List.Item icon='users' content={<b><FaHandPointRight /> {element.description2}</b>} />
                                            </List>              
                                        </div>                    
                                    </div>
                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>
            <div style={{paddingBottom: 100}}></div>
        </section>
    )
};


export default Experience;