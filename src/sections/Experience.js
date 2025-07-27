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
            id: 0,
            title: "Google",
            location: "Austin, TX",
            description0: "Angular TypeScript, RxJS, Java, Spanner (DB), GCP, Protocol Buffers",
            description1: "Coming soon!",
            date: "August 2025 – November 2025",
            job: "Incoming Software Engineer Intern",
            icon: "college"
        },
        {
            id: 1,
            title: "Meta",
            location: "New York, NY",
            description0: "SQL, LLMs, RAG, Data Pipeline, Hive, Scuba, Hack, PHP/XHP, React, JavaScript",
            description1: "Spearheaded LLM agent to generate campaign-specific audience segments across 7 marketing pods, cutting manual creation time by ~99%",
            description2: "Integrated data pipeline, RAG filter, and custom scoring system to match audience requests with 3K+ signals, reaching 88% fit accuracy",
            description3: "Designed 4-step React UI and logged 43 key metrics to internal data store, delivering live demo to execs to drive rollout on 180 campaigns",
            date: "May 2025 – August 2025",
            job: "Business Software Engineer Intern",
            icon: "college"
        },
        {
            id: 2,
            title: "JP Morgan Chase",
            location: "Plano, TX",
            description0: "PySpark, EMR, S3, Lambda, React, Kafka, ElasticSearch, Java, Spring Boot, Maven, ECS",
            description1: "Automated verification of 10K Parquet files to CSVs weekly using PySpark/EMR, S3, and Lambda, elevating processing speed by 60%",
            description2: "Engineered React app to track archival of data with Kafka and ElasticSearch, boosting transparency for 80+ cross-functional teams",
            description3: "Deployed Java Spring Boot microservices with Maven and ECS to sync file operations and cut Data Lake orchestration time by 23%",
            date: "June 2024 – August 2024",
            job: "Software Engineer Intern",
            icon: "college"
        },
        {
            id: 3,
            title: "Sabre",
            location: "Southlake, TX",
            description0: "Terraform, GCP, Pub/Sub, GCS, Cloud Functions, AppDynamics, C++, Jenkins, Ansible",
            description1: "Achieved 27% increase in GCP provisioning success by building Terraform private modules for Pub/Sub, GCS, and Cloud Functions",
            description2: "Reduced organization’s Pub/Sub backlog issues by 35% when monitoring 8 metrics with AppDynamics agents and GCP dashboards",
            description3: "Streamlined compliance testing of cloud infrastructure by developing C++ unit tests integrated with CI/CD Jenkins tool and Ansible",
            date: "May 2023 – August 2023",
            job: "Cloud Software Engineer Intern",
            icon: "college"
        },
        {
            id: 4,
            title: "Behavior Startup",
            location: "Pittsburgh, PA (remote)",
            description0: "Python, Firestore, XGBoost, R, Bayesian Optimization",
            description1: "Extracted 3M records of 5K patients’ health data from Garmin into Firestore using Python scripts, saving 10+ hours of work per trial",
            description2: "Implemented XGBoost and Bayesian Optimization pipeline with parallel processing, improving troubleshooting efficiency by 33%",
            description3: "Investigated pulse oximetry and oxygen desaturation index as features for XGBoost with R, yielding 7% increase in model accuracy",
            date: "August 2022 – December 2022",
            job: "Data Engineer Intern",
            icon: "college"
        },
        {
            id: 5,
            title: "Kalvi Prep Institute",
            location: "Atlanta, GA (remote)",
            description0: "React, TypeScript, Figma, Java, Google Analytics",
            description1: "Launched final website with team using agile sprints, resulting in 25K+ page visits and 2.3K student interest forms in two months",
            description2: "Built frontend with React and TypeScript by iterating Figma designs based on Google Analytics data, reducing bounce rate by 20%",
            description3: "Established a 32-week Java Computer Science and Data Structures virtual program with advanced lab assignments to 600+ students",
            date: "May 2021 – August 2021",
            job: "Software Engineer Intern",
            icon: "college"
        },
        {
            "id": 6,
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