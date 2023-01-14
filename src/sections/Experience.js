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
            "title": "Behaivior",
            "location": "Pittsburgh, PA (remote)",
            "description0": "Python, TensorFlow, Keras, Google Cloud, Firebase",
            "description1": "Designed XGBoost and Bayesian Optimization model pipelines with multiprocessing to improve testing efficiency by 32%.",
            "description2": "Deployed testing framework of XGBoost model into Google Cloud and stored opioid prediction results into Cloud Firestore.",
            "description3": "Extracted 3 million records of opioid patients’ Garmin metrics from Firestore to process in company’s Terraform IaaS",
            "date": "August 2022 - December 2022",
            "job": "Machine Learning Engineer Intern",
            "icon": "college"
        },
        {
            "id": 1,
            "title": "Kalvi Prep (E-Learning Startup)",
            "location": "Atlanta, GA (remote)",
            "description0": "React Native, MongoDB, JavaScript, Java",
            "description1": "Oversaw backend services team for website’s database, interest form, and mobile features using MongoDB and React Native.",
            "description2": "Established institute’s 32-week Java Computer Science Data Structures course to 600+ registered students.",
            "description3": "Launched final website with team using agile development, resulting in 25,000 page visits and 2,300+ student interest forms.",
            "date": "May 2021 - August 2021",
            "job": "Software Engineer Intern and Coding Instructor",
            "icon": "college"
        },
        {
            "id": 2,
            "title": "UT Dallas AI Labs",
            "location": "Richardson, TX",
            "description0": "Python, TensorFlow, Keras",
            "description1": "Trained an ARIMA-LSTM neural network to accurately predict 71% of next month’s stock close prices using time-series data.",
            "description2": "Constructed an epsilon greedy DQN learning agent called StockBot and led experiments to simulate stock trading over 500 days.",
            "description3": "Co-authored university research paper on model’s forecasting performance and reinforcement simulation on 4 distinct stocks.",
            "date": "June 2020 - July 2020",
            "job": "Machine Learning Research Intern",
            "icon": "college"
        },
        {
            "id": 3,
            "title": "initializeChange() (Non-Profit)",
            "location": "Dallas, TX",
            "description0": "MIT App Inventor, Swift, HTML, CSS, JavaScript",
            "description1": "Coordinated 9 workshops, HackCOVID hackathon, and Techspire Accelerator program with the National Tech Administration.",
            "description2": "Hosted 240 hours of mentoring to 150+ students in summer bootcamps, resulting in 25% increase in non-profit event attendance.",
            "date": "May 2019 - August 2021",
            "job": "Co-founder & Operations Director",
            "icon": "school"
        }, 
        {
            "id": 4,
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
                                        <h2 className="vertical-timeline-element-title" style={{color: '#ddd'}}><b>{element.title}</b></h2>
                                        <h3 className="vertical-timeline-element-subtitle"><b>{element.job}</b></h3><br></br>
                                        <h4 className="vertical-timeline-element-subtitle"><b>{element.location}</b></h4>
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