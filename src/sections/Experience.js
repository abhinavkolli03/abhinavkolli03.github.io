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
            "id": 0,
            "title": "Sabre",
            "location": "Southlake, TX",
            "description0": "Terraform, Terraform Enterprise, Private Registry, GCP, Pub/Sub, GCS, Cloud Functions, AppDynamics, Ansible Tower, Armada",
            "description1": "Achieved 27% increase in GCP provisioning success by building Terraform private modules for Pub/Sub, GCS, and cloud functions",
            "description2": "Averted 7 Pub/Sub message backlog events by monitoring 8+ vital metrics with AppDynamics agents, alert policies, and dashboards",
            "description3": "Streamlined deployment testing of cloud infrastructure by implementing company CI/CD Jenkins tool “Armada” and Ansible Tower",
            "date": "May 2022 - August 2023",
            "job": "Cloud Software Engineer Intern",
            "icon": "college"
        },
        {
            "id": 1,
            "title": "Behavior (Health-Tech Startup)",
            "location": "Pittsburgh, PA (remote)",
            "description0": "Python, TensorFlow, Keras, Google Cloud, Firebase, IaaS, XGBoost",
            "description1": "Designed XGBoost and Bayesian Optimization model pipeline with parallel multiprocessing to improve testing efficiency by 32%",
            "description2": "Extracted 3M records of 5K patients’ health data from Garmin into Firestore using automated scripts to process in company’s IaaS",
            "description3": "Analyzed pulse oximetry metrics and oxygen desaturation index as features for XGBoost, yielding a 7% increase in model accuracy",
            "date": "August 2022 - December 2022",
            "job": "Machine Learning Engineer Intern",
            "icon": "college"
        },
        {
            "id": 2,
            "title": "Kalvi Prep (E-Learning Platform)",
            "location": "Atlanta, GA (remote)",
            "description0": "React Native, MongoDB, JavaScript, Java, Firestore",
            "description1": "Oversaw backend services team with integrating Firestore API and validating student data in React, boosting data accuracy by 97%",
            "description2": "Launched final website with team using agile development practices, resulting in 25,000 page visits and 2,300 student interest forms",
            "description3": "Established a 32-week Java Computer Science and Data Structures virtual program with advanced lab assignments to 600+ students",
            "date": "May 2021 - August 2021",
            "job": "Software Engineer Intern and Coding Instructor",
            "icon": "college"
        },
        {
            "id": 3,
            "title": "University of Texas at Dallas",
            "location": "Richardson, TX",
            "description0": "Python, TensorFlow, Keras, Google Colab",
            "description1": "Trained an ARIMA-LSTM neural network to predict 71% of next month’s stock close prices using Yahoo API’s time-series data",
            "description2": "Constructed an epsilon greedy DQN learning agent called StockBot and led its experiments to simulate stock trading over 500 days",
            "description3": "Co-authored university research paper on model’s forecasting performance and procedure for conducting simulation on 4 stocks",
            "date": "June 2020 - July 2020",
            "job": "Machine Learning Research Intern",
            "icon": "college"
        },
        {
            "id": 4,
            "title": "initializeChange() (Non-Profit)",
            "location": "Dallas, TX",
            "description0": "MIT App Inventor, Swift, HTML, CSS, JavaScript",
            "description1": "Coordinated 9 workshops, TechSpire hackathon, and HackCOVID Accelerator program with the National Tech Administration",
            "description2": "Pitched sponsor package concept and venue space for TechSpire, leading to a 15% increase in fundraising and five guest speakers",
            "description3": "Hosted 240 hours of mentoring to 150+ students in summer bootcamps, resulting in 25% increase in non-profit event attendance",
            "date": "May 2019 - August 2021",
            "job": "Co-founder & Operations Director",
            "icon": "school"
        }, 
        {
            "id": 5,
            "title": "Allstate Insurance",
            "location": "Frisco, TX",
            "description0": "Shadowed senior security team members on handling policy requests, audits, and patch updates to company software.", 
            "description1": "Implemented firewall security measures (firemon), python, and CompTia Security+ daily to monitor servers and networks.",
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
                                contentStyle={{ background: 'rgba(255, 148, 112, 1)' }}
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                className="vertical-timeline.vertical-timeline-custom-line"
                                iconStyle={isCollegeIcon ? collegeStyles : schoolStyles}
                                icon={isCollegeIcon ? <IoSchoolSharp /> : <FaSchool />}>
                                    <div style={{color: '#fff'}}>
                                        <h2 className="vertical-timeline-element-title" style={{color: '#000'}}><b>{element.title}</b></h2>
                                        <h3 className="vertical-timeline-element-subtitle" style={{color: 'brown'}}><b>{element.job}</b></h3><br></br>
                                        <h4 className="vertical-timeline-element-subtitle" style={{color: 'brown'}}><b>{element.location}</b></h4>
                                        <div className='List'>
                                            <List>
                                                <List.Item icon='users' content={<b><FaHandPointRight /> {element.description0}</b>} />
                                                <br></br>
                                                <List.Item icon='users' content={<b><FaHandPointRight /> {element.description1}</b>} />
                                                <br></br>
                                                {element.description2 && <List.Item icon='users' content={<b><FaHandPointRight /> {element.description2}</b>} />}
                                                <br></br>
                                                {element.description3 && <List.Item icon='users' content={<b><FaHandPointRight /> {element.description3}</b>} />}
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